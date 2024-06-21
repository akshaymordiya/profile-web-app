import Link from "next/link";
import React from "react";
//style scss
import "./index.scss";

const ServiceCategory = ({
  serviceTitle = "",
  serviceHref = "/",
  serviceIconLeft = Icon,
  serviceIconRight = Icon,
}) => {
  return (
    <div className="inner-service-category">
      <Link className="inner-service-content" href={serviceHref}>
        <div className="inner-service-category-content">
          <span>{serviceIconLeft}</span>
          <span>{serviceTitle}</span>
        </div>
        <div className="inner-service-category-link">
          <span>{serviceIconRight}</span>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCategory;
