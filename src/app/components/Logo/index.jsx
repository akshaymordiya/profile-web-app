import React from 'react'
import Link from "next/link";
import './index.scss';

const Logo = ({
  className = ""
}) => {
  return (
    <Link href="/">
      <div className={`logo_wrapper ${className}`}>
        <img 
          src="/assets/logo-black.png" 
          alt="logo"
        />
      </div>
    </Link>
  )
}

export default Logo