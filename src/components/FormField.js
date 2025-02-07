// src/components/FormField.js
// --------------------------------------------------------------------
// FormField Component
// This component renders a labeled input field for forms. It accepts
// props for label text, input type, name, placeholder, and an optional
// required flag.
// --------------------------------------------------------------------

/*import React from 'react';
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

  /* Change the background color of auto-fill in Chrome *
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px var(--clr-primary-9) inset;
    -webkit-text-fill-color: var(--clr-primary-5);
  }
`;
*/



// src/components/FormField.js
// --------------------------------------------------------------------
// FormField Component
// A personalized and improved component that renders a labeled input field
// for forms. It now supports error messages, controlled input props, and
// accessibility improvements, with a modern color palette and styling.
// --------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormField = ({
  label,
  type = 'text',
  name,
  placeholder,
  required = false,
  error,
  value,
  onChange,
  ...rest
}) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>
        {label} {required && <RequiredIndicator>*</RequiredIndicator>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormFieldContainer>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default FormField;

const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #212121; /* Dark gray/near-black for modern text */
`;

const RequiredIndicator = styled.span`
  color: #d32f2f; /* Material red for required indicator */
  margin-left: 0.25rem;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 12px 16px;
  color: #212121;
  background-color: #ffffff;
  border: 1px solid #e0e0e0; /* Light gray border for a clean look */
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder {
    color: #9e9e9e; /* Subtle gray placeholder */
  }

  &:focus {
    outline: none;
    border-color: #2962ff; /* A modern blue accent */
    box-shadow: 0 0 0 3px rgba(41, 98, 255, 0.25);
  }

  /* Auto-fill styling for Chrome */
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #ffffff inset;
    -webkit-text-fill-color: #212121;
  }
`;

const ErrorMessage = styled.span`
  margin-top: 0.5rem;
  font-size: 14px;
  color: #d32f2f; /* Material red for errors */
`;
