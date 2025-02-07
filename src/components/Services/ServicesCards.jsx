/*import React from 'react';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../context/filter_context';
import { services } from '../../utils/constants';

const ServicesCards = ({
  containerClass = 'services-center',
  cardClass = 'service',
  buttonClass = 'btn',
  buttonText = (title) => `click here for ${title}`
}) => {
  const { updateFilters, handleClickFromServices, clearFilters } = useFilterContext();
  return (
    <div className={containerClass}>
      {services.map(({ id, icon, title }) => (
        <article key={id} className={cardClass}>
          <span className='icon'>{icon}</span>
          <h4>{title}</h4>
          <Link to='/products'>
            <button
              className={buttonClass}
              type='button'
              name='home-page-category'
              value={title}
              onClick={(e) => {
                clearFilters();
                handleClickFromServices();
                updateFilters(e);
              }}
            >
              {buttonText(title)}
            </button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ServicesCards;
*/



import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useFilterContext } from '../../context/filter_context';
import { services } from '../../utils/constants';

// Styled Components
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const Card = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
    color: #FFA8C2;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: #2B2B2B;
    font-family: 'Nunito Sans', sans-serif;
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
    background-color: #F39C12;
    transform: scale(1.05);
  }
`;

const ServicesCards = ({
  containerClass = '',
  cardClass = '',
  buttonClass = '',
  // Changed default button text to a more engaging phrase
  buttonText = (title) => `Explore ${title}`
}) => {
  const { updateFilters, handleClickFromServices, clearFilters } = useFilterContext();
  const navigate = useNavigate();

  const handleButtonClick = (e, title) => {
    clearFilters();
    handleClickFromServices();
    updateFilters(e);
    navigate('/products');
  };

  return (
    <CardsWrapper className={containerClass}>
      {services.map(({ id, icon, title }) => (
        <Card key={id} className={cardClass}>
          <span className="icon">{icon}</span>
          <h4>{title}</h4>
          <Button
            className={buttonClass}
            type="button"
            name="home-page-category"
            value={title}
            onClick={(e) => handleButtonClick(e, title)}
          >
            {buttonText(title)}
          </Button>
        </Card>
      ))}
    </CardsWrapper>
  );
};

export default ServicesCards;
