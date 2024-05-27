import React from "react";

const Services = ({
    ServiceName ="",
    ServiceImage= "",
}) => {

  return (
    <>
      <a className="service-hover-item">
        {ServiceName} <span></span>
        <div
          className="service-hover-bg"
          style={{ backgroundImage: `url(${ServiceImage})` }}
        ></div>
      </a>
    </>
  );
};

export default Services;
