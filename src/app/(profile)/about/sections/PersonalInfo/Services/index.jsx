
import Link from "next/link";
import React from "react";

const Services = ({
    ServiceName ="",
    ServiceImage= "",
}) => {

  return (
    <>
      <Link href='/' className="service-hover-item">
        {ServiceName} <span></span>
        <div
          className="service-hover-bg"
          style={{ backgroundImage: `url(${ServiceImage})` }}
        ></div>
      </Link>
    </>
  );
};

export default Services;
