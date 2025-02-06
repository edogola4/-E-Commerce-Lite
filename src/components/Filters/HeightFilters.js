import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { getUniqueValues, sortUniqueCategoriesByFirstNumber } from '../../utils/helpers';

const HeightFilters = () => {
  const {
    updateFilters,
    filters: { height },
    allProducts,
  } = useFilterContext();

  // Get unique height categories from all products
  const uniqueHeights = getUniqueValues(allProducts, 'height', true);

  // Sort the heights numerically based on the first number
  const sortedUniqueHeight = sortUniqueCategoriesByFirstNumber(uniqueHeights);

  return (
    <div className="form-control checkbox">
      <h5>Height</h5>
      {sortedUniqueHeight.map((heightCategory) => {
        return (
          <label key={heightCategory}>
            <input
              type="checkbox"
              name="height"
              value={heightCategory}
              onChange={(e) => updateFilters(e)}
              checked={height.includes(heightCategory)}
            />
            {'  '}
            {heightCategory}
          </label>
        );
      })}
    </div>
  );
};

export default HeightFilters;
