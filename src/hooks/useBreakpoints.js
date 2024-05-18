import { useState, useEffect } from 'react';

const breakpoints = {
  xs: 600,
  sm: 768,
  md: 954,
  lg: 1299,
  xlg: Infinity, // Represents any size larger than desktop
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('phone');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let activeBreakpoint = "";
      if (width < breakpoints.xs) {
        activeBreakpoint = 'xs';
      } 
      
      if (width >= breakpoints.xs && width < breakpoints.sm) {
        activeBreakpoint = 'sm';
      }
      
      if (width >= breakpoints.sm && width < breakpoints.md) {
        activeBreakpoint = 'md';
      }
      
      if (width >= breakpoints.md && width < breakpoints.lg) {
        activeBreakpoint = 'lg';
      } 
      
      if (width >= breakpoints.lg && width < breakpoints.xlg) {
        activeBreakpoint = 'xlg';
      }

      setBreakpoint(activeBreakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call at initial mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;