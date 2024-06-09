import React from "react";
import { renderIconComponent } from "@/Icons"

import "./index.scss";

const BASE_CLASSNAME = "section_boxes"

const SectionBox = ({
  title = "",
  icon = "",
  iconProps = {},
  containerClass = "",
  children
}) => {


  let BoxIcon = null

  if(icon !== ""){
    const hasIconProps = Object.keys(iconProps).length > 0;
    if(hasIconProps){
      const IconCmp = renderIconComponent(icon, true);

      BoxIcon = <IconCmp {...iconProps} />
    }

    BoxIcon = renderIconComponent(icon)
  }

  return (
    <div className={`${BASE_CLASSNAME} ${containerClass}`}>
      <div
        className={`${BASE_CLASSNAME}_title`}
      >
        {BoxIcon !== null && BoxIcon}
        <h4>{title}</h4>
      </div>
      <div className={`${BASE_CLASSNAME}_content`}>
        {children}
      </div>
    </div>
  );
};

export default SectionBox;
