"use client";
import React, { useState } from "react";
import contact from "../../../../../../../data/contact.page.json";
import SectionBox from "@/app/components/SectionBox";

const ContactBrand = ({ label, labelText, labelClass, onClick }) => {
  return (
    <>
      <label htmlFor={label} className={labelClass} onClick={onClick}>
        {labelText}
      </label>
      <input type="radio" id={label} value={labelText} />
    </>
  );
};

const ContactBuget = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div
        className="contact-category-wrapper"
        style={{ paddingBottom: "50px" }}
      >
        <SectionBox
          title={contact.contactbuget.title}
          containerClass="contact-category-title"
        />
        {contact.contactbuget.options.map((item, index) => (
          <ContactBrand
            key={index}
            label={item.label}
            labelText={item.value}
            labelClass={`contact-category-btn ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ContactBuget;
