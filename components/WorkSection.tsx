'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    number: '01',
    title: 'FleetSense',
    category: 'Full-Stack SaaS · Next.js 15',
    desc: 'Multi-tenant fleet management platform — predictive maintenance, Samsara telematics webhooks, Clerk org-auth, and Stripe billing across 15+ relational models.',
    accent: '#ff6b35',
    tags: ['Next.js 15', 'PostgreSQL', 'Stripe', 'Clerk'],
    href: 'https://github.com/akshaykeerthi3301-rgb',
  },
  {
    number: '02',
    title: 'Cross Asset Alpha Bot',
    category: 'Quant Trading · Python',
    desc: 'End-to-end algorithmic trading system for NSE derivatives — 7+ signal families, walk-forward validation, Telegram alerts, and a live paper-trading runtime. Champion strategy: ₹67,830 net P&L / 30 sessions.',
    accent: '#4ecdc4',
    tags: ['Python', 'Upstox API', 'Telegram', 'NSE'],
    href: 'https://github.com/akshaykeerthi3301-rgb',
  },
  {
    number: '03',
    title: 'WebCraft AI',
    category: 'AI Tool · Next.js · Groq',
    desc: 'AI-powered website builder that generates, previews, and deploys full sites to Vercel in one prompt — auth-gated with signed cookie sessions and per-IP rate limiting.',
    accent: '#ff6b35',
    tags: ['Next.js', 'Groq AI', 'Vercel API', 'Auth'],
    href: 'https://github.com/akshaykeerthi3301-rgb/webcraft-ai',
  },
  {
    number: '04',
    title: 'ADHD Calendar',
    category: 'Mobile App · Next.js · Capacitor',
    desc: 'Mobile-first productivity calendar designed for ADHD brains — bottom-sheet task entry, Today/Calendar/Settings navigation, and a zero-distraction layout optimised for 390 px.',
    accent: '#4ecdc4',
    tags: ['Next.js 14', 'Tailwind', 'Capacitor', 'iOS'],
    href: 'https://github.com/akshaykeerthi3301-rgb',
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
      style={{ overflow: 'hidden', background: 'transparent' }}
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
              What I&apos;ve built
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
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
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
                    background: `radial-gradient(circle, ${p.accent}18, transparent 70%)`,
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
                      marginBottom: '0.75rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(240,240,240,0.45)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {p.desc}
                  </p>
                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{
                        fontSize: '0.65rem',
                        padding: '0.2rem 0.55rem',
                        background: `${p.accent}12`,
                        border: `1px solid ${p.accent}30`,
                        borderRadius: '100px',
                        color: p.accent,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                >
                  <span style={{ fontSize: '0.8rem', color: p.accent, fontWeight: 600 }}>
                    View on GitHub
                  </span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: p.accent }}>
                    <path d="M1 7h12M8 3l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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
