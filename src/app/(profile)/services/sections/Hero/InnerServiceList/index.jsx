import React from "react";
//style scss
import './index.scss';

const InnerServiceList = ({
  listName = "",
  listclass = "",
  animationName = "",
  animationduration = "",
  animationdelay = "",
}) => {
  return (
    <>
      <div className="inner-service-list-wrap">
        <div
          className={listclass}
          data-aos={animationName}
          data-aos-duration={animationduration}
          data-aos-delay={animationdelay}
        >
          <span>{listName}</span>
        </div>
      </div>
    </>
  );
};

export default InnerServiceList;
