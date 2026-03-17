'use client';

import { useEffect, useRef } from 'react';

interface SilkBackgroundProps {
  /** Base RGB colour of the silk highlights. Defaults to a warm dark gold. */
  r?: number;
  g?: number;
  b?: number;
  speed?: number;
  scale?: number;
  noiseIntensity?: number;
  className?: string;
}

export function SilkBackground({
  r = 55,
  g = 44,
  b = 18,
  speed = 0.015,
  scale = 2,
  noiseIntensity = 0.8,
  className,
}: SilkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      return ((G * Math.sin(G * x)) * (G * Math.sin(G * y)) * (1 + x)) % 1;
    };

    const tick = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) { raf = requestAnimationFrame(tick); return; }

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;
      const tOffset = speed * time;

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale;
          const v = (y / height) * scale;

          const tex_x = u;
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset);

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              );

          const rnd = noise(x, y);
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

          const idx = (y * width + x) * 4;
          if (idx + 3 < data.length) {
            data[idx]     = Math.floor(r * intensity);
            data[idx + 1] = Math.floor(g * intensity);
            data[idx + 2] = Math.floor(b * intensity);
            data[idx + 3] = 255;
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      time += 1;
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [r, g, b, speed, scale, noiseIntensity]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
