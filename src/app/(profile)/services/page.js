import React from "react";

//sections
import Hero from "./sections/Hero";
import Skills from "./sections/Serviceskill";
import Testimonial from "./sections/Testimonial";
import Service from "./sections/Services";
import Prices from "./sections/Prices";

//components
import BrandButton from "@/app/components/Brand";

//data
import serviceData from "../../../data/service.page.json";

function Services() {
  const {
    hero,
    services,
    skills,
    feedbacks,
    prices
  } = serviceData

  return (
   <React.Fragment>
      <Hero data={hero} />
      <Service data={services} />
      <Skills data={skills} />
      <Testimonial data={feedbacks} />
      <Prices data={prices} />
      <BrandButton />
    </React.Fragment>
  );
}

export default Services;
