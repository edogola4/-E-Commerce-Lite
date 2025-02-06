import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1>404</h1>
        <h3>Whoops! The page you're looking for seems to have vanished.</h3>
        <Link to="/" className="btn">
          Return Home
        </Link>
      </section>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.main`
  /* Use a gradient background for a modern look */
  background: linear-gradient(45deg, #f06, #ff9);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;

  section {
    background: rgba(255, 255, 255, 0.85);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
    color: #333;
  }

  h3 {
    margin-bottom: 2rem;
    color: #555;
  }

  .btn {
    background: #333;
    color: #fff;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background: #555;
  }
`;
