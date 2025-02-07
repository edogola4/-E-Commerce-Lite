// src/components/index.js
// --------------------------------------------------------------------
// Personalized Component Exports
// This file aggregates and exports all the custom components
// used throughout the project for easier and cleaner imports.
// --------------------------------------------------------------------

// Layout and Navigation
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar/Sidebar';
import PageHero from './PageHero';

// Core UI Components
import Hero from './Hero';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Loading from './Loading';

// Product and Cart Components
import ProductImages from './ProductImages';
import AddToCart from './AddToCart';
import AmountButtons from './AmountButtons';
import Filters from './Filters/Filters';
import ProductList from './ProductList';
import Sort from './Sort/Sort';
import CartContent from './CartContent';
import StripeCheckout from './StripeCheckout';

// Utility Components
import ScrollToTop from './ScrollToTop';

// Uncomment these if you need them in the future
// import CartButtons from './CartButtons';
// import Error from './Error';
// import Stars from './Stars';

export {
  // Layout and Navigation
  Navbar,
  Footer,
  Sidebar,
  PageHero,

  // Core UI Components
  Hero,
  Services,
  Contact,
  FeaturedProducts,
  Loading,

  // Product and Cart Components
  ProductImages,
  AddToCart,
  AmountButtons,
  Filters,
  ProductList,
  Sort,
  CartContent,
  StripeCheckout,

  // Utility Components
  ScrollToTop,

  // Future Components
  // CartButtons,
  // Error,
  // Stars,
};


// src/components/index.js
//export { default as Newsletter } from './Newsletter';
//export { default as Sort } from './Sort/Sort.js';