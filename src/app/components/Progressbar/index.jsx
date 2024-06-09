'use client'
import React from "react";
import 'aos/dist/aos.css';

import "./index.scss";

const BASE_CLASSNAME = "progress-bar_container"

const ProgressBar = ({
    label ="",
    progressValue=""
}) => {
  return (
    <div className={BASE_CLASSNAME}>
      <div className={`${BASE_CLASSNAME}_label-${progressValue}`}>
        <label>{label}</label>
        <span>{progressValue}%</span>
      </div>
      <div className={`${BASE_CLASSNAME}_progress-line`} data-aos="fade-bottom">
        <div className={`${BASE_CLASSNAME}_progress-line-value-${progressValue}`}>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
