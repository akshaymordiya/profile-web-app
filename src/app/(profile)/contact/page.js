import React from "react";
import Hero from "./sections/Hero";
import contactData from "../../../data/contact.page.json";
import Form from "./sections/Form";
//defaultMetadata
import { defaultMetadata } from "@/config/metadata";

export const metadata = {
  ...defaultMetadata,
  title: 'Contact - Akshay Moradiya',
  description: 'Get in touch with Akshay Moradiya for your full-stack development needs. Reach out via email for inquiries and project discussions.',
};

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
