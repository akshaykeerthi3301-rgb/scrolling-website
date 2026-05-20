'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const milestones = [
  {
    year: '2021',
    title: 'B.Tech — Computer Engineering',
    body: 'Graduated from College of Engineering Muttathara, Kerala. Four years of circuits, code, and realising I cared more about the software than the silicon.',
    tag: 'Education',
    accent: '#4ecdc4',
  },
  {
    year: '2022',
    title: 'HR Associate · Amazon',
    body: 'Joined Amazon, Hyderabad. Managed 20–30 employee cases daily, drove a process re-engineering project that cut paperwork by 75%, and maintained a performance score above 90. First taste of scale.',
    tag: 'Career',
    accent: '#ff6b35',
  },
  {
    year: '2023',
    title: 'MBA · IIM Sambalpur',
    body: 'Earned a place at one of India\'s top business schools. Led the Placement Committee, converted 5 new recruiters, and built the cross-disciplinary lens that now informs every product decision.',
    tag: 'Education',
    accent: '#4ecdc4',
  },
  {
    year: '2024',
    title: 'FleetSense — First Production SaaS',
    body: 'Built a full multi-tenant fleet management platform from scratch — Next.js 15, Prisma, Clerk, Stripe, Samsara telematics. 15+ relational models, predictive maintenance engine, and zero unauthenticated data exposure.',
    tag: 'Build',
    accent: '#ff6b35',
  },
  {
    year: '2024',
    title: 'Cross Asset Alpha Bot',
    body: 'Engineered an end-to-end algorithmic trading system for NSE derivatives. 7+ signal families, rolling walk-forward validation, Telegram push notifications, and a macOS LaunchAgent for fully automated daily sessions.',
    tag: 'Build',
    accent: '#4ecdc4',
  },
  {
    year: '2025',
    title: 'Private Banking Manager · ICICI Bank',
    body: 'Managing ₹250 Cr+ HNI & CXO portfolios across 90 wealth partners in Bangalore. Acquired ₹5 Cr+ new-to-bank relationships, grew investment portfolio 30%, and digitised lead tracking via Sales360.',
    tag: 'Career',
    accent: '#ff6b35',
  },
  {
    year: '2026',
    title: 'Building in the Open',
    body: 'WebCraft AI, ADHD Calendar, and this portfolio — shipping real products in public. Finance by day, code by night, always curious about the intersection of the two.',
    tag: 'Now',
    accent: '#4ecdc4',
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.timeline-item', {
      x: -50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.timeline-line', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      style={{
        padding: 'clamp(5rem,10vh,9rem) clamp(1.5rem,4vw,3rem)',
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(3rem,6vh,5rem)' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Life Journey</div>
          <h2 style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
            <span className="text-gradient-white">How I got </span>
            <span className="text-gradient-accent">here</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '72px',
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, #ff6b35, #4ecdc4, rgba(255,255,255,0.05))',
            }}
          />

          {milestones.map((m, i) => (
            <div
              key={i}
              className="timeline-item"
              style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: i === milestones.length - 1 ? 0 : '2.5rem',
                position: 'relative',
              }}
            >
              {/* Year */}
              <div style={{ width: '60px', flexShrink: 0, textAlign: 'right', paddingTop: '0.2rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: m.accent, letterSpacing: '0.05em' }}>
                  {m.year}
                </span>
              </div>

              {/* Dot */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: m.accent,
                  flexShrink: 0,
                  marginTop: '0.35rem',
                  boxShadow: `0 0 12px ${m.accent}80`,
                  position: 'relative',
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0f0' }}>{m.title}</h3>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: m.accent,
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      background: `${m.accent}15`,
                      borderRadius: '100px',
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(240,240,240,0.5)', lineHeight: 1.7 }}>
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
