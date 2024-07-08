"use client";
import React from "react";
import Hero from "./sections/Hero";
import contactData from "../../../data/contact.page.json";
<<<<<<< HEAD
export const metadata = {
  title: {
    absolute: "Contact",
  },
};
=======
import Form from "./sections/Form";
>>>>>>> 6c22594bda1e0e9d33c22c4bf4c860a0df6dd7e2

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
