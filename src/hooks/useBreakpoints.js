import { useState, useEffect } from 'react';

const breakpoints = {
  xs: 599,
  sm: 768,
  md: 1100,
  lg: 1299,
  xlg: Infinity, // Represents any size larger than desktop
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let activeBreakpoint = "";

      if (width < breakpoints.xs) {
        activeBreakpoint = 'xs';
      } else if (width >= breakpoints.xs && width < breakpoints.sm) {
        activeBreakpoint = 'sm';
      } else if (width >= breakpoints.sm && width < breakpoints.md) {
        activeBreakpoint = 'md';
      } else if (width >= breakpoints.md && width < breakpoints.lg) {
        activeBreakpoint = 'lg';
      } else if (width >= breakpoints.lg) {
        activeBreakpoint = 'xlg';
      }

      setBreakpoint(activeBreakpoint);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call at initial mount to set the initial breakpoint

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
