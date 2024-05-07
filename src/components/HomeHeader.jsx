'use client'
import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoReorderTwoOutline } from "react-icons/io5";
import Header from "./Header";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

const HomeHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header />
      <header>
        <div className="header-3 header-transparent">
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
                    <button className="bar-btn" onClick={ handleShow }>
                      <IoReorderTwoOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within an <code>.offcanvas-lg</code>.
          </p>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  );
};

export default HomeHeader;
