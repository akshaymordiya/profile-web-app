'use client'
import React, { useState } from "react";
import "./index.scss";

const ContactBrand = ({ label, labelText, labelClass, onClick}) => {
  return (
    <>
    <label htmlFor={label} className={labelClass} onClick={onClick} >
      {labelText}
    </label>
    <input type="checkbox" id={label} value={labelText} />
    </>
  );
};

const ContactCategory = () => {
  const [activeIndex, setActiveIndex] = useState([]); 

  const handleClick = (index) => {
    // setActiveIndex(index);
    const newActiveIndices = [...activeIndex]; // Copy the current state
    if (activeIndex.includes(index)) { // Check if already active
      newActiveIndices.splice(activeIndex.indexOf(index), 1); // Remove
    } else {
      newActiveIndices.push(index); // Add
    }
    setActiveIndex(newActiveIndices); 
  };
 

  const data = [
    {
      id: 1,
      label: "branding",
      value: "branding",
    },
    {
      id: 2,
      label: "web_design",
      value: "Web Design",
    },
    {
      id: 3,
      label: "app_design",
      value: "App Design",
    },
    {
      id: 4,
      label: "logo",
      value: "Logo",
    },
    {
      id: 5,
      label: "digital_marketing",
      value: "Digital Marketing",
    },
    {
      id: 6,
      label: "android_development",
      value: "Android Development",
    },
    {
      id: 7,
      label: "ios_development",
      value: "iOS Development",
    },
    {
      id: 6,
      label: "design_concept",
      value: "Design Concept",
    },
    {
      id: 4,
      label: "others",
      value: "Other",
    },
  ];

  return (
    <>
       <div className="contact-category" style={{ marginBottom: "85px" }}>
      <h4 className="contact-category-title">I'm interested in...</h4>
      <div className="contact-category-wrapper">
        {data.map((item, index) => (
          <ContactBrand
            key={index}
            label={item.label}
            labelText={item.value}
            labelClass={`contact-category-btn ${activeIndex.includes(index) ? 'active' : ''}`}
            onClick={()=> handleClick(index)}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ContactCategory
