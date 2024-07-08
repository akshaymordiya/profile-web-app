'use client';
import React, { useRef, useEffect, useState } from 'react'
//context
import OffsetContext from '@/context/offset.context';

import "./index.scss"

const SmoothScroll = ({
  children
}) => {

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const dataRef = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  })

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

  useEffect(() => {
    setBodyHeight();
  }, [windowSize])

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      const currentHeight = scrollingContainerRef.current.getBoundingClientRect().height;
      document.body.style.height = `${currentHeight}px`;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler());
  }, []);

  const smoothScrollingHandler = () => {
    const bodyHeight = document.body.clientHeight;
    if(Math.abs(bodyHeight - scrollingContainerRef.current?.getBoundingClientRect().height) > 1){
      setBodyHeight()
    }

    if(scrollingContainerRef.current){
      dataRef.current.current = window.scrollY;
      dataRef.current.previous += (dataRef.current.current - dataRef.current.previous) * dataRef.current.ease;
  
      scrollingContainerRef.current.style.transform = `translateY(-${dataRef.current.previous}px)`;
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler());
  };
  
  return (
    <OffsetContext.Provider value={{
      offset: dataRef.current,
      setBodyHeight
    }}>
      <div className="parent">
        <div ref={scrollingContainerRef}>{children}</div>
      </div>
    </OffsetContext.Provider>
  );
}

export default SmoothScroll