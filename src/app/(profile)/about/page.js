import React from "react";
import AwardArea from "./sections/AwardArea";
import PersonalInfo from "./sections/PersonalInfo";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import Counter from "./sections/Counter/Client/CounterUp";
const About = () => {
  return (
    <>
      <Hero />
      <PersonalInfo />
      <Counter />
      <AwardArea />
      <BrandButton />
    </>
  );
};

export default About;
