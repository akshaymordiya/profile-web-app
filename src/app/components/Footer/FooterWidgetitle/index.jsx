import Link from "next/link";
import React from "react";

const FooterwidgetTitle = ({ title = "", parag = "", parentclass = "" }) => {
  return (
    <>
      <div className={parentclass}>
        <Link href="/" target="_blank">
          {title}
          <span></span>
          <br />
          {parag}
        </Link>
      </div>
    </>
  );
};

export default FooterwidgetTitle;
