import React from "react";
import ContactCategory from "./sections/ContactCategory/Client/ContactCategory";
import ContactForm from "./sections/ContactForm";
import Hero from "./sections/Hero";
const Contact = () => {
  return (
    <>
      <Hero />
      <ContactCategory />
      <ContactForm />
    </>
  );
};

export default Contact;
