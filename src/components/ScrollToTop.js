// src/components/ScrollToTop.js
// --------------------------------------------------------------------
// ScrollToTop Component
// This component listens for route changes and scrolls the window to the 
// top whenever the URL path changes, ensuring a smooth user experience
// when navigating between pages.
// --------------------------------------------------------------------

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
