'use client'
import React from "react";

const ProgressBar = ({
    label ="",
    ProgressValue="",
    Progressmax =""
}) => {
  return (
    <>
      <div className="progress-bar-wrap">
        <div className="progress-bar-item">
          <label>{label}</label>
          <div className="progress-bar">
            <div className="progress">
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
