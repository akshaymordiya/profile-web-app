import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "../Grid";

const Footerasocial = () => {
  const data = [
    {
      id: 1,
      title: "Behance",
      subtitle: "@diego_des",
      icon: <InstagramIcon />,
    },
    {
      id: 2,
      title: "Google",
      subtitle: "@diego_des",
      icon: <InstagramIcon />,
    },
    {
      id: 3,
      title: "Instagram",
      subtitle: "@diego_des",
      icon: <InstagramIcon />,
    },
  ];
  return (
    <>
      <Grid>
        {data.map((item, index) => {
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
              <div className="footer-social-text z-index-1 position-relative">
                <span className="child-1">{item?.title}</span>
                <span className="child-2">{item?.subtitle}</span>
              </div>
              <div className="footer-social-icon z-index-1 position-relative">
                <span>{item?.icon}</span>
              </div>
            </Grid.Item>
          );
        })}
        </Grid>
    </>
  );
};

export default Footerasocial;
