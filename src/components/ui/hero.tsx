import React from 'react';
import { Component as EtheralShadow } from '@/components/ui/etheral-shadow';
import { SilkBackground } from '@/components/ui/silk-background-animation';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Layer 1 — Silk canvas texture: faster, brighter gold weave */}
      <div className="absolute inset-0 pointer-events-none">
        <SilkBackground r={95} g={74} b={28} speed={0.055} scale={2.5} noiseIntensity={0.9} />
      </div>

      {/* Layer 2 — Primary etheral: bold gold, near-max speed & displacement */}
      <div className="absolute inset-0 pointer-events-none">
        <EtheralShadow
          color="rgba(201, 168, 76, 0.62)"
          animation={{ scale: 90, speed: 82 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Layer 3 — Secondary etheral: warm amber at a slower, different phase for depth */}
      <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: 'screen' }}>
        <EtheralShadow
          color="rgba(240, 140, 20, 0.22)"
          animation={{ scale: 48, speed: 24 }}
          noise={{ opacity: 0.2, scale: 2 }}
          sizing="fill"
        />
      </div>

      {/* Layer 4 — Breathing radial pulse: gold heartbeat expanding from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 55% at 50% 50%, rgba(201,168,76,0.28) 0%, rgba(201,168,76,0.08) 45%, transparent 70%)',
          animation: 'hero-pulse 3.8s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Layer 5 — Off-centre slow roaming orb for asymmetric drama */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '70%',
          height: '70%',
          top: '10%',
          left: '-10%',
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 65%)',
          animation: 'hero-pulse-slow 7s ease-in-out infinite',
          filter: 'blur(40px)',
          willChange: 'transform, opacity',
        }}
      />

      {/* Top-edge border glow — slightly bolder */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 10%, rgba(201,168,76,0.35) 50%, transparent 90%)' }}
      />

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
