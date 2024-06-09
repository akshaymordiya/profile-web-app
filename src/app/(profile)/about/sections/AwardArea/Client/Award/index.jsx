"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getIcon, renderIconComponent } from "@/Icons";

import "./index.scss";

const BASE_CLASSNAME = "award_item"

const Awards = ({
  awardItems = []
}) => {
  const { RightIcon, Arrowoutward } = getIcon(["RightIcon", "Arrowoutward"]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const followImgRef = useRef(null);
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    if (followImgRef.current) {
      const imgWidth = followImgRef.current.offsetWidth;
      const imgHeight = followImgRef.current.offsetHeight;
      const imgCenterX = clientX - imgWidth / 0.2;
      const imgCenterY = clientY - imgHeight / 0.7;
      followImgRef.current.style.transform = `translateX(${imgCenterX}px) translateY(${imgCenterY}px)`;
    }
  };
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (awardItems ?? []).map((item, index) => (
    <div key={index} className={BASE_CLASSNAME}>
      <Link
        href="#"
        className={`${BASE_CLASSNAME}_link`}
        onMouseEnter={() => {
          setIsHovered(true);
          setCurrentImageIndex(index);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentImageIndex(null);
        }}
      >
        <div className="award-item-inner">
          <div className="award-arrow">
            {/* {item?.RightIcon} */}
            {renderIconComponent(item?.leftIcon)}
            </div>
          <div className="award-content">
            <h3 className="award-title">{item?.title}</h3>
            <p>{item?.subtitle}</p>
          </div>
          <div className="award-btn-wrapper">
            <span className="award-btn">
              <span>
                {renderIconComponent(item?.arroward)}
                {renderIconComponent(item?.arroward)}
              </span>
            </span>
          </div>
        </div>
      </Link>
      {index === currentImageIndex && (
        <img
          src={item?.image}
          alt={`Image ${index + 1}`}
          ref={index === currentImageIndex ? followImgRef : null}
          className="hover-reveal-bg"
          style={{
            opacity: isHovered && index === currentImageIndex ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        />
      )}
      <div className="award-inner-border"></div>
    </div>
  ));
};

export default Awards;
