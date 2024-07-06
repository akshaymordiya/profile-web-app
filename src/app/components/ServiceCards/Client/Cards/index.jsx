"use client";
import React, { useRef, useEffect, useContext } from 'react';
import Link from "next/link";

import OffsetContext from '@/context/offset.context';
import { renderIconComponent } from '@/Icons';

import "./index.scss";

const BASE_CLASSNAME = "services_box_container"

const Cards = ({
  services
}) => {

  const containerRef = useRef(null);
  // const capturedOffset = useRef({});
  // const offsetContext = useContext(OffsetContext);

  // useEffect(() => {
  //   requestAnimationFrame(() => handleOverlayScroll());
  // }, []);

  // const handleOverlayScroll = () => {
  //   const container = containerRef.current
  //   if(container){
  //     Array.from(container.children).forEach((child, index) => {
  //       const childRect = child.getBoundingClientRect();
  //       console.log(`"childRect -> ${index + 1}`, childRect);
  //       if(childRect.top <= (100 + (index * 20))){
  //         const offset = (-(childRect.top + 100));
  //         child.style.transform = `translateY(${(offset)}px)` 
  //       }
  //       // if(childRect.top <= (85 + (index * 20))){
  //       //   if(!capturedOffset.current?.[index]){
  //       //     capturedOffset.current[index] =  offsetContext.previous;
  //       //   }

  //       //   const childOffset = (-(capturedOffset.current[index]) + offsetContext.previous)
  //       //   child.style.transform = `translateY(${(childOffset)}px)` 
  //       // }
  //     })
  //   }

  //   requestAnimationFrame(() => handleOverlayScroll());
  // }
  
  return (
    <div className={BASE_CLASSNAME} ref={containerRef}>
      {services.serviceCards.map(service => (
        <div key={service.id} className="service_card">
          <div className="service_card_icon">
            <span>{renderIconComponent(service?.icon)}</span>
          </div>
          <div className="service_card_content">
            <h3 className="service_card_content_title">{service?.title}</h3>
            <p className='service_card_content_description'>{service?.desc}</p>
            <div className="service_card_content_tags">
              {service.tags.map((tag, index) => (
                <span key={index} className='tag'>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className={`service-contact_btn`}>
        <Link href="/contact">
          {services.servicetext}
          <span>{services.lightbtn}</span>
        </Link>
      </div>
    </div>
  )
}

export default Cards