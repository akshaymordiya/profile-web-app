"use client";
import React, { useState, useEffect } from "react";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import Navbar from "../components/Navbar";

const Loading = () => {
  return (
    <div className="loading-container">
      <AutoModeOutlinedIcon />
    </div>
  );
};

const LoadingPage = ({ children }) => {
  const [loading, setLoading] = useState(true); // Initially, set loading to true

  useEffect(() => {
    // Simulating loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after 500ms
    }, 500);

    // Cleanup function to clear the timeout if component unmounts
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
};

export default LoadingPage;
