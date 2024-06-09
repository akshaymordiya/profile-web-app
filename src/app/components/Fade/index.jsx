"use client";
import React, { useEffect, useState, useRef, useMemo } from 'react'

import "./index.scss";

const Fade = ({
  children,
  animationType = 'fadeIn', // Default animation type
  delay = 0, // Default delay is 0,
  duration = null
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fadeIn':
        return 'fade-in';
      case 'fadeOut':
        return 'fade-out';
      case 'slideInLeft':
        return 'slide-in-left';
      case 'slideInRight':
        return 'slide-in-right';
      case 'slideInBottom':
        return 'slide-in-bottom';
      default:
        return 'fade-in';
    }
  };

  const styleObject = useMemo(() => {
    const styleObj = {}
    if(duration){
      styleObj['animationDuration'] = `${duration}s`;
      styleObj["visibility"] = isVisible ? 'visible' : 'hidden'
    }

    return styleObj
  }, [duration, isVisible]);

  return (
    <div ref={ref} className={isVisible ? getAnimationClass() : ''} style={styleObject}>
      {children}
    </div>
  );
};

export default Fade