'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Floating, { FloatingElement } from '@/components/ui/parallax-floating';

// Nick's actual artwork used as floating background elements
const floatingArtwork = [
  { src: '/CharlotteHawkins.Copyright.jpg',         alt: 'Charlotte Hawkins caricature', depth: 0.5,  className: 'top-[8%]  left-[5%]',  size: 'w-24 h-24 md:w-32 md:h-32' },
  { src: '/JonSnow.Copyright.jpg',                  alt: 'Jon Snow caricature',          depth: 1,    className: 'top-[6%]  left-[28%]', size: 'w-20 h-20 md:w-28 md:h-28' },
  { src: '/RockitCopyright.jpg',                    alt: 'Rock-It Logistics commission', depth: 2,    className: 'top-[3%]  left-[62%]', size: 'w-32 h-44 md:w-44 md:h-56' },
  { src: '/DalaiCopyright (1).jpg',                 alt: 'Dalai Lama portrait',          depth: 1,    className: 'top-[2%]  left-[85%]', size: 'w-24 h-28 md:w-32 md:h-40' },
  { src: '/LordSacks.jpg',                          alt: 'Rabbi Lord Sacks',             depth: 1,    className: 'top-[42%] left-[1%]',  size: 'w-28 h-28 md:w-36 md:h-36' },
  { src: '/PhilSpencer.Copyright.jpg',              alt: 'Phil Spencer caricature',      depth: 0.8,  className: 'top-[45%] left-[88%]', size: 'w-24 h-24 md:w-32 md:h-32' },
  { src: '/ItalyCopyright.jpg',                     alt: 'Tuscan winemaker commission',  depth: 1.5,  className: 'top-[68%] left-[8%]',  size: 'w-28 h-36 md:w-36 md:h-48' },
  { src: '/SwissCopyright.jpg',                     alt: 'Swiss family commission',      depth: 2,    className: 'top-[72%] left-[78%]', size: 'w-28 h-28 md:w-40 md:h-40' },
  { src: '/RishiCopyright.jpg',                     alt: 'Rishi Sunak caricature',       depth: 1,    className: 'top-[78%] left-[48%]', size: 'w-20 h-24 md:w-28 md:h-36' },
];

interface OceanHeroProps {
  title?: string;
  description?: string;
  primaryAction?: { label: string; onClick: () => void };
  secondaryAction?: { label: string; onClick: () => void };
  className?: string;
  children?: React.ReactNode;
}

export function OceanHero({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  children,
}: OceanHeroProps) {
  const titleWords = title?.split(' ') || [];

  return (
    <section
      className={cn(
        'relative w-full min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
      style={{ background: 'var(--bg)' }}
      role="banner"
      aria-label="Hero section"
    >
      {/* Gold Aurora Background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.12]" aria-hidden="true">
        {/* Slow drifting gold gradient blobs */}
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                rgba(201,168,76,0.8) 10%,
                rgba(184,148,42,0.5) 15%,
                rgba(226,204,138,0.7) 20%,
                rgba(201,168,76,0.8) 25%,
                rgba(122,101,48,0.4) 30%
              )
            `,
            backgroundSize: '300% 100%',
            filter: 'blur(90px)',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Floating artwork images */}
      <Floating sensitivity={-0.6} easingFactor={0.04} className="overflow-hidden opacity-25 pointer-events-none">
        {floatingArtwork.map((item) => (
          <FloatingElement key={item.src} depth={item.depth} className={item.className}>
            <img
              src={item.src}
              alt={item.alt}
              className={cn(item.size, 'object-cover rounded-lg shadow-2xl')}
              style={{ border: '1px solid rgba(201,168,76,0.2)' }}
            />
          </FloatingElement>
        ))}
      </Floating>

      {/* Vignette — pulls edges back to dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 10%, rgba(8,8,8,0.88) 75%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      {children ? (
        <div className="relative z-10 w-full">{children}</div>
      ) : (
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="max-w-5xl mx-auto"
          >
            {title && (
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">
                {titleWords.map((word, wi) => (
                  <span key={wi} className="inline-block mr-4 last:mr-0 mb-2">
                    {word.split('').map((letter, li) => (
                      <motion.span
                        key={`${wi}-${li}`}
                        initial={{ y: 100, opacity: 0, filter: 'blur(8px)' }}
                        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                        transition={{
                          delay: wi * 0.1 + li * 0.03,
                          type: 'spring',
                          stiffness: 100,
                          damping: 15,
                        }}
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        className="inline-block cursor-default"
                        style={{
                          background:
                            'linear-gradient(135deg, #c9a84c 0%, #e2cc8a 50%, #c9a84c 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>
            )}

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {description}
              </motion.p>
            )}

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                {primaryAction && (
                  <button onClick={primaryAction.onClick} className="btn-gold">
                    {primaryAction.label}
                  </button>
                )}
                {secondaryAction && (
                  <button onClick={secondaryAction.onClick} className="btn-outline">
                    {secondaryAction.label}
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
