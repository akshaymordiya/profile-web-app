'use client';
import React from "react";

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
