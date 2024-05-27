'use client'
import React, { useEffect, useRef, useState } from "react";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const data = [
  {
    id: 1,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-5.jpg",
  },
  {
    id: 2,
    title: "Wix.Com",
    subtitle: "INTERVIEW 2022",
    image: "/assets/award-6.jpg",
  },
  {
    id: 3,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-10.jpg",
  },
  {
    id: 4,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-1.jpg",
  },
  {
    id: 5,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-4.jpg",
  },
  {
    id: 6,
    title: "Awwwwards SOTD",
    subtitle: "FOR DISPLAY 2023",
    image: "/assets/award-3.jpg",
  },
];

const Awards = () => {
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
      // followImgRef.current.style.transform = `translateX(-50px) translateY(-50px)`;
    }
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="award-item position-relative hover-reveal-item"
          >
            <a
              href="#"
              className="d-block"
              onMouseEnter={() => {
                setIsHovered(true);
                setCurrentImageIndex(index);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setCurrentImageIndex(null);
              }}
            >
              <div className="award-item-inner d-flex align-items-center justify-content-between flex-wrap">
                <div className="award-arrow">
                  <SubdirectoryArrowRightIcon />
                </div>
                <div className="award-content">
                  <h3 className="award-title">{item?.title}</h3>
                  <p>{item?.subtitle}</p>
                </div>
                <div className="award-btn-wrapper">
                  <span className="award-btn">
                    <span>
                      <ArrowOutwardIcon />
                      <ArrowOutwardIcon />
                    </span>
                  </span>
                </div>
              </div>
            </a>
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
        );
      })}
    </>
  );
};

export default Awards;
