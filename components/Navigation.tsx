'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    // Nav hide on scroll down, show on scroll up
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > 80 && current > lastScroll) {
        gsap.to(navRef.current, { y: -80, duration: 0.4, ease: 'power2.in' });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: 'power2.out' });
      }
      lastScroll = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 2.5rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(8,8,8,0.8)',
      }}
    >
      {/* Scroll progress bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: '#111',
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ff6b35, #ff9a5c)',
            transformOrigin: 'left center',
            scaleX: 0,
          }}
        />
      </div>

      <span style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#f0f0f0' }}>
        AXIS<span style={{ color: '#ff6b35' }}>.</span>
      </span>

      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Work', 'Services', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(240,240,240,0.5)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ff6b35')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,240,240,0.5)')}
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding: '0.5rem 1.25rem',
            background: '#ff6b35',
            color: '#fff',
            borderRadius: '100px',
            fontSize: '0.8rem',
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
