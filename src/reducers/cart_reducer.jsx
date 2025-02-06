// cartReducer.js
import {
    ADD_TO_CART,
    CLEAR_CART,
    COUNT_CART_TOTALS,
    REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
  } from '../actions';
  
  // Personalization: Added local storage integration and quantity limits
  const MAX_ITEMS = 10; // Maximum quantity per item
  
  const cartReducer = (state, action) => {
    // Personalization: Save to localStorage on every cart change
    const persistCart = (newCart) => {
      localStorage.setItem('cart', JSON.stringify(newCart));
    };
  
    if (action.type === ADD_TO_CART) {
      const { id, slug, amount, singleProduct } = action.payload;
      const tempItem = state.cart.find(item => item.id === id);
  
      // Personalization: Check stock availability
      if (singleProduct.stock < amount) {
        alert(`Only ${singleProduct.stock} items available in stock!`);
        return state;
      }
  
      let tempCart;
      if (tempItem) {
        tempCart = state.cart.map(item => {
          if (item.id === id) {
            const newAmount = Math.min(item.amount + amount, MAX_ITEMS);
            return { ...item, amount: newAmount };
          }
          return item;
        });
      } else {
        const newItem = {
          id,
          slug,
          name: singleProduct.name,
          amount: Math.min(amount, MAX_ITEMS),
          image: singleProduct.images[0],
          price: singleProduct.price,
          max: singleProduct.stock,
        };
        tempCart = [...state.cart, newItem];
      }
  
      persistCart(tempCart);
      return { ...state, cart: tempCart };
    }
  
    if (action.type === CLEAR_CART) {
      persistCart([]);
      return { ...state, cart: [] };
    }
  
    if (action.type === REMOVE_CART_ITEM) {
      const tempCart = state.cart.filter(item => item.id !== action.payload);
      persistCart(tempCart);
      return { ...state, cart: tempCart };
    }
  
    if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
      const { id, value } = action.payload;
      const tempCart = state.cart.map(item => {
        if (item.id === id) {
          let newAmount = item.amount;
          
          if (value === 'inc') {
            newAmount = Math.min(item.amount + 1, item.max || MAX_ITEMS);
          } else if (value === 'dec') {
            newAmount = Math.max(item.amount - 1, 1);
          }
  
          // Personalization: Show warning when reaching max quantity
          if (newAmount === (item.max || MAX_ITEMS)) {
            alert(`Maximum quantity of ${item.max || MAX_ITEMS} reached for this item!`);
          }
  
          return { ...item, amount: newAmount };
        }
        return item;
      });
  
      persistCart(tempCart);
      return { ...state, cart: tempCart };
    }
  
    if (action.type === COUNT_CART_TOTALS) {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, item) => {
          total.totalItems += item.amount;
          total.totalAmount += item.amount * item.price;
          return total;
        },
        { totalItems: 0, totalAmount: 0 }
      );
      
      // Personalization: Format currency with 2 decimal places
      return { 
        ...state, 
        totalItems, 
        totalAmount: parseFloat(totalAmount.toFixed(2)) 
      };
    }
  
    // Personalization: Improved error message
    throw new Error(`Unhandled action type: ${action.type}`);
  };
  
  export default cartReducer;