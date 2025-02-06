import React from 'react';
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
