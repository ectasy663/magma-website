'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const MAIN_SELECTOR = '#main';
let SCROLLER: string | undefined;

export function useLocomotiveScroll() {
  useEffect(() => {
    let locoScroll: any;

    const setupLoco = async () => {
      const main = document.querySelector(MAIN_SELECTOR);
      if (!main) return;

      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        locoScroll = new LocomotiveScroll({
          el: main as HTMLElement,
          smooth: true,
        } as any);

        locoScroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(MAIN_SELECTOR, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: (main as HTMLElement).style.transform ? 'transform' : 'fixed',
        });

        ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
        SCROLLER = MAIN_SELECTOR;
        ScrollTrigger.defaults({ scroller: MAIN_SELECTOR });
        ScrollTrigger.refresh();
      } catch (e) {
        console.warn('LocomotiveScroll init failed; falling back to window scroll.', e);
      }
    };

    setupLoco();

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.defaults({ scroller: undefined });
      SCROLLER = undefined;
    };
  }, []);

  return SCROLLER;
}

export { SCROLLER };
