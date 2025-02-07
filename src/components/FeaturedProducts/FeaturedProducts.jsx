/*import React from 'react';
import styled from 'styled-components';
//import { FeaturedProductsHeader } from './FeaturedProductsHeader';
//import { FeaturedProductsCards } from './FeaturedProductsCards';
///mport { FeaturedProductsButton } from './FeaturedProductsButton';


import FeaturedProductsHeader from './FeaturedProductsHeader';
import FeaturedProductsCards from './FeaturedProductsCards';
import FeaturedProductsButton from './FeaturedProductsButton';

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <FeaturedProductsHeader />
      <FeaturedProductsCards />
      <FeaturedProductsButton />
    </Wrapper>
  );
};

export default FeaturedProducts;


const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
*/


import React from 'react';
import styled from 'styled-components';
import FeaturedProductsHeader from './FeaturedProductsHeader';
import FeaturedProductsCards from './FeaturedProductsCards';
import FeaturedProductsButton from './FeaturedProductsButton';

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <TitleContainer>
        <FeaturedProductsHeader />
      </TitleContainer>
      <FeaturedProductsCards />
      <FeaturedProductsButton />
    </Wrapper>
  );
};

export default FeaturedProducts;

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 2rem 0;

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;

    img {
      height: 225px;
    }
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    display: inline-block;
    position: relative;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }

  h2::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 50%;
    height: 4px;
    background: linear-gradient(to right, #FFA8C2, #f39c12);
    border-radius: 2px;
  }
`;

