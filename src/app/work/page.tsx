import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteUrl, profile } from "@/lib/site";
import { caseStudies, labWorks, works, type Work } from "@/lib/works";

export const metadata: Metadata = {
  title: "Works and case studies",
  description: `Works and case studies by ${profile.name}: what is live, what is on GitHub, and the product decisions behind each.`,
};

const statusStyle = {
  live: "bg-emerald-100 text-emerald-800",
  code: "bg-sky-100 text-sky-800",
  private: "bg-neutral-200 text-neutral-700",
} as const;

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="grid gap-8 rounded-sm border border-neutral-300 bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:p-8">
      <div>
        <span
          className={`inline-block rounded-sm px-2.5 py-1 text-xs font-semibold ${statusStyle[work.status.kind]}`}
        >
          {work.status.label}
        </span>
        <p className="mt-4 text-sm text-neutral-500">
          {work.type} / {work.year}
        </p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight">{work.title}</h3>
        <p className="mt-4 text-base leading-8 text-neutral-600">{work.summary}</p>
        <Link
          href={`/work/${work.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950"
        >
          Read the full write-up
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <ul className="grid content-start gap-3 text-sm text-neutral-700">
        {work.points.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-700" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function WorkPage() {
  const siteUrl = getSiteUrl();

  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${profile.name} works and case studies`,
          url: `${siteUrl}/work`,
          hasPart: works.map((work) => ({
            "@type": "CreativeWork",
            name: work.title,
            url: `${siteUrl}/work/${work.slug}`,
            description: work.summary,
          })),
        }}
      />
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-red-700">Works</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Case studies and smaller works.
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            Each entry says whether it is live, only on GitHub, or private, and
            which trade-offs were mine. More projects are added as they ship.
          </p>
        </div>

        <h2 id="case-studies" className="mt-16 scroll-mt-28 text-2xl font-semibold">
          Case studies
        </h2>
        <div className="mt-6 grid gap-5">
          {caseStudies.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>

        <h2 id="works" className="mt-16 scroll-mt-28 text-2xl font-semibold">
          Works
        </h2>
        <div className="mt-6 grid gap-5">
          {labWorks.map((work) => (
            <WorkCard key={work.slug} work={work} />
          ))}
        </div>
      </section>
    </main>
  );
}
