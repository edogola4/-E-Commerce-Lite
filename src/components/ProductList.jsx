import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';

const ProductList = () => {
  const { allProducts, productsLoading, productsError } = useProductsContext();

  if (productsLoading) {
    return (
      <Wrapper>
        <Message>Loading products...</Message>
      </Wrapper>
    );
  }

  if (productsError) {
    return (
      <Wrapper>
        <Message>Error loading products. Please try again later.</Message>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {allProducts.map((product) => (
        <ProductCard key={product._id}>
          <Image
            src={
              product.images && product.images.length > 0
                ? product.images[0].asset.url
                : '/assets/placeholder.png'
            }
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <Price>${Number(product.price).toFixed(2)}</Price>
        </ProductCard>
      ))}
    </Wrapper>
  );
};

export default ProductList;

const Wrapper = styled.section`
  padding: 2rem;
  background: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.25rem;
    color: #2b2b2b;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Price = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: #2b2b2b;
  margin-top: 0.5rem;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #555;
`;
