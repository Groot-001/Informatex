import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../lib/SmoothScrollProvider';

/**
 * Ensures every route change starts scrolled to the top of the page.
 * Uses the shared Lenis instance (when available) so the reset stays in sync
 * with the smooth-scroll engine; falls back to native scrolling otherwise.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};