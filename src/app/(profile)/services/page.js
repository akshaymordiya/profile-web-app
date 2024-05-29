import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import BrandButton from "@/app/components/Brand";
import CustomCursor from "@/app/components/MouseCursor";
import Aos from "@/app/components/AOS";
import Hero from "./Hero";
import Servicees from "./Services";
import Skills from "./Serviceskill";
import Testimonial from "./Testimonial";
import Prices from "./Prices";
import FooterService from "@/app/components/Footerservice";

function Services() {
  // const BASE_CLASSNAME = "services-container";

  // const desingData = [
  //   {
  //     title: "Web Design",
  //     iconleft: <ViewQuiltOutlinedIcon />,
  //   },
  //   {
  //     title: "UI/UX Design",
  //     iconleft: <VerticalSplitOutlinedIcon />,
  //   },
  //   {
  //     title: "Mobile App Design",
  //     iconleft: <AodOutlinedIcon />,
  //   },
  //   {
  //     title: "Branding",
  //     iconleft: <AndroidOutlinedIcon />,
  //   },
  // ];
  // const devData = [
  //   {
  //     title: "Web Development",
  //     iconleft: <AutoAwesomeMotionOutlinedIcon />,
  //   },
  //   {
  //     title: "Software Development",
  //     iconleft: <CoronavirusOutlinedIcon />,
  //   },
  //   {
  //     title: "CMS Development",
  //     iconleft: <AodOutlinedIcon />,
  //   },
  //   {
  //     title: "Front-End Development",
  //     iconleft: <AndroidOutlinedIcon />,
  //   },
  // ];

  return (
    <>
      <Aos />
      <Navbar />
      <main>
        <Hero />
        <Servicees />
        <Skills />
        <Testimonial />
        <Prices />
        <BrandButton />
        <FooterService />
      </main>
      <CustomCursor />
    </>
  );
}

export default Services;
