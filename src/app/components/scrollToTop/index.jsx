'use client'
import { KeyboardDoubleArrowUp } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import './index.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);  // Show button only after 300px scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll_to_top ${isVisible ? 'visibl' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <KeyboardDoubleArrowUp className="up_arrow" />
    </button>
  );
};

export default ScrollToTopButton;
