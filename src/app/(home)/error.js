'use client';
import React, { useEffect } from 'react'

const Error = ({
  error,
   reset = () => {}
}) => {
  useEffect(() => {
    if(error){
      console.error(error);
    }
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error