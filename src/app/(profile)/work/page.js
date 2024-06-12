import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import WorkItem from "./WorkItem";
//data json
import workData from "../../../data/work.page.json";

//TODO:: The child page of work route
const Work = () => {
  const { technologies, projectList, hero } = workData;
  return (
    <>
      <Hero data={hero} />
      <WorkItem data={projectList} />
      <BrandButton data={technologies} />
    </>
  );
};

export default Work;
