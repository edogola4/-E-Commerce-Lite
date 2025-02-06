import {
    LOAD_PRODUCTS,
    SET_LIST_VIEW,
    SET_GRID_VIEW,
    UPDATE_SORT,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
    FILTER_PRODUCTS,
    CLEAR_FILTERS,
    HANDLE_CLICK_FROM_SERVICES,
    RESET_IS_CLICK_FROM_SERVICES,
  } from '../actions';
  
  // Personalized Filter Reducer for managing product filters in our app
  const filterReducer = (state, action) => {
    if (action.type === LOAD_PRODUCTS) {
      const maxPrice = Math.max(...action.payload.map(item => item.price));
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    }
    if (action.type === SET_GRID_VIEW) {
      return { ...state, gridView: true };
    }
    if (action.type === SET_LIST_VIEW) {
      return { ...state, gridView: false };
    }
    if (action.type === UPDATE_SORT) {
      return { ...state, sort: action.payload };
    }
    if (action.type === SORT_PRODUCTS) {
      let tempProducts = [...state.filteredProducts];
      if (state.sort === 'price-lowest') {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (state.sort === 'price-highest') {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (state.sort === 'name-a') {
        tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (state.sort === 'name-z') {
        tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
      return { ...state, filteredProducts: tempProducts };
    }
    if (action.type === UPDATE_FILTERS) {
      let { name, value, checked } = action.payload;
      let { age, height } = state.filters;
      if (name === 'age') {
        if (checked) {
          age.push(value);
          value = age;
        } else {
          age = age.filter(ageValue => ageValue !== value);
          value = age;
        }
      }
      if (name === 'height') {
        if (checked) {
          height.push(value);
          value = height;
        } else {
          height = height.filter(heightValue => heightValue !== value);
          value = height;
        }
      }
      return { ...state, filters: { ...state.filters, [name]: value } };
    }
    if (action.type === FILTER_PRODUCTS) {
      const { allProducts } = state;
      const {
        searchTerm,
        category,
        forWhom,
        price,
        age: ageFilters,
        height: heightFilters,
      } = state.filters;
  
      let tempProducts = [...allProducts];
  
      // Filter by searchTerm (name or description)
      if (searchTerm) {
        tempProducts = tempProducts.filter(product => {
          return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.itemDescription.toLowerCase().includes(searchTerm.toLowerCase())
          );
        });
      }
      // Filter by category if not 'all'
      if (category !== 'all') {
        tempProducts = tempProducts.filter(product => product.categories === category);
      }
      // Filter by forWhom if not 'all'
      if (forWhom !== 'all') {
        tempProducts = tempProducts.filter(product => product.forWhom === forWhom);
      }
      // Filter by age filters if any are selected
      if (ageFilters.length > 0) {
        tempProducts = tempProducts.filter(product => {
          const { age: productAgeArray } = product;
          return ageFilters
            .map(ageFilter => productAgeArray?.includes(ageFilter))
            .every(Boolean);
        });
      }
      // Filter by height filters if any are selected
      if (heightFilters.length > 0) {
        tempProducts = tempProducts.filter(product => {
          const { height: productHeightArray } = product;
          return heightFilters
            .map(heightFilter => productHeightArray?.includes(heightFilter))
            .every(Boolean);
        });
      }
      // Filter by price limit
      tempProducts = tempProducts.filter(product => product.price <= price);
  
      return { ...state, filteredProducts: tempProducts };
    }
    if (action.type === CLEAR_FILTERS) {
      return {
        ...state,
        filters: {
          ...state.filters,
          searchTerm: '',
          category: 'all',
          price: state.filters.maxPrice,
          forWhom: 'all',
          age: [],
          height: [],
        },
      };
    }
    if (action.type === HANDLE_CLICK_FROM_SERVICES) {
      return { ...state, isClickFromServices: true };
    }
    if (action.type === RESET_IS_CLICK_FROM_SERVICES) {
      return { ...state, isClickFromServices: false };
    }
  
    throw new Error(`No Matching "${action.type}" - action type`);
  };
  
  export default filterReducer;
  