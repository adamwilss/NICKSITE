import React from 'react';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { SilkBackground } from '@/components/ui/silk-background-animation';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Layer 1 — Silk canvas texture (deep warm-gold weave) */}
      <div className="absolute inset-0 pointer-events-none">
        <SilkBackground r={55} g={44} b={18} speed={0.012} scale={2} noiseIntensity={0.75} />
      </div>

      {/* Layer 2 — Etheral animated shadow over the silk */}
      <div className="absolute inset-0 pointer-events-none">
        <EtheralShadow
          color="rgba(201, 168, 76, 0.32)"
          animation={{ scale: 75, speed: 45 }}
          noise={{ opacity: 0.5, scale: 1 }}
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
