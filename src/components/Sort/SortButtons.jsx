import React from 'react';
import { useFilterContext } from '../../context/filter_context';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const SortButtons = ({
  iconSize = '1.5em',
  activeClassName = 'active',
  containerClassName = 'btn-container'
}) => {
  const { gridView, setGridView, setListView } = useFilterContext();
  return (
    <div className={containerClassName}>
      <button
        type="button"
        className={gridView ? activeClassName : ''}
        onClick={setGridView}
      >
        <BsFillGridFill size={iconSize} />
        <span className="button-label">Grid View</span>
      </button>
      <button
        type="button"
        className={!gridView ? activeClassName : ''}
        onClick={setListView}
      >
        <BsList size={iconSize} />
        <span className="button-label">List View</span>
      </button>
    </div>
  );
};

export default SortButtons;
