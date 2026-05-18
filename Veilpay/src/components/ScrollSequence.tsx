import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MeshGrid from './MeshGrid';
import IPhoneMockup from './IPhoneMockup';
import SilverCoin from './SilverCoin';
import VolumetricGlow from './VolumetricGlow';
import FeatureCards from './FeatureCards';

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

    if (!container || !bg || !mesh || !phone || !coins || !glow || !cards || !coinsInner) return;

    // ── Initial states before GSAP takes over ──
    gsap.set(bg, { opacity: 1 });
    gsap.set(mesh, { opacity: 0 });
    gsap.set(phone, { y: '100vh', opacity: 0 });
    gsap.set(coins, { opacity: 1, y: 0 });
    gsap.set(glow, { opacity: 0 });
    gsap.set(cards, { opacity: 0, y: 20 });

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
    // Heavy upward parallax on coins → drive out of viewport
    tl.to(
      coins,
      { y: '-120vh', opacity: 0, duration: 0.4, ease: 'power4.in' },
      0.3,
    );

    // Phone translates to fixed right-third position
    tl.to(
      phone,
      { x: '30vw', duration: 0.4, ease: 'power2.out' },
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

      {/* Silver Coins Layer — absolutely positioned, animated by GSAP */}
      <div
        ref={coinsContainerRef}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div ref={coinsInnerRef} className="relative h-full w-full">
          {/* Left large coin */}
          <div className="absolute top-1/2 left-4 md:left-16 lg:left-24 -translate-y-1/2">
            <SilverCoin size={96} />
          </div>
          {/* Right large coin */}
          <div className="absolute top-1/2 right-4 md:right-16 lg:right-24 -translate-y-1/2">
            <SilverCoin size={120} />
          </div>
          {/* Mid-top coin */}
          <div className="absolute top-1/4 left-1/4">
            <SilverCoin size={64} />
          </div>
          {/* Mid-bottom coin */}
          <div className="absolute bottom-1/3 right-1/3">
            <SilverCoin size={80} />
          </div>
          {/* Lower left coin */}
          <div className="absolute bottom-10 left-4">
            <SilverCoin size={48} />
          </div>
          {/* Upper right coin */}
          <div className="absolute top-10 right-1/2">
            <SilverCoin size={56} />
          </div>
        </div>
      </div>

      {/* iPhone Mockup Layer (centered, then moves right) */}
      <div ref={phoneRef} className="absolute inset-0 z-20 flex items-center justify-center">
        <IPhoneMockup />
      </div>

      {/* Volumetric Glow Layer (behind phone, above coins) */}
      <VolumetricGlow ref={glowRef} />

      {/* Feature Cards Layer (left side) */}
      <FeatureCards ref={cardsRef} />
    </div>
  );
};

export default React.memo(ScrollSequence);
