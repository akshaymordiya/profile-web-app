"use client";
import React, { useState, useEffect, useRef } from 'react';

//components
import IMG from '@/app/components/IMG';

import "./index.scss"

const BASE_CLASSNAME = "counter_box";

const Counter = ({ number = 0, text, image, title }) => {
  const [count, setCount] = useState(0);
  const [isInViewport, setIsInViewport] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (isInViewport && count < number) {
      intervalId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            return prevCount + 1;
          } else {
            clearInterval(intervalId);
            return prevCount;
          }
        });
      }, 50); // Adjust the interval speed as needed
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isInViewport, count, number]);

  return (
    <div ref={counterRef} className={BASE_CLASSNAME} >
      <div className={`${BASE_CLASSNAME}_count`}>
        <span>
          <div className="counter-item">
            <strong>
              {`${count} `}
            </strong>
            <span> +</span>
          </div>
        </span>
        <IMG 
          useRawImgTag
          src={image}
          imageClasses={`${BASE_CLASSNAME}_count_img`}
        />
      </div>
      <div className={`${BASE_CLASSNAME}_title`}>
        <h4 className="funfact-title">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Counter;
