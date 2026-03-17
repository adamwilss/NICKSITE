'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/shop', label: 'Shop' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-3 border-b'
            : 'py-5',
        )}
        style={{
          backgroundColor: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo — signature */}
          <Link href="/" className="flex items-center">
            <Image
              src="/signature.png"
              alt="Nick Bronowski"
              width={200}
              height={100}
              priority
              className="object-contain transition-opacity duration-200 hover:opacity-80"
              style={{ height: '72px', width: 'auto', mixBlendMode: 'screen', filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium tracking-wide transition-colors duration-200 relative group',
                  pathname === link.href
                    ? 'text-[var(--gold)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text)]',
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'var(--gold)' }}
                  />
                )}
              </Link>
            ))}
            <Link href="/#contact" className="btn-gold text-xs py-2.5 px-5">
              Book Nick
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: 'var(--text)' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 transition-all duration-300 md:hidden',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-72 transition-transform duration-300 ease-in-out md:hidden flex flex-col',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
        )}
        style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
      >
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--border)' }}>
          <Image
            src="/signature.png"
            alt="Nick Bronowski"
            width={160}
            height={80}
            className="object-contain"
            style={{ height: '36px', width: 'auto', mixBlendMode: 'screen' }}
          />
          <button onClick={() => setMobileOpen(false)} style={{ color: 'var(--text-muted)' }}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'px-4 py-3 rounded-lg text-sm font-medium transition-all',
                pathname === link.href
                  ? 'text-[var(--gold)] bg-[var(--gold-dim)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--card)]',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <Link href="/#contact" className="btn-gold w-full justify-center text-xs py-3">
            Book Nick
          </Link>
        </div>
      </div>
    </>
  );
}
