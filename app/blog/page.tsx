import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing by Akshay Keerthi on full-stack development, product design, GSAP animation, and building software alongside a career in private banking.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Akshay Keerthi',
    description: 'Writing by Akshay Keerthi on full-stack development, product design, and building in public.',
    url: 'https://akshaykeerthi.vercel.app/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem,12vh,10rem) clamp(1.5rem,4vw,3rem)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <style>{`
          .post-row { display:block; text-decoration:none; background:rgba(255,255,255,0.03); backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.07); border-radius:1.25rem; padding:1.75rem 2rem; transition:border-color 0.25s, transform 0.25s; }
          .post-row:hover { border-color:rgba(255,107,53,0.35); transform:translateX(4px); }
        `}</style>

        <Link href="/" style={{ display: 'inline-block', color: 'rgba(240,240,240,0.4)', textDecoration: 'none', fontSize: '0.8rem', marginBottom: '3rem', letterSpacing: '0.05em' }}>
          ← Back home
        </Link>
        <div className="section-label" style={{ marginBottom: '0.75rem' }}>Writing</div>
        <h1 style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '3rem' }}>
          <span className="text-gradient-white">All </span>
          <span className="text-gradient-accent">posts</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="post-row">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                    {post.tags.map((t) => (
                      <span key={t} style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4ecdc4', fontWeight: 600, padding: '0.2rem 0.6rem', background: 'rgba(78,205,196,0.1)', borderRadius: '100px' }}>{t}</span>
                    ))}
                  </div>
                  <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f0', letterSpacing: '-0.02em', marginBottom: '0.4rem' }}>{post.title}</h2>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(240,240,240,0.4)', lineHeight: 1.6 }}>{post.excerpt}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.25)', marginBottom: '0.25rem' }}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(240,240,240,0.25)' }}>{post.readTime}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
