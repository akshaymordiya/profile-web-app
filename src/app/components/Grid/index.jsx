import React from 'react';
import "./index.scss";

const BASE_CLASSNAME = "grid-container";

const Grid = ({
  children,
  classNames = ""
}) => {
  return (
    <div className={`${BASE_CLASSNAME} ${classNames}`}>   {children}
    </div>
  )
}

Grid.Item = ({
  children,
  xs = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xlg = undefined,
  itemClass = ""
}) => {
  const getClassNames = () => {
    const breakpoints = {
      'xs': xs || 12,
      'sm': sm || xs,
      'md': md || sm || xs,
      'lg' : lg || md || sm ||xs,
      'xlg': xlg || lg || md || sm ||xs
    };

    return Object.entries(breakpoints).reduce((cls, [key, breakpoint]) => {
      if(breakpoint){
        cls += ` ${key}-${breakpoint}`;
      }

      return cls;
    }, '');
  }

  return (
    <div className={`grid-item ${getClassNames()} ${itemClass}`}>
      {children}
    </div>
  );
}

export default Grid