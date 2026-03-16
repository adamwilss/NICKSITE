import React from 'react';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle CSS-only gold glow — no JS, no glitch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 60% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
