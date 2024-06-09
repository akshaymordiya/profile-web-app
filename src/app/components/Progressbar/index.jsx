'use client';
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

const BASE_CLASSNAME = "progress-bar_container";

const ProgressBar = ({
  label = "",
  progressValue = ""
}) => {
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className={BASE_CLASSNAME} ref={progressRef}>
      <div className={`${BASE_CLASSNAME}_label label-width-${progressValue}`}>
        <label>{label}</label>
        <span>{progressValue}%</span>
      </div>
      <div className={`${BASE_CLASSNAME}_progress-line`}>
        <div
          className={`${BASE_CLASSNAME}_progress-line-value ${isVisible ? `progress-${progressValue}` : ''}`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
