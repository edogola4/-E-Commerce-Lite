import React from 'react';

const ServicesHeader = ({
  title = "High Quality Baby Product",
  description = "Discover our carefully curated, premium baby products imported from Japan, Europe, Africa and the USA. Each item is a limited edition treasure crafted with love.",
  additionalInfo = "Explore our exclusive collections:",
  className = "header"
}) => {
  return (
    <article className={className}>
      <h3>
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </h3>
      <p>{description}</p>
      <p>{additionalInfo}</p>
    </article>
  );
};

export default ServicesHeader;




/*import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.article`
  text-align: center;
  padding: 2rem 1rem;
  background: #fff;
  border-bottom: 2px solid #f5f5f5;
  margin-bottom: 2rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  font-family: 'Nunito Sans', sans-serif;
  color: #2B2B2B;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -0.5rem;
    transform: translateX(-50%);
    width: 60%;
    height: 4px;
    background: linear-gradient(to right, #FFA8C2, #F39C12);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 0.75rem;
  font-family: 'Nunito Sans', sans-serif;
`;

const AdditionalInfo = styled.p`
  font-size: 1rem;
  color: #777;
  font-family: 'Nunito Sans', sans-serif;
  font-style: italic;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #ddd;
`;

const ServicesHeader = ({
  title = "High Quality Baby Products",
  description = "Discover our carefully curated, premium baby products imported from Japan, Europe, and the USA. Each item is a limited edition treasure crafted with love.",
  additionalInfo = "Explore our exclusive collections:",
  className
}) => {
  return (
    <HeaderContainer className={className}>
      <Title>
        {title.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== title.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </Title>
      <Description>{description}</Description>
      <AdditionalInfo>{additionalInfo}</AdditionalInfo>
    </HeaderContainer>
  );
};

export default ServicesHeader;
*/