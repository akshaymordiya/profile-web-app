import React from "react";

import BrandButton from "@/app/components/Brand";
//sections
import Hero from "./sections/Hero";
import Text from "./sections/Text";
import Skills from "./sections/Skills";
import CounterBox from "./sections/CounterBox";
import AwardArea from "./sections/AwardArea";
import aboutData from "../../../data/about.page.json";

export const metadata = {
  title: {
    absolute: "About",
  },
};

const About = () => {
  const {
    hero,
    aboutMe,
    counter,
    awards,
    technologies
  } = aboutData
  return (
    <React.Fragment>
      <Hero data={hero} />
      <Text data={aboutMe} />
      <Skills data={aboutMe} />
      <CounterBox data={counter} />
      <AwardArea data={awards} />
      <BrandButton data={technologies} />
    </ React.Fragment>
  );
};

export default About;
