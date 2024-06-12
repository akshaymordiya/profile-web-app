import React from "react";
//style scss
import "./index.scss";

const InnerServiceList = ({ listName = "", listclass = "" }) => {
  return (
    <>
      <div className="inner-service-list-wrap">
        <div className={listclass}>
          <span>{listName}</span>
        </div>
      </div>
    </>
  );
};

export default InnerServiceList;
