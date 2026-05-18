import React, { forwardRef } from 'react';

const FeatureCards = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-8 top-1/2 z-20 w-full max-w-md -translate-y-1/2 p-4 md:left-16 lg:left-24"
      style={{ opacity: 0 }}
    >
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="feature-card-item relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-2xl border border-white/5" />
          <div className="relative z-10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
              <svg
                className="h-5 w-5 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p className="text-sm font-light leading-relaxed text-gray-200 md:text-base">
              End-to-end encrypted messaging and transactions
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="feature-card-item relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="absolute inset-0 rounded-2xl border border-white/5" />
          <div className="relative z-10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10">
              <svg
                className="h-5 w-5 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-light leading-relaxed text-gray-200 md:text-base">
              We support your chain, your language, your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

FeatureCards.displayName = 'FeatureCards';

export default React.memo(FeatureCards);
