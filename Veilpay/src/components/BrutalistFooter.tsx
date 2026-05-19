import React from 'react';

const FOOTER_DATA = [
  {
    title: 'Ecosystem',
    links: [
      { label: 'Chains', href: '#' },
      { label: 'Tokens', href: '#' },
      { label: 'Network Status', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Whitepaper', href: '#' },
      { label: 'APIs', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'X (Twitter)', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

const BrutalistFooter: React.FC = () => {
  return (
    <footer className="relative z-40 w-full bg-black text-white">
      {/* ─────────── Top separation line ─────────── */}
      <div className="w-full border-t border-white/10" />

      {/* ─────────── Primary row: tagline + 3-column grid ─────────── */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-12">
        {/* Left / Tagline */}
        <div className="flex h-full items-start">
          <h3 className="text-2xl font-medium leading-tight text-white">
            Experience the new standard.
          </h3>
        </div>

        {/* Right / 3-column grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {FOOTER_DATA.map((col) => (
            <div key={col.title} className="flex flex-col gap-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-white"
                      style={{
                        transition: 'none',        // zero-duration, brutal
                        textDecoration: 'none',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────── Hero Typographic Centerpiece ─────────── */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <a
          href="#"
          className="group block w-full text-center leading-none"
          aria-label="VeilPay"
        >
          <span
            className="inline-block font-bold tracking-tighter text-transparent transition-all duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent"
            style={{
              fontSize: 'clamp(4rem, 16vw, 14rem)',
              WebkitTextStroke: '1px white',
            }}
          >
            VEILPAY
          </span>
        </a>
      </div>

      {/* ─────────── Terminal legal bar ─────────── */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row md:px-12">
        <span className="text-xs text-neutral-500">
          &copy; 2026 VeilPay.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-neutral-500 hover:text-white"
            style={{ transition: 'none', textDecoration: 'none' }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-xs text-neutral-500 hover:text-white"
            style={{ transition: 'none', textDecoration: 'none' }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(BrutalistFooter);
