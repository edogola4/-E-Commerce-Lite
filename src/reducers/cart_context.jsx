// cart_context.jsx
import React, { useReducer, createContext, useEffect } from 'react';
import cartReducer from './cart_reducer';

// Initial state with local storage check
const getLocalCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState = {
  cart: getLocalCart(),
  totalItems: 0,
  totalAmount: 0,
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Personalization: Update totals on cart change
  useEffect(() => {
    // eslint-disable-next-line no-undef
    dispatch({ type: COUNT_CART_TOTALS });
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};