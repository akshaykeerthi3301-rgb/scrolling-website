import Link from 'next/link';
import type { Metadata } from 'next';

type Project = {
  slug: string; number: string; title: string; category: string;
  desc: string; tags: string[]; year: string; status: string; href: string;
};

export const metadata: Metadata = {
  title: 'Projects — Akshay Keerthi',
  description: 'Real projects by Akshay Keerthi — FleetSense SaaS, Cross Asset Alpha Bot, WebCraft AI, ADHD Calendar, and more.',
};

const projects = [
  {
    slug: 'fleetsense',
    number: '01',
    title: 'FleetSense',
    category: 'Full-Stack SaaS · Next.js 15',
    desc: 'Multi-tenant fleet management platform with predictive maintenance, Samsara telematics webhooks, Clerk org-scoped auth, Stripe subscription billing, and 15+ relational data models covering vehicles, drivers, compliance, and fuel anomalies.',
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Prisma', 'Clerk', 'Stripe', 'Leaflet', 'Recharts'],
    year: '2024',
    status: 'Live',
    href: 'https://github.com/akshaykeerthi3301-rgb',
  },
  {
    slug: 'cross-asset-alpha-bot',
    number: '02',
    title: 'Cross Asset Alpha Bot',
    category: 'Quant Trading · Python',
    desc: 'End-to-end algorithmic trading system for NSE derivatives. 7+ signal families, rolling walk-forward validation, Telegram push alerts, Google Sheets reconciliation, macOS LaunchAgent scheduling, and a live paper-trading runtime. Champion strategy: ₹67,830 net P&L / 30 verified sessions.',
    tags: ['Python', 'Upstox API', 'NSE Derivatives', 'Telegram Bot', 'Google Sheets', 'macOS launchd'],
    year: '2024',
    status: 'Live',
    href: 'https://github.com/akshaykeerthi3301-rgb',
  },
  {
    slug: 'webcraft-ai',
    number: '03',
    title: 'WebCraft AI',
    category: 'AI Tool · Next.js · Groq',
    desc: 'AI-powered website builder that generates, previews, and deploys complete sites to Vercel in one prompt. Auth-gated with signed cookie sessions, per-IP rate limiting, and zero exposed API quota to anonymous users.',
    tags: ['Next.js', 'Groq AI', 'Vercel API', 'Auth', 'Rate Limiting'],
    year: '2025',
    status: 'Live',
    href: 'https://github.com/akshaykeerthi3301-rgb/webcraft-ai',
  },
  {
    slug: 'adhd-calendar',
    number: '04',
    title: 'ADHD Calendar',
    category: 'Mobile App · Next.js · Capacitor',
    desc: 'Mobile-first productivity calendar designed specifically for ADHD brains — bottom-sheet task entry, Today/Calendar/Settings navigation, zero-distraction layout, and a 390 px first-principle mobile design built with Next.js and Capacitor for native iOS/Android.',
    tags: ['Next.js 14', 'Tailwind CSS', 'Capacitor', 'TypeScript', 'iOS', 'Android'],
    year: '2025',
    status: 'In Progress',
    href: 'https://github.com/akshaykeerthi3301-rgb',
  },
  {
    slug: 'portfolio',
    number: '05',
    title: 'This Portfolio',
    category: 'Full-Stack · GSAP · AI Video',
    desc: 'Cinematic personal portfolio with a Kling AI-generated dragon video background that scrubs forward/backward with page scroll, GSAP ScrollTrigger animations, MDX blog, live GitHub stats, and a Resend-powered contact form.',
    tags: ['Next.js 16', 'GSAP', 'ScrollTrigger', 'MDX', 'Resend', 'Vercel'],
    year: '2026',
    status: 'You are here',
    href: 'https://akshaykeerthi.vercel.app',
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem,12vh,10rem) clamp(1.5rem,4vw,3rem)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link href="/" style={{ display: 'inline-block', color: 'rgba(240,240,240,0.4)', textDecoration: 'none', fontSize: '0.8rem', marginBottom: '3rem', letterSpacing: '0.05em' }}>
          ← Back home
        </Link>
        <div className="section-label" style={{ marginBottom: '0.75rem' }}>Selected Work</div>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '3rem' }}>
          <span className="text-gradient-white">Things I&apos;ve </span>
          <span className="text-gradient-accent">built</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {(projects as Project[]).map((p, i) => (
            <div key={p.slug} className="post-row" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '2rem 0', borderBottom: i === projects.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'border-color 0.25s' }}>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(240,240,240,0.2)', minWidth: '2rem', paddingTop: '0.2rem' }}>{p.number}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem' }}>
                    <div>
                      <h2 style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 800, color: '#f0f0f0', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>{p.title}</h2>
                      <span style={{ fontSize: '0.72rem', color: 'rgba(240,240,240,0.3)', letterSpacing: '0.05em' }}>{p.category}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.25)' }}>{p.year}</span>
                      <span style={{
                        fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
                        padding: '0.2rem 0.6rem', borderRadius: '100px',
                        background: p.status === 'Live' ? 'rgba(78,205,196,0.1)' : p.status === 'You are here' ? 'rgba(255,107,53,0.1)' : p.status === 'In Progress' ? 'rgba(255,200,50,0.1)' : 'rgba(255,255,255,0.05)',
                        color: p.status === 'Live' ? '#4ecdc4' : p.status === 'You are here' ? '#ff6b35' : p.status === 'In Progress' ? '#ffc832' : 'rgba(240,240,240,0.35)',
                      }}>{p.status}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(240,240,240,0.4)', lineHeight: 1.7, marginBottom: '1rem', maxWidth: '580px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{ fontSize: '0.72rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '100px', color: 'rgba(240,240,240,0.45)' }}>{t}</span>
                      ))}
                    </div>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: '#ff6b35', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }}>
                      View →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <Link href="/#contact" style={{ display: 'inline-block', padding: '0.85rem 2.5rem', background: '#ff6b35', color: '#fff', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.03em' }}>
            Start a project →
          </Link>
        </div>
      </div>
    </main>
  );
}
