import React from "react";

const Experience = ({
    year ="",
    title = "",
    subtitle=""
}) => {
    
  return (
    <>
      <div className="personal-info-exprience-box d-flex align-items-start ">
        <span className="personal-info-exprience-length">{year}</span>
        <div className="personal-info-exprience-content">
          <h4 className="personal-info-exprience-title">{title}</h4>
          <span>{subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default Experience;
