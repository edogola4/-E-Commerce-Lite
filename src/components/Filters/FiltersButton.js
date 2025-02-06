import React from 'react'
import styled from 'styled-components'
import { FcExpand, FcCollapse } from 'react-icons/fc'

export const FiltersButton = ({ showFilters, setShowFilters }) => {
  return (
    <Wrapper>
      <h3>Filters</h3>
      <hr />
      <button 
        onClick={() => setShowFilters(!showFilters)} 
        aria-label={showFilters ? "Collapse Filters" : "Expand Filters"}
      >
        {showFilters ? <FcCollapse /> : <FcExpand />}
      </button>
    </Wrapper>
  )
}

export default FiltersButton

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  h3 {
    text-transform: capitalize;
    margin-bottom: 0;
    font-size: 1.25rem;
  }

  button {
    background: transparent;
    border: 1px solid var(--clr-black);
    color: var(--clr-black);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--clr-grey-10);
    }

    svg {
      font-size: 1rem;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
