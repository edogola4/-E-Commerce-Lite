import React from 'react';

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