import React from 'react';
import './index.scss';

const BASE_CLASSNAME = "carousel"

const HorizontalCarousel = ({ items, containerClass = "", itemClass = "" }) => {

  return (
    <div className={`${BASE_CLASSNAME}-container ${containerClass}`}>
      <div className={`${BASE_CLASSNAME}-container-list`}>
        {items.map((item, index) => (
          <li className={`carousel-item ${itemClass}`} key={index}>
            {item}
          </li>
        ))}
        {items.map((item, index) => (
          <li className={`carousel-item ${itemClass}`} key={index} aria-hidden="true">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
