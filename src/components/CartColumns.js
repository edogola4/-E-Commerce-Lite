/*import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Product</h5>
        <h5>Unit Price</h5>
        <h5>Quantity</h5>
        <h5>Total</h5>
        <span></span>
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`;

export default CartColumns;
*/




import React from 'react';
import styled from 'styled-components';

const CartColumns = () => {
  // Define the column headers. The empty string represents the extra column (e.g., for a remove button).
  const headers = ['Product', 'Unit Price', 'Quantity', 'Total', ''];

  return (
    <Wrapper>
      <div className="cart-columns" role="row">
        {headers.map((header, index) =>
          header ? (
            <h5 key={index} role="columnheader">
              {header}
            </h5>
          ) : (
            // The empty column for potential future content (e.g., remove button) is marked as decorative.
            <span key={index} aria-hidden="true" />
          )
        )}
        <hr />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* Hide on smaller screens */
  display: none;

  @media (min-width: 776px) {
    display: block;
    .cart-columns {
      display: grid;
      /* Grid template: fixed width for Product, three equal flexible columns, and an auto-sized column */
      grid-template-columns: 316px repeat(3, 1fr) auto;
      align-items: center;
      column-gap: 1rem;
      text-align: center;

      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
        margin: 0; /* Reset default heading margins */
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
      border: 0;
      border-top: 1px solid var(--clr-grey-8);
    }
  }
`;

export default CartColumns;
