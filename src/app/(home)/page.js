import React from "react";
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";
import Projects from "./sections/Projects";

//data
import homeData from "../../data/home.page.json";

export default function Home() {

  const {
    hero,
    services,
    projects
  } = homeData

  return (
    <React.Fragment>
      <Hero data={hero} />
      <Services data={services} />
      <Projects data={projects} />
    </React.Fragment>
  );
}
