import React from 'react'
import './index.scss';

const Logo = ({
  className = ""
}) => {
  return (
    <div className={`logo_wrapper ${className}`}>
      <img 
        src="/assets/logo-black.png" 
        alt="logo"
      />
    </div>
  )
}

export default Logo