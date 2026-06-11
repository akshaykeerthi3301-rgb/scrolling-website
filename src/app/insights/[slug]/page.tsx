import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AdUnit } from "@/components/ads/ad-unit";
import { getSiteUrl, insights, profile } from "@/lib/site";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: insight.title,
    description: insight.summary,
    alternates: {
      canonical: `/insights/${insight.slug}`,
    },
    openGraph: {
      title: insight.title,
      description: insight.summary,
      url: `${getSiteUrl()}/insights/${insight.slug}`,
      type: "article",
      publishedTime: insight.published,
      authors: [profile.name],
    },
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition hover:text-neutral-950">
          <ArrowLeft size={16} aria-hidden="true" />
          Insights
        </Link>
        <p className="mt-10 text-sm font-semibold uppercase text-red-700">{insight.tags.join(" / ")}</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">{insight.title}</h1>
        <p className="mt-6 text-base leading-8 text-neutral-600">{insight.summary}</p>
        <p className="mt-6 text-sm text-neutral-500">
          {new Date(insight.published).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          / {insight.readTime}
        </p>

        <div className="mt-12 grid gap-10">
          {insight.sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              <p className="mt-4 text-lg leading-9 text-neutral-700">{section.body}</p>
              {index === 0 ? <AdUnit slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE} className="mt-10" /> : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
