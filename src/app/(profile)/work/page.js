import Navbar from "@/app/components/Navbar";
import React from "react";
import "./page.scss";
import BrandButton from "@/app/components/Brand";
import FooterService from "@/app/components/Footerservice";
import CustomCursor from "@/app/components/MouseCursor";
import Aos from "@/app/components/AOS";
import 'aos/dist/aos.css';
import Hero from "./Hero";
import WorkItem from "./Client/WorkItem";

//TODO:: The child page of work route
const Work = () => {
  return (
    <>
    <Aos />
      <Navbar />
      <Hero />
      <WorkItem />
      <BrandButton />
      <FooterService />
      <CustomCursor />
    </>
  );
};

export default Work;
