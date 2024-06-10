import React, { useState } from "react";
import "./index.scss";
import Grid from "../Grid";

const ResponsiveNav = ({toggleMenu}) => {
  return (
    <>
      <div className="portal">
      <button onClick={toggleMenu}>x</button>
      
        <Grid >
          <Grid.Item
           sm={12}
           md={12}
           xs={12}
           lg={6}
           xlg={6}
           >
             <p>Content in the portal</p>
          </Grid.Item>
          <Grid.Item
           sm={12}
           md={12}
           xs={12}
           lg={6}
           xlg={6}
           >
             <p>Content in the portal</p>
          </Grid.Item>
        </Grid>
      </div>
    </>
  );
};

export default ResponsiveNav;
