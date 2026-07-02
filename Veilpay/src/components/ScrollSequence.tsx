import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MeshGrid from './MeshGrid';
import IPhoneMockup from './IPhoneMockup';
import CoinsScene from './CoinsScene';
import VolumetricGlow from './VolumetricGlow';
import FeatureCards from './FeatureCards';
import HeroTitle from './HeroTitle';
import AmbientDust from './AmbientDust';

gsap.registerPlugin(ScrollTrigger);

const ScrollSequence: React.FC = () => {
  // Main container ref for the pinned scroll section
  const containerRef = useRef<HTMLDivElement>(null);
  // Element refs for GSAP targeting
  const bgOverlayRef = useRef<HTMLDivElement>(null);
  const meshGridRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const coinsContainerRef = useRef<HTMLDivElement>(null);
  const coinsInnerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleBRef = useRef<HTMLDivElement>(null);

  // Track refs to avoid re-runs without cleanup
  const stRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const bg = bgOverlayRef.current;
    const mesh = meshGridRef.current;
    const phone = phoneRef.current;
    const coins = coinsContainerRef.current;
    const glow = glowRef.current;
    const cards = cardsRef.current;
    const coinsInner = coinsInnerRef.current;
    const title = titleRef.current;
    const titleB = titleBRef.current;

    if (!container || !bg || !mesh || !phone || !coins || !glow || !cards || !coinsInner || !title || !titleB) return;

    // ── Initial states before GSAP takes over ──
    gsap.set(bg, { opacity: 1 });
    gsap.set(mesh, { opacity: 0 });
    gsap.set(phone, { y: '100vh', opacity: 0 });
    gsap.set(coins, { opacity: 1, y: 0 });
    gsap.set(glow, { opacity: 0 });
    gsap.set(title, { opacity: 1, y: 0 });
    gsap.set(titleB, { opacity: 0, y: 0 });

    // ── Create a master timeline driven by scroll ──
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=3000',
        pin: true,
        scrub: 0.5,
      },
    });

    stRef.current = tl.scrollTrigger as ScrollTrigger;

    // ═════════════════════════════════════════════
    // STAGE 1: Hero Entrance (0% - 30%)
    // ═════════════════════════════════════════════
    // Background crossfade: pure black → mesh grid
    tl.to(
      bg,
      { opacity: 0, duration: 0.3, ease: 'power2.inOut' },
      0,
    );
    tl.to(
      mesh,
      { opacity: 1, duration: 0.3, ease: 'power2.inOut' },
      0,
    );

    // Phone rises from off-screen bottom to center
    tl.to(
      phone,
      { y: 0, opacity: 1, duration: 0.3, ease: 'expo.out' },
      0,
    );

    // Coins scale-up and outward radial expansion for kinetic depth
    tl.to(
      coinsInner,
      { scale: 1.2, duration: 0.3, ease: 'power2.out' },
      0,
    );

    // ═════════════════════════════════════════════
    // STAGE 2: Layout Split & Parallax (30% - 70%)
    // ═════════════════════════════════════════════
    // Title A (HeroTitle) fades out and moves up from 0.2 to 0.4
    tl.to(
      title,
      { y: '-30vh', opacity: 0, duration: 0.2, ease: 'power2.inOut' },
      0.2,
    );

    // Title B (State B) fades in and moves up slightly from 0.4 to 0.6
    tl.fromTo(
      titleB,
      { y: '30vh', opacity: 0 },
      { y: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
      0.4,
    );

    // Heavy upward parallax on coins → drive out of viewport
    tl.to(
      coins,
      { y: '-120vh', opacity: 0, duration: 0.4, ease: 'power4.in' },
      0.3,
    );

    // Phone translates to fixed right-third position (0.2 to 0.6)
    const phoneShift = window.innerWidth > 768 ? '25vw' : '10vw';
    tl.to(
      phone,
      { x: phoneShift, duration: 0.4, ease: 'power2.inOut' },
      0.2,
    );

    // ═════════════════════════════════════════════
    // STAGE 3: Atmospheric Lighting & Content (70% - 100%)
    // ═════════════════════════════════════════════
    // Fade in volumetric glow behind the phone
    tl.to(
      glow,
      { opacity: 1, duration: 0.15, ease: 'power2.out' },
      0.7,
    );

    // Fade in glassmorphism feature cards on the left with staggered fanned entrance
    tl.fromTo(
      cards.children,
      { opacity: 0, y: 40, rotation: 0 },
      { 
        opacity: 1, 
        y: (i) => (i === 1 ? 0 : 12), 
        rotation: (i) => (i === 0 ? -6 : i === 1 ? 0 : 6), 
        duration: 0.2, 
        stagger: 0.05, 
        ease: 'power2.out' 
      },
      0.7,
    );

    return () => {
      if (stRef.current) {
        stRef.current.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ willChange: 'transform' }}
    >
      {/* Stage 0: Pure OLED Black Background Layer */}
      <div
        ref={bgOverlayRef}
        className="absolute inset-0 z-0 bg-black"
        style={{ opacity: 1 }}
      />

      {/* Stage 1: Mesh Square Grid (fades in over black) */}
      <div ref={meshGridRef} className="absolute inset-0 z-0 opacity-0">
        <MeshGrid />
      </div>

      {/* Ambient Floating Dust */}
      <AmbientDust />

      {/* 3D Coins Layer — animated by GSAP */}
      <div
        ref={coinsContainerRef}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div ref={coinsInnerRef} className="relative h-full w-full">
          <CoinsScene />
        </div>
      </div>

      {/* iPhone Mockup Layer (centered, then moves right) */}
      <div ref={phoneRef} className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mt-[25vh] md:mt-[30vh]">
        <IPhoneMockup />
      </div>

      {/* Hero Title Layer A (center) */}
      <div ref={titleRef} className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center -mt-[15vh]">
        <HeroTitle />
      </div>

      {/* Hero Title Layer B (left side, appears after phone moves right) */}
      <div ref={titleBRef} className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">One Wallet.</span> <br/>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(251,191,36,0.2)]">Every Chain.</span>
          </h2>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-full py-2 px-4 w-fit backdrop-blur-md">
            <span className="text-sm font-medium text-gray-300">Seamless Cross-Chain Freedom</span>
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                <img src="/cryptos/btc.svg" alt="BTC" className="w-4 h-4" />
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                <img src="/cryptos/eth.svg" alt="ETH" className="w-4 h-4" />
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
                <img src="/cryptos/sol.svg" alt="SOL" className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volumetric Glow Layer (behind phone, above coins) */}
      <VolumetricGlow ref={glowRef} />

      {/* Feature Cards Layer (left side) */}
      <FeatureCards ref={cardsRef} />
    </div>
  );
};

export default React.memo(ScrollSequence);
