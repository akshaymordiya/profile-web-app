import React from 'react'

//components
import Grid from "@/app/components/Grid";
import IMG from "@/app/components/IMG";
import Sticky from "@/app/components/Sticky";
import ParallaxScroll from '@/app/components/ParallaxScroll';

//Client Components
import Cards from './Client/Cards';

import "./index.scss";

const BASE_CLASSNAME = "services_container";

const ServiceCards = ({
  images,
  serviceData
}) => {
  return (
    <div className={BASE_CLASSNAME}>
      <div className={`${BASE_CLASSNAME}_img_circle`}>
        <IMG
          src={images.circleImg.src}
          alt={images.circleImg.alt}
          containerClasses={`${BASE_CLASSNAME}_img_circle_text`}
          useContainer
          useRawImgTag
        />
        <div className={`${BASE_CLASSNAME}_img_circle_shape`}>
          <svg
            width="260"
            height="70"
            viewBox="0 0 260 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.7285 34.1352C48.3941 10.6976 13.8796 0.514191 0 0.514191C93.4783 0.514191 276.081 -0.642708 258.863 0.514191C236.79 1.99739 217.224 6.94161 191.137 34.1352C140.468 93.9609 98.3272 68.2507 68.7285 34.1352Z"
              fill="currentcolor"
            ></path>
          </svg>
        </div>
      </div>
      {images.innerImg.map(img => {
        const Image = (
          <IMG
            key={img.id}
            src={img.src}
            containerClasses={`${BASE_CLASSNAME}_img_shape shape-${img.id}`}
            imageClasses={`shaped-img`}
            alt={img.alt}
            useContainer
            useRawImgTag
          />
        );

        if(img?.usePrallax) {
          return (
            <div key={img.id} speed={0.2}>
              {Image}
            </div>
          )
        }
        return Image
      })}
      <Sticky
        behaviour={{
          "parent": "sticky_grid_container",
          "pos_left": {
            "id": "sticky_grid-col_left",
            "isSticky": true
          },
          "pos_right" : {
            "id": "sticky_grid-col_right"
          },
        }}
        removeStickyonSmallerDevices
      >
        <Grid classNames={`${BASE_CLASSNAME}_grid`} id="sticky_grid_container">
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xlg={5}
            itemClass={`${BASE_CLASSNAME}_grid-service-card`}
            id="sticky_grid-col_left"
          >
            <div className="stack_card">
              <div className="service-title-box">
                <span
                  className="excert"
                >
                  {serviceData.title}
                </span>
                <h3
                  className="title"
                >
                  {serviceData.excert.split("_").map((word, index) => (
                    <React.Fragment key={index}>
                      {word}<br />
                    </React.Fragment>
                  ))}
                </h3>
                <p>
                  {serviceData.description.split("_").map((word, index) => (
                    <React.Fragment key={index}>
                    {word}<br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </Grid.Item>
          <Grid.Item xs={12} sm={12} md={12} lg={6} xlg={7}   id="sticky_grid-col_right">
            <Cards services={serviceData} />
          </Grid.Item>
        </Grid>
      </Sticky>
    </div>
  )
}

export default ServiceCards