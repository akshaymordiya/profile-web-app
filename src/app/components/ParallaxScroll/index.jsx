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
