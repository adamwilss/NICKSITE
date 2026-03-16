'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
      <div className="absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        {/* Slow drifting gold gradient blobs */}
        <motion.div
          className="absolute inset-[-100%]"
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                #c9a84c 10%,
                #b8942a 15%,
                #e2cc8a 20%,
                #c9a84c 25%,
                #7a6530 30%
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
        {/* Shimmer overlay */}
        <motion.div
          className="absolute inset-[-10px]"
          style={{
            background: `
              repeating-linear-gradient(
                100deg,
                rgba(201,168,76,0.08) 0%,
                rgba(201,168,76,0.08) 7%,
                transparent 10%,
                transparent 12%,
                rgba(201,168,76,0.08) 16%
              ),
              repeating-linear-gradient(
                100deg,
                #c9a84c 10%,
                #b8942a 15%,
                #e2cc8a 20%,
                #c9a84c 25%,
                #7a6530 30%
              )
            `,
            backgroundSize: '200%, 100%',
            backgroundPosition: '50% 50%, 50% 50%',
            mixBlendMode: 'soft-light',
          }}
          animate={{
            backgroundPosition: [
              '50% 50%, 50% 50%',
              '100% 50%, 150% 50%',
              '50% 50%, 50% 50%',
            ],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Vignette — pulls edges back to dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, rgba(8,8,8,0.85) 100%)',
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
