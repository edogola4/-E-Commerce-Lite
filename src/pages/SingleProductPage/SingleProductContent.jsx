import React from 'react';
import { useProductsContext } from '../../context/products_context';
import { formatPrice } from '../../utils/helpers';
import { AddToCart } from '../../components';

const SingleProductContent = () => {
  const { singleProduct } = useProductsContext();

  // Destructure product details with default values
  const {
    name = 'Unnamed Product',
    price = 0,
    itemDescription = 'No description available.',
    brand = 'Unknown',
    stock = 0,
    ageDescription = 'Not specified',
    heightDescription = 'Not specified',
  } = singleProduct || {};

  return (
    <section className="content">
      <h2>{name}</h2>
      <h5 className="price">{formatPrice(price)}</h5>
      <p className="desc">{itemDescription}</p>
      <p className="info">
        <span>Availability: </span>
        {stock > 0 ? 'In stock' : 'Out of stock'}
      </p>
      {brand && (
        <p className="info">
          <span>Brand: </span>
          {brand}
        </p>
      )}
      {ageDescription && (
        <p className="info">
          <span>Suitable for age: </span>
          {ageDescription}
        </p>
      )}
      {heightDescription && (
        <p className="info">
          <span>Suitable for height: </span>
          {heightDescription}
        </p>
      )}
      {stock > 0 && (
        <>
          <hr />
          <AddToCart singleProduct={singleProduct} />
        </>
      )}
    </section>
  );
};

export default SingleProductContent;
