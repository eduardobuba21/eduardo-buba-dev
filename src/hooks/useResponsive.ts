import { useEffect, useState } from 'react';
// utils
import { breakpoints } from '@/utils/theme';

// ----------------------------------------------------------------------

export default function useResponsive() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => setWidth(window.innerWidth);

    window.addEventListener('resize', updateWindowDimensions);
    updateWindowDimensions(); // first call

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const isMobile = width < breakpoints[1];

  return { isMobile, width, breakpoints };
}
