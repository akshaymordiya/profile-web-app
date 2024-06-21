import React from "react";
import CTA from "@/app/components/CTA";
import Grid from "@/app/components/Grid";
import Section from "@/app/components/Section";
//style scss
import "./index.scss";

const BASE_CLASSNAME = "price_container";

const Prices = ({
  data
}) => {
  return (
    <Section
      title={data.title}
      text={data.paragraph}
      sectionClass={BASE_CLASSNAME}
    >
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        {data.plans.map((plan, index) => {
          return (
            <Grid.Item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xlg={4}
              itemClass={`${BASE_CLASSNAME}_grid_plan_item`}
              key={index}
            >
              <div className={`${BASE_CLASSNAME}_grid_plan_item_head`}>
                <h4>{plan.head.title}</h4>
                <span>{plan.head.excert}</span>
              </div>
              <div className={`${BASE_CLASSNAME}_grid_plan_item_content`}>
                {plan.body?.text ? (
                  <div className="price-text">{plan.body.text}</div>
                ) : (
                  <React.Fragment>
                    <span>{plan.body.title}</span>
                    <h4>{plan.body.excert}</h4>
                  </React.Fragment>
                )}
              </div>
              <div className={`${BASE_CLASSNAME}_grid_plan_item_btn`}>
                <CTA
                  btn_color="btn-price-white"
                  linkText={plan.btn}
                  linkClass="price-btn"
                  linkHref="/contact"
                />
              </div>
            </Grid.Item>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Prices;
