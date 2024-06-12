import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import Skills from "./sections/Serviceskill";
import Testimonial from "./sections/Testimonial";
import Servicees from "./sections/Services";
import Prices from "./sections/Prices";
import serviceData from "../../../data/service.page.json";

function Services() {
  const { hero, services, skillinfo, testimonialinfo, price } = serviceData;
  return (
    <>
      <React.Fragment>
        <Hero data={hero} />
        <Servicees data={services} />
        <Skills data={skillinfo} />
       <Testimonial data={testimonialinfo} />
         {/*<Prices data={price} /> */}
        <BrandButton />
      </React.Fragment>
    </>
  );
}

export default Services;
