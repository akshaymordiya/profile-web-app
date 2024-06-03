"use-client";
import React, { useEffect, useRef } from 'react';
import './index.scss';

const ParallaxScroll = ({ 
  speed = 0.5, 
  children, 
  className
}) => {
  const parallaxRef = useRef();

  const handleScroll = () => {
    if (parallaxRef.current) {
      const offset = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${offset * speed}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`parallax ${className}`} ref={parallaxRef}>
      {children}
    </div>
  );
};

export default ParallaxScroll;
