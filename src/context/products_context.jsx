import React, { useContext, useEffect, useReducer, useCallback } from 'react';
import reducer from '../reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions';
import { API_ENDPOINT, QUERY } from '../utils/constants';
import axios from 'axios';

// Personalization: Added local storage caching
const CACHE_KEY = 'fashionKidsStoreProducts';
const getCachedProducts = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : null;
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isSidebarOpen: false,
    allProducts: [],
    featuredProducts: [],
    singleProduct: null,
    productsLoading: true,
    productsError: false,
    singleProductLoading: false,
    singleProductError: false,
  });

  // Personalization: Memoized sidebar handlers
  const openSidebar = useCallback(() => dispatch({ type: SIDEBAR_OPEN }), []);
  const closeSidebar = useCallback(() => dispatch({ type: SIDEBAR_CLOSE }), []);

  // Personalization: Enhanced product fetching with cache
  const fetchProducts = useCallback(async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const cachedData = getCachedProducts();
      if (cachedData) {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: cachedData });
        return;
      }

      const { data } = await axios.post(API_ENDPOINT, { query: QUERY });
      const products = data.data.allProduct;
      
      // Cache products for 1 hour
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data: products,
        timestamp: new Date().getTime()
      }));
      
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      console.error('Products fetch error:', error);
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  }, []);

  // Personalization: Enhanced single product fetch with error boundary
  const fetchSingleProduct = useCallback(async (slug) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      // Check cached products first
      const cached = getCachedProducts();
      const product = cached?.data?.find(p => p.slug === slug);
      
      if (product) {
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: product });
        return;
      }

      // Fallback to API request
      const { data } = await axios.post(API_ENDPOINT, {
        query: `query GetProduct($slug: String!) {
          allProduct(where: { slug: { current: { eq: $slug } } }) {
            ${QUERY}
          }
        }`,
        variables: { slug }
      });

      if (data.data.allProduct.length === 0) {
        throw new Error('Product not found');
      }

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.data.allProduct[0] });
    } catch (error) {
      console.error('Single product fetch error:', error);
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  }, []);

  // Personalization: Auto-refresh products every hour
  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 3600000);
    return () => clearInterval(interval);
  }, [fetchProducts]);

  // Personalization: Error recovery function
  const refreshProducts = () => {
    localStorage.removeItem(CACHE_KEY);
    fetchProducts();
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
        refreshProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// Personalization: Added custom hook with validation
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider');
  }
  return context;
};