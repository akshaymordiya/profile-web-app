import React from 'react';
import "./index.scss";

import { CgArrowLongDown } from "react-icons/cg";
import { TbArrowDownRight } from "react-icons/tb";
import CTA from '@/app/components/CTA';

const Hero = () => {
  return (
    <div className="home-area black-bg-3 home-ptb z-index-1 smooth position-relative">
      <div className="shape-1">
        <img src="/assets/hero-shape-2-1.png" alt="" />
      </div>
      <div className="shape-2">
        <img src="/assets/hero-shape-2-2.png" alt="" />
      </div>
      <div className="social-wrap d-none d-lg-inline-flex">
        <a target="_blank" href="#">
          Facebook
        </a>
        <a target="_blank" href="#">
          Twitter
        </a>
        <a target="_blank" href="#">
          Dribble
        </a>
        <a target="_blank" href="#">
          Istagram
        </a>
      </div>
      <a href="#" className="pointer" >
        <div className="header-scrool-down d-none d-lg-inline-flex">
          <span className="text">Scroll</span>
          <span>
            <CgArrowLongDown />
          </span>
        </div>
      </a>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="header_content">
              <h3 className="header__title tp-char-animation">
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "30px",
                  }}
                >
                  <div className="animated-letter">C</div>
                  <div className="animated-letter">r</div>
                  <div className="animated-letter">e</div>
                  <div className="animated-letter">a</div>
                  <div className="animated-letter">t</div>
                  <div className="animated-letter">i</div>
                  <div className="animated-letter">v</div>
                  <div className="animated-letter">e</div>
                </div>
                <span>
                  <video
                    id="myvideo"
                    src="/assets/diego-video.mp4"
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </span>
                <br />
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "30px",
                  }}
                >
                  <div className="animated-letter">V</div>
                  <div className="animated-letter">i</div>
                  <div className="animated-letter">s</div>
                  <div className="animated-letter">u</div>
                  <div className="animated-letter">a</div>
                  <div className="animated-letter">l</div>
                </div>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    marginRight: "30px",
                  }}
                >
                  <div className="animated-letter">D</div>
                  <div className="animated-letter">e</div>
                  <div className="animated-letter">s</div>
                  <div className="animated-letter">i</div>
                  <div className="animated-letter">g</div>
                  <div className="animated-letter">n</div>
                  <div className="animated-letter">e</div>
                  <div className="animated-letter">r</div>
                </div>
              </h3>
            </div>
            <div className="homebtn-box d-flex align-items-center flex-wrap justify-content-start justify-content-md-center">
              <div
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: "1",
                  transform: " translate(0px, 0px)",
                  marginRight: "30px ",
                }}
              >
                <CTA 
                  linkText='View Our Work'
                  linkHref='/work'
                  linkClass='btn-blue'
                  icon={TbArrowDownRight}
                  iconProps={{
                    className: 'pencil',
                    fontSize: 'sm'
                  }}
                />
              </div>
              <p>
                Hello, I am Diego a designer from Barcelona. Specialised{" "}
                <br /> in creating fantastic digital experiences.!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero