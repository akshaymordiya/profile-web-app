"use client";
import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const circleRef = useRef(null);

  const handleMouseMove = (event) => {
    let newCursorX = event.clientX + window.scrollX;
    let newCursorY = event.clientY + window.scrollY;

    newCursorX = Math.max(
      0,
      Math.min(newCursorX, document.documentElement.scrollWidth)
    );
    newCursorY = Math.max(
      0,
      Math.min(newCursorY, document.documentElement.scrollHeight)
    );

    setCursorX(newCursorX);
    setCursorY(newCursorY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="circle"
      style={{
        top: cursorY + "px",
        left: cursorX + "px",
      }}
    >
      <div className="cursor-outer"></div>
    </div>
  );
};

export default CustomCursor;
