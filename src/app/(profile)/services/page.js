import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import Skills from "./sections/Serviceskill";
import Testimonial from "./sections/Testimonial";
import Servicees from "./sections/Services";
import Prices from "./sections/Prices";
function Services() {
  return (
    <>
      <main>
        <Hero />
        <Servicees />
        <Skills />
        <Testimonial />
        <Prices />
        <BrandButton />
      </main>
    </>
  );
}

export default Services;
