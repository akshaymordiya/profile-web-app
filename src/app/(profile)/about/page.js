import React from "react";

import BrandButton from "@/app/components/Brand";
//sections
import Hero from "./sections/Hero";
<<<<<<< HEAD
import Counter from "./sections/Counter/Client/CounterUp";
=======
import Text from "./sections/Text";
import Skills from "./sections/Skills";
import CounterBox from "./sections/CounterBox";
import AwardArea from "./sections/AwardArea";

import aboutData from "../../../data/about.page.json";

>>>>>>> 9d4ff3dab5faf8ad2a9676cc75329af20ce61435
const About = () => {
  const {
    hero,
    aboutMe,
    counter,
    awards,
    technologies
  } = aboutData
  return (
<<<<<<< HEAD
    <>
      <Hero />
      <PersonalInfo />
      <Counter />
      <AwardArea />
      <BrandButton />
    </>
=======
    <React.Fragment>
      <Hero data={hero} />
      <Text data={aboutMe} />
      <Skills data={aboutMe} />
      <CounterBox data={counter} />
      <AwardArea data={awards} />
      <BrandButton data={technologies} />
    </ React.Fragment>
>>>>>>> 9d4ff3dab5faf8ad2a9676cc75329af20ce61435
  );
};

export default About;
