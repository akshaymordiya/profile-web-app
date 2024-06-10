import React from "react";

//components
import HorizontalCarousel from "../HorizontalScroll";

import "./index.scss";

const BASE_CLASSNAME = "technologies_container"

const BrandButton = ({
  data = []
}) => {
  return (

    <section className={BASE_CLASSNAME}>
      <HorizontalCarousel
        items={data.map(d => (<span>{d}</span>))}
        itemClass={`${BASE_CLASSNAME}_tech-item`}
      >
      </HorizontalCarousel>
    </section>
  );
};

export default BrandButton;
