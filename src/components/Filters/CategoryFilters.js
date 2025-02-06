import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues } from '../../utils/helpers'

export const CategoryFilters = () => {
  const {
    updateFilters,
    allProducts,
    filters: { category },
  } = useFilterContext()

  const uniqueCategories = getUniqueValues(allProducts, 'categories').filter(
    (uniqueCategory) => typeof uniqueCategory === 'string'
  )

  return (
    <div className='form-control'>
      <h5>category</h5>
      <div>
        {uniqueCategories.map((uniqueCategory) => (
          <button
            key={uniqueCategory}
            type='button'
            name='category'
            className={
              uniqueCategory.toLowerCase() === category ? 'active' : undefined
            }
            onClick={updateFilters}
          >
            {uniqueCategory}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilters
