import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import CustomCursor from "@/app/components/MouseCursor";
import Aos from "@/app/components/AOS";
import "aos/dist/aos.css";
import Counter from "./Client/CounterUp";
import AwardArea from "./AwardArea";
import PersonalInfo from "./PersonalInfo";
import Footer from "./Footer";
import BrandButton from "@/app/components/Brand";
import Hero from "./Hero";

const About = () => {
  return (
    <>
      <Aos />
      <Navbar />
      <div id="smooth-content">
        <main>
          <Hero />
          <PersonalInfo />
          <Counter />
          <AwardArea />
          <BrandButton />
          <Footer/>
        </main>
      </div>
      <CustomCursor />
    </>
  );
};

export default About;
