import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

// Function to retrieve the cart from localStorage
const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

// Initial state for the cart context
const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
};

// Create the CartContext with the initial state
const CartContext = React.createContext(initialState);

// CartProvider component to wrap around components that need access to the cart context
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to add an item to the cart
  const addToCart = (id, slug, amount, singleProduct) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, slug, amount, singleProduct },
    });
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  // Function to toggle the amount of a cart item
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  // Function to clear the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // Update localStorage and recalculate totals whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCartContext = () => {
  return useContext(CartContext);
};
