import React from "react";
import Link from "next/link";

import "./index.scss";

const CTA = ({
  linkText = "",
  linkClass = "",
  linkHref = "/",
  icon: Icon,
  iconProps = {},
  btn_color = 'btn-white',
  isDownload = false,
}) => {
  const { className = "" } = iconProps;
  return (
    <Link
      className={`
        ${btn_color}
        ${linkClass}
      `}
      href={linkHref}
      download={isDownload}
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
