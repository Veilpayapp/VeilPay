import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
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
    title: 'Support',
    links: [
      { label: 'Support', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const bottomLinks: FooterLink[] = [
  { label: 'Copyright © 2026 VeilPay', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const BrutalistFooter: React.FC = () => {
  return (
    <footer
      id="footer"
      className="relative z-40 w-full border-t border-white bg-[#000000] text-white"
    >
      {/* Main 4-column grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-lg font-bold tracking-tight uppercase focus:outline-none"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              VeilPay
            </a>
            <p
              className="mt-2 max-w-xs text-sm font-normal leading-relaxed text-neutral-400"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Crypto infrastructure for the next era of finance.
            </p>
          </div>

          {/* Columns 2-4: Nav + Links */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3
                className="text-sm font-bold uppercase tracking-widest text-white/60"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-sm font-normal text-white no-underline focus:outline-none"
                      style={{
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        textDecorationThickness: '1px',
                        textUnderlineOffset: '2px',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
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

      {/* Bottom sub-bar */}
      <div
        className="w-full border-t border-white/20 bg-[#000000]"
        style={{ borderTopWidth: '1px', borderTopColor: 'rgba(255,255,255,0.2)' }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row md:px-12">
          <span
            className="text-xs font-normal uppercase tracking-widest text-neutral-500"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Copyright &copy; 2026 VeilPay
          </span>
          <div className="flex flex-wrap items-center gap-6">
            {bottomLinks.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-normal uppercase tracking-widest text-neutral-500 no-underline focus:outline-none"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '2px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgb(163,163,163)';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(BrutalistFooter);
