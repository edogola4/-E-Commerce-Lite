// src/components/Loading.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.background};
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loading = () => (
  <LoadingWrapper>
    <Spinner />
  </LoadingWrapper>
);

export default Loading;
