'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Status = 'idle' | 'sending' | 'success' | 'error';

const socials = [
  { label: 'GitHub', href: 'https://github.com/akshaykeerthi3301-rgb', icon: '⌥' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/akshaykeerthi', icon: 'in' },
  { label: 'Twitter / X', href: 'https://x.com/akshaykeerthi', icon: '𝕏' },
  { label: 'Email', href: 'mailto:akshaykeerthi3301@gmail.com', icon: '✉' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  useGSAP(() => {
    gsap.to(blobRef.current, {
      scale: 1.2, x: 60, y: -40, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut',
    });
    gsap.from('.contact-content', {
      y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 65%', toggleActions: 'play none none reverse' },
    });
  }, { scope: sectionRef });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1.1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    color: '#f0f0f0',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: 'clamp(6rem,12vh,10rem) clamp(1.5rem,4vw,3rem)',
        background: 'transparent',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <div ref={blobRef} style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(ellipse, rgba(255,107,53,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="contact-content" style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Let&apos;s talk</div>
        <h2 style={{ fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '1.5rem' }}>
          <span className="text-gradient-white">Got a project </span>
          <span className="text-gradient-accent">in mind?</span>
        </h2>
        <p style={{ fontSize: 'clamp(0.95rem,1.5vw,1.1rem)', color: 'rgba(240,240,240,0.45)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '480px', margin: '0 auto 3rem' }}>
          I&apos;m available for freelance projects, full-time roles, and interesting collaborations. Let&apos;s build something worth scrolling for.
        </p>

        {/* Contact form */}
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
              />
            </div>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>Subject</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's it about?" style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(240,240,240,0.4)', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project…" required rows={5}
              style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(255,107,53,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
          </div>

          {status === 'success' ? (
            <div style={{ padding: '1rem', background: 'rgba(78,205,196,0.1)', border: '1px solid rgba(78,205,196,0.3)', borderRadius: '0.75rem', color: '#4ecdc4', fontSize: '0.9rem', textAlign: 'center' }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </div>
          ) : (
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                padding: '1rem',
                background: status === 'sending' ? 'rgba(255,107,53,0.5)' : '#ff6b35',
                color: '#fff',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: status === 'sending' ? 'wait' : 'pointer',
                letterSpacing: '0.03em',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => { if (status !== 'sending') (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
            >
              {status === 'sending' ? 'Sending…' : status === 'error' ? 'Failed — try again' : 'Send message →'}
            </button>
          )}
        </form>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.1rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '100px',
                textDecoration: 'none',
                color: 'rgba(240,240,240,0.55)',
                fontSize: '0.8rem',
                fontWeight: 600,
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.4)';
                (e.currentTarget as HTMLElement).style.color = '#ff6b35';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                (e.currentTarget as HTMLElement).style.color = 'rgba(240,240,240,0.55)';
              }}
            >
              <span style={{ fontStyle: 'normal' }}>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </div>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(240,240,240,0.2)', fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} Akshay Keerthi — Designed & built by me
        </div>
      </div>
    </section>
  );
}
