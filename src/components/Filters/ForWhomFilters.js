import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues } from '../../utils/helpers';

const ForWhomFilters = () => {
  const {
    updateFilters,
    allProducts,
    filters: { forWhom },
  } = useFilterContext();

  // Get unique values for the 'forWhom' property from all products
  const uniqueForWhoms = getUniqueValues(allProducts, 'forWhom');

  // Sort the unique values alphabetically
  uniqueForWhoms.sort();

  return (
    <div className="form-control">
      <h5>Who is this product for?</h5>
      <select
        name="forWhom"
        value={forWhom}
        onChange={updateFilters}
        className="company"
      >
        {/* Map through the unique 'forWhom' values and create an option for each */}
        {uniqueForWhoms.map((uniqueForWhom) => {
          if (typeof uniqueForWhom === 'string') {
            return (
              <option key={uniqueForWhom} value={uniqueForWhom}>
                {uniqueForWhom}
              </option>
            );
          }
          return null;
        })}
      </select>
    </div>
  );
};

export default ForWhomFilters;
