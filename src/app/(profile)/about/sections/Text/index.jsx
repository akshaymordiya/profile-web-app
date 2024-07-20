import React from "react";
//components
import Grid from "@/app/components/Grid";
import Services from "../../partials/Services";

import "./index.scss";

const BASE_CLASSNAME = "about_text";

const PersonalInfo = ({
  data = {}
}) => {
  const {
    text
  } = data

  return (
    <div className={BASE_CLASSNAME}>
      <Grid classNames={`${BASE_CLASSNAME}_grid`}>
        <Grid.Item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xlg={12}
          itemClass={`${BASE_CLASSNAME}_grid-col-1`}
          data-speed="0.5"
        >
            {text.map((c, index) => typeof c === "string" ? (
              <React.Fragment key={index}>
                {c}
              </React.Fragment>
            ) : c.map((tag, index) => (
              <Services
                key={index}
                ServiceName={tag?.name}
                ServiceImage={tag?.image}
              />
            )))}
        </Grid.Item>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
