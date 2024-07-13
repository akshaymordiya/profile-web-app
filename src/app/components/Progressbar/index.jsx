'use client';
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

const BASE_CLASSNAME = "progress-bar_container";
const colorCodes = [
  "#FF6464",
  "#9272D4",
  "#5185D4",
  "#CA56F2"
]

const getBackgroundColor = (index) => {
  return colorCodes[index % colorCodes.length];
}

const ProgressBar = ({
  index,
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
          style={{ backgroundColor: getBackgroundColor(index)}}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
