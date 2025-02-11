// src/components/GridView.js
// --------------------------------------------------------------------
// GridView Component
// This component displays a collection of filtered products in a grid
// layout. Each product is rendered using the Product component.
// --------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const GridView = ({ filteredProducts }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
