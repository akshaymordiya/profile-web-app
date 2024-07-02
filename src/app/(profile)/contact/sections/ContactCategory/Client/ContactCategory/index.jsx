"use client";
import React, { useState } from "react";
import "./index.scss";
import Grid from "@/app/components/Grid";
import SectionBox from "@/app/components/SectionBox";

const ContactBrand = ({ label, labelText, labelClass, onClick }) => {
  return (
    <>
      <label htmlFor={label} className={labelClass} onClick={onClick}>
        {labelText}
      </label>
      <input type="checkbox" id={label} value={labelText} />
    </>
  );
};

const ContactCategory = ({ data = {} }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const handleClick = (index) => {
    const newActiveIndices = [...activeIndex];
    if (activeIndex.includes(index)) {
      newActiveIndices.splice(activeIndex.indexOf(index), 1);
    } else {
      newActiveIndices.push(index);
    }
    setActiveIndex(newActiveIndices);
  };

  return (
    <div className="contact-content">
      <Grid classNames="contact-category">
        <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
          <SectionBox
            title={data.title}
            containerClass="contact-category-title"
          />
          <div className="contact-category-wrapper">
            {data.categories.map((item, index) => (
              <ContactBrand
                key={index}
                label={item.label}
                labelText={item.value}
                labelClass={`contact-category-btn ${
                  activeIndex.includes(index) ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default ContactCategory;