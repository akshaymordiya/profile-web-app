"use client";
import React, { useEffect, useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoReorderTwoOutline } from "react-icons/io5";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 90;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
                    <button className="bar-btn">
                      <IoReorderTwoOutline />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
