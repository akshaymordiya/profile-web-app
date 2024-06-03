import React from "react";
import Grid from "../Grid";
import footer from '../../../data/footerservice.json'
import { renderIconComponent } from "@/Icons";

const Footerasocial = () => {
  return (
    <>
      <Grid>
        {footer.footers.socialmedia.map((item, index) => {
          return (
            <Grid.Item
              key={index}
              xs={12}
              sm={12}
              md={6}
              lg={4}
              xl={4}
              itemClass="footer-social-item"
            >
              <span className="footer-anim-border"></span>
              <div className="footer-social-text">
                <span className="child-1">{item?.title}</span>
                <span className="child-2">{item?.subtitle}</span>
              </div>
              <div className="footer-social-icon">
                <span>{renderIconComponent(item?.icon)}</span>
              </div>
            </Grid.Item>
          );
        })}
        </Grid>
    </>
  );
};

export default Footerasocial;