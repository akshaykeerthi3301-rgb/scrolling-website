import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insights, profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: `Writing by ${profile.name} about cinematic portfolios, publishable systems, and AdSense-ready web properties.`,
};

export default function InsightsPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase text-red-700">Insights</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Notes that make the portfolio more than a page.
          </h1>
          <p className="mt-6 text-base leading-8 text-neutral-600">
            These articles give the site useful, original content for visitors and search engines. Replace them with final
            personal writing before AdSense review.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {insights.map((insight) => (
            <article key={insight.slug} className="flex min-h-[330px] flex-col justify-between rounded-sm border border-neutral-300 bg-white p-6">
              <div>
                <p className="text-sm text-neutral-500">
                  {insight.readTime} /{" "}
                  {new Date(insight.published).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-6 text-2xl font-semibold leading-8">{insight.title}</h2>
                <p className="mt-4 text-sm leading-7 text-neutral-600">{insight.summary}</p>
              </div>
              <Link href={`/insights/${insight.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
                Read note
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
