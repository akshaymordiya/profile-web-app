"use client";
import React from "react";
//sections
import Hero from "@/app/(home)/sections/Hero";
import Services from "@/app/(home)/sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
// import "../globals.css";
import Aos from "../components/AOS";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div id="home-content">
      <Aos />
      <main>
        <Hero />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
