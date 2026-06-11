import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { featuredWork, getSiteUrl, profile } from "@/lib/site";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredWork.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = featuredWork.find((item) => item.slug === slug);

  if (!work) {
    return {};
  }

  return {
    title: work.title,
    description: work.summary,
    alternates: {
      canonical: `/work/${work.slug}`,
    },
    openGraph: {
      title: work.title,
      description: work.summary,
      url: `${getSiteUrl()}/work/${work.slug}`,
      type: "article",
      authors: [profile.name],
    },
  };
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = featuredWork.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  const siteUrl = getSiteUrl();

  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: work.title,
          description: work.summary,
          url: `${siteUrl}/work/${work.slug}`,
          author: {
            "@type": "Person",
            name: profile.name,
          },
        }}
      />
      <article className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-neutral-950">
          <ArrowLeft size={16} aria-hidden="true" />
          Work
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-red-700">
              {work.type} / {work.year}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{work.title}</h1>
          </div>
          <div>
            <p className="text-lg leading-9 text-neutral-700">{work.summary}</p>
            <ul className="mt-8 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              {work.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-700" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["Challenge", work.challenge],
            ["Approach", work.approach],
            ["Outcome", work.outcome],
          ].map(([heading, body]) => (
            <section key={heading} className="rounded-sm border border-neutral-300 bg-white p-6">
              <h2 className="text-xl font-semibold">{heading}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
            </section>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex h-12 items-center gap-2 rounded-sm bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Discuss a similar build
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </main>
  );
}
