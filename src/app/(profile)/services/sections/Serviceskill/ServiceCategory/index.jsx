import Link from "next/link";
import React from "react";
//style scss
import './index.scss'

const BASE_CLASSNAME = 'skill-box-container'

const ServiceCategory = ({
  title = "",
  link = "/",
  iconLeft = Icon,
  iconRight = Icon,
}) => {
  return (
    <Link
      className={`${BASE_CLASSNAME}`}
      href={link}
    > 
      <div className={`${BASE_CLASSNAME}_content`}>
        <span>
          {iconLeft}
        </span>
        <span>{title}</span>
      </div>
      <div className={`${BASE_CLASSNAME}_list`}>
        <span>
          {iconRight}
        </span>
      </div>
    </Link>
  );
};

export default ServiceCategory;
