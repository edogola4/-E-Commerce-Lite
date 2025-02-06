import React from 'react'
import { useFilterContext } from '../../context/filter_context'

const ClearFilters = () => {
  const { clearFilters } = useFilterContext()

  return (
    <button type='button' className='clear-btn' onClick={clearFilters}>
      Clear Filters
    </button>
  )
}

export default ClearFilters
