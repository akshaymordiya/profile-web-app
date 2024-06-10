
import React from "react";
import BrandButton from "@/app/components/Brand";
import Hero from "./sections/Hero";
import WorkItem from "./WorkItem";
import "../../../styles/global.scss";

//TODO:: The child page of work route
const Work = () => {
  return (
    <>
      <Hero />
      <WorkItem />
      <BrandButton />
    </>
  );
};

export default Work;
