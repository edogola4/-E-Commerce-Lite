/*import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProductsButton = () => {
  return (
    <Link to="/products" className="btn">
      All Products
    </Link>
  );
};

export default FeaturedProductsButton;
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* centers vertically as well */
  width: 100%;
  margin: 2rem 0; /* adjust as needed */
`;

const StyledButton = styled.button`
  background-color: #FFA8C2;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f39c12;
    transform: scale(1.05);
  }
`;

const FeaturedProductsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products');
  };

  return (
    <ButtonContainer>
      <StyledButton onClick={handleClick}>
        Shop All Products
      </StyledButton>
    </ButtonContainer>
  );
};

export default FeaturedProductsButton;
