import React from "react";
import "./index.scss";
import Image from "next/image";
import shape1 from "../../../../public/assets/service-shape-1.png";
import shape2 from "../../../../public/assets/service-shape-2.png";
import star from "../../../../public/assets/star.png";

const Shapes = () => {
  return (
    <>
      <div className="service-circle-img">
        <span className="text-img">
          <img src="/assets/footer-circle-img.png" alt="" />
        </span>
        <div className="shape d-none d-lg-block">
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
      <div className="service-shape-1">
        <Image src={shape1} alt="shape-image" />
      </div>
      <div className="service-shape-2 d-none d-lg-block">
        <Image src={shape2} alt="shape-image" />
      </div>
      <div className="service-shape-3">
        <Image src={star} alt="" />
      </div>
    </>
  );
};

export default Shapes;
