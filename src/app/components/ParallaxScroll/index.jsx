"use client";
import React, { useEffect, useRef } from 'react';
//context

import './index.scss';

const ParallaxScroll = ({ 
  speed = 0.5, 
  children, 
  className = "",
  direction = "y",
  applyToCustomElement = false,
  effectElementId = ""
}) => {
  const parallaxRef = useRef();

<<<<<<< HEAD
  const handleScroll = () => {
    if (parallaxRef.current) {
      const parallaxTop = parallaxRef.current.getBoundingClientRect().top;
      parallaxRef.current.style.transform = `translateY(${parallaxTop * speed}px)`;
    }
  };

=======
>>>>>>> 6c22594bda1e0e9d33c22c4bf4c860a0df6dd7e2
  useEffect(() => {
    requestAnimationFrame(() => handleParallax())
  }, []);

  const handleParallax = () => {
    if(parallaxRef.current){
      if(direction === "y"){
        const parallaxRect = parallaxRef.current.getBoundingClientRect();
        const value = `translateY(${parallaxRect.top * speed}px)`;
        if(applyToCustomElement){
          const element = document.getElementById(effectElementId);
          if(element){
            element.style.transform = value
          }
        } else {
          parallaxRef.current.style.transform = value
        }
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
