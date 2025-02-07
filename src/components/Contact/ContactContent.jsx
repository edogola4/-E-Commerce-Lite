/*import React from 'react';

export const ContactContent = () => {
  return (
    <p>
      Stay informed about new product arrivals and get discounts by subscribing to our newsletter.
    </p>
  );
};

export default ContactContent;
*/


import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: #2B2B2B;
  margin: 1rem 0;
  line-height: 1.5;
  font-family: 'Nunito Sans', sans-serif;
`;

export const ContactContent = () => {
  return (
    <Content>
      Be the first to discover our latest arrivals, exclusive offers, and style tips tailored just for you. Join our community and stay in the know!
    </Content>
  );
};

export default ContactContent;
