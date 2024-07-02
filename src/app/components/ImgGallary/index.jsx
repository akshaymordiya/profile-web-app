"use client";
import React, { useState, useMemo } from 'react'

//components
import IMG from "@/app/components/IMG";

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "./index.scss"

const BASE_CLASSNAME = "portfolio-thumb"

const ImgGallary = ({
  primaryImg,
  gallary = []
}) => {

  const [open, setOpen] = useState(false);


  const imgGallary = useMemo(() => {
    return [
      {
        src: primaryImg
      },
      ...(gallary ?? []).map(url => ({
        src: url
      }))
    ]
  }, [gallary]);

  return (
    <div
      onClick={() => setOpen(true)}
      className={BASE_CLASSNAME}
    >
      <IMG
        src={primaryImg}
        useRawImgTag
        useContainer
        imageClasses="portfolio-thumb-img"
      />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Thumbnails]}
        slides={imgGallary}
      />
    </div>
  )
}

export default ImgGallary