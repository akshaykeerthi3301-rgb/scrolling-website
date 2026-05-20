'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-heading', {
      y: 80,
      opacity: 0,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-heading',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.contact-email', {
      scale: 0.92,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-email',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from('.contact-links a', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.contact-links',
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
    });

    // Gradient blob parallax
    gsap.to('.contact-blob', {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: 'clamp(6rem, 12vh, 10rem) clamp(1.5rem, 4vw, 3rem)',
        background: 'var(--bg)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background blob */}
      <div
        className="contact-blob"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(78,205,196,0.08) 0%, rgba(255,107,53,0.05) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
        <div className="section-label contact-heading" style={{ marginBottom: '1.5rem' }}>
          Start a project
        </div>

        <h2
          className="contact-heading text-gradient-white"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '2rem',
          }}
        >
          Let's make something<br />
          <span className="text-gradient-accent">worth scrolling for</span>
        </h2>

        <p
          className="contact-heading"
          style={{
            fontSize: '1rem',
            color: 'rgba(240,240,240,0.4)',
            maxWidth: '420px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}
        >
          Tell us what you're building. We'll tell you how we'd make it exceptional.
        </p>

        {/* Big email CTA */}
        <a
          className="contact-email"
          href="mailto:hello@axisstudio.co"
          style={{
            display: 'inline-block',
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#f0f0f0',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            padding: '1.5rem 3rem',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '100px',
            marginBottom: '3rem',
            transition: 'all 0.3s ease',
            background: 'rgba(255,255,255,0.02)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#ff6b35';
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.06)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
            (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
          }}
        >
          hello@axisstudio.co
        </a>

        {/* Social links */}
        <div
          className="contact-links"
          style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem' }}
        >
          {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((social) => (
            <a
              key={social}
              href="#"
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(240,240,240,0.25)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ff6b35')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,240,0.25)')}
            >
              {social}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
          AXIS<span style={{ color: '#ff6b35' }}>.</span>
        </span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.2)' }}>
          © 2024 Axis Studio. All rights reserved.
        </span>
        <span style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.2)' }}>
          Built with Next.js + GSAP
        </span>
      </div>
    </section>
  );
}
