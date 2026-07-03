import React, { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Globe, ArrowDownCircle } from 'lucide-react';

const FeatureCards = forwardRef<HTMLDivElement>((_, ref) => {
  const cards = [
    {
      icon: <ShieldCheck className="h-7 w-7 text-white" />,
      title: "STEALTH ADDRESS",
      desc: "Generated one-time addresses for every transaction to break on-chain links."
    },
    {
      icon: <ArrowDownCircle className="h-7 w-7 text-white" />,
      title: "ZK PROOFS",
      desc: "Mathematical privacy guarantees while ensuring total integrity limits."
    },
    {
      icon: <Globe className="h-7 w-7 text-white" />,
      title: "MULTI-CHAIN",
      desc: "Seamless support for EVM, SVM, and MVM ecosystems within a single vault."
    }
  ];

  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 mt-[4vh]"
    >
      <div className="w-full max-w-2xl flex flex-col items-start gap-6">
      {cards.map((c, i) => (
        <div 
          key={i} 
          className={`relative w-full max-w-[350px] ${i === 1 ? 'ml-12 md:ml-32' : 'ml-0'}`} 
          style={{ zIndex: cards.length - i }}
        >
          <Card className="relative overflow-hidden border border-amber-500/20 bg-[#141414]/80 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(240,165,0,0.3)] hover:border-amber-400/50 rounded-2xl group">
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
    </div>
  );
});

FeatureCards.displayName = 'FeatureCards';

export default React.memo(FeatureCards);
