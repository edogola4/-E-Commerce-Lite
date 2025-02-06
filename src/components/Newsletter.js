// src/components/Newsletter.js
import React, { useState } from 'react';
import styled from 'styled-components';

const NewsletterWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  width: 60%;
  margin-right: 10px;
  border-radius: 4px;
  max-width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.text};
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your API call or subscription logic here.
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <NewsletterWrapper>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Button type="submit">Subscribe</Button>
      </form>
      {message && <p>{message}</p>}
    </NewsletterWrapper>
  );
};

export default Newsletter;

