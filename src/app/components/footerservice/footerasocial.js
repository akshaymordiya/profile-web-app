import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

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
      <div className="row">
        {data.map((item, index) => {
          return (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="footer-social-item d-flex align-items-center justify-content-between">
                <span className="footer-anim-border"></span>
                <div class="footer-social-text z-index-1 position-relative">
                  <span className="child-1">{item?.title}</span>
                  <span className="child-2">{item?.subtitle}</span>
                </div>
                <div className="footer-social-icon z-index-1 position-relative">
                  <span>{item?.icon}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footerasocial;
