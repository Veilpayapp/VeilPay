import React, { forwardRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe } from 'lucide-react';

const FeatureCards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="pointer-events-auto absolute left-8 top-1/2 z-20 w-full max-w-md -translate-y-1/2 p-4 md:left-16 lg:left-24"
      style={{ opacity: 0 }}
    >
      <div className="flex flex-col gap-6">
        <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Card className="relative overflow-hidden border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl hover:border-amber-400/50 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                <ShieldCheck className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Zero-Knowledge Security</h3>
              <p className="text-sm font-light leading-relaxed text-gray-300">
                End-to-end encrypted messaging and transactions. Your private keys never leave your device.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <Card className="relative overflow-hidden border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl hover:border-amber-400/50 transition-colors duration-300">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                <Globe className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Global Accessibility</h3>
              <p className="text-sm font-light leading-relaxed text-gray-300">
                We support your chain, your language, and your lifestyle globally, instantaneously.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
});

FeatureCards.displayName = 'FeatureCards';

export default React.memo(FeatureCards);
