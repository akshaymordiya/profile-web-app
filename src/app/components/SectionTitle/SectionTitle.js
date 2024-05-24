"use client";

import React from "react";

const SectionTitle = ({
  interClass = "",
  title = "",
  Icon = "",
  para = "",
}) => {
  return (
    <>
      <h4 className={interClass}>
        <span>{Icon}</span>
        {title}
      </h4>
      <p>{para}</p>
    </>
  );
};

export default SectionTitle;
