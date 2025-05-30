'use client';

import { useEffect, useState } from 'react';

export default function Linear() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [length, setLength] = useState(0);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({ width, height });
      setLength(2 * (width + height));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (size.width === 0 || size.height === 0) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50">
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="gradient">
              <stop stopColor="#00ffff" />
            </linearGradient>
          </defs>

          <path
            d={`
              M 1 1 
              H ${size.width - 1} 
              V ${size.height - 1} 
              H 1 
              V 1
            `}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray={`${length / 6} ${length}`}
            strokeDashoffset="0"
            style={{
              animation: 'trace-border 10s linear infinite',
            }}
          />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes trace-border {
          to {
            stroke-dashoffset: -${length};
          }
        }
      `}</style>
    </>
  );
}
