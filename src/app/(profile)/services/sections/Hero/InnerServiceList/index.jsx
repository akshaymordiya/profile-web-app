import React from "react";
//components
import Fade from "@/app/components/Fade";
//style scss
import "./index.scss";

const BASE_CLASSNAME = "inner-service-list-wrap";

const InnerServiceList = ({
  listName = "",
  listItemClass = "",
  animationName = "",
  animationduration = "",
  animationdelay = "",
}) => {
  return (
    <Fade
      animationType={animationName}
      duration={animationduration}
      delay={animationdelay}
    >
      <div className={BASE_CLASSNAME}>
        <div
          className={`${BASE_CLASSNAME}_list-item ${listItemClass}`}
        >
          <span>{listName}</span>
        </div>
      </div>
    </Fade>
  );
};

export default InnerServiceList;
