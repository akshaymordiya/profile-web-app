import React from "react";
import "./index.scss";

const BASE_CLASSNAME = "grid-container";

const Grid = ({ children, classNames = "" }) => {
  return <div className={`${BASE_CLASSNAME} ${classNames}`}>{children}</div>;
};

Grid.Item = ({
  children,
  xs = undefined,
  sm = undefined,
  md = undefined,
  lg = undefined,
  xl = undefined,
  xlg = undefined,
  itemClass = "",
  ...props
}) => {
  const getClassNames = () => {
    const breakpoints = {
      xs: xs || 12,
      sm: sm || xs,
      md: md || sm || xs,
      lg: lg || md || sm || xs,
      xl: xl || lg || md || sm || xs,
      xlg: xlg || xl || lg || md || sm || xs,
    };

    return Object.entries(breakpoints).reduce((cls, [key, breakpoint]) => {
      if (breakpoint) {
        cls += ` ${key}-${breakpoint}`;
      }

      return cls;
    }, "");
  };

  return (
    <div className={`grid-item ${getClassNames()} ${itemClass}`} {...props}>
      {children}
    </div>
  );
};

export default Grid;
