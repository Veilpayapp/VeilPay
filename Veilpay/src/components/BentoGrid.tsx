import React, { forwardRef } from 'react';
import { BentoGrid as MagicGrid, BentoCard } from '@/components/ui/bento-grid';
import { ShieldCheck, ArrowDownCircle, Globe, Image } from 'lucide-react';

const BentoGrid = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 mt-[4vh]"
    >
      <MagicGrid className="w-full max-w-5xl auto-rows-[200px] grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Wide Card - ZK Proofs */}
        <BentoCard
          name="ZK Proofs"
          className="col-span-1 md:col-span-2 md:row-span-2 bento-card border border-amber-500/20 bg-[#111]/80 backdrop-blur-xl shadow-2xl rounded-3xl"
          Icon={ShieldCheck}
          description="End-to-end encrypted transactions using Zero-Knowledge proofs. Your private keys stay yours."
          href="#security"
          cta="Learn more"
          background={
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.5)] opacity-20 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -top-24 -right-24 h-80 w-80 bg-amber-500/10 blur-[90px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500" />
            </div>
          }
        />

        {/* Square Card - Stealth Address */}
        <BentoCard
          name="Stealth Address"
          className="col-span-1 md:col-span-1 md:row-span-1 bento-card border border-amber-500/20 bg-[#141414]/80 backdrop-blur-xl shadow-xl rounded-3xl"
          Icon={ArrowDownCircle}
          description="One-time generated addresses breaking all on-chain linkability."
          href="#stealth"
          cta="Explore privacy"
          background={<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 pointer-events-none" />}
        />

        {/* Square Card - Multi-Chain */}
        <BentoCard
          name="Multi-Chain"
          className="col-span-1 md:col-span-1 md:row-span-1 bento-card border border-amber-500/20 bg-[#111111]/80 backdrop-blur-xl shadow-xl rounded-3xl"
          Icon={Globe}
          description="Seamless support for all major chains within a single vault."
          href="#ecosystem"
          cta="See supported chains"
          background={<div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent pointer-events-none" />}
        />

        {/* Wide Footer Card - Image Placeholder */}
        <BentoCard
          name="Visual Analytics"
          className="col-span-1 md:col-span-3 md:row-span-1 bento-card border border-amber-500/20 bg-[#111111]/80 backdrop-blur-xl shadow-xl rounded-3xl"
          Icon={Image}
          description="Your complete financial overview in one beautifully designed dashboard."
          href="#dashboard"
          cta="View preview"
          background={
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop" 
                alt="Dashboard preview" 
                className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay group-hover:opacity-60 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 transform-gpu group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent pointer-events-none" />
            </div>
          }
        />

      </MagicGrid>
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';

export default React.memo(BentoGrid);
