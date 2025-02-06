import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { PageHero, CartContent } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>Oh no, your cart is empty!</h2>
          <p>
            It looks like you haven't added any items yet. Why not explore our collection and find something amazing?
          </p>
          <Link to="/products" className="btn">
            Explore Products
          </Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <main>
        <PageHero title="Your Cart" />
        <Wrapper className="page">
          <CartContent />
        </Wrapper>
      </main>
    );
  }
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    margin-top: 3rem;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
      color: var(--clr-primary-5);
    }
    p {
      margin-bottom: 1.5rem;
      color: var(--clr-grey-5);
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
    .btn {
      background: var(--clr-primary-5);
      color: #fff;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius);
      text-decoration: none;
      transition: background 0.3s ease;
    }
    .btn:hover {
      background: var(--clr-primary-7);
    }
  }
`;

export default CartPage;
