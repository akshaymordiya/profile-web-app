'use client';
import React, { useRef, useEffect, useState } from 'react'
//context
import OffsetContext from '@/context/offset.context';

import "./index.scss"

const SmoothScroll = ({
  children
}) => {

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const dataRef = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  })

  //2.
  const scrollingContainerRef = useRef();

  useEffect(() => {
    const getSize = () => {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };
    
    const handleResize = () => {
      setWindowSize(getSize());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 4.
  useEffect(() => {
    setBodyHeight();
  }, [windowSize.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current.getBoundingClientRect().height
    }px`;
  };

  // 5.
  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    dataRef.current.current = window.scrollY;
    dataRef.current.previous += (dataRef.current.current - dataRef.current.previous) * dataRef.current.ease;

    scrollingContainerRef.current.style.transform = `translateY(-${dataRef.current.previous}px)`;
    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };

  return (
    <OffsetContext.Provider value={dataRef.current}>
      <div className="parent">
        <div ref={scrollingContainerRef}>{children}</div>
      </div>
    </OffsetContext.Provider>
  );
}

export default SmoothScroll