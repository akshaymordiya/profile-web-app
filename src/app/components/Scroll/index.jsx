import React from 'react'
import Link from 'next/link'

const BASE_CLASSNAME = "scroll_pointer";

import "./index.scss";

const Scroll = ({
  scrollHref = "#",
  scrollClass = "",
  text = "",
  textClass = "",
  icon : Icon = undefined,
  iconProps = {}
}) => {

  const { className = ""} = iconProps
  
  return (
    <Link
      href={scrollHref}
      className={`${BASE_CLASSNAME} ${scrollClass}`}
    >
      <span className={`text ${textClass}`}>{text}</span>
      {Icon && (
        <span>
          <Icon className={`icon ${className}`} {...iconProps} />
        </span>
      )}
    </Link>
  )
}

export default Scroll