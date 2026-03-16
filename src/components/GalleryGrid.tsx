'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { clsx } from 'clsx';
import type { ArtworkItem, ArtworkCategory } from '@/data/artwork';
import { categoryLabels } from '@/data/artwork';

interface GalleryGridProps {
  items: ArtworkItem[];
  showFilters?: boolean;
}

export default function GalleryGrid({ items, showFilters = true }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ArtworkCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: ('all' | ArtworkCategory)[] = [
    'all',
    'celebrity',
    'event',
    'studio',
    'commission',
  ];

  const filtered =
    activeFilter === 'all' ? items : items.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevItem = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextItem = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevItem();
      if (e.key === 'ArrowRight') nextItem();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, prevItem, nextItem]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200',
                activeFilter === cat
                  ? 'text-[#080808]'
                  : 'hover:border-[var(--border-gold)] hover:text-[var(--text)]',
              )}
              style={
                activeFilter === cat
                  ? {
                      background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)',
                      border: '1px solid transparent',
                    }
                  : {
                      background: 'var(--card)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }
              }
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative overflow-hidden rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              aspectRatio: '4/5',
            }}
          >
            <Image
              src={`/${encodeURIComponent(item.filename)}`}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.5) 60%, transparent 100%)',
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div
                    className="text-xs font-semibold tracking-wider uppercase mb-1"
                    style={{ color: 'var(--gold)' }}
                  >
                    {categoryLabels[item.category]}
                  </div>
                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
                  >
                    {item.title}
                  </div>
                </div>
                <div
                  className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--gold)' }}
                >
                  <ZoomIn size={14} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
          <p>No items in this category yet.</p>
        </div>
      )}

      {/* Lightbox */}
      {currentItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(8px)' }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          {/* Nav prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevItem(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Nav next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextItem(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Content */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row gap-6 rounded-2xl overflow-hidden"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative md:w-3/5 aspect-[4/5] md:aspect-auto min-h-[300px]">
              <Image
                src={`/${encodeURIComponent(currentItem.filename)}`}
                alt={currentItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center p-6 md:p-8 md:w-2/5">
              <div
                className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: 'var(--gold)' }}
              >
                {categoryLabels[currentItem.category]}
              </div>
              <h3
                className="mb-4 text-xl md:text-2xl"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
              >
                {currentItem.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {currentItem.caption}
              </p>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
                <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
                  {lightboxIndex! + 1} / {filtered.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
