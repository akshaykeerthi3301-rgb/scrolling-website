import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `https://akshaykeerthi.vercel.app/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    authors: [{ name: 'Akshay Keerthi', url: 'https://akshaykeerthi.vercel.app' }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url,
      authors: ['Akshay Keerthi'],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@akshaykeerthi',
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main style={{ minHeight: '100vh', padding: 'clamp(6rem,12vh,10rem) clamp(1.5rem,4vw,3rem)' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/blog" style={{ display: 'inline-block', color: 'rgba(240,240,240,0.4)', textDecoration: 'none', fontSize: '0.8rem', marginBottom: '3rem', letterSpacing: '0.05em' }}>
          ← All posts
        </Link>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {post.tags.map((t) => (
            <span key={t} style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4ecdc4', fontWeight: 600, padding: '0.2rem 0.6rem', background: 'rgba(78,205,196,0.1)', borderRadius: '100px' }}>{t}</span>
          ))}
        </div>

        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#f0f0f0', marginBottom: '1rem' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', gap: '1.5rem', color: 'rgba(240,240,240,0.3)', fontSize: '0.8rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '2rem' }}>
          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span>{post.readTime}</span>
        </div>

        {/* MDX content */}
        <div style={{
          color: 'rgba(240,240,240,0.8)',
          lineHeight: 1.85,
          fontSize: 'clamp(0.95rem,1.5vw,1.05rem)',
        }}>
          <style>{`
            .mdx-content h2 { font-size: clamp(1.3rem,3vw,1.8rem); font-weight: 800; color: #f0f0f0; letter-spacing: -0.03em; margin: 2.5rem 0 1rem; }
            .mdx-content h3 { font-size: 1.15rem; font-weight: 700; color: #f0f0f0; margin: 2rem 0 0.75rem; }
            .mdx-content p { margin-bottom: 1.5rem; }
            .mdx-content strong { color: #f0f0f0; font-weight: 700; }
            .mdx-content em { color: rgba(240,240,240,0.7); font-style: italic; }
            .mdx-content ul, .mdx-content ol { margin: 0 0 1.5rem 1.5rem; }
            .mdx-content li { margin-bottom: 0.5rem; }
            .mdx-content hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 2.5rem 0; }
            .mdx-content blockquote { border-left: 3px solid #ff6b35; padding-left: 1.25rem; margin: 1.5rem 0; color: rgba(240,240,240,0.6); font-style: italic; }
            .mdx-content code { background: rgba(255,255,255,0.06); border-radius: 4px; padding: 0.15em 0.4em; font-size: 0.875em; color: #4ecdc4; }
            .mdx-content pre { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 0.75rem; padding: 1.5rem; overflow-x: auto; margin-bottom: 1.5rem; }
            .mdx-content pre code { background: none; padding: 0; color: inherit; }
          `}</style>
          <div className="mdx-content">
            <MDXRemote source={post.content} />
          </div>
        </div>

        {/* Back link */}
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <Link href="/blog" style={{ color: 'rgba(240,240,240,0.4)', textDecoration: 'none', fontSize: '0.85rem' }}>
            ← Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
