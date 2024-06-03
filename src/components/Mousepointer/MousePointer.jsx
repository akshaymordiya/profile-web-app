import React from 'react'
import './MousePointer.css'

const MousePointer = () => {

  return (
    <>
      <div className="mouseCursor" style={{ left: position.x, top: position.y }}></div>
    </>
  )
}

export default MousePointer