// src/components/Loading.js
// --------------------------------------------------------------------
// Loading Component
// This component renders a centered loading spinner using styled-components
// for styling and animation. It provides a visual indication during data
// fetching or other asynchronous operations.
// --------------------------------------------------------------------
/*
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled-component for the spinner
const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.background || '#f3f3f3'};
  border-top: 8px solid ${({ theme }) => theme.colors.primary || '#3498db'};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

// Styled-component for centering the spinner
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Loading component
const Loading = () => (
  <LoadingWrapper>
    <Spinner />
  </LoadingWrapper>
);

export default Loading;
*/
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BRAND_NAME } from '../utils/constants';

// Define the spinning animation for the spinner
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define a fade-in and hold animation for the text that lasts 30 seconds
const fadeInAndHold = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  100% { opacity: 1; }
`;

// Styled-component for the spinner
const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.background || '#f3f3f3'};
  border-top: 8px solid ${({ theme }) => theme.colors.primary || '#3498db'};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

// Styled-component for centering the spinner and text
const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack spinner and text vertically */
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// Styled-component for the loading text with a 30-second animation duration
const LoadingText = styled.p`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Nunito Sans', sans-serif;
  color: ${({ theme }) => theme.colors.dark || '#2B2B2B'};
  animation: ${fadeInAndHold} 30s ease-in-out forwards;
`;

const Loading = () => (
  <LoadingWrapper>
    <Spinner />
    <LoadingText>{BRAND_NAME}</LoadingText>
  </LoadingWrapper>
);

export default Loading;
