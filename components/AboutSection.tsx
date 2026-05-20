'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { value: '5+', label: 'Years building' },
  { value: '30+', label: 'Projects shipped' },
  { value: '8', label: 'Countries explored' },
  { value: '∞', label: 'Curiosity' },
];

const quoteWords = ['Code is poetry —', 'every function', 'a verse, every', 'system a story', 'worth telling.'];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.quote-word', {
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.quote-container',
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.stat-item', {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-row',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.to('.deco-number', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    gsap.from('.about-left', {
      x: -60,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-left',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: 'clamp(5rem, 10vh, 9rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Huge decorative background initial */}
      <div
        className="deco-number"
        style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(12rem, 25vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.015)',
          letterSpacing: '-0.07em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        AK
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'center' }}>

          {/* Left */}
          <div className="about-left">
            <div className="section-label" style={{ marginBottom: '1rem' }}>About me</div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: '2rem',
              }}
              className="text-gradient-white"
            >
              Builder by day,<br />
              <span className="text-gradient-accent">explorer always</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(240,240,240,0.4)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
              I&apos;m Akshay — a full-stack developer and product designer who believes that the best
              digital experiences feel inevitable, like they couldn&apos;t have been built any other way.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'rgba(240,240,240,0.4)', lineHeight: 1.75 }}>
              When I&apos;m not shipping products I&apos;m crossing time zones, grinding ranked queues,
              or chasing a new PR in the gym. Every discipline teaches me something the others can&apos;t.
            </p>

            {/* Stats */}
            <div
              className="stats-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginTop: '3rem',
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <div
                    style={{
                      fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      marginBottom: '0.35rem',
                    }}
                    className="text-gradient-accent"
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.3)', letterSpacing: '0.05em' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — personal philosophy quote */}
          <div className="quote-container">
            <div
              style={{
                padding: '3rem',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '1.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '5rem',
                  color: 'rgba(255,107,53,0.15)',
                  lineHeight: 0.6,
                  marginBottom: '1.5rem',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                }}
              >
                &ldquo;
              </div>
              <blockquote
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.35,
                  color: '#f0f0f0',
                }}
              >
                {quoteWords.map((w, i) => (
                  <span
                    key={i}
                    className="quote-word"
                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                  >
                    {w}
                  </span>
                ))}
              </blockquote>
              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b35, #ff9a5c)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  AK
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f0f0f0' }}>Akshay Keerthi</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.3)' }}>Designer &amp; Developer</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
