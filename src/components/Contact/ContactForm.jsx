/*import React from 'react';

export const ContactForm = () => {
  return (
    <form className="contact-form">
      <input
        type="email"
        className="form-input"
        placeholder="Enter your email"
        required
      />
      <button type="submit" className="submit-btn">
        Subscribe
      </button>
    </form>
  );
};

export default ContactForm;
*/
import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 50px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #f39c12;
  }
`;

const Button = styled.button`
  background-color: #FFA8C2;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #f39c12;
    transform: scale(1.05);
  }
`;

export const ContactForm = () => {
  return (
    <Form className="contact-form">
      <Input
        type="email"
        className="form-input"
        placeholder="Your email address"
        required
      />
      <Button type="submit" className="submit-btn">
        Join Our Tribe
      </Button>
    </Form>
  );
};

export default ContactForm;
