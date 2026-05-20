'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const clients = ['Next.js', 'React', 'TypeScript', 'GSAP', 'Tailwind', 'Supabase', 'Figma', 'PostgreSQL', 'Vercel', 'Node.js', 'Prisma', 'GraphQL'];

export default function MarqueeSection() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(track1Ref.current, {
      xPercent: -50,
      ease: 'none',
      duration: 22,
      repeat: -1,
    });
    gsap.to(track2Ref.current, {
      xPercent: 50,
      ease: 'none',
      duration: 26,
      repeat: -1,
    });
  });

  const doubled = [...clients, ...clients];

  return (
    <div
      style={{
        padding: '3rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        overflow: 'hidden',
        background: 'rgba(2,5,18,0.4)',
      }}
    >
      {/* Row 1: scrolling left */}
      <div ref={track1Ref} style={{ display: 'flex', gap: '4rem', marginBottom: '1.5rem', width: 'max-content' }}>
        {doubled.map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,240,0.18)',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
          >
            {c}
          </span>
        ))}
      </div>
      {/* Row 2: scrolling right */}
      <div
        ref={track2Ref}
        style={{ display: 'flex', gap: '4rem', width: 'max-content', transform: 'translateX(-50%)' }}
      >
        {doubled.reverse().map((c, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,240,0.1)',
              whiteSpace: 'nowrap',
              fontWeight: 600,
            }}
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
