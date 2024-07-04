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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

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
