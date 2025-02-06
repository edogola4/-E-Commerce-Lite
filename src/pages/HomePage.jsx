import React from 'react';
import styled from 'styled-components';
import { Hero, Services, Contact, FeaturedProducts } from '../components';

const HomePage = () => {
  return (
    <Wrapper>
      {/* A bold welcome section */}
      <Hero />
      {/* Showcasing our handpicked featured products */}
      <FeaturedProducts />
      {/* Explore our range of services */}
      <Services />
      {/* Get in touch with us */}
      <Contact />
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.main`
  padding: 2rem;
  background: var(--clr-background, #f7f7f7);
  /* Personal touches: adding a subtle box-shadow and rounded corners */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
