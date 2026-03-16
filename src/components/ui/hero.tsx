import React from 'react';

export function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 65% 50%, rgba(201,168,76,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 30% 60%, rgba(201,168,76,0.03) 0%, transparent 60%)
          `,
        }}
      />
      {/* Top-edge subtle border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 20%, rgba(201,168,76,0.15) 50%, transparent 80%)' }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
