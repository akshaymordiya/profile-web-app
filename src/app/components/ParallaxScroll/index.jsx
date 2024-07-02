"use client";
import React, { useEffect, useRef, useContext } from 'react';
//context

import './index.scss';

const ParallaxScroll = ({ 
  speed = 0.5, 
  children, 
  className = "",
  direction = "y",
  enableLogs = false
}) => {
  const parallaxRef = useRef();

  useEffect(() => {
    requestAnimationFrame(() => handleParallax())
  }, []);

  const handleParallax = () => {
    if(parallaxRef.current){
      if(direction === "y"){
        const parallaxRect = parallaxRef.current.getBoundingClientRect();
        parallaxRef.current.style.transform = `translateY(${parallaxRect.top * speed}px)`
      } else if(direction === "x") {
        const parallaxRect = parallaxRef.current.getBoundingClientRect();
        parallaxRef.current.style.transform = `translateX(${parallaxRect.top * speed}px)`
      }
    }
    requestAnimationFrame(() => handleParallax())
  }

  return (
    <div className={`parallax ${className}`} ref={parallaxRef}>
      {children}
    </div>
  );
};

export default ParallaxScroll;
