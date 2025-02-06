import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProductsButton = () => {
  return (
    <Link to="/products" className="btn">
      All Products
    </Link>
  );
};

export default FeaturedProductsButton;
