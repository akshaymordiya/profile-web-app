import React from "react";
import CTA from "@/app/components/CTA";
import Grid from "@/app/components/Grid";
import Section from "@/app/components/Section";
//style scss
import "./index.scss";
const Prices = ({ data = {} }) => {
  return (
    <>
      <Section
        sectionClass="inner-price-area"
        title={data.title}
        text={data.paragraph}
        addSeprator
      >
        <Grid classNames="price-content">
          {data.serviceprice.map((item, index) => {
            return (
              <Grid.Item
                xs={12}
                sm={12}
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
      </Section>
    </>
  );
};

export default Prices;
