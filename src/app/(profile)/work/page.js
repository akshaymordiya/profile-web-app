import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import WorkList from "./sections/Work";
//data json
import workData from "../../../data/work.page.json";
//defaultMetadata
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: 'Work - Akshay Moradiya',
  description: 'Explore the portfolio of Akshay Moradiya, showcasing 15+ successfully delivered projects in full-stack development.',
};

//TODO:: The child page of work route
const Work = () => {
  const { work, hero } = workData;
  return (
    <React.Fragment>
      <Hero data={hero} />
      <WorkList data={work} />
      <BrandButton />
    </React.Fragment>
  );
};

export default Work;
