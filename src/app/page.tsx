'use client';

import Hero from '@/components/Hero';
import Page2 from '@/components/Page2';
import Page3Canvas from '@/components/Page3Canvas';
import Page4 from '@/components/Page4';
import Page5Canvas from '@/components/Page5Canvas';
import Page6 from '@/components/Page6';
import Page7Canvas from '@/components/Page7Canvas';
import Page8 from '@/components/Page8';
import Page9 from '@/components/Page9';
import Page10 from '@/components/Page10';
import Page11 from '@/components/Page11';
import Page12 from '@/components/Page12';
import Page13 from '@/components/Page13';
import Page14 from '@/components/Page14';
import MagmaAnimations from '@/components/MagmaAnimations';

export default function Home() {
  return (
    <>
      <MagmaAnimations />
      <div id="main" data-scroll-container className="relative overflow-hidden bg-[#1137ca]">
        <Hero />
        <Page2 />
        <Page3Canvas />
        <Page4 />
        <Page5Canvas />
        <Page6 />
        <Page7Canvas />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
        <Page13 />
        <Page14 />
      </div>
    </>
  );
}
