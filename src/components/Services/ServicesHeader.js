import React from 'react';

const ServicesHeader = ({
  title = "high quality baby product",
  description = "We offer well priced, high quality branded baby products imported from Japan, Europe and USA. All items are in limited quantity.",
  additionalInfo = "We have the following types of products:",
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
