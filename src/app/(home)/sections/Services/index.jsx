import React from 'react';

import IMG from '@/app/components/IMG';
import Grid from '@/app/components/Grid';
import ServiceBox from '@/app/(home)/sections/Services/Client/ServiceBox';

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
      <IMG
        src='/assets/service-shape-1.png'
        alt='services-shape-4'
        useContainer
        useRawImgTag
        containerClasses={`${BASE_CLASSNAME}_services-shape_4`}
        imageClasses='image_shape_4'
      />
      <IMG
        src='/assets/service-shape-2.png'
        alt='services-shape-5'
        useContainer
        useRawImgTag
        containerClasses={`${BASE_CLASSNAME}_services-shape_5`}
        imageClasses='image_shape_5'      
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
           <ServiceBox />
          </Grid.Item>
        </Grid>
    </section>
  )
}

export default Services