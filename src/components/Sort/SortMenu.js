import React from 'react';
import { useFilterContext } from '../../context/filter_context';

const SortMenu = ({
  labelText = 'Sort by: ',
  formClassName = 'sort-form',
  selectClassName = 'sort-select'
}) => {
  const { sort, updateSort } = useFilterContext();
  return (
    <form className={formClassName}>
      <label htmlFor="sort">{labelText}</label>
      <select
        name="sort"
        id="sort"
        value={sort}
        onChange={(e) => updateSort(e)}
        className={selectClassName}
      >
        <option value="price-lowest">Price (lowest)</option>
        <option value="price-highest">Price (highest)</option>
        <option value="name-a">Name (A-Z)</option>
        <option value="name-z">Name (Z-A)</option>
      </select>
    </form>
  );
};

export default SortMenu;
