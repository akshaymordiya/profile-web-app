"use client";
import React from 'react';

import IMG from '@/app/components/IMG';
import Grid from '@/app/components/Grid';

import "./index.scss";

const BASE_CLASSNAME = "services_container";

const Services = () => {
  return (
    <section
        id="services"
        className={`${BASE_CLASSNAME}`}
      >
      <div className={`${BASE_CLASSNAME}_service_shape_cirlce`}>
        <IMG
          src='/assets/footer-circle-img.png'
          alt='circle_shape-img'
          useContainer
          useRawImgTag
          containerClasses="img_container"
          imageClasses='circle_img'
        />
        <div className="half-circle-svg_container">
          <svg
            width="260"
            height="70"
            viewBox="0 0 260 70"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z"
              fill="currentcolor"
            ></path>
          </svg>
        </div>
      </div>
      <IMG
        src='/assets/service-shape-1.png'
        alt='services-shape-1'
        useContainer
        useRawImgTag
        containerClasses={`${BASE_CLASSNAME}_services-shape_1`}
        imageClasses='image_shape_1'
      />
      <IMG
        src='/assets/service-shape-2.png'
        alt='services-shape-2'
        useContainer
        useRawImgTag
        containerClasses={`${BASE_CLASSNAME}_services-shape_2`}
        imageClasses='image_shape_2'      
      />
      <IMG
        src='/assets/star.png'
        alt='services-shape-3'
        useContainer
        useRawImgTag
        containerClasses={`${BASE_CLASSNAME}_services-shape_3`}  
        imageClasses='image_shape_3'      
      />
      
        <Grid classNames={`${BASE_CLASSNAME}_grid_wrapper`}>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
          >
            <div className={`${BASE_CLASSNAME}_grid_wrapper_col-left`}>              
              <div className='sticky-wrapper'>
                <span className="pre-title">
                  OUR PROCESS
                </span>
                <h3 className="title">
                  How We
                  <br />
                  Carry Out Our 
                  <br />
                  Projects
                </h3>
                <p className="excert">
                  We offer a range of services to help elevate <br />
                  your brand & drive results.
                </p>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={6}
          >
            <div className={`${BASE_CLASSNAME}_grid_wrapper_col-right`}>
              {[1,2,3].map(i => (
                <div className="service_card">
                  <span>
                    <img src="" alt="" />
                  </span>
                  <div className="service_card_content">
                    <h3 className="service_card_content_title">
                      Design <br /> Strategy
                    </h3>
                    <p className='service_card_content_description'>
                      We always ensure that it combines a clean <br />
                      and beautiful visual design.
                    </p>
                    <div className="service_card_content_tag">
                      <span className="me-2">UI/UX Audit</span>
                      <span>Workshops</span>
                    </div>
                  </div>
                </div>
              ))}              
              <div className="service-contact_btn">
                <a href="#">
                  Call me to get more extra service
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </Grid.Item>
        </Grid>
    </section>
  )
}

export default Services