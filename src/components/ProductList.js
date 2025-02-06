// src/components/ProductList.js
// --------------------------------------------------------------------
// ProductList Component
// This component renders a list of products based on the current filter
// settings. It displays a loading indicator while products are being
// fetched, shows a friendly message if no products match the search
// criteria, and conditionally renders either a grid view or a list view
// based on the user's preference.
// --------------------------------------------------------------------

import React from 'react';
import { useFilterContext } from '../context/filter_context';
import { useProductsContext } from '../context/products_context';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';

const ProductList = () => {
  const { filteredProducts, gridView } = useFilterContext();
  const { productsLoading } = useProductsContext();

  // Show a loading spinner while the products are being fetched.
  if (productsLoading) {
    return <Loading />;
  }

  // If no products match the filter, display a message.
  if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no product matches your search...
      </h5>
    );
  }

  // Render either the list view or grid view based on the gridView flag.
  return !gridView ? (
    <ListView filteredProducts={filteredProducts} />
  ) : (
    <GridView filteredProducts={filteredProducts}>product list</GridView>
  );
};

export default ProductList;
