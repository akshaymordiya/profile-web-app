import React from "react";
import Hero from "./sections/Hero";
import contactData from "../../../data/contact.page.json";
import Form from "./sections/Form";

const Contact = () => {
  const { hero, form } = contactData;
  return (
    <React.Fragment>
      <Hero data={hero} />
      <Form data={form} />
    </React.Fragment>
  );
};

export default Contact;
