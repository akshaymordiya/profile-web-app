import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import WorkList from "./sections/Work";
//data json
import workData from "../../../data/work.page.json";

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
