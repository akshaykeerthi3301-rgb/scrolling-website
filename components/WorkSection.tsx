'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: '01',
    title: 'Vanta Brand Identity',
    category: 'Branding · Visual Design',
    desc: 'A complete rebrand for a B2B security startup — from wordmark to motion system.',
    color: '#1a0a3a',
    accent: '#9b5de5',
    gradient: 'linear-gradient(135deg, #1a0a3a 0%, #2d1470 100%)',
  },
  {
    number: '02',
    title: 'Luminary Web Experience',
    category: 'Web Design · Development',
    desc: 'Scroll-driven marketing site that increased conversion 3× in 30 days.',
    color: '#0a1a0a',
    accent: '#06d6a0',
    gradient: 'linear-gradient(135deg, #0a1a14 0%, #0d3326 100%)',
  },
  {
    number: '03',
    title: 'Orbit Mobile App',
    category: 'Product Design · iOS',
    desc: 'A productivity app with a design system built for clarity at every step.',
    color: '#1a0e00',
    accent: '#ff9a3c',
    gradient: 'linear-gradient(135deg, #1a0e00 0%, #3a2000 100%)',
  },
  {
    number: '04',
    title: 'Nova Design System',
    category: 'Systems Design · Figma',
    desc: '2,400+ components and a token library adopted by a 40-person product team.',
    color: '#0a0a1a',
    accent: '#4ecdc4',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #101034 100%)',
  },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const totalWidth = trackRef.current!.scrollWidth - window.innerWidth;

    // Horizontal scroll pinned to section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: () => `+=${totalWidth + window.innerHeight}`,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (projects.length - 1));
          if (counterRef.current) {
            counterRef.current.textContent = `0${idx + 1}`;
          }
        },
      },
    });

    tl.to(trackRef.current, {
      x: -totalWidth,
      ease: 'none',
    });

    // Cards fade in as they enter
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        scale: 0.92,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          containerAnimation: tl,
          start: 'left 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{ overflow: 'hidden', background: 'var(--bg)' }}
    >
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* Header */}
        <div
          style={{
            position: 'absolute',
            top: '2.5rem',
            left: '2.5rem',
            right: '2.5rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            zIndex: 10,
          }}
        >
          <div>
            <div className="section-label" style={{ marginBottom: '0.5rem' }}>Selected Work</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
              className="text-gradient-white"
            >
              What we've built
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span
              ref={counterRef}
              style={{
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 800,
                letterSpacing: '-0.05em',
                color: 'rgba(255,107,53,0.25)',
                lineHeight: 1,
              }}
            >
              01
            </span>
            <span style={{ fontSize: '1rem', color: 'rgba(240,240,240,0.2)', marginLeft: '0.25rem' }}>
              / 0{projects.length}
            </span>
          </div>
        </div>

        {/* Horizontal track */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            paddingLeft: '2.5rem',
          }}
        >
          <div ref={trackRef} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {projects.map((p) => (
              <div
                key={p.number}
                className="project-card"
                style={{
                  flexShrink: 0,
                  width: 'clamp(320px, 45vw, 600px)',
                  height: 'clamp(400px, 55vh, 560px)',
                  borderRadius: '1.5rem',
                  background: p.gradient,
                  border: `1px solid ${p.accent}22`,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative glow */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '240px',
                    height: '240px',
                    background: `radial-gradient(circle, ${p.accent}30, transparent 70%)`,
                    pointerEvents: 'none',
                  }}
                />

                <div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: p.accent,
                      fontWeight: 600,
                    }}
                  >
                    {p.category}
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.08)',
                      letterSpacing: '-0.05em',
                      lineHeight: 1,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.number}
                  </div>
                  <h3
                    style={{
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)',
                      fontWeight: 700,
                      color: '#f0f0f0',
                      letterSpacing: '-0.03em',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(240,240,240,0.45)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', color: p.accent, fontWeight: 600 }}>
                    View case study
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: p.accent }}>
                    <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}

            {/* End spacer */}
            <div style={{ flexShrink: 0, width: '2.5rem' }} />
          </div>
        </div>

        {/* Scroll hint text */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'rgba(240,240,240,0.2)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
            <path d="M1 5h18M14 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
