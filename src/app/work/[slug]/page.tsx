import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, profile } from "@/lib/site";
import { getWork, works } from "@/lib/works";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

const statusStyle = {
  live: "bg-emerald-100 text-emerald-800",
  code: "bg-sky-100 text-sky-800",
  private: "bg-neutral-200 text-neutral-700",
} as const;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

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
  const work = getWork(slug);

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
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-neutral-950"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Works
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span
              className={`inline-block rounded-sm px-2.5 py-1 text-xs font-semibold ${statusStyle[work.status.kind]}`}
            >
              {work.status.label}
            </span>
            <p className="mt-4 text-sm font-semibold uppercase text-red-700">
              {work.type} / {work.year}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">{work.title}</h1>
            {work.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {work.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-sm bg-neutral-950 px-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  >
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            <p className="text-lg leading-9 text-neutral-700">{work.summary}</p>
            <ul className="mt-8 grid gap-3 text-sm text-neutral-700 sm:grid-cols-2">
              {work.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-5">
          {[
            ["The operational friction", work.challenge],
            ["System and product decisions", work.approach],
          ].map(([heading, body]) => (
            <section key={heading} className="rounded-sm border border-neutral-300 bg-white p-6">
              <h2 className="text-xl font-semibold">{heading}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
            </section>
          ))}

          <section className="rounded-sm border border-neutral-300 bg-white p-6">
            <h2 className="text-xl font-semibold">What I owned</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-neutral-600">
              {work.owned.map((item) => (
                <li key={item} className="border-l-2 border-neutral-300 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-sm border border-neutral-300 bg-white p-6">
            <h2 className="text-xl font-semibold">Outcome and validation</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{work.outcome}</p>
          </section>
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex h-12 items-center gap-2 rounded-sm bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Get in touch
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </article>
    </main>
  );
}
