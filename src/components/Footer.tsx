'use client';

import Link from 'next/link';
import Image from 'next/image';
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/shop', label: 'Shop' },
  { href: '/#contact', label: 'Contact' },
];

const services = [
  'Corporate Events',
  'Wedding Entertainment',
  'Private Parties',
  'Celebrity Commissions',
  'Bespoke Portraits',
  'Digital Caricatures',
];

function IgIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
function FbIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function LiIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const socials = [
  { Icon: IgIcon, href: '#', label: 'Instagram' },
  { Icon: FbIcon, href: '#', label: 'Facebook' },
  { Icon: LiIcon, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--border)' }}>
      <style>{`
        .footer-social-icon {
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .footer-social-icon:hover {
          color: var(--gold);
          border-color: var(--border-gold);
          background: var(--gold-dim);
        }
        .footer-link {
          color: var(--text-muted);
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--gold); }
        .footer-bottom-link {
          color: var(--text-subtle);
          font-size: 0.75rem;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: var(--text-muted); }
      `}</style>

      {/* Signature banner */}
      <div
        className="border-b flex items-center justify-center py-10"
        style={{ borderColor: 'var(--border)' }}
      >
        <Link href="/">
          <Image
            src="/signature.png"
            alt="Nick Bronowski"
            width={340}
            height={170}
            className="object-contain"
            style={{ height: '80px', width: 'auto', mixBlendMode: 'screen', opacity: 0.7 }}
          />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              London-based master caricaturist with 30+ years of experience bringing laughter and
              unforgettable artistry to events worldwide. Trusted by broadcasters, rock stars, and
              world leaders.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--gold)' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: 'var(--gold)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Nick Bronowski. All rights reserved. All artwork is the
            exclusive intellectual property of Nick Bronowski.
          </p>
          <div className="flex gap-6">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
