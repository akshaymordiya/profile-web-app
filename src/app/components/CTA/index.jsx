import React from "react";
import Link from "next/link";

import "./index.scss";

const CTA = ({
  linkText = "",
  linkClass = "",
  linkHref = "/assets/resume/akshay-resume-23.pdf",
  icon: Icon,
  iconProps = {},
  btn_color = 'btn-white',
  isDownload = false,
}) => {
  const { className = "" } = iconProps;
  return (
    <a
      className={`
        ${btn_color}
        ${linkClass}
      `}
      href={linkHref}
      target={isDownload ? '_blank' : '_self'}
      rel={isDownload ? 'noopener noreferrer' : ''}
    >
      <div>
        <span className="text">
          {linkText}
          {Icon && <Icon className={`pencil ${className}`} {...iconProps} />}
        </span>
      </div>
    </a>
  );
};

export default CTA;
