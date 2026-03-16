'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/gallery/artwork', label: 'Artwork' },
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

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid var(--border)' }}>
      <style>{`
        .footer-social-icon {
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--text-muted);
          transition: color 0.2s, border-color 0.2s;
        }
        .footer-social-icon:hover {
          color: var(--gold);
          border-color: var(--border-gold);
        }
        .footer-link {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--gold);
        }
        .footer-bottom-link {
          color: var(--text-subtle);
          transition: color 0.2s;
        }
        .footer-bottom-link:hover {
          color: var(--text-muted);
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  color: 'var(--text)',
                  fontWeight: 700,
                }}
              >
                Nick Bronowski
              </div>
              <div
                className="text-xs font-semibold tracking-[0.18em] uppercase mt-0.5"
                style={{ color: 'var(--gold)' }}
              >
                Master Caricaturist
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              London-based master caricaturist with 20+ years of experience bringing laughter and
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
                  <Icon size={15} />
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
                  <Link href={link.href} className="footer-link text-sm">
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

        {/* Divider */}
        <div className="divider-gold my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Nick Bronowski. All rights reserved. All artwork is the
            exclusive intellectual property of Nick Bronowski.
          </p>
          <div className="flex gap-6">
            <a href="#" className="footer-bottom-link text-xs">
              Privacy Policy
            </a>
            <a href="#" className="footer-bottom-link text-xs">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
