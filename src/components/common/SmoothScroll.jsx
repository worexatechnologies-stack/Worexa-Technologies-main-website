import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenis = null;

export function getLenisInstance() {
  return globalLenis;
}

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    // Disable smooth scroll on touch devices to use native GPU-accelerated touch scrolling
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: isTouchDevice ? 1.0 : 1.5,
      smoothTouch: false,
    });

    lenisRef.current = lenis;
    globalLenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const handleGsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleGsapTicker);
    // Use default GSAP lag smoothing (500ms max lag, target 33ms frame) to prevent jitter/freeze
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(handleGsapTicker);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      if (!location.hash) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        const targetElement = document.getElementById(location.hash.replace('#', ''));
        if (targetElement) {
          lenisRef.current.scrollTo(targetElement, { offset: -40, duration: 1.0 });
        }
      }
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}

