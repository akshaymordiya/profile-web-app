'use client';
import React from 'react';
// import Lottie from "lottie-react";

import "./index.scss";
import Lottie from 'lottie-react';

const BASE_CLASSNAME = "animation_wrapper"

const Animation = ({
  className = "",
  loop = false,
  autoplay = false,
  animationData = {}
}) => {
  return (
    <Lottie 
      animationData={animationData}
      loop={loop}
      autoPlay={autoplay}
      className={`${BASE_CLASSNAME} ${className}`}
    ></Lottie>
  );
}

export default Animation