import React from "react";
import Link from "next/link";

import "./index.scss";

const CTA = ({
  linkText = "",
  linkClass = "",
  linkHref = "/",
  icon: Icon,
  iconProps = {},
}) => {
  const { className = "" } = iconProps;
  return (
    <Link
      className={`
        btn-white
        ${linkClass}
      `}
      href={linkHref}
    >
      <div>
        <span className="text">
          {linkText}
          {Icon && <Icon className={`pencil ${className}`} {...iconProps} />}
        </span>
      </div>
    </Link>
  );
};

export default CTA;
