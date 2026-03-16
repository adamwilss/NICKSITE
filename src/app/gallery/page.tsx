import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import GalleryFAQ from '@/components/GalleryFAQ';
import { artworkItems } from '@/data/artwork';

export const metadata: Metadata = {
  title: 'Gallery — The Art',
  description:
    "Browse Nick Bronowski's full portfolio of caricature art — celebrity portraits, live event sketches, studio commissions, and bespoke watercolour paintings.",
};

const testimonials = [
  {
    quote:
      "Nick was absolutely fantastic at our event. Professional, talented, and the guests couldn't stop talking about their caricatures.",
    name: 'BBC Events Team',
    role: 'Corporate Event, London',
    stars: 5,
  },
  {
    quote:
      "The caricature Nick created for me is incredible — he captured everything perfectly. Hand-delivered backstage at Wembley. Totally exceeded my expectations.",
    name: 'Tommy Lee',
    role: 'Mötley Crüe',
    stars: 5,
  },
  {
    quote:
      'Nick delivered an absolutely stunning bespoke commission for our corporate retirement gift. Extraordinary creativity and attention to detail.',
    name: 'Rock-It Logistics',
    role: 'Bespoke Commission',
    stars: 5,
  },
];

const commissionFaqs = [
  {
    q: 'Can I commission a caricature from a photograph?',
    a: "Yes — Nick accepts studio commissions based on photographs. High-quality, well-lit reference photos work best. Nick will advise on the best reference images once you've made contact.",
  },
  {
    q: 'How long does a commission take?',
    a: 'Turnaround depends on complexity and current demand. A single portrait caricature typically takes 1–2 weeks. Complex multi-figure or themed commissions may take 3–4 weeks. Rush commissions can sometimes be accommodated — please enquire.',
  },
  {
    q: 'What formats and sizes are available?',
    a: 'Standard commissions are produced on A3 or A2 quality paper in pencil or watercolour. Larger formats and digital files are available on request.',
  },
  {
    q: 'Do you offer digital caricatures?',
    a: 'Yes, digital versions are available for commissions and can be delivered as high-resolution files suitable for print, web, or social media use.',
  },
  {
    q: 'How much does a commission cost?',
    a: 'Commission pricing is based on complexity, number of subjects, style, and intended use. Please use the contact form for a personalised quote.',
  },
  {
    q: 'Do you retain copyright on commissioned work?',
    a: "Yes — all artwork remains the intellectual property of Nick Bronowski unless a full copyright transfer is agreed separately. Standard commissions include personal use rights.",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
          <div className="section-label mb-4">Portfolio</div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            The <span className="gradient-text">Art</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Twenty years of caricature artistry — celebrity encounters, live event performances,
            studio commissions, and bespoke creations from around the world.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <GalleryGrid items={artworkItems} showFilters={true} />
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-24"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Testimonials</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Client Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                    {t.name}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--gold)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-12">
            <div className="section-label mb-4">Commissions</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Commission FAQ
            </h2>
          </div>
          <GalleryFAQ faqs={commissionFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d0a04 0%, #181206 50%, #0d0a04 100%)',
          borderTop: '1px solid var(--border-gold)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: 'var(--text)',
            }}
          >
            Commission Your Own{' '}
            <em className="not-italic gradient-text">Original Artwork</em>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Every piece in this gallery started with a conversation. Start yours today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn-gold">
              Start a Commission
              <ArrowRight size={15} />
            </Link>
            <Link href="/shop" className="btn-outline">
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
