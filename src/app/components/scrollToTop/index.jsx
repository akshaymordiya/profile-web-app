'use client'

import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';

// load scss
import "./index.scss";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check scroll position
  const toggleVisibility = () => setIsVisible(window.scrollY > 300);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button 
        className={`scroll_to_top 
          ${isVisible ?'visible' : 'hidden'}
        `}
        onClick={scrollToTop}
      >
        <KeyboardDoubleArrowUpRoundedIcon       className='up_arrow'
        />
      </button>
    )
  );
}

export default ScrollToTop