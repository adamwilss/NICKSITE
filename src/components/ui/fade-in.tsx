'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/**
 * Fades + slides content into view when it enters the viewport.
 * Uses framer-motion whileInView — triggers once, smooth easing.
 */
export function FadeIn({ children, delay = 0, y = 30, className = '' }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, ease: [0.22, 0.03, 0.26, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children animate in sequence */
export function FadeInStagger({
  children,
  stagger = 0.1,
  className = '',
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Use inside FadeInStagger */
export function FadeInItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 0.03, 0.26, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
