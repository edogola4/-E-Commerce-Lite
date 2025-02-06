// src/components/Loading.js
// --------------------------------------------------------------------
// Loading Component
// This component renders a centered loading spinner using styled-components
// for styling and animation. It provides a visual indication during data
// fetching or other asynchronous operations.
// --------------------------------------------------------------------

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
