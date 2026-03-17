import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nick Bronowski — Master Caricaturist',
    template: '%s | Nick Bronowski',
  },
  description:
    'London-based master caricaturist with 30+ years of experience. Live event caricatures, celebrity commissions, and bespoke artwork. Available worldwide.',
  keywords: [
    'caricaturist',
    'caricature artist',
    'live caricatures',
    'London',
    'celebrity caricatures',
    'wedding entertainment',
    'corporate events',
    'Nick Bronowski',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Nick Bronowski',
    title: 'Nick Bronowski — Master Caricaturist',
    description:
      'London-based master caricaturist with 30+ years experience. Live events, celebrity commissions, bespoke portraits.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Bronowski — Master Caricaturist',
    description:
      'London-based master caricaturist with 30+ years experience. Live events, celebrity commissions, bespoke portraits.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {/* Global film grain overlay — subtle cinematic texture sitewide */}
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundImage:
              'url("https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png")',
            backgroundSize: '180px 180px',
            backgroundRepeat: 'repeat',
            opacity: 0.038,
            pointerEvents: 'none',
            zIndex: 9998,
            mixBlendMode: 'overlay',
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
