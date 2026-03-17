import React from 'react';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Etheral animated shadow background */}
      <div className="absolute inset-0 pointer-events-none">
        <EtheralShadow
          color="rgba(201, 168, 76, 0.18)"
          animation={{ scale: 60, speed: 30 }}
          noise={{ opacity: 0.4, scale: 1 }}
          sizing="fill"
        />
      </div>

      {/* Top-edge subtle border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 20%, rgba(201,168,76,0.15) 50%, transparent 80%)' }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
