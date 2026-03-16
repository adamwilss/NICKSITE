'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface GalleryFAQProps {
  faqs: FAQ[];
}

export default function GalleryFAQ({ faqs }: GalleryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl overflow-hidden transition-all duration-200"
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
