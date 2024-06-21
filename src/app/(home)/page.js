import React from "react";
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <div id="home-content">
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
    </div>
  );
}
