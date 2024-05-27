'use client'
import React from "react";
import Aos from "../AOS/aos";
import 'aos/dist/aos.css';

const ProgressBar = ({
    label ="",
    ProgressValue="",
    Progressmax =""
}) => {
  return (
    <>
    <Aos />
      <div className="progress-bar-wrap">
        <div className="progress-bar-item">
          <label>{label}</label>
          <div className="progress-bar" >
            <div className="progress"data-aos="fade-right">
              <div className="progress-barr" style={{ width:  `${Progressmax}` }}>
                <span>{ProgressValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
