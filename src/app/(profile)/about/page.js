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
<<<<<<< HEAD
  const { hero, aboutMe, counter, awards, technologies } = aboutData;
=======
  const {
    hero,
    aboutMe,
    counter,
    awards
  } = aboutData
>>>>>>> 6c22594bda1e0e9d33c22c4bf4c860a0df6dd7e2
  return (
    <React.Fragment>
      <Hero data={hero} />
      <Text data={aboutMe} />
      <Skills data={aboutMe} />
      <CounterBox data={counter} />
      <AwardArea data={awards} />
<<<<<<< HEAD
      <BrandButton data={technologies} />
    </React.Fragment>
=======
      <BrandButton />
    </ React.Fragment>
>>>>>>> 6c22594bda1e0e9d33c22c4bf4c860a0df6dd7e2
  );
};

export default About;
