import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { formatPrice } from '../../utils/helpers';

const PriceFilters = () => {
  const {
    updateFilters,
    filters: { minPrice, maxPrice, price },
  } = useFilterContext();

  return (
    <div className="form-control">
      <h5>Price</h5>
      {/* Display formatted price */}
      <p className="price">{formatPrice(price)}</p>
      {/* Range input for price selection */}
      <input
        type="range"
        name="price"
        onChange={updateFilters}
        min={minPrice}
        max={maxPrice}
        value={price}
      />
    </div>
  );
};

export default PriceFilters;
