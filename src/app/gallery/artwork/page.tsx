import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import { artworkItems } from '@/data/artwork';

export const metadata: Metadata = {
  title: 'Artwork',
  description:
    "Nick Bronowski's artwork — detailed caricature portraits, studio commissions, and event sketches. Every piece is original, hand-drawn art.",
};

const artFeatures = [
  {
    title: 'Hand-Drawn Originals',
    description:
      'Every piece is created by hand — pencil on paper or watercolour — never digitally generated. Each artwork is a genuine, one-of-a-kind original.',
  },
  {
    title: 'Flexible Styles',
    description:
      'Nick works across a range of styles: quick gestural sketches for live events, detailed pencil portraits for commissions, and vibrant watercolour paintings for bespoke pieces.',
  },
  {
    title: 'Bespoke Commissions',
    description:
      'Studio commissions are developed in close collaboration with clients. Whether a single portrait or a complex group scene, Nick brings your vision to life with precision and personality.',
  },
];

const testimonials = [
  {
    quote:
      "Nick's artwork is extraordinary — there's a true mastery in every line. He captures character with extraordinary precision.",
    name: 'Charlotte Hawkins',
    role: 'TV Presenter',
    stars: 5,
  },
  {
    quote:
      'The commission was beyond anything I expected. Nick understood exactly what I wanted and delivered something truly special.',
    name: 'Rock-It Logistics',
    role: 'Corporate Commission',
    stars: 5,
  },
  {
    quote:
      'An artist who truly understands people. Every face in his portfolio tells a complete story.',
    name: 'Jon Snow',
    role: 'Journalist & Broadcaster',
    stars: 5,
  },
];

export default function ArtworkPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div
        className="pt-24 pb-4"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <Link
              href="/gallery"
              className="transition-colors hover:text-[var(--gold)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Gallery
            </Link>
            <span style={{ color: 'var(--border)' }}>/</span>
            <span style={{ color: 'var(--gold)' }}>Artwork</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="section-label mb-4">Original Art</div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            The <span className="gradient-text">Artwork</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Browse Nick&apos;s complete portfolio of original caricature art — every piece handmade, every
            face a story told in lines.
          </p>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="py-16" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <GalleryGrid items={artworkItems} showFilters={true} />
        </div>
      </section>

      {/* Artistic approach */}
      <section
        className="py-24"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">The Approach</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Artistry Behind the Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artFeatures.map(({ title, description }) => (
              <div key={title} className="card p-8">
                <div className="w-8 h-0.5 mb-5" style={{ background: 'var(--gold)' }} />
                <h3
                  className="mb-3 text-xl"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Feedback</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              What Clients Say
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
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
              color: 'var(--text)',
            }}
          >
            Own an{' '}
            <em className="not-italic gradient-text">Original Bronowski</em>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Commission a piece that captures someone or something meaningful to you. Bespoke art made
            to last a lifetime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn-gold">
              Commission Now
              <ArrowRight size={15} />
            </Link>
            <Link href="/shop" className="btn-outline">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
