'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const countries = ['India', 'UAE', 'Singapore', 'Thailand', 'Japan', 'UK', 'USA', 'France'];

const games = [
  { title: 'Valorant', genre: 'Tactical FPS', status: 'Active', platform: 'PC' },
  { title: 'GTA V', genre: 'Open World', status: 'Active', platform: 'PC' },
  { title: 'God of War', genre: 'Action Adventure', status: 'Completed', platform: 'PC' },
  { title: 'Red Dead Redemption 2', genre: 'Action RPG', status: 'Completed', platform: 'PC' },
];

const fitness = [
  { label: 'Workouts / week', value: '5×', sub: 'strength & cardio' },
  { label: 'Current focus', value: 'Hypertrophy', sub: 'progressive overload' },
  { label: 'Morning routine', value: '6:00 AM', sub: 'wake up & train' },
  { label: 'Favourite sport', value: 'Football', sub: 'played since childhood' },
];

export default function HobbiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.hobby-card', {
      y: 50,
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
    gsap.from('.country-pill', {
      scale: 0,
      opacity: 0,
      stagger: 0.05,
      duration: 0.4,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.countries-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hobbies"
      style={{
        padding: 'clamp(5rem,10vh,9rem) clamp(1.5rem,4vw,3rem)',
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(3rem,6vh,5rem)' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Beyond the screen</div>
          <h2 style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
            <span className="text-gradient-white">Life, </span>
            <span className="text-gradient-accent">unfiltered</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>

          {/* Travel */}
          <div
            className="hobby-card"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '1.5rem',
              padding: '2rem',
              gridColumn: 'span 1',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>✈️</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f0' }}>Travel</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)' }}>{countries.length} countries visited</div>
              </div>
            </div>
            <div className="countries-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {countries.map((c) => (
                <span
                  key={c}
                  className="country-pill"
                  style={{
                    padding: '0.3rem 0.85rem',
                    background: 'rgba(78,205,196,0.1)',
                    border: '1px solid rgba(78,205,196,0.2)',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    color: '#4ecdc4',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'rgba(240,240,240,0.45)', lineHeight: 1.7 }}>
              Travel rewires how you think about design. Every culture has its own visual language — and I collect them.
            </p>
          </div>

          {/* Gaming */}
          <div
            className="hobby-card"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '1.5rem',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>🎮</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f0' }}>Gaming</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)' }}>3,000+ hours logged</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {games.map((g) => (
                <div
                  key={g.title}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.6rem 0.9rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '0.6rem',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#f0f0f0', fontWeight: 600 }}>{g.title}</div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(240,240,240,0.35)' }}>{g.genre} · {g.platform}</div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '100px',
                      background: g.status === 'Active' ? 'rgba(78,205,196,0.15)' : 'rgba(255,255,255,0.05)',
                      color: g.status === 'Active' ? '#4ecdc4' : 'rgba(240,240,240,0.3)',
                      border: g.status === 'Active' ? '1px solid rgba(78,205,196,0.3)' : '1px solid transparent',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {g.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fitness */}
          <div
            className="hobby-card"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '1.5rem',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2rem' }}>🏋️</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f0f0f0' }}>Fitness</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)' }}>Discipline builds everything</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {fitness.map((f) => (
                <div
                  key={f.label}
                  style={{
                    padding: '1rem',
                    background: 'rgba(255,107,53,0.06)',
                    border: '1px solid rgba(255,107,53,0.12)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff6b35', marginBottom: '0.2rem' }}>{f.value}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(240,240,240,0.6)', fontWeight: 600 }}>{f.label}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(240,240,240,0.3)' }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
