"use client";
import React, { useRef, useContext, useEffect } from 'react'
//context
import OffsetContext from '@/context/offset.context';
import useBreakpoint from '@/hooks/useBreakpoints';

const getElementProperty = (element) => {
  // Get the computed styles for the element
  const computedStyle = window.getComputedStyle(element);

  // Get the element's height
  const height = element.clientHeight;

  // Subtract the padding
  const paddingTop = parseFloat(computedStyle.paddingTop);
  const paddingBottom = parseFloat(computedStyle.paddingBottom);

  // Calculate the actual height
  const actualHeight = height - paddingTop - paddingBottom;

  return {
    actualHeight,
    paddingTop,
    paddingBottom
  }
}

const Sticky = ({
  behaviour =  {
    "parent": "grid-container",
    "pos_left": {
      "id": "grid-col-left",
      "isSticky": true
    },
    "pos_right" : {
      "id": "grid-col-right"
    },
  },
  removeStickyonSmallerDevices = false,
  children
}) => {

  const containerRef = useRef(null);
  const capturedOffset = useRef(null);
  const { offset: offsetContext } = useContext(OffsetContext);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    requestAnimationFrame(() => stickyScrolling());
    const handleResize = () => {
      capturedOffset.current = null;
      const stickyElement = document.getElementById(behaviour.pos_left?.isSticky ? behaviour.pos_left.id : behaviour.pos_right.id);

      if(stickyElement){
        stickyElement.style.transform = `translateY(0px)`
      }
    } 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [breakpoint]);

  const stickyScrolling = () => {
    const container = containerRef.current;
    if(container){
      const parentContainer = document.getElementById(behaviour.parent);
      let posLeft = null;
      let posRight = null;
      let offset = 0;

      if(parentContainer){
        posLeft = parentContainer.querySelector(`#${behaviour['pos_left'].id}`) ?? parentContainer.children[0];
        posRight = parentContainer.querySelector(`#${behaviour['pos_right'].id}`) ?? parentContainer.children[1];
      }

      const containerRect = container.getBoundingClientRect();
      const posRightProps = getElementProperty(posRight);
      const posLeftProps = getElementProperty(posLeft);

      const preCalculatedBoundryOffset = {
        stickyLeft: posRightProps.actualHeight - posLeftProps.actualHeight,
        stickyRight: posLeftProps.actualHeight - posRightProps.actualHeight
      }

      const boundryOffset = {
        top: 0,
        bottom: preCalculatedBoundryOffset[behaviour.pos_left?.isSticky ? "stickyLeft" : "stickyRight" ]
      }

      if(removeStickyonSmallerDevices && ['xs', 'sm'].includes(breakpoint)){
        const stickyElement = behaviour.pos_left.isSticky ? posLeft : posRight;
        stickyElement.style.transform = `translateY(0px)`;
        
      } else if(containerRect.top <= 0 && offset <= boundryOffset.bottom) {
        if(capturedOffset.current === null && containerRect.top >= -100){
          capturedOffset.current = offsetContext.previous
        }

        offset = (-(capturedOffset.current) + offsetContext.previous);
        let scrollValue = offset;
        if(offset <= boundryOffset.top){
          scrollValue = boundryOffset.top
        } else if (offset >= boundryOffset.bottom){
          scrollValue = boundryOffset.bottom
        }
        const stickyElement = behaviour.pos_left.isSticky ? posLeft : posRight;
        stickyElement.style.transform = `translateY(${(scrollValue)}px)`;
      }
    }

    requestAnimationFrame(() => stickyScrolling());
  }

  return (
    <section ref={containerRef}>
      {children}
    </section>
  )
}

export default Sticky