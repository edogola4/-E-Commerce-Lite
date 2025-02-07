/*import React from 'react';

export const ContactHeader = () => {
  return <h3>Join our newsletter to stay updated on new product arrivals!</h3>;
};



export default ContactHeader
*/




import React from 'react';
import styled from 'styled-components';

const Header = styled.h3`
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1.75rem;
  color: #2B2B2B;
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.25rem;
    transform: translateX(-50%);
    width: 50%;
    height: 4px;
    background: linear-gradient(to right, #FFA8C2, #F39C12);
    border-radius: 2px;
  }
`;

export const ContactHeader = () => {
  return (
    <Header>
      Join the TinyTots Boutique family – get exclusive previews, fresh style inspiration, and special offers delivered straight to your inbox.
    </Header>
  );
};

export default ContactHeader;
