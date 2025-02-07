/*import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  const { id, image, name, price, amount, slug } = cartItem;
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper>
      {/* item column *}
      <div className="title">
        <Link to={`/products/${slug}`}>
          <img src={image} alt={name} />
        </Link>
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      {/* price column *}
      <div className="price">{formatPrice(price)}</div>
      {/* quantity column *}
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      {/* subtotal column *}
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      {/* remove icon *}
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
        title="Remove this item"
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;

  .title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }

  .price-small {
    color: var(--clr-primary-5);
  }

  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  .remove-btn {
    color: var(--clr-white);
    background: var(--clr-red-dark);
    border: transparent;
    letter-spacing: var(--spacing);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
*/

import React from 'react';
import styled from 'styled-components';
import { formatPrice } from '../utils/helpers';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CartItem = ({ cartItem }) => {
  const { id, image, name, price, amount, slug } = cartItem;
  const { removeItem, toggleAmount } = useCartContext();

  // Handlers for incrementing and decrementing the item quantity
  const handleIncrease = () => toggleAmount(id, 'inc');
  const handleDecrease = () => toggleAmount(id, 'dec');

  return (
    <Wrapper>
      {/* Product Information Column */}
      <div className="item-info">
        <Link to={`/products/${slug}`} className="item-link">
          <img src={image} alt={name} className="item-img" />
        </Link>
        <div className="item-details">
          <h5 className="item-name">{name}</h5>
          {/* Small screen price display */}
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      {/* Price Column for larger screens */}
      <div className="price">{formatPrice(price)}</div>
      {/* Quantity Column */}
      <div className="amount">
        <AmountButtons amount={amount} increase={handleIncrease} decrease={handleDecrease} />
      </div>
      {/* Subtotal Column for larger screens */}
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      {/* Remove Button */}
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
        aria-label={`Remove ${name} from cart`}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  align-items: center;
  margin-bottom: 3rem;

  .item-info {
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }

  .item-link {
    display: block;
  }

  .item-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .item-name {
    font-size: 0.75rem;
    margin: 0;
  }

  .price-small {
    color: var(--clr-primary-5);
    font-size: 0.75rem;
    margin: 0;
  }

  .price {
    display: none;
  }

  .subtotal {
    display: none;
  }

  .remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--clr-red-dark);
    color: var(--clr-white);
    border: none;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
  }

  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }

    .subtotal {
      display: block;
      font-size: 1rem;
      color: var(--clr-grey-5);
      font-weight: 400;
      margin: 0;
    }

    .price-small {
      display: none;
    }

    .item-name {
      font-size: 0.85rem;
    }

    .item-info {
      grid-template-columns: 100px 200px;
      gap: 1rem;
    }

    .amount {
      width: 100px;
    }

    /* Adjust AmountButtons styling for larger screens */
    .amount .amount-btns {
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default CartItem;
