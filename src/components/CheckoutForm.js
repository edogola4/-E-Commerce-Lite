// src/components/CheckoutForm.js
// --------------------------------------------------------------------
// CheckoutForm Component
// This component handles the payment process using Stripe. It collects
// billing details, processes the payment, and navigates to a success
// page upon successful payment.
// --------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useCartContext } from '../context/cart_context';
import { formatPrice } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Row from './Row';
import BillingDetailsFields from './BillingDetailsFields';

// In StripeCheckout.js
//import CheckoutForm from './CheckoutForm';

const CheckoutForm = () => {
  const { cart } = useCartContext();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [totalAmountFromServer, setTotalAmountFromServer] = useState(0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post(
          '/.netlify/functions/create-payment-intent',
          JSON.stringify({ cart })
        );
        setClientSecret(data.clientSecret);
        setTotalAmountFromServer(data.amount);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    createPaymentIntent();
  }, [cart]);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const billingDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      address: {
        city: event.target.city.value,
        line1: event.target.address.value,
        state: event.target.state.value,
        postal_code: event.target.zip.value,
      },
    };

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: billingDetails,
        },
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError('');
        setProcessing(false);
        setSucceeded(true);
        navigate('/successful_payment');
      }
    }
  };

  return (
    <Wrapper>
      <form id="payment-form" onSubmit={handleSubmit}>
        <h4>Enter billing details:</h4>
        <Row>
          <BillingDetailsFields />
        </Row>

        <h4>Card details for test:</h4>
        <TestCardDetails>
          <li>Card number: 4242 4242 4242 4242</li>
          <li>MM/YY: 22/22</li>
          <li>CVC: 222</li>
        </TestCardDetails>

        <Row>
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
        </Row>

        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}

        <Row>
          <button
            disabled={processing || disabled || succeeded}
            type="submit"
          >
            <span id="button-text">
              {processing ? (
                <div className="spinner" id="spinner" />
              ) : (
                `Pay ${formatPrice(totalAmountFromServer / 100)}`
              )}
            </span>
          </button>
        </Row>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem auto;
`;

const TestCardDetails = styled.ul`
  color: var(--clr-primary-7);
`;

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
  hidePostalCode: true,
};

export default CheckoutForm;
