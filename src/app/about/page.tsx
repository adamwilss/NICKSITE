import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import { artworkItems } from '@/data/artwork';

export const metadata: Metadata = {
  title: 'About Nick Bronowski',
  description:
    'Meet Nick Bronowski — master caricaturist with 20+ years of experience, 5,000+ caricatures drawn, and a client list that includes rock legends, prime ministers, and global corporations.',
};

const stats = [
  { value: '20+', label: 'Years Experience' },
  { value: '5,000+', label: 'Caricatures Drawn' },
  { value: '300+', label: 'Events Worldwide' },
  { value: '12', label: 'Countries' },
];

const features = [
  {
    title: 'Unmatched Versatility',
    description:
      'From lightning-fast pencil sketches at live events to meticulously detailed watercolour commissions — Nick adapts his style to suit any occasion, brief, or budget.',
  },
  {
    title: 'Trusted by the Best',
    description:
      'His client list includes rock legends like Tommy Lee, distinguished figures like Jon Snow and Rabbi Lord Jonathan Sacks, and global organisations including the BBC, The Dorchester, and Rock-It Logistics.',
  },
  {
    title: 'True Craftsmanship',
    description:
      'Every piece is created by hand, with genuine artistic skill. Nick believes in the power of original art — not prints, not digital shortcuts — just pencil, paper, and 20 years of practice.',
  },
  {
    title: 'A Gentleman Artist',
    description:
      "Clients consistently remark on Nick's warmth, professionalism, and ability to put subjects at ease. He's as approachable as he is talented — the ideal guest experience.",
  },
];

const testimonials = [
  {
    quote:
      "The caricature Nick drew of me was absolutely perfect. He captured everything — the personality, the humour, the likeness. He is an absolute gentleman.",
    name: 'Charlotte Hawkins',
    role: 'TV Presenter, Good Morning Britain',
    stars: 5,
  },
  {
    quote:
      "I've been drawn by many artists over the years, but Nick's work stands apart. There's a real humanity in his line work that's rare to find.",
    name: 'Jon Snow',
    role: 'Journalist & Broadcaster',
    stars: 5,
  },
  {
    quote:
      "The caricature Nick created for me is incredible — he captured everything perfectly. Hand-delivered backstage at Wembley. Totally exceeded my expectations.",
    name: 'Tommy Lee',
    role: 'Mötley Crüe',
    stars: 5,
  },
];

const galleryHighlights = artworkItems.slice(0, 6);

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="section-label mb-4">The Artist</div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            About{' '}
            <span className="gradient-text">Nick Bronowski</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Master caricaturist. Storyteller. The artist who gets invited backstage by rock legends
            and draws prime ministers at political galas.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative lg:sticky lg:top-28">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/5', border: '1px solid var(--border)' }}
            >
              <Image
                src="/TommyLeeDeadmaus220260314_133632.jpg"
                alt="Nick Bronowski with Tommy Lee backstage at Wembley Arena"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-6">
            <div className="section-label">Biography</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                color: 'var(--text)',
              }}
            >
              From the First Pencil Stroke to Wembley Backstage
            </h2>
            <div className="space-y-5 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <p>
                Nick Bronowski has been creating caricatures professionally for over two decades. What
                began as a childhood obsession with capturing faces — their quirks, their character,
                their unspoken stories — evolved into one of the UK&apos;s most distinguished caricature
                practices.
              </p>
              <p>
                His work spans the full breadth of human experience. He has sketched Jon Snow live at a
                political awards ceremony (&ldquo;an absolute gentleman,&rdquo; Nick recalls). He hand-delivered a
                commissioned portrait backstage at Wembley Arena to Tommy Lee of Mötley Crüe. He drew
                Charlotte Hawkins at a London charity gala, Rabbi Lord Jonathan Sacks at a private
                event, and Jason &lsquo;Foxy&rsquo; Fox at a military charity evening.
              </p>
              <p>
                Beyond events, Nick&apos;s studio commissions take him across the globe — watercolour pieces
                for families in Switzerland, personalised wine labels for Tuscan vineyards, group
                caricatures for corporate retirements, and Christmas cards for families in the USA.
              </p>
              <p>
                Each piece is entirely handmade — pencil or watercolour on paper. Nick believes
                passionately in the integrity of original artwork. No filters, no digital shortcuts.
                Just decades of practice and an unshakeable commitment to capturing the truth of every
                face he draws.
              </p>
              <p>
                When not at events, Nick runs a thriving commissions practice, collaborating closely
                with clients to produce personalised artworks that tell specific stories — from
                corporate anniversaries to family milestones, from retirement gifts to brand
                mascots.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/#contact" className="btn-gold">
                Book Nick
                <ArrowRight size={15} />
              </Link>
              <Link href="/gallery" className="btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-16"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-4xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
                >
                  {value}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">What Makes Nick Different</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Art With Character
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ title, description }) => (
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

      {/* Gallery highlights */}
      <section
        className="py-24"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="section-label mb-4">Selected Works</div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: 'var(--text)',
                }}
              >
                Gallery Highlights
              </h2>
            </div>
            <Link href="/gallery" className="btn-outline shrink-0">
              Full Gallery
              <ArrowRight size={15} />
            </Link>
          </div>
          <GalleryGrid items={galleryHighlights} showFilters={false} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Testimonials</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              What They Say
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

      {/* CTA Band */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0d0a04 0%, #181206 50%, #0d0a04 100%)',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-gold)',
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
            Book Nick for Your{' '}
            <em className="not-italic gradient-text">Next Event</em>
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
            Available for corporate events, weddings, private parties, and bespoke commissions
            throughout the UK and worldwide.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn-gold">
              Book Now
              <ArrowRight size={15} />
            </Link>
            <Link href="/gallery" className="btn-outline">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
