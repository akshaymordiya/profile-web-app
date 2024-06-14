import React from "react";
import ContactCategory from "./sections/ContactCategory/Client/ContactCategory";
import ContactForm from "./sections/ContactForm";
import Hero from "./sections/Hero";
import contactData from "../../../data/contact.page.json";
export const metadata = {
  title: {
    absolute: "Contact",
  },
};

const Contact = () => {
  const { hero, category, requestForm } = contactData;
  return (
    <React.Fragment>
      <Hero data={hero} />
      <ContactCategory data={category} />
      <ContactForm data={requestForm} />
    </React.Fragment>
  );
};

export default Contact;
