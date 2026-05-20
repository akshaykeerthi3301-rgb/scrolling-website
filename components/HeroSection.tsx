'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const words = ['Bold', 'Stories', 'that', 'Move'];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const bgGradRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Stagger headline words
    const wordEls = Array.from(headlineRef.current?.querySelectorAll('.hero-word') ?? []);
    tl.from(wordEls, {
      y: 120,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      delay: 0.2,
    });

    tl.from(subRef.current, { y: 30, opacity: 0, duration: 0.9 }, '-=0.5');
    tl.from(scrollHintRef.current, { opacity: 0, duration: 0.6 }, '-=0.3');

    // Scroll-driven parallax on headline
    gsap.to(headlineRef.current, {
      y: -200,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '60% top',
        scrub: 1,
      },
    });

    // Parallax on background blob
    gsap.to(bgGradRef.current, {
      y: 300,
      scale: 1.3,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Bouncing scroll indicator
    const scrollLine = scrollHintRef.current?.querySelector('.scroll-line');
    if (scrollLine) gsap.to(scrollLine, {
      y: 16,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      duration: 0.9,
    });
  }, { scope: containerRef });  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Animated gradient blob */}
      <div
        ref={bgGradRef}
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(255,107,53,0.12) 0%, rgba(78,205,196,0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem' }}>
        <div className="section-label" style={{ marginBottom: '1.5rem' }}>
          Designer &amp; Developer
        </div>

        {/* Name — primary SEO signal */}
        <h1
          style={{
            fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(240,240,240,0.35)',
            marginBottom: '1.25rem',
          }}
        >
          Akshay Keerthi
        </h1>

        <div
          ref={headlineRef}
          style={{
            fontSize: 'clamp(4rem, 11vw, 10rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: '2.5rem',
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0 0.25em',
          }}
        >
          {['I', 'Craft'].map((w) => (
            <span
              key={w}
              className="hero-word text-gradient-white"
              style={{ display: 'inline-block' }}
            >
              {w}
            </span>
          ))}
          <br style={{ width: '100%' }} />
          {['Digital', 'Experiences'].map((w) => (
            <span
              key={w}
              className={`hero-word ${w === 'Experiences' ? 'text-gradient-accent' : 'text-gradient-white'}`}
              style={{ display: 'inline-block' }}
            >
              {w}
            </span>
          ))}
        </div>

        <p
          ref={subRef}
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            color: 'rgba(240,240,240,0.45)',
            maxWidth: '520px',
            margin: '0 auto 3rem',
            lineHeight: 1.7,
          }}
        >
          Strategy, design and development — I build things people remember.
          From concept to launch, with obsessive attention to detail.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              padding: '0.9rem 2.5rem',
              background: '#ff6b35',
              color: '#fff',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            See our work
          </a>
          <a
            href="#services"
            style={{
              padding: '0.9rem 2.5rem',
              border: '1px solid rgba(240,240,240,0.15)',
              color: 'rgba(240,240,240,0.7)',
              borderRadius: '100px',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
            }}
          >
            What we do
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 1,
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,240,240,0.3)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,107,53,0.8), transparent)',
          }}
        />
      </div>
    </section>
  );
}
