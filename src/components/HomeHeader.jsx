"use client";
import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoReorderTwoOutline } from "react-icons/io5";
import { Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";

const HomeHeader = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 90;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  const cls = !visible
    ? "header-area header-transparent header-ptlr int-menu header-sticky-cloned "
    : "header-area header-transparent header-ptlr int-menu header-sticky-cloned header-pinned";

  return (
    <>
      <header>
        <div className={cls}>
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="header-logo">
                  <img src="/assets/logo-black.png" alt="" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="header-btn d-none d-md-block">
                    <a className="btn-white" href="/contact">
                      <span className="text">Let's Talk</span>
                      <span>
                        <BiSolidPencil />
                      </span>
                    </a>
                  </div>
                  <div className="header-bar">
                    <button className="bar-btn" onClick={handleShow}>
                      <IoReorderTwoOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas backdrop={false} show={show} onHide={handleClose} scroll>
        {/* <Offcanvas.Header >
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <div className="offcanvas-wrapper-2">
            <div className="offcanvas-left-wrap row justify-content-between">
              <div className="offcanvas-left col-lg-6">
              <div className= "d-block d-lg-none">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <span className="text">close</span>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                </div>
                <div className="offcanvas__logo">
                  <img src="/assets/logo-black.png " alt="" />
                </div>
                
                <div className="main-menu-mobile menu-hover-active counter-row">
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="#">Home</a>
                      </li>
                      <li className="active">
                        <a href="#">About Me</a>
                      </li>
                      <li className="active">
                        <a href="#">Services</a>
                      </li>
                      <li className="active">
                        <a href="#">Portfolio</a>
                      </li>
                      <li className="active">
                        <a href="#">Blog</a>
                      </li>
                      <li className="active">
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas-right col-lg-6 d-none d-md-block">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <span className="text">close</span>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <div className="offcanvas-shape">
                  <img src="assets/canvasbg-shape-2.png" alt="" />
                </div>
                <div className="offcanvas-right-ptl">
                  <div className="offcanvas-right-info">
                    <div className="offcanvas-tel">
                      <a href="tel:61404093 954">+61404093 954</a>
                    </div>
                    <div className="offcanvas-mail">
                      <a href="">hello contact@diego.com</a>
                    </div>
                    <div className="offcanvas-text">
                      <p>If in doubt. reach out.</p>
                    </div>
                  </div>
                  <div className="offcanvas-social-link">
                    <ul>
                      <li>
                        <a href="#" target="_blank">
                          Dribble
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Behance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default HomeHeader;
