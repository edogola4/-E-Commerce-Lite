import React from 'react';
import { useFilterContext } from '../../context/filter_context';

const SearchFilters = () => {
  const {
    updateFilters,
    filters: { searchTerm },
  } = useFilterContext();

  return (
    <div className="form-control">
      {/* Search input field */}
      <input
        type="text"
        name="searchTerm"
        placeholder="Search"
        className="search-input"
        value={searchTerm}
        onChange={(e) => updateFilters(e)}
      />
    </div>
  );
};

export default SearchFilters;
