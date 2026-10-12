import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

let globalLenis = null;

export function getLenisInstance() {
  return globalLenis;
}

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let handleGsapTicker = null;
    let gsapInstance = null;
    let lenisInstance = null;

    // Load Lenis and GSAP asynchronously without blocking initial paint
    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([LenisModule, gsapModule, scrollTriggerModule]) => {
      if (!isMounted) return;

      const Lenis = LenisModule.default;
      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

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
      lenisInstance = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      handleGsapTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(handleGsapTicker);
      gsap.ticker.lagSmoothing(500, 33);
    }).catch((err) => {
      console.warn('[SmoothScroll] Async init fallback:', err);
    });

    return () => {
      isMounted = false;
      if (handleGsapTicker && gsapInstance) {
        gsapInstance.ticker.remove(handleGsapTicker);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
      }
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

