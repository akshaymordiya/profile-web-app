"use client";
import React from "react";

//sections
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";

import HomeFooter from "@/components/HomeFooter";
import Projects from "./sections/Projects";

import "../globals.css";

export default function Home() {
  return (
     <div id="home-content">
        <main>
          <Hero />
          <Services />
          <Projects />
        </main>
        <HomeFooter />
      </div>
  );
}
