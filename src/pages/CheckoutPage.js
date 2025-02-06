import React from 'react';
import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <PageWrapper>
        <div className="empty">
          <h2>Your cart is empty!</h2>
          <Link to="/products" className="btn">
            Explore Products
          </Link>
        </div>
      </PageWrapper>
    );
  } else {
    return (
      <PageWrapper>
        <StripeCheckout />
      </PageWrapper>
    );
  }
};

const PageWrapper = ({ children }) => {
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">{children}</Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 2rem;
  background: var(--clr-background, #f5f5f5);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .empty {
    text-align: center;
    color: var(--clr-grey-5);
  }

  .btn {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--clr-primary-5);
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background: var(--clr-primary-7);
  }
`;

export default CheckoutPage;
