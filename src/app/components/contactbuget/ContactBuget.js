"use client";
import React, { useState } from "react";
import "./contactbuget.scss";
import CTA from "../CTA";

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

  const data = [
    {
      id: 1,
      label: "10_20k",
      value: "10-20k",
    },
    {
      id: 2,
      label: "30_40k",
      value: "30-40k",
    },
    {
      id: 3,
      label: "40_50k",
      value: "40-50K",
    },
    {
      id: 4,
      label: "50_100K",
      value: "50-100K",
    },
    {
      id: 5,
      label: ">_100K",
      value: "> 100K",
    },
  ];

  return (
    <>
      <div className="contact-category" style={{ marginBottom: "45px" }}>
        <h4 className="contact-category-title">Project budget (USD)</h4>
        <div className="contact-category-wrapper">
          {data.map((item, index) => (
            <ContactBrand
              key={index}
              label={item.label}
              labelText={item.value}
              labelClass={`contact-category-btn ${activeIndex === index? 'active' : ''}`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="footer-btn">
          <CTA
            linkClass="btn-black-xl"
            linkHref="/contact"
            linkText="Discuss Project"
          />
        </div>
      </div>
    </>
  );
};

export default ContactBuget;
