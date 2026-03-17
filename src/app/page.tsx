'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Pen,
  Zap,
  Globe,
  Palette,
  ChevronDown,
  Star,
  Send,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import GalleryGrid from '@/components/GalleryGrid';
import { artworkItems } from '@/data/artwork';
import { Hero } from '@/components/ui/hero';

/* ═══════════════════════ DATA ═══════════════════════ */

const trustedBy = ['BBC', 'Rock-It Logistics', 'The Dorchester', 'GM Motors', "Lord's Cricket Ground", 'Wembley Arena', 'Channel 4'];

const features = [
  { Icon: Pen, title: 'Traditional Art', description: 'Each caricature is hand-drawn on quality A3 paper — a genuine, tactile keepsake your guests will treasure for years.' },
  { Icon: Zap, title: 'Lightning Fast', description: 'Nick produces 9–11 caricatures per hour at live events, ensuring every guest gets their moment without long waits.' },
  { Icon: Globe, title: 'London Based & Global', description: 'Based in London and available worldwide. Nick has entertained at events across Europe, the USA, and beyond.' },
  { Icon: Palette, title: 'Adaptable Style', description: 'From quick pencil sketches to detailed watercolour commissions — every piece is tailored to suit the occasion.' },
];

const testimonials = [
  { quote: "Nick was absolutely fantastic at our event. Professional, talented, and the guests couldn't stop talking about their caricatures. We'll definitely book him again.", name: 'BBC Events Team', role: 'Corporate Event, London', stars: 5 },
  { quote: "The caricature Nick created for me is incredible — he captured everything perfectly. Hand-delivered backstage at Wembley. Totally exceeded my expectations.", name: 'Tommy Lee', role: 'Mötley Crüe', stars: 5 },
  { quote: 'Nick delivered an absolutely stunning bespoke commission for our corporate retirement gift. The attention to detail and creativity was extraordinary.', name: 'Rock-It Logistics', role: 'Bespoke Commission', stars: 5 },
];

const faqs = [
  { q: 'How far in advance should I book Nick?', a: 'Nick is in high demand, especially for summer and festive season events. We recommend booking at least 4–8 weeks in advance, though last-minute enquiries are always welcome — contact us to check availability.' },
  { q: 'How many caricatures can Nick draw per hour?', a: 'At live events, Nick typically produces 9–11 caricatures per hour. The exact number can vary slightly depending on the complexity requested and the style of the event.' },
  { q: 'Does Nick travel outside of London?', a: 'Absolutely. Nick is based in London but available for events throughout the UK and internationally. Travel and accommodation costs for distant events are discussed during the booking process.' },
  { q: 'Can I commission a caricature without attending an event?', a: 'Yes — Nick offers bespoke studio commissions based on photographs you supply. These range from individual portrait caricatures to complex group pieces and themed artworks.' },
  { q: 'What format are live event caricatures produced in?', a: 'Live caricatures are drawn by hand in pencil on quality A3 paper. Each piece is an original artwork. Digital formats and colour options are also available — please enquire for details.' },
  { q: 'Is a deposit required to secure a booking?', a: 'Yes, a deposit is required to hold your date. Full details including deposit amount and payment terms are confirmed at the time of booking.' },
];

const galleryPreview = artworkItems.slice(0, 6);

/* ═══════════════════════ COMPONENTS ═══════════════════════ */

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden transition-all duration-200"
          style={{
            background: 'var(--card)',
            border: openIndex === i ? '1px solid var(--border-gold)' : '1px solid var(--border)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
          >
            <span className="font-medium text-sm md:text-base" style={{ color: 'var(--text)' }}>{faq.q}</span>
            <ChevronDown
              size={18}
              className="shrink-0 transition-transform duration-300"
              style={{ color: 'var(--gold)', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
          {openIndex === i && (
            <div className="px-6 pb-6">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', enquiryType: '', eventDate: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border-gold)' }}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'var(--gold-dim)' }}>
          <CheckCircle2 size={32} style={{ color: 'var(--gold)' }} />
        </div>
        <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Message Received</h3>
        <p className="text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>Thank you for your enquiry. Nick will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="John" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Smith" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} required />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enquiryType">Enquiry Type</label>
          <select id="enquiryType" value={form.enquiryType} onChange={(e) => setForm({ ...form, enquiryType: e.target.value })} required>
            <option value="">Select type...</option>
            <option value="corporate">Corporate Event</option>
            <option value="wedding">Wedding</option>
            <option value="private">Private Party</option>
            <option value="commission">Bespoke Commission</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="eventDate">Event Date (if applicable)</label>
          <input id="eventDate" type="date" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} />
        </div>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={5} placeholder="Tell Nick about your event or commission..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required style={{ resize: 'vertical' }} />
      </div>
      <button type="submit" className="btn-gold w-full justify-center py-3.5">
        <Send size={15} /> Send Enquiry
      </button>
    </form>
  );
}

/* ═══════════════════════ PAGE ═══════════════════════ */

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <Hero>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left copy */}
          <div className="max-w-xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-wider uppercase"
              style={{ background: 'var(--gold-dim)', border: '1px solid var(--border-gold)', color: 'var(--gold)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
              London-Based · Available Worldwide
            </div>

            <h1
              className="mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 1.08, color: 'var(--text)' }}
            >
              Art That <em className="not-italic gradient-text">Captures</em><br />Every Character
            </h1>

            <p className="text-base sm:text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              With over 20 years of mastery, Nick Bronowski creates unforgettable live caricatures and bespoke commissioned artwork. From Wembley Arena backstage to charity galas, his art leaves a lasting impression.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link href="/#contact" className="btn-gold">Check Availability <ArrowRight size={15} /></Link>
              <Link href="/gallery" className="btn-outline">View Portfolio</Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {[{ value: '30+', label: 'Years Experience' }, { value: '5,000+', label: 'Caricatures Drawn' }, { value: '300+', label: 'Events Worldwide' }].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}>{value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--border)', boxShadow: '0 40px 80px rgba(0,0,0,0.5)' }}
              >
                <Image
                  src="/TommyCopyright20251216_174543.jpg"
                  alt="Tommy Lee — Mötley Crüe caricature by Nick Bronowski"
                  width={440}
                  height={550}
                  className="block"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              {/* Badge */}
              <div
                className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-10 px-5 py-3 rounded-xl"
                style={{ background: 'var(--card)', border: '1px solid var(--border-gold)', boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ background: 'var(--gold-dim)' }}>✏️</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--gold)' }}>30+ Years</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* ── TRUSTED BY (scrolling marquee) ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="py-10 overflow-hidden">
          <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase mb-8" style={{ color: 'var(--text-subtle)' }}>Trusted by</p>
          <div className="relative flex">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--surface), transparent)' }} />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--surface), transparent)' }} />
            <div
              className="flex gap-x-16 shrink-0 items-center"
              style={{ animation: 'marquee 28s linear infinite' }}
            >
              {[...trustedBy, ...trustedBy].map((brand, i) => (
                <span key={i} className="text-sm font-semibold tracking-wide whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
              <Image
                src="/RockitCopyright.jpg"
                alt="Beatles-themed commission by Nick Bronowski"
                width={640}
                height={800}
                className="block w-full"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -top-5 -right-5 px-6 py-4 rounded-xl text-center"
              style={{ background: 'var(--card)', border: '1px solid var(--border-gold)', boxShadow: '0 12px 32px rgba(0,0,0,0.4)' }}
            >
              <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}>5,000+</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Caricatures Drawn</div>
            </div>
          </div>
          <div>
            <div className="section-label mb-4">About Nick</div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--text)' }}>
              Two Decades of Artistry, <em className="not-italic gradient-text">One Unforgettable Craft</em>
            </h2>
            <div className="space-y-4 mb-10" style={{ color: 'var(--text-muted)' }}>
              <p className="leading-relaxed">Nick Bronowski is one of the UK&apos;s most sought-after caricaturists, with over 20 years of experience bringing laughter and lasting memories to events of every scale. From intimate charity galas to major corporate celebrations, his quick wit and artistic precision have made him a firm favourite.</p>
              <p className="leading-relaxed">His portfolio spans the full spectrum of human achievement — rock legends, prime ministers, cricket groundskeepers, and Tuscan winemakers. Every face tells a story, and Nick tells it with a pencil.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-gold">Read Full Story <ArrowRight size={15} /></Link>
              <Link href="/#contact" className="btn-outline">Book an Event</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Why Choose Nick</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}>What Sets Nick Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ Icon, title, description }) => (
              <div key={title} className="card p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'var(--gold-dim)', border: '1px solid var(--border-gold)' }}>
                  <Icon size={22} style={{ color: 'var(--gold)' }} />
                </div>
                <h3 className="mb-3 text-lg" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="section-label mb-4">Gallery</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}>Selected Works</h2>
            </div>
            <Link href="/gallery" className="btn-outline shrink-0">View Full Gallery <ArrowRight size={15} /></Link>
          </div>
          <GalleryGrid items={galleryPreview} showFilters={false} />
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0a04 0%, #181206 50%, #0d0a04 100%)', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-24 text-center">
          <h2 className="mb-5" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--text)' }}>
            Ready to Make Your Event <em className="not-italic gradient-text">Unforgettable?</em>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'var(--text-muted)' }}>Whether you&apos;re planning a corporate gala, wedding, or private party — Nick Bronowski delivers artistry that guests talk about for years.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn-gold">Book Nick for Your Event <ArrowRight size={15} /></Link>
            <Link href="/gallery" className="btn-outline">View the Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Testimonials</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}>What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-8" style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{t.name}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--gold)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-28">
          <div className="text-center mb-14">
            <div className="section-label mb-4">FAQ</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-28">
          <div className="text-center mb-16">
            <div className="section-label mb-4">Get in Touch</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--text)' }}>Book Nick or Enquire</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <p className="text-lg mb-10 leading-relaxed" style={{ color: 'var(--text-muted)' }}>Ready to bring extraordinary artistry to your event? Whether you&apos;re looking for live caricatures at a corporate event, wedding entertainment, or a bespoke commission — Nick would love to hear from you.</p>
              <div className="space-y-6">
                {[
                  { Icon: Mail, label: 'Email', value: 'hello@nickbronowski.com' },
                  { Icon: Phone, label: 'Phone', value: '+44 (0) 7XXX XXX XXX' },
                  { Icon: MapPin, label: 'Based in', value: 'London, UK — Available Worldwide' },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'var(--gold-dim)', border: '1px solid var(--border-gold)' }}>
                      <Icon size={17} style={{ color: 'var(--gold)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-wider uppercase mb-1" style={{ color: 'var(--text-subtle)' }}>{label}</div>
                      <div className="text-sm" style={{ color: 'var(--text)' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-6 rounded-xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                <div className="section-label mb-2">Response Time</div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Nick personally responds to all enquiries within 24 hours during business days.</p>
              </div>
            </div>
            <div className="p-8 sm:p-10 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: '#050505', borderTop: '1px solid var(--border)' }}>
        <div className="max-w-xl mx-auto px-6 sm:px-10 py-20 text-center">
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text)' }}>Stay Updated</h3>
          <p className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>New commissions, behind-the-scenes sketches, and event highlights — delivered to your inbox.</p>
          <form className="flex gap-3 flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="flex-1" />
            <button type="submit" className="btn-gold shrink-0 py-3 px-6">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
