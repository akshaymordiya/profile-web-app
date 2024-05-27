import React from 'react';
import SocialLinksData from "../../../data/socialLinks.json";
import "./index.scss";
import Link from 'next/link';

const SocialLinks = ({
  wrapperClasses = "",
  linkClasses = ""
}) => {
  return (
    <div className={`social-wrap ${wrapperClasses}`}>
      {SocialLinksData.map(link => (
        <Link
          key={link.name}
          target='_blank'
          href={link.link}
          className={`link ${linkClasses}`}
        >{link.name}</Link>
      ))}
    </div>
  )
}

export default SocialLinks