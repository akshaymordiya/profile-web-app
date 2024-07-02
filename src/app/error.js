'use client';
import React, { useEffect } from 'react'

const error = ({
  error,
   reset = () => {}
}) => {
  useEffect(() => {
    if(error){
      console.error(error);
    }
  }, []);

  return (
    <React.Fragment>
      
    </React.Fragment>
  )
}

export default error