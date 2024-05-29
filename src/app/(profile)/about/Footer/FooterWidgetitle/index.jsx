import React from "react";

const FooterwidgetTitle = ({ title = "", parag = "", parentclass = "" }) => {
  return (
    <>
      <div className={parentclass}>
        <a href="#" target="_blank">
          {title}
          <span></span>
          <br />
          {parag}
        </a>
      </div>
    </>
  );
};

export default FooterwidgetTitle;
