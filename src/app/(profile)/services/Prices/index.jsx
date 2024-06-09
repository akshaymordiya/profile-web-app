import CTA from "@/app/components/CTA";
import Grid from "@/app/components/Grid";
import SectionTitle from "@/app/components/SectionBox";
import React from "react";
import './index.scss';
import service from '../../../../data/service.page.json';


const Prices = () => {
  return (
    <>
      <section className="inner-price-area">
        <Grid>
          <Grid.Item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xlg={12}
            itemClass="inner-price-title-box"
          >
            <SectionTitle
              interClass="inner-section-title"
              title={service.price.title}
              para={service.price.paragraph}
              animationName="flip-up"
              animationduration="2000"
              animationdelay="200"
            />
          </Grid.Item>
        </Grid>
        <div className="container">
          <Grid>
            {service.price.serviceprice.map((item, index) => {
              return (
                <Grid.Item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xlg={4}
                  itemClass="price-item"
                  key={index}
                >
                  <div className="price-head">
                    <h4>{item?.head_title}</h4>
                    <span>{item?.head_des}</span>
                  </div>
                  <div className="price-body">
                    {item?.price_text ? (
                      <div className="price-text">{item?.price_text}</div>
                    ) : (
                      <>
                        <span>{item?.body_des}</span>
                        <h4>{item?.body_title}</h4>
                      </>
                    )}
                  </div>
                  <div className="price-btn-box">
                    <CTA
                      btn_color="btn-price-white"
                      linkText={item?.button_title}
                      linkClass="btn-price-white"
                      linkHref="/contact"
                    />
                  </div>
                </Grid.Item>
              );
            })}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Prices;
