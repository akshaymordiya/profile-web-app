'use client'
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const BackToTop = () => {
 
  return (
    <>
      <ScrollToTop smooth style={{height:"44px", width:"44px", borderRadius:"50%",boxShadow:"0 8px 16px rgba(3,4,28,.3)"}} />
    </>
  );
};

export default BackToTop;
