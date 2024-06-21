import React from "react";

//components
import HorizontalCarousel from "../HorizontalScroll";
import IMG from "../IMG";
//data
import data from "../../../data/technologies.json";

import "./index.scss";

const BASE_CLASSNAME = "technologies_container"

const BrandButton = () => {
  return (
    <section className={BASE_CLASSNAME}>
      <HorizontalCarousel
        items={data.map(d => (
          <div key={d.name} className={`${BASE_CLASSNAME}_tech-item-content`}>
            <span>{d.name}</span>
            <IMG
              src={d.img}
              useRawImgTag
              imageClasses="tech_img"
              useContainer
              containerClasses="tech_img_wrapper"
            />
          </div>  
        ))}
        itemClass={`${BASE_CLASSNAME}_tech-item`}
      >
      </HorizontalCarousel>
    </section>
  );
};

export default BrandButton;
