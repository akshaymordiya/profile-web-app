import React from "react";

const SectionTitle = ({
  interClass = "",
  title = "",
  Icon = "",
  para = "",
  animationName="",
  animationduration="",
  animationdelay=""
}) => {
  return (
    <>
      <h4 className={interClass} data-aos={animationName} data-aos-duration={animationduration} data-aos-delay={animationdelay}>
        <span>{Icon}</span>
        {title}
      </h4>
      <p data-aos={animationName} data-aos-duration={animationduration} data-aos-delay={animationdelay}>{para}</p>
    </>
  );
};

export default SectionTitle;
