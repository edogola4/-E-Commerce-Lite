// src/components/Hero.js
// --------------------------------------------------------------------
// Hero Component
// This component displays a promotional section with a headline,
// descriptive text, and a call-to-action button, accompanied by
// a representative image.
// --------------------------------------------------------------------
/*
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import heroImage from '../assets/hero.jpg';

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
        {/*<img src={heroImage} alt="Hero" className="main-img" />*}
        {/* You can insert an additional image here if needed *}
        <img src="/assets/hero.jpg" alt="hero" />
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
*/

// src/components/Hero.js
// --------------------------------------------------------------------
// Hero Component
// This component displays a vibrant, attention-grabbing section with a
// captivating headline, engaging subtext, and a persuasive call-to-action.
// Designed for a fashion website featuring stylish clothing for children and women,
// it combines modern visuals with sales-driven copy to invite users into a world
// of quality and trend-setting style.
// --------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <Content>
        <h1>
          Elevate Every Moment <br />
          with Timeless Style
        </h1>
        <p>
          Discover our exclusive collection of chic, playful outfits for your little ones 
          and sophisticated ensembles for the modern woman. Quality you can feel, style you can trust.
        </p>
        <Link to="/products" className="btn hero-btn">
          Shop the Collection
        </Link>
      </Content>
      <ImageContainer>
        <img src="/assets/hero.jpg" alt="Stylish clothing for children and women" className="main-img" />
      </ImageContainer>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  align-items: center;
  padding: 2rem;
  background: #fefefe;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 4rem;
  }
`;

const Content = styled.article`
  h1 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    text-transform: capitalize;
    color: #2c3e50;
    line-height: 1.2;
    font-weight: 700;
  }

  p {
    line-height: 1.6;
    max-width: 45em;
    margin-bottom: 2rem;
    color: #34495e;
    font-size: 1.125rem;
  }

  .hero-btn {
    display: inline-block;
    padding: 0.85rem 2rem;
    font-size: 1.125rem;
    background-color: #e67e22;
    color: #fff;
    border: none;
    border-radius: 50px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #f39c12;
      transform: translateY(-3px);
    }
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
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    &::before {
      content: '';
      position: absolute;
      width: 15%;
      height: 80%;
      background: #e67e22;
      bottom: 0;
      left: -8%;
      border-radius: 12px;
    }
  }
`;
