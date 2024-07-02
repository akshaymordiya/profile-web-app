import React from "react";

import "./index.scss";

const BASE_CLASSNAME = "charactor-wrapper";

const AnimatedCharactors = ({
  charactors = "",
  capitlized = true,
  lowercase = false,
  uppercase = false,
  leftSpaceOnLastCharactor = false,
  wrapperClass = "",
  charactorClass = ""
}) => {

  let word = charactors

  if(capitlized){
    word = word.replace(/\b\w/g, char => char.toUpperCase());
  } else if(lowercase) {
    word = word.toLowerCase();
  } else if(uppercase) {
    word = word.toUpperCase();
  }

  return (
    <div
      className={`${BASE_CLASSNAME} ${wrapperClass} ${leftSpaceOnLastCharactor ? "space-end-x" : ''}`}
  >
    {word.split('').map((charactor, index) => (
      <div 
        key={`${charactor}-${index}`} className={`charactor ${charactorClass}`}
      >
        {charactor}
      </div>
    ))}
  </div>
  )
}

export default AnimatedCharactors