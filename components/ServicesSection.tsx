'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  {
    icon: '◈',
    title: 'UI / UX Design',
    desc: 'Interfaces that feel intuitive before the user reads a single label — research-driven, pixel-precise.',
    items: ['User research', 'Wireframes & prototypes', 'Design systems', 'Figma hand-off'],
  },
  {
    icon: '⬡',
    title: 'Frontend Dev',
    desc: 'React and Next.js apps that are fast, accessible, and a joy to maintain.',
    items: ['Next.js / React', 'GSAP animation', 'Responsive layouts', 'Performance tuning'],
  },
  {
    icon: '◎',
    title: 'Full-Stack Build',
    desc: 'End-to-end product development — from database schema to deployed edge function.',
    items: ['REST & GraphQL APIs', 'Auth & payments', 'Supabase / PostgreSQL', 'Vercel / Railway deploy'],
  },
  {
    icon: '◉',
    title: 'Consulting',
    desc: 'A second pair of eyes on your architecture, codebase, or product strategy — no ego, just signal.',
    items: ['Code review', 'Tech-stack advice', 'Roadmap planning', 'Performance audits'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Heading reveal
    gsap.from(headingRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Cards stagger in
    gsap.from('.service-card', {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    // Card icon spin on reveal
    gsap.from('.service-icon', {
      rotation: -90,
      scale: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: 'clamp(5rem, 10vh, 9rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: 'clamp(3rem, 6vh, 5rem)', maxWidth: '600px' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>What I do</div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              marginBottom: '1.5rem',
            }}
            className="text-gradient-white"
          >
            Full-stack<br />
            <span className="text-gradient-accent">capabilities</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,240,240,0.4)', lineHeight: 1.7, maxWidth: '440px' }}>
            Design and engineering under one roof — so your product ships coherently, not as a patchwork.
          </p>
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5px',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '1.5rem',
            overflow: 'hidden',
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className="service-card"
              style={{
                padding: '2.5rem',
                background: 'rgba(255,255,255,0.02)',
                borderRight: i < services.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
              }}
            >
              <div
                className="service-icon"
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '1.5rem',
                  color: '#ff6b35',
                  display: 'block',
                  lineHeight: 1,
                }}
              >
                {s.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                  color: '#f0f0f0',
                }}
              >
                {s.title}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(240,240,240,0.4)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem',
                }}
              >
                {s.desc}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {s.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(240,240,240,0.3)',
                      paddingLeft: '1rem',
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35', fontSize: '0.6rem', top: '0.2em' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
