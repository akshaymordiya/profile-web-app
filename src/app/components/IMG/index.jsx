'use client'

import Image from 'next/image'
import React from 'react'

import "./index.scss"
import ParallaxScroll from '../ParallaxScroll'

const BASE_CLASSNAME = 'image'

const IMG = ({
  src = "",
  alt = "",
  width = "",
  height = "",
  imageClasses = "",
  useContainer = false,
  useRawImgTag = false,
  containerClasses = "",
  useParallaxEffect = false,
  parallaxSpeed = 0.3,
  applyParallaxToImgElement = false,
  id
}) => {

  const mappedImage = useRawImgTag ? (
    <img
      id={id}
      src={src}
      className={`${BASE_CLASSNAME} ${imageClasses}`}
      alt={alt}
    />
  ) : (
    <Image
      id={id}
      src={src}
      width={width}
      height={height}
      className={`${BASE_CLASSNAME} ${imageClasses}`}
      alt={alt}
    />
  )

  if(useContainer){
    return (
      <div className={`${BASE_CLASSNAME}_container ${containerClasses}`}>
        {useParallaxEffect ? (
          <ParallaxScroll 
            speed={parallaxSpeed} applyToCustomElement={applyParallaxToImgElement}
            effectElementId={id} 
          >
            {mappedImage}
          </ParallaxScroll>
        ) : mappedImage}
      </div>
    )
  }

  return mappedImage
}

export default IMG