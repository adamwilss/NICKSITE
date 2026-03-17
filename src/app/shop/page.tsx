'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Send,
  ChevronDown,
} from 'lucide-react';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';

const products = [
  {
    id: 'live-event-basic',
    image: '/InShot_20260208_135850007.jpg',
    title: 'Live Event Caricatures',
    description:
      'Nick draws guests face-to-face at your event on quality A3 paper. Each caricature is a unique original. Perfect for corporate events, weddings, and parties.',
    from: '£POA',
    badge: 'Most Popular',
    features: ['A3 pencil originals', '9–11 per hour', 'UK & international', 'Min. 2 hours'],
  },
  {
    id: 'celebrity-portrait',
    image: '/TommyCopyright20251216_174543.jpg',
    title: 'Celebrity Portrait Commission',
    description:
      'Highly detailed pencil caricature portrait of your chosen celebrity or public figure. Ideal as a gift, presentation piece, or collector\'s item.',
    from: 'From £250',
    badge: null,
    features: ['A3 pencil on paper', 'Working from photograph', 'Certificate of authenticity', '2–3 week turnaround'],
  },
  {
    id: 'personal-portrait',
    image: '/CharlotteHawkins.Copyright.jpg',
    title: 'Personal Portrait Commission',
    description:
      'A bespoke caricature portrait of you, a loved one, or a friend. Hand-drawn from photographs you supply. A unique and memorable gift.',
    from: 'From £150',
    badge: 'Great Gift',
    features: ['A3 pencil on paper', 'From your photographs', '1–2 week turnaround', 'Digital version available'],
  },
  {
    id: 'group-commission',
    image: '/GreekCopyright.jpg',
    title: 'Group Commission',
    description:
      'A fun, personalised group caricature for birthdays, retirements, or team gifts. Developed in close collaboration with the client to capture everyone\'s character.',
    from: 'From £350',
    badge: null,
    features: ['Up to 6 subjects', 'A2 pencil or watercolour', 'Bespoke backdrop/scene', '3–4 week turnaround'],
  },
  {
    id: 'watercolour-portrait',
    emoji: '🎨',
    title: 'Watercolour Portrait',
    description:
      'A richly coloured watercolour caricature portrait — vibrant, warm, and full of personality. Suitable for high-end gifts, anniversary presents, or framing.',
    from: 'From £350',
    badge: 'Premium',
    features: ['A3 watercolour on paper', 'Richly coloured', 'Premium materials', '2–3 week turnaround'],
  },
  {
    id: 'corporate-gift',
    emoji: '🏢',
    title: 'Corporate Gift Commission',
    description:
      'Bespoke caricature commissions for retirement gifts, team awards, client gifts, or corporate keepsakes. Branded options available.',
    from: 'From £200',
    badge: null,
    features: ['Any size & style', 'Branded options', 'Multiple copies available', 'Fast turnaround options'],
  },
  {
    id: 'digital-commission',
    emoji: '💻',
    title: 'Digital Caricature',
    description:
      'A high-resolution digital caricature file — perfect for social media profiles, websites, print use, or as a digital keepsake.',
    from: 'From £120',
    badge: null,
    features: ['High-res digital file', 'Any device-ready format', 'Quick turnaround', 'Unlimited use personal licence'],
  },
  {
    id: 'wine-label',
    emoji: '🍷',
    title: 'Wine Label Commission',
    description:
      'A personalised caricature designed specifically for use on a wine label or bottle. A luxurious and memorable gift for wine lovers.',
    from: 'From £300',
    badge: 'Unique',
    features: ['Custom illustration', 'Print-ready files', 'Collaboration throughout', 'As seen in our gallery'],
  },
];

const pricingTiers = [
  {
    name: 'Event Starter',
    price: 'From £POA',
    description: 'Perfect for smaller private parties and intimate events.',
    features: [
      '2-hour minimum booking',
      'Pencil caricatures on A3',
      'UK travel included (London)',
      '9–11 drawings per hour',
    ],
    cta: 'Enquire',
    highlight: false,
  },
  {
    name: 'Event Pro',
    price: 'From £POA',
    description: 'Our most popular package for corporate events and weddings.',
    features: [
      '3–4 hour booking',
      'Pencil caricatures on A3',
      'UK-wide travel',
      'Colour options available',
      'Event planning support',
    ],
    cta: 'Book Now',
    highlight: true,
  },
  {
    name: 'Commission Classic',
    price: 'From £150',
    description: 'Single-subject studio commission from your photographs.',
    features: [
      'A3 pencil original',
      'Up to 2 revision rounds',
      'Certificate of authenticity',
      '1–2 week turnaround',
      'Digital version available',
    ],
    cta: 'Commission',
    highlight: false,
  },
  {
    name: 'Commission Premium',
    price: 'From £350',
    description: 'Multi-subject or complex bespoke commissions.',
    features: [
      'A3 or A2 format',
      'Pencil or watercolour',
      'Unlimited revisions',
      'Close collaboration',
      'Certificate of authenticity',
      'Digital version included',
    ],
    cta: 'Enquire',
    highlight: false,
  },
];

const shopFaqs = [
  {
    q: 'How do I order a commission?',
    a: "Use the commission enquiry form below or the contact form on the home page. Tell Nick what you're looking for, supply reference photos, and he'll come back with a quote and timeline.",
  },
  {
    q: 'Can I request changes to my commission?',
    a: 'Yes — commissions include revision rounds, the number of which depends on the package. Nick works collaboratively and wants you to love the final piece.',
  },
  {
    q: 'How is my artwork delivered?',
    a: 'Original artwork is delivered by tracked courier in protective packaging. Digital files are delivered via email or download link. International delivery is available.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Deposits are non-refundable once work has commenced. Completed commissions are non-refundable but Nick will work with you to ensure satisfaction before marking a commission as complete.',
  },
  {
    q: 'Can I buy prints of Nick\'s published work?',
    a: 'Limited print options are available for selected works. Please enquire directly — Nick considers print requests on a case-by-case basis.',
  },
  {
    q: 'Do you offer gift vouchers?',
    a: 'Yes! Commission gift vouchers are available in various denominations. A perfect present for the person who has everything. Contact Nick to arrange.',
  },
];

function CommissionForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    subjects: '',
    style: '',
    budget: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center py-16 text-center rounded-2xl"
        style={{ background: 'var(--card)', border: '1px solid var(--border-gold)' }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'var(--gold-dim)' }}
        >
          <CheckCircle2 size={32} style={{ color: 'var(--gold)' }} />
        </div>
        <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Enquiry Received
        </h3>
        <p className="text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>
          Nick will be in touch within 24 hours to discuss your commission.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-name">Your Name</label>
          <input
            id="c-name"
            type="text"
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="c-email">Email</label>
          <input
            id="c-email"
            type="email"
            placeholder="jane@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-type">Commission Type</label>
          <select
            id="c-type"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            required
          >
            <option value="">Select type...</option>
            <option value="single-pencil">Single Portrait — Pencil</option>
            <option value="single-watercolour">Single Portrait — Watercolour</option>
            <option value="group">Group Commission</option>
            <option value="corporate">Corporate / Brand</option>
            <option value="digital">Digital Commission</option>
            <option value="wine-label">Wine Label</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-subjects">Number of Subjects</label>
          <input
            id="c-subjects"
            type="text"
            placeholder="e.g. 1, 2–3, group of 6"
            value={form.subjects}
            onChange={(e) => setForm({ ...form, subjects: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="c-style">Preferred Style</label>
          <select
            id="c-style"
            value={form.style}
            onChange={(e) => setForm({ ...form, style: e.target.value })}
          >
            <option value="">Any style</option>
            <option value="pencil">Pencil / Line Art</option>
            <option value="watercolour">Watercolour</option>
            <option value="digital">Digital</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-budget">Approximate Budget</label>
          <select
            id="c-budget"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">Not sure</option>
            <option value="under-200">Under £200</option>
            <option value="200-350">£200 – £350</option>
            <option value="350-500">£350 – £500</option>
            <option value="500-plus">£500+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="c-notes">Commission Brief</label>
        <textarea
          id="c-notes"
          rows={5}
          placeholder="Describe what you'd like — the subject(s), any context, the occasion, any specific details you'd like included..."
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          required
          style={{ resize: 'vertical' }}
        />
      </div>
      <button type="submit" className="btn-gold w-full justify-center py-3.5">
        <Send size={15} />
        Submit Commission Enquiry
      </button>
    </form>
  );
}

function ShopFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {shopFaqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden"
          style={{
            background: 'var(--card)',
            border: openIndex === i ? '1px solid var(--border-gold)' : '1px solid var(--border)',
          }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-medium text-sm md:text-base" style={{ color: 'var(--text)' }}>
              {faq.q}
            </span>
            <ChevronDown
              size={18}
              className="shrink-0 transition-transform duration-300"
              style={{
                color: 'var(--gold)',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5">
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ background: 'var(--bg)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <EtheralShadow
            color="rgba(201, 168, 76, 0.22)"
            animation={{ scale: 70, speed: 40 }}
            noise={{ opacity: 0.35, scale: 1 }}
            sizing="fill"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(8,8,8,0.55) 0%, var(--bg) 100%)' }} />
        <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center relative z-10">
          <div className="section-label mb-4">Services & Commissions</div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            <span className="gradient-text">Shop</span> & Commission
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            From live event entertainment to bespoke studio commissions — find the right package for
            your occasion.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Services</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              What Nick Offers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="card flex flex-col overflow-hidden"
              >
                {/* Image or emoji */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16/9', background: 'var(--surface)' }}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl">
                      {product.emoji}
                    </div>
                  )}
                  {product.badge && (
                    <div
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                      style={{
                        background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                        color: '#080808',
                      }}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div
                    className="text-lg mb-2 font-semibold"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                  >
                    {product.title}
                  </div>
                  <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>
                    {product.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <span className="font-bold text-sm" style={{ color: 'var(--gold)' }}>
                      {product.from}
                    </span>
                    <Link
                      href="/#contact"
                      className="text-xs font-semibold tracking-wider uppercase transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="py-24"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Pricing</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Package Overview
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
              All prices are indicative. Final pricing is confirmed at the time of booking based on
              your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: tier.highlight
                    ? 'linear-gradient(160deg, #1a1506 0%, #211c08 100%)'
                    : 'var(--card)',
                  border: tier.highlight
                    ? '1px solid var(--border-gold)'
                    : '1px solid var(--border)',
                  boxShadow: tier.highlight ? '0 8px 32px rgba(201,168,76,0.12)' : 'none',
                }}
              >
                {tier.highlight && (
                  <div
                    className="py-2 text-center text-xs font-bold tracking-wider uppercase"
                    style={{
                      background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                      color: '#080808',
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-1 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>
                    {tier.name}
                  </div>
                  <div
                    className="text-2xl font-bold mb-3"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--gold)' }}
                  >
                    {tier.price}
                  </div>
                  <p className="text-xs mb-6 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                    {tier.description}
                  </p>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <Star size={11} fill="var(--gold)" style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className={tier.highlight ? 'btn-gold justify-center text-xs py-2.5' : 'btn-outline justify-center text-xs py-2.5'}
                  >
                    {tier.cta}
                  </Link>
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
            <div className="section-label mb-4">Questions</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Shop FAQ
            </h2>
          </div>
          <ShopFAQ />
        </div>
      </section>

      {/* Commission form */}
      <section
        id="commission-form"
        className="py-24"
        style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-14">
            <div className="section-label mb-4">Commission Enquiry</div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                color: 'var(--text)',
              }}
            >
              Start Your Commission
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: 'var(--text-muted)' }}>
              Tell Nick what you have in mind. He responds personally to every enquiry within 24 hours.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div
              className="p-8 rounded-2xl"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <CommissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-16"
        style={{ background: '#050505', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-xl mx-auto px-6 sm:px-10 text-center">
          <h3
            className="mb-2"
            style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text)' }}
          >
            Stay in the Loop
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            New commissions, behind-the-scenes sketches, and availability updates — to your inbox.
          </p>
          <form
            className="flex gap-3 flex-col sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              style={{ margin: 0 }}
            />
            <button type="submit" className="btn-gold shrink-0 py-3 px-6">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
