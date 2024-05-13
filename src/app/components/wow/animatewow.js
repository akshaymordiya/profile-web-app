'use client'
import { useEffect } from 'react';
import WOW from 'wowjs';

const useWow = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // Default wow class name
      animateClass: 'animated', // Default animation class
      offset: 0, // Distance to the element when triggering the animation
      mobile: true, // Enable animations on mobile devices
      live: true // Apply new WOW animations as you scroll down the page
    });
    wow.init();
  }, []);

  return null; // This hook doesn't return anything
};

export default useWow;