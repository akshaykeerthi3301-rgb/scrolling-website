import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { featuredWork, getSiteUrl, profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected portfolio work by ${profile.name}: cinematic web, dashboards, automation, and product scaffolds.`,
};

export default function WorkPage() {
  const siteUrl = getSiteUrl();

  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${profile.name} selected work`,
          url: `${siteUrl}/work`,
          hasPart: featuredWork.map((work) => ({
            "@type": "CreativeWork",
            name: work.title,
            url: `${siteUrl}/work/${work.slug}`,
            description: work.summary,
          })),
        }}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-red-700">Work</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">Selected systems and product directions.</h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            These are portfolio-ready case-study shells. Replace the current summaries with final evidence, screenshots,
            metrics, and links as each project matures.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {featuredWork.map((work) => (
            <article key={work.slug} className="grid gap-8 rounded-sm border border-neutral-300 bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
              <div>
                <p className="text-sm text-neutral-500">
                  {work.type} / {work.year}
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight">{work.title}</h2>
                <p className="mt-5 text-base leading-8 text-neutral-600">{work.summary}</p>
                <Link href={`/work/${work.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
                  Open case study
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
              <ul className="grid content-start gap-3 text-sm text-neutral-700">
                {work.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-700" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
