import React from 'react';
import Product from '../Product';
import { useProductsContext } from '../../context/products_context';

const FeaturedProductsCards = () => {
  const { featuredProducts } = useProductsContext();

  return (
    <div className="section-center featured">
      {featuredProducts &&
        featuredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};

export default FeaturedProductsCards;
