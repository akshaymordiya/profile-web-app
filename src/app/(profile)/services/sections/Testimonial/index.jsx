import Grid from "@/app/components/Grid";
import React from "react";
import SlideNav from "./Client/Slidernav";
//style scss
import "./index.scss";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-area">
        <Grid classNames="testimonial-container">
          <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
            <SlideNav />
          </Grid.Item>
        </Grid>
      </section>
    </>
  );
};

export default Testimonial;
