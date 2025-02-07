/*import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map(cartItem => {
        return <CartItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <hr />
      <Buttons clearCart={clearCart} />
      <CartTotals />
    </Wrapper>
  );
};

const Buttons = ({ clearCart }) => {
  return (
    <div className="link-container">
      <Link to="/products" className="link-btn">
        continue shopping
      </Link>
      <button type="button" className="link-btn clear-btn" onClick={clearCart}>
        clear shopping cart
      </button>
    </div>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    column-gap: 0.25rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
*/

import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  // If the cart is empty, show an empty state message and a link to continue shopping.
  if (cart.length < 1) {
    return (
      <EmptyWrapper className="section section-center">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="btn">
          Continue Shopping
        </Link>
      </EmptyWrapper>
    );
  }

  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <hr />
      <Buttons clearCart={clearCart} />
      <CartTotals />
    </Wrapper>
  );
};

const Buttons = ({ clearCart }) => {
  return (
    <div className="link-container">
      <Link to="/products" className="link-btn">
        continue shopping
      </Link>
      <button
        type="button"
        className="link-btn clear-btn"
        onClick={clearCart}
        aria-label="Clear shopping cart"
      >
        clear shopping cart
      </button>
    </div>
  );
};

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    column-gap: 0.25rem;
  }
  .link-btn {
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border: none;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 0;
    border-top: 1px solid var(--clr-grey-8);
  }
`;

const EmptyWrapper = styled.section`
  text-align: center;
  h2 {
    margin-bottom: 1.5rem;
  }
  .btn {
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default CartContent;
