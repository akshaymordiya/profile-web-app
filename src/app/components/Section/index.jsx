import React from 'react';
//components
import Fade from '@/app/components/Fade';

import "./index.scss";

const BASE_CLASSNAME = "section"

const Section = ({
  children,
  title,
  text = "",
  addSeprator = false,
  sectionClass = ""
}) => {
  return (
    <section className={`${BASE_CLASSNAME} ${sectionClass}`}>
      {title !== "" && (
        <Fade 
          animationType="slideInLeft" 
          delay={300}
          duration={2}
        >
          <h4 className={`${BASE_CLASSNAME}_title`}>{title}</h4>
        </Fade>
      )}
      <Fade
        animationType="slideInBottom"
        delay={500}
        duration={2}
      >
        <div className={`${BASE_CLASSNAME}_content ${addSeprator ? "seprator" : ""}`}>
          {text !== "" && (
            <p>{text}</p>
          )}
        </div>
      </Fade>
      {children}
    </section>
  )
}

export default Section