import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero } from '../components';
import { useFilterContext } from '../context/filter_context';

const ProductsPage = () => {
  const { clearFilters, isClickFromServices, resetIsClickFromServices } = useFilterContext();

  useEffect(() => {
    // If the page was reached via a service click, reset the flag without clearing filters.
    // Otherwise, clear any active filters on mount.
    if (isClickFromServices) {
      resetIsClickFromServices();
    } else {
      clearFilters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      {/* Personalized PageHero title for a warm welcome */}
      <PageHero title="Discover Our Collection" />
      <Wrapper className="page">
        <div className="section-center products">
          <Filters />
          <div className="content">
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  .content {
    /* Added personalized styling for the product listing area */
    padding: 1rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 250px 1fr;
    }
  }
`;

export default ProductsPage;
