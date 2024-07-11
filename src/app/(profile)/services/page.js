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
//defaultMetadata
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: 'Services - Akshay Moradiya',
  description: 'Discover the full-stack development services offered by Akshay Moradiya, including frontend and backend development, cloud deployment, and more.',
};

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
