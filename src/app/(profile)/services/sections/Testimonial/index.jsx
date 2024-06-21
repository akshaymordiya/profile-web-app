import React from "react";
import SlideNav from "./Client/Slidernav";
//style scss
import "./index.scss";

const BASE_CLASSNAME = "testimonial_container"

const Testimonial = ({
  data
}) => {
  return (
    <section className={BASE_CLASSNAME} >
      <SlideNav data={data} />
    </section>
  );
};

export default Testimonial;
