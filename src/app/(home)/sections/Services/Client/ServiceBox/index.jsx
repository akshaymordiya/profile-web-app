"use client";
import React, { useRef, useEffect } from 'react';
import homeData  from '../../../../../../data/home.page.json';

import "./index.scss";

function calculateScale(input) {
  // Define the minimum and maximum output values
  const minOutput = 0.85;
  const maxOutput = 0.99;

  // Define the input range where the scaling effect is noticeable
  const minInput = 50;
  const maxInput = 500;

  // If input is less than or equal to the minimum input, return the maximum output
  if (input <= minInput) {
    return maxOutput;
  }

  // If input is greater than or equal to the maximum input, return the minimum output
  if (input >= maxInput) {
    return minOutput;
  }

  // Calculate the logarithmic scale factor
  const scale = (Math.log(maxInput / input) / Math.log(maxInput / minInput)) * (maxOutput - minOutput) + minOutput;

  // Ensure the scale does not fall below the minimum output
  return Math.max(scale, minOutput);
}

const BASE_CLASSNAME = 'services_box_container';

const ServiceBox = () => {

  const servicesBoxContainerRef= useRef(null);
  const servicesRefs = useRef([]);
  const contactBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if(servicesBoxContainerRef.current && servicesRefs.current.length > 0) {
        servicesRefs.current.forEach((ref, index) => {
          if (ref) {
            const rect = ref.getBoundingClientRect();
            const nextRect = servicesRefs.current[index + 1]?.getBoundingClientRect();
            if (nextRect && rect.bottom > nextRect.top) {
              const childs = servicesRefs.current.slice(index + 1, servicesRefs.current.length);
              let scaleValue = 0;
              childs.forEach((child) => {
                const childRect = child?.getBoundingClientRect();
                const diff = (rect.bottom - childRect.top);
                if(diff > 0) {
                  scaleValue += (1 - calculateScale(diff));
                }
              })
              ref.style.transform = `scale(${1 - scaleValue}, 1)`;
            } else {
              if(contactBtnRef.current){
                const lastChild = servicesRefs.current[servicesRefs.current.length - 1];
                const lastChildRect = lastChild?.getBoundingClientRect();
                const contactBtnRect = contactBtnRef.current?.getBoundingClientRect();
                const isScaleDown = lastChildRect.bottom >  contactBtnRect.top
                contactBtnRef.current.style.transform = `scale(${isScaleDown ? 0.8 : 1 })`
              }
              ref.style.transform = `scale(1)`;
            }
          }
        });
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div 
      className={`${BASE_CLASSNAME}`}
      ref={servicesBoxContainerRef}
    >
      {[1,2,3].map(i => (
        <div 
          key={i}
          ref={el => servicesRefs.current[i - 1] = el}
          className="service_card">
          <span>
            <img src="" alt="" />
          </span>
          <div className="service_card_content">
            <h3 className="service_card_content_title">
              {homeData.service.servicebox.title}
            </h3>
            <p className='service_card_content_description'>
            {homeData.service.servicebox.description}
            </p>
            <div className="service_card_content_tag">
              <span className="me-2">{homeData.service.servicebox.tag1}</span>
              <span>{homeData.service.servicebox.tag2}</span>
            </div>
          </div>
        </div>
      ))}              
      <div
        ref={contactBtnRef}
        className="service-contact_btn">
        <a href="#">
        {homeData.service.servicebox.callpara}
          <span>{homeData.service.servicebox.callnow}</span>
        </a>
      </div>
    </div>
  )
}

export default ServiceBox