'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import Link from 'next/link'

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
  id,
  useLink = false,
  href = "#",
  linkClass = ""
}) => {

  const mappedImage = useMemo(() => {
    let imgCmp = useRawImgTag ? (
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
    );

    if(useLink) {
      imgCmp = (
        <Link
          href={href}
          className={linkClass}
        >
          {imgCmp}
        </Link>
      )
    }

    if(useParallaxEffect){
      imgCmp = (
        <ParallaxScroll 
          speed={parallaxSpeed} applyToCustomElement={applyParallaxToImgElement}
          effectElementId={id} 
        >
          {imgCmp}
        </ParallaxScroll>
      )
    }

    return imgCmp
  }, [useRawImgTag, id, src,imageClasses, alt, width, height, useLink, href, linkClass, parallaxSpeed, useParallaxEffect, applyParallaxToImgElement, id]);
  
  if(useContainer){
    return (
      <div className={`${BASE_CLASSNAME}_container ${containerClasses}`}>
        {mappedImage}
      </div>
    )
  }

  return mappedImage
}

export default IMG