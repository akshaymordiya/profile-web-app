
import React from "react";

import "./index.scss";

const BASE_CLASSNAME = "service-box";

const Services = ({
    ServiceName ="",
    ServiceImage= "",
}) => {
  return (
    <a className={BASE_CLASSNAME}>
      {ServiceName} <span></span>
      <div
        className="service-hover-bg"
        style={{ backgroundImage: `url(${ServiceImage})` }}
      ></div>
    </a>
  );
};

export default Services;
