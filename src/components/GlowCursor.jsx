'use client';

import { useEffect, useRef } from 'react';

export default function GlowCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 w-[800px] h-[800px] rounded-full bg-neon opacity-12 blur-3xl"
      style={{
        mixBlendMode: 'screen',
        transition: 'transform  linear',
        willChange: 'transform',
      }}
    />
  );
}
