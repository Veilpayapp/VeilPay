import React, { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Globe, Zap } from 'lucide-react';

const FeatureCards = forwardRef<HTMLDivElement>((_, ref) => {
  const cards = [
    {
      icon: <ShieldCheck className="h-7 w-7 text-white" />,
      title: "Zero-Knowledge Security",
      desc: "End-to-end encrypted messaging and transactions. Your private keys never leave your device."
    },
    {
      icon: <Globe className="h-7 w-7 text-white" />,
      title: "Global Accessibility",
      desc: "We support your chain, your language, and your lifestyle globally, instantaneously."
    },
    {
      icon: <Zap className="h-7 w-7 text-white" />,
      title: "Instant Settlement",
      desc: "Lightning-fast transactions across all supported chains with virtually zero fees."
    }
  ];

  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute left-4 md:left-12 top-1/2 z-20 w-full max-w-4xl -translate-y-1/2 flex flex-row items-center justify-center md:justify-start gap-4 md:gap-8 px-4"
    >
      {cards.map((c, i) => (
        <div key={i} className="relative w-full max-w-[280px]" style={{ zIndex: cards.length - Math.abs(1 - i) }}>
          <Card className="relative overflow-hidden border border-amber-500/20 bg-[#141414]/60 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:rotate-x-2 hover:shadow-[0_0_40px_rgba(240,165,0,0.3)] hover:border-amber-400/50 rounded-2xl group">
            <CardContent className="p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_0_20px_rgba(251,191,36,0.4)] group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{c.title}</h3>
              <p className="text-[15px] font-normal leading-relaxed text-[#a8a8a8]">
                {c.desc}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
});

FeatureCards.displayName = 'FeatureCards';

export default React.memo(FeatureCards);
