import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Nick Bronowski — Master Caricaturist',
    template: '%s | Nick Bronowski',
  },
  description:
    'London-based master caricaturist with 20+ years of experience. Live event caricatures, celebrity commissions, and bespoke artwork. Available worldwide.',
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
      'London-based master caricaturist with 20+ years experience. Live events, celebrity commissions, bespoke portraits.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nick Bronowski — Master Caricaturist',
    description:
      'London-based master caricaturist with 20+ years experience. Live events, celebrity commissions, bespoke portraits.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
