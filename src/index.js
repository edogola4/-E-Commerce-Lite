import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>
);
