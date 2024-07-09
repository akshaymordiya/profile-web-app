import React from "react";
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";
import Projects from "./sections/Projects";

//data
import homeData from "../../data/home.page.json";
import { work as projects } from "../../data/work.page.json";

export default function Home() {

  const {
    hero,
    services,
    projects: projectSection
  } = homeData

  const {
    left = [],
    right = []
  } = projects

  return (
    <React.Fragment>
      <Hero data={hero} />
      <Services data={services} />
      <Projects data={{
        secData: projectSection,
        list: [...left, ...right].filter(w => w.isFeatured)
      }} />
    </React.Fragment>
  );
}
