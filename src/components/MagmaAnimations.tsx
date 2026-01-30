'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MAIN_SELECTOR = '#main';
let SCROLLER: string | undefined;

export default function MagmaAnimations() {
  useEffect(() => {
    let locoScroll: any;

    const setupLoco = async () => {
      const main = document.querySelector(MAIN_SELECTOR);
      if (!main || typeof window === 'undefined') return;

      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        locoScroll = new LocomotiveScroll({
          el: main as HTMLElement,
          smooth: true,
        });

        locoScroll.on('scroll', ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(MAIN_SELECTOR, {
          scrollTop(value: any) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
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
        ScrollTrigger.refresh();

        // Initialize all animations after Locomotive is ready
        initTextAnimations();
        initCanvasAnimations();
      } catch (e) {
        console.warn('LocomotiveScroll init failed; falling back to window scroll.', e);
        initTextAnimations();
        initCanvasAnimations();
      }
    };

    function initTextAnimations() {
      console.log('🎬 initTextAnimations called, SCROLLER:', SCROLLER);
      
      const splitAndAnimate = (h1Selector: string) => {
        const el = document.querySelector(h1Selector) as HTMLElement | null;
        console.log(`🔍 Looking for ${h1Selector}:`, el ? 'FOUND' : 'NOT FOUND');
        
        if (!el) {
          console.warn(`❌ Element ${h1Selector} not found in DOM`);
          return;
        }
        if (el.dataset.split === 'true') {
          console.log(`⏭️ ${h1Selector} already split, skipping`);
          return;
        }

        const text = el.textContent ?? '';
        if (!text) {
          console.warn(`❌ ${h1Selector} has no text content`);
          return;
        }
        
        console.log(`✂️ Splitting ${h1Selector} (${text.length} chars)`);

        let clutter = '';
        text.split('').forEach((char) => {
          clutter += `<span>${char}</span>`;
        });
        el.innerHTML = clutter;
        el.dataset.split = 'true';
        
        console.log(`✅ Created ${el.querySelectorAll('span').length} spans for ${h1Selector}`);

        gsap.to(`${h1Selector}>span`, {
          scrollTrigger: {
            trigger: `${h1Selector}>span`,
            start: 'top bottom',
            end: 'bottom top',
            scroller: SCROLLER,
            scrub: 0.5,
          },
          stagger: 0.2,
          color: '#fff',
        });
        
        console.log(`🎨 GSAP animation registered for ${h1Selector}>span`);
      };

      // Give DOM a tick to ensure all components are mounted
      setTimeout(() => {
        splitAndAnimate('#page2>h1');
        splitAndAnimate('#page4>h1');
        splitAndAnimate('#page6>h1');
        
        console.log('🔄 Refreshing ScrollTrigger...');
        ScrollTrigger.refresh();
        console.log('✅ All text animations initialized');
      }, 100);
    }

    function initCanvasAnimations() {
      // Page 3 Canvas (frames)
      initCanvas3();
      // Page 5 Canvas (bridges)
      initCanvas5();
      // Page 7 Canvas (lore)
      initCanvas7();
    }

    function initCanvas3() {
      const canvas = document.querySelector('#page3>canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const context: CanvasRenderingContext2D = ctx;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };
      window.addEventListener('resize', handleResize);

      function files(index: number) {
        const data = `
  /assets/frames/frames00007.png
  /assets/frames/frames00010.png
  /assets/frames/frames00013.png
  /assets/frames/frames00016.png
  /assets/frames/frames00019.png
  /assets/frames/frames00022.png
  /assets/frames/frames00025.png
  /assets/frames/frames00028.png
  /assets/frames/frames00031.png
  /assets/frames/frames00034.png
  /assets/frames/frames00037.png
  /assets/frames/frames00040.png
  /assets/frames/frames00043.png
  /assets/frames/frames00046.png
  /assets/frames/frames00049.png
  /assets/frames/frames00052.png
  /assets/frames/frames00055.png
  /assets/frames/frames00058.png
  /assets/frames/frames00061.png
  /assets/frames/frames00064.png
  /assets/frames/frames00067.png
  /assets/frames/frames00070.png
  /assets/frames/frames00073.png
  /assets/frames/frames00076.png
  /assets/frames/frames00079.png
  /assets/frames/frames00082.png
  /assets/frames/frames00085.png
  /assets/frames/frames00088.png
  /assets/frames/frames00091.png
  /assets/frames/frames00094.png
  /assets/frames/frames00097.png
  /assets/frames/frames00100.png
  /assets/frames/frames00103.png
  /assets/frames/frames00106.png
  /assets/frames/frames00109.png
  /assets/frames/frames00112.png
  /assets/frames/frames00115.png
  /assets/frames/frames00118.png
  /assets/frames/frames00121.png
  /assets/frames/frames00124.png
  /assets/frames/frames00127.png
  /assets/frames/frames00130.png
  /assets/frames/frames00133.png
  /assets/frames/frames00136.png
  /assets/frames/frames00139.png
  /assets/frames/frames00142.png
  /assets/frames/frames00145.png
  /assets/frames/frames00148.png
  /assets/frames/frames00151.png
  /assets/frames/frames00154.png
  /assets/frames/frames00157.png
  /assets/frames/frames00160.png
  /assets/frames/frames00163.png
  /assets/frames/frames00166.png
  /assets/frames/frames00169.png
  /assets/frames/frames00172.png
  /assets/frames/frames00175.png
  /assets/frames/frames00178.png
  /assets/frames/frames00181.png
  /assets/frames/frames00184.png
  /assets/frames/frames00187.png
  /assets/frames/frames00190.png
  /assets/frames/frames00193.png
  /assets/frames/frames00196.png
  /assets/frames/frames00199.png
  /assets/frames/frames00202.png
 `;
        const frames = data.split('\n').map((line) => line.trim()).filter(Boolean);
        return frames[index];
      }

      const frameCount = 67;
      const images: HTMLImageElement[] = [];
      const imageSeq = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = files(i);
        if (src) img.src = src;
        images.push(img);
      }

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.5,
          trigger: '#page3',
          start: 'top top',
          end: '250% top',
          scroller: SCROLLER,
        },
        onUpdate: render,
      });

      const firstLoadedImage = images.find((img) => img && img.src);
      if (firstLoadedImage) {
        firstLoadedImage.onload = render;
        firstLoadedImage.onerror = render;
      } else {
        render();
      }

      function render() {
        scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        if (!img || !img.naturalWidth || !img.naturalHeight) return;
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }

      ScrollTrigger.create({
        trigger: '#page3',
        pin: true,
        scroller: SCROLLER,
        start: 'top top',
        end: '250% top',
      });
    }

    function initCanvas5() {
      const canvas = document.querySelector('#page5>canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const context: CanvasRenderingContext2D = ctx;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };
      window.addEventListener('resize', handleResize);

      function files(index: number) {
        const data = `
/assets/bridges/bridges00004.png
/assets/bridges/bridges00007.png
/assets/bridges/bridges00010.png
/assets/bridges/bridges00013.png
/assets/bridges/bridges00016.png
/assets/bridges/bridges00019.png
/assets/bridges/bridges00022.png
/assets/bridges/bridges00025.png
/assets/bridges/bridges00028.png
/assets/bridges/bridges00031.png
/assets/bridges/bridges00034.png
/assets/bridges/bridges00037.png
/assets/bridges/bridges00040.png
/assets/bridges/bridges00043.png
/assets/bridges/bridges00046.png
/assets/bridges/bridges00049.png
/assets/bridges/bridges00052.png
/assets/bridges/bridges00055.png
/assets/bridges/bridges00058.png
/assets/bridges/bridges00061.png
/assets/bridges/bridges00064.png
/assets/bridges/bridges00067.png
/assets/bridges/bridges00070.png
/assets/bridges/bridges00073.png
/assets/bridges/bridges00076.png
/assets/bridges/bridges00079.png
/assets/bridges/bridges00082.png
/assets/bridges/bridges00085.png
/assets/bridges/bridges00088.png
/assets/bridges/bridges00091.png
/assets/bridges/bridges00094.png
/assets/bridges/bridges00097.png
/assets/bridges/bridges00100.png
/assets/bridges/bridges00103.png
/assets/bridges/bridges00106.png
/assets/bridges/bridges00109.png
/assets/bridges/bridges00112.png
/assets/bridges/bridges00115.png
/assets/bridges/bridges00118.png
/assets/bridges/bridges00121.png
/assets/bridges/bridges00124.png
/assets/bridges/bridges00127.png
/assets/bridges/bridges00130.png
/assets/bridges/bridges00133.png
/assets/bridges/bridges00136.png
/assets/bridges/bridges00139.png
/assets/bridges/bridges00142.png
/assets/bridges/bridges00145.png
/assets/bridges/bridges00148.png
/assets/bridges/bridges00151.png
/assets/bridges/bridges00154.png
/assets/bridges/bridges00157.png
/assets/bridges/bridges00160.png
/assets/bridges/bridges00163.png
`;
        const frames = data.split('\n').map((line) => line.trim()).filter(Boolean);
        return frames[index];
      }

      const frameCount = 54;
      const images: HTMLImageElement[] = [];
      const imageSeq = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = files(i);
        if (src) img.src = src;
        images.push(img);
      }

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.5,
          trigger: '#page5',
          start: 'top top',
          end: '250% top',
          scroller: SCROLLER,
        },
        onUpdate: render,
      });

      const firstLoadedImage = images.find((img) => img && img.src);
      if (firstLoadedImage) {
        firstLoadedImage.onload = render;
        firstLoadedImage.onerror = render;
      } else {
        render();
      }

      function render() {
        scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        if (!img || !img.naturalWidth || !img.naturalHeight) return;
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }

      ScrollTrigger.create({
        trigger: '#page5',
        pin: true,
        scroller: SCROLLER,
        start: 'top top',
        end: '250% top',
      });
    }

    function initCanvas7() {
      const canvas = document.querySelector('#page7>canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const context: CanvasRenderingContext2D = ctx;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      };
      window.addEventListener('resize', handleResize);

      function files(index: number) {
        return `https://thisismagma.com/assets/home/lore/seq/${index + 1}.webp?2`;
      }

      const frameCount = 136;
      const images: HTMLImageElement[] = [];
      const imageSeq = { frame: 0 };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const src = files(i);
        if (src) img.src = src;
        images.push(img);
      }

      gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: 0.5,
          trigger: '#page7',
          start: 'top top',
          end: '250% top',
          scroller: SCROLLER,
        },
        onUpdate: render,
      });

      const firstLoadedImage = images.find((img) => img && img.src);
      if (firstLoadedImage) {
        firstLoadedImage.onload = render;
        firstLoadedImage.onerror = render;
      } else {
        render();
      }

      function render() {
        scaleImage(images[imageSeq.frame], context);
      }

      function scaleImage(img: HTMLImageElement, ctx: CanvasRenderingContext2D) {
        if (!img || !img.naturalWidth || !img.naturalHeight) return;
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }

      ScrollTrigger.create({
        trigger: '#page7',
        pin: true,
        scroller: SCROLLER,
        start: 'top top',
        end: '250% top',
      });

      // Page 7 circle animations
      gsap.to('.page7-cir', {
        scrollTrigger: {
          trigger: '.page7-cir',
          start: 'top center',
          end: 'bottom top',
          scroller: SCROLLER,
          scrub: 0.5,
        },
        scale: 1.5,
      });

      gsap.to('.page7-cir-inner', {
        scrollTrigger: {
          trigger: '.page7-cir-inner',
          start: 'top center',
          end: 'bottom top',
          scroller: SCROLLER,
          scrub: 0.5,
        },
        backgroundColor: '#0a3bce91',
      });
    }

    setupLoco();

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return null;
}
