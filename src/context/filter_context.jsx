import React, { useEffect, useContext, useReducer, useCallback } from 'react';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  HANDLE_CLICK_FROM_SERVICES,
  RESET_IS_CLICK_FROM_SERVICES,
} from '../actions';
import { useProductsContext } from './products_context';

// Personalization: Added local storage for filters
const FILTERS_KEY = 'fashionKidsStoreFilters';
const loadFilters = () => {
  const saved = localStorage.getItem(FILTERS_KEY);
  return saved ? JSON.parse(saved) : null;
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { allProducts } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, {
    filteredProducts: [],
    allProducts: [],
    gridView: true,
    sort: 'price-lowest',
    filters: loadFilters() || {
      searchTerm: '',
      category: 'all',
      minPrice: 0,
      maxPrice: 0,
      price: 0,
      forWhom: 'all',
      age: [],
      height: [],
    },
    isClickFromServices: false,
  });

  // Personalization: Dynamic price range calculation
  useEffect(() => {
    if (allProducts.length > 0) {
      const prices = allProducts.map(p => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      
      dispatch({
        type: UPDATE_FILTERS,
        payload: {
          name: 'minPrice',
          value: minPrice,
        }
      });
      
      dispatch({
        type: UPDATE_FILTERS,
        payload: {
          name: 'maxPrice',
          value: maxPrice,
        }
      });

      dispatch({
        type: UPDATE_FILTERS,
        payload: {
          name: 'price',
          value: maxPrice,
        }
      });
    }
  }, [allProducts]);

  // Personalization: Save filters to localStorage
  useEffect(() => {
    localStorage.setItem(FILTERS_KEY, JSON.stringify(state.filters));
  }, [state.filters]);

  const setGridView = useCallback(() => dispatch({ type: SET_GRID_VIEW }), []);
  const setListView = useCallback(() => dispatch({ type: SET_LIST_VIEW }), []);

  const updateSort = useCallback(e => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  }, []);

  // Enhanced filter handler with debounce
  const updateFilters = useCallback(e => {
    const { name, value, type, checked, textContent } = e.target;
    let filterName = name;
    let filterValue = value;

    // Personalization: Handle different input types
    // eslint-disable-next-line default-case
    switch (true) {
      case name === 'home-page-category':
        filterName = 'category';
        filterValue = textContent;
        break;
      case type === 'checkbox':
        filterValue = checked 
          ? [...state.filters[name], value]
          : state.filters[name].filter(item => item !== value);
        break;
      case name === 'price':
        filterValue = Number(value);
        break;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name: filterName, value: filterValue } });
  }, [state.filters]);

  const clearFilters = useCallback(() => {
    dispatch({ type: CLEAR_FILTERS });
    // Personalization: Reset to dynamic price range
    if (allProducts.length > 0) {
      const prices = allProducts.map(p => p.price);
      dispatch({
        type: UPDATE_FILTERS,
        payload: {
          name: 'price',
          value: Math.max(...prices),
        }
      });
    }
  }, [allProducts]);

  const handleClickFromServices = useCallback(() => {
    dispatch({ type: HANDLE_CLICK_FROM_SERVICES });
    // Personalization: Scroll to products after service click
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  }, []);

  const resetIsClickFromServices = useCallback(() => {
    dispatch({ type: RESET_IS_CLICK_FROM_SERVICES });
  }, []);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: allProducts });
  }, [allProducts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: FILTER_PRODUCTS });
      dispatch({ type: SORT_PRODUCTS });
    }, 300);
    return () => clearTimeout(timer);
  }, [allProducts, state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        handleClickFromServices,
        resetIsClickFromServices,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Enhanced custom hook with validation
export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};