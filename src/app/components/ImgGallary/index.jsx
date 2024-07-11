"use client";
import React, { useState, useMemo, useEffect, useRef } from 'react'

//components
import IMG from "@/app/components/IMG";
//icons
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
//Externals
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
  const [forceOpenTooltipOnMount, setForceOpenTooltipOnMount] = useState(true);
  const [activeImg, setActiveImg] = useState(primaryImg);
  const timeoutRef = useRef();

  useEffect(() => {
    setForceOpenTooltipOnMount(true);
    timeoutRef.current = setTimeout(() => {
      setForceOpenTooltipOnMount(false)
    }, [5000]);

    return () => {
      clearTimeout(timeoutRef.current)
      setForceOpenTooltipOnMount(false);
    }
  }, [])

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

  const changeActiveImage = (img) => setActiveImg(img);

  return (
    <div
      className={BASE_CLASSNAME}
    >
      <IMG
        src={activeImg}
        useRawImgTag
        imageClasses="portfolio-thumb-img"
        onClick={() => setOpen(true)}
      />
      <div className='tooltip'>
        <InfoRoundedIcon className='info_icon'/>
        <div className={`text ${forceOpenTooltipOnMount ? "show" : ""}`}>Click on the image to view in fullscreen.</div>
      </div>
      <div className={`${BASE_CLASSNAME}_gallary`}>
        {[primaryImg, ...gallary].map((g, index) => (
          <IMG
            key={index}
            src={g}
            width={100}
            height={80}
            imageClasses={`${BASE_CLASSNAME}_gallary_img ${g === activeImg ? "active" : ""}`}
            onClick={() => changeActiveImage(g)}
          />
        ))}
      </div>
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