import React from "react";

import BrandButton from "@/app/components/Brand";
//sections
import Hero from "./sections/Hero";
import Text from "./sections/Text";
import Skills from "./sections/Skills";
import CounterBox from "./sections/CounterBox";
import AwardArea from "./sections/AwardArea";
//data
import aboutData from "../../../data/about.page.json";
//defaultMetadata
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: 'About - Akshay Moradiya',
  description: 'Learn more about Akshay Moradiya, a Full-Stack Developer with 5+ years of experience in frontend and backend technologies.',
};

const About = () => {
  const {
    hero,
    aboutMe,
    counter,
    awards
  } = aboutData
  return (
    <React.Fragment>
      <Hero data={hero} />
      <Text data={aboutMe} />
      <Skills data={aboutMe} />
      <CounterBox data={counter} />
      <AwardArea data={awards} />
      <BrandButton />
    </ React.Fragment>
  );
};

export default About;
