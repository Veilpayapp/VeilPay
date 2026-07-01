import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MeshGrid from './MeshGrid';
import IPhoneMockup from './IPhoneMockup';
import CoinsScene from './CoinsScene';
import VolumetricGlow from './VolumetricGlow';
import FeatureCards from './FeatureCards';
import HeroTitle from './HeroTitle';

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

    if (!container || !bg || !mesh || !phone || !coins || !glow || !cards || !coinsInner || !title) return;

    // ── Initial states before GSAP takes over ──
    gsap.set(bg, { opacity: 1 });
    gsap.set(mesh, { opacity: 0 });
    gsap.set(phone, { y: '100vh', opacity: 0 });
    gsap.set(coins, { opacity: 1, y: 0 });
    gsap.set(glow, { opacity: 0 });
    gsap.set(cards, { opacity: 0, y: 20 });
    gsap.set(title, { opacity: 1, y: 0 });

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
    // Title fades out and moves up
    tl.to(
      title,
      { y: '-50vh', opacity: 0, duration: 0.3, ease: 'power2.in' },
      0.2,
    );

    // Heavy upward parallax on coins → drive out of viewport
    tl.to(
      coins,
      { y: '-120vh', opacity: 0, duration: 0.4, ease: 'power4.in' },
      0.3,
    );

    // Phone translates to fixed right-third position
    const phoneShift = window.innerWidth > 768 ? '25vw' : '10vw';
    tl.to(
      phone,
      { x: phoneShift, duration: 0.4, ease: 'power2.out' },
      0.3,
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

    // Fade in glassmorphism feature cards on the left
    tl.to(
      cards,
      { opacity: 1, y: 0, duration: 0.15, ease: 'power2.out' },
      0.75,
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

      {/* Hero Title Layer (center) */}
      <div ref={titleRef} className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center -mt-[15vh]">
        <HeroTitle />
      </div>

      {/* Volumetric Glow Layer (behind phone, above coins) */}
      <VolumetricGlow ref={glowRef} />

      {/* Feature Cards Layer (left side) */}
      <FeatureCards ref={cardsRef} />
    </div>
  );
};

export default React.memo(ScrollSequence);
