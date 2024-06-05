import React from "react";
import "./page.scss";
import Counter from "./Client/CounterUp";
import AwardArea from "./AwardArea";
import PersonalInfo from "./PersonalInfo";
import Footer from "./Footer";
import BrandButton from "@/app/components/Brand";
import Hero from "./Hero";

const About = () => {
  return (
    <>
        <main>
          <Hero />
          <PersonalInfo />
          <Counter />
          <AwardArea />
          <BrandButton />
          <Footer/>
        </main>
      
    </>
  );
};

export default About;
