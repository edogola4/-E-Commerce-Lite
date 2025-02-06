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
  
  // Personalized products reducer for managing product state in our app
  const productsReducer = (state, action) => {
    if (action.type === SIDEBAR_OPEN) {
      return { ...state, isSidebarOpen: true };
    }
    if (action.type === SIDEBAR_CLOSE) {
      return { ...state, isSidebarOpen: false };
    }
    if (action.type === GET_PRODUCTS_BEGIN) {
      return { ...state, productsLoading: true };
    }
    if (action.type === GET_PRODUCTS_SUCCESS) {
      // Transform the payload from the API to match our product shape
      const allProducts = action.payload.map(product => {
        let {
          _id: id,
          name,
          slug: { current: slug },
          brand,
          categories: { categories },
          clothingCategories,
          price,
          forWhom: { forWhom },
          height,
          heightDescription,
          age,
          ageDescription,
          stock,
          itemDescription,
          featured,
          images,
        } = product;
  
        // Flatten clothingCategories if available
        if (clothingCategories) {
          clothingCategories = clothingCategories.clothingCategories;
        }
        // Flatten height array if available
        if (height) {
          height = height.map(item => item.height);
        }
        // Flatten age array if available
        if (age) {
          age = age.map(item => item.age);
        }
        // Transform images array to extract URLs
        images = images.map(item => item.asset.url);
  
        return {
          id,
          name,
          slug,
          brand,
          categories,
          clothingCategories,
          price,
          stock,
          forWhom,
          height,
          heightDescription,
          age,
          ageDescription,
          itemDescription,
          featured,
          images,
        };
      });
  
      // Extract featured products
      const featuredProducts = allProducts.filter(product => product.featured);
  
      return {
        ...state,
        productsLoading: false,
        allProducts,
        featuredProducts,
      };
    }
    if (action.type === GET_PRODUCTS_ERROR) {
      return { ...state, productsError: true, productsLoading: false };
    }
    if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
      return { ...state, singleProductLoading: true };
    }
    if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
      // Assuming the API returns a single product object
      return { ...state, singleProduct: action.payload, singleProductLoading: false };
    }
    if (action.type === GET_SINGLE_PRODUCT_ERROR) {
      return { ...state, singleProductError: true, singleProductLoading: false };
    }
  
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default productsReducer;
  