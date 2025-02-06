// src/components/Hero.js
// --------------------------------------------------------------------
// Hero Component
// This component displays a promotional section with a headline,
// descriptive text, and a call-to-action button, accompanied by
// a representative image.
// --------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <Content>
        <h1>
          High Quality <br />
          Products for Your Little Ones
        </h1>
        <p>
          Quality products imported from Japan, Europe, and the USA for baby boys and
          girls, as well as for mothers.
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop Now
        </Link>
      </Content>
      <ImageContainer>
        <img src={heroImage} alt="Hero" className="main-img" />
        {/* You can insert an additional image here if needed */}
      </ImageContainer>
    </Wrapper>
  );
};

export default Hero;

// Styled Components
const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }
`;

const Content = styled.article`
  h1 {
    margin-bottom: 2rem;
    text-transform: capitalize;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-size: 1rem;

    @media (min-width: 992px) {
      font-size: 1.25rem;
    }
  }

  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
`;

const ImageContainer = styled.article`
  display: none;

  @media (min-width: 992px) {
    display: block;
    position: relative;

    .main-img {
      width: 100%;
      height: 550px;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    &::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
