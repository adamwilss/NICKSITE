"use client"

import { type ReactNode } from "react"

interface GlowingShadowProps {
  children: ReactNode
  /** Extra Tailwind / CSS classes forwarded to the outer wrapper */
  className?: string
}

/**
 * GlowingShadow — animated rainbow-hue border wrapped around any content.
 * Uses styled-jsx (bundled with Next.js) so no extra install is needed.
 *
 * Usage:
 *   <GlowingShadow>
 *     <Image src="..." width={440} height={550} ... />
 *   </GlowingShadow>
 */
export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  return (
    <>
      <style jsx>{`
        /* ── Houdini @property registrations (needed for CSS animation of custom props) ── */
        @property --gs-hue {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --gs-rotate {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --gs-bg-x {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --gs-bg-y {
          syntax: "<number>";
          inherits: true;
          initial-value: 0;
        }
        @property --gs-glow-y {
          syntax: "<number>";
          inherits: true;
          initial-value: -65;
        }
        @property --gs-glow-blur {
          syntax: "<number>";
          inherits: true;
          initial-value: 6;
        }
        @property --gs-glow-scale {
          syntax: "<number>";
          inherits: true;
          initial-value: 1.5;
        }
        @property --gs-glow-radius {
          syntax: "<number>";
          inherits: true;
          initial-value: 100;
        }
        @property --gs-glow-opacity {
          syntax: "<number>";
          inherits: true;
          initial-value: 1;
        }

        /* ── Outer wrapper — provides the 3px "border" via padding ── */
        .gs-wrap {
          --speed: 5s;
          --gs-hue: 0;
          --gs-rotate: 0;
          --gs-glow-blur: 6;
          --gs-glow-opacity: 1;
          --gs-glow-scale: 1.5;
          --gs-glow-radius: 100;
          --gs-glow-rotate-unit: 1deg;

          display: inline-block;
          position: relative;
          border-radius: 1rem;    /* matches rounded-2xl */
          padding: 3px;           /* "border" thickness */
          background: transparent;
        }

        /* Animated rainbow border via pseudo-element behind the inner card */
        .gs-wrap::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: radial-gradient(
            65% 65% at calc(var(--gs-bg-x) * 1%) calc(var(--gs-bg-y) * 1%),
            hsl(calc(var(--gs-hue) * 1deg) 100% 65%) 0%,
            hsl(calc(var(--gs-hue) * 1deg) 80%  42%) 42%,
            hsl(calc(var(--gs-hue) * 1deg) 55%  22%) 70%,
            transparent 100%
          );
          animation: gs-hue        var(--speed) linear infinite,
                     gs-rotate-bg  var(--speed) linear infinite;
          z-index: 0;
        }

        /* Inner container — clips the image to a slightly smaller radius */
        .gs-inner {
          position: relative;
          border-radius: calc(1rem - 3px);
          overflow: hidden;
          z-index: 1;
          display: block;
        }

        /* The orbiting glow orb that peeks out from the border */
        .gs-orb {
          --gs-glow-y: -65;
          display: block;
          position: absolute;
          width: 56px;
          height: 56px;
          top: 50%;
          left: 50%;
          margin-top: -28px;
          margin-left: -28px;
          border-radius: calc(var(--gs-glow-radius) * 1px);
          animation: gs-rotate var(--speed) linear infinite;
          transform: rotateZ(calc(var(--gs-rotate) * var(--gs-glow-rotate-unit)));
          transform-origin: center;
          pointer-events: none;
          z-index: 2;
        }

        .gs-orb::after {
          content: "";
          display: block;
          position: absolute;
          width: 130%;
          height: 130%;
          left: -15%;
          top: -15%;
          background: hsl(calc(var(--gs-hue) * 1deg) 100% 60%);
          border-radius: calc(var(--gs-glow-radius) * 1px);
          filter: blur(calc(var(--gs-glow-blur) * 10px));
          animation: gs-hue var(--speed) linear infinite;
          transform: scaleY(calc(var(--gs-glow-scale) / 1.1))
                     scaleX(calc(var(--gs-glow-scale) * 1.2))
                     translateY(calc(var(--gs-glow-y) * 1%));
          opacity: var(--gs-glow-opacity);
          z-index: -1;
        }

        /* ── Keyframes ── */
        @keyframes gs-rotate-bg {
          0%   { --gs-bg-x: 0;   --gs-bg-y: 0;   }
          25%  { --gs-bg-x: 100; --gs-bg-y: 0;   }
          50%  { --gs-bg-x: 100; --gs-bg-y: 100; }
          75%  { --gs-bg-x: 0;   --gs-bg-y: 100; }
          100% { --gs-bg-x: 0;   --gs-bg-y: 0;   }
        }

        @keyframes gs-rotate {
          from { --gs-rotate: -70;            --gs-glow-y: -65; }
          to   { --gs-rotate: calc(360 - 70); --gs-glow-y: -65; }
        }

        @keyframes gs-hue {
          from { --gs-hue: 0;   }
          to   { --gs-hue: 360; }
        }
      `}</style>

      <div className={`gs-wrap ${className}`}>
        <span className="gs-orb" />
        <div className="gs-inner">{children}</div>
      </div>
    </>
  )
}
