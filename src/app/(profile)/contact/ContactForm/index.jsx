"use client";
// import CTA from "@/app/components/CTA";
import SectionTitle from "@/app/components/SectionTitle";
import React, { useState } from "react";
import contact from "../../../../data/contact.page.json";
import ContactBuget from "./Client/ContactBuget";
import Grid from "@/app/components/Grid";

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      const firstInvalidField = event.target.querySelector(':invalid');
      firstInvalidField.focus();
      setValidated(true);
      return;
    }
    setValidated(true);
  };
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\\]\\\\.,;:\s@"]+(\.[^<>()[\\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleBlur = (event) => {
    // Trigger validation on input blur (focus out)
    const targetField = event.target.id;
    const targetValue = event.target.value;

    if (targetField === "name" && targetValue === "") {
      setValidated(true); 
    } else if (
      targetField === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setValidated(true);
    }
   
  };
  const BASE_CLASSNAME = "contact-wrapper";
  return (
    <>
      <div className={`${BASE_CLASSNAME}`}>
        <div className="container">
          <form
            noValidate
            validated={validated}
            onSubmit={(event) => handleSubmit(event)}
          >
            <h4 className="contact-category-title">
              {contact.requestForm.title}
            </h4>
            <Grid classNames={`${BASE_CLASSNAME}_grid`}>
              <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={6}>
                <label htmlFor="name" className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    isInvalid={validated && name === ""}
                    onBlur={handleBlur}
                  />
                  <span className="float-label">Name</span>
                  {validated && name === "" && (
                    <div className="error">Enter your name.</div>
                  )}
                </label>
              </Grid.Item>
              <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={6}>
                <label htmlFor="name" className="form-group">
                  <input type="text" id="name" placeholder="Company" />
                  <span className="float-label">Company</span>
                </label>
              </Grid.Item>
              <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
                <label htmlFor="email" className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    isInvalid={validated && email === ""}
                    onBlur={handleBlur}
                  />
                  <span>Email</span>
                  {validated &&  !validateEmail(email) && (
                    <div className="error">Enter your email.</div>
                  )}
                </label>
              </Grid.Item>

              <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
                <label htmlFor="comment" className="form-group">
                  <textarea
                    type="text"
                    id="comment"
                    placeholder="Comment"
                    onChange={(e) => setComment(e.target.value)}
                    required
                    isInvalid={validated && comment === ""}
                    onBlur={handleBlur}
                    style={{height:"170px"}}
                  />
                  <span>Comment</span>
                  {validated && comment === "" && (
                    <div className="error">Enter your comment.</div>
                  )}
                </label>
              </Grid.Item>
            </Grid>

            <div className="contact-category">
              <SectionTitle
                title="Project budget (USD)"
                interClass="contact-category-title"
              />
              <ContactBuget />
            </div>
            <div className="footer-btn">
              <button type="submit" className="btn-black-xl">
                {contact.button.text}
              </button>
              {/* <CTA
                type="submit"
                linkClass="btn-black-xl"
                linkHref="/contact"
                linkText={contact.button.text}
              /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
