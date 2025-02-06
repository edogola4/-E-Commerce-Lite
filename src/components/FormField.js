// src/components/FormField.js
// --------------------------------------------------------------------
// FormField Component
// This component renders a labeled input field for forms. It accepts
// props for label text, input type, name, placeholder, and an optional
// required flag.
// --------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';

const FormField = ({ label, type, name, placeholder, required = false }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required={required} />
    </FormFieldContainer>
  );
};

export default FormField;

const FormFieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid var(--clr-primary-5);

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 20%;
  min-width: 70px;
  padding: 11px 0;
  color: var(--clr-primary-1);
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid var(--clr-primary-5);
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: var(--clr-primary-3);
  background-color: transparent;
  animation: 1ms void-animation-out;
  border: none;
  margin-bottom: 0;

  &::placeholder {
    color: var(--clr-primary-9);
  }

  /* Change the background color of auto-fill in Chrome */
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--clr-primary-9) inset;
    -webkit-text-fill-color: var(--clr-primary-5);
  }
`;
