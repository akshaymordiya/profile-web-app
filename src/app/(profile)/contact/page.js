import React from "react";
import "./page.scss";
import Navbar from "@/app/components/Navbar";
import FooterService from "@/app/components/Footerservice";
import CustomCursor from "@/app/components/MouseCursor";
import Hero from "./Hero";
import ContactCategory from "./Client/ContactCategory";
import ContactForm from "./ContactForm";

//TODO:: The child page of contact route
const Contact = () => {
  // const BASE_CLASSNAME = "contact-area";
  return (
    <>
      <Navbar />
      <Hero />
      <ContactCategory />
      <ContactForm />
      <FooterService />
      <CustomCursor />
    </>
  );
};

export default Contact;
