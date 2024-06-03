import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import BrandButton from "@/app/components/Brand";
import CustomCursor from "@/app/components/MouseCursor";
import Aos from "@/app/components/AOS";
import Hero from "./Hero";
import Servicees from "./Services";
import Skills from "./Serviceskill";
import Testimonial from "./Testimonial";
import Prices from "./Prices";
import FooterService from "@/app/components/Footerservice";

function Services() {
  return (
    <>
      <Aos />
      <Navbar />
      <main>
        <Hero />
        <Servicees />
        <Skills />
        <Testimonial />
        <Prices />
        <BrandButton />
        <FooterService />
      </main>
      <CustomCursor />
    </>
  );
}

export default Services;
