import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { domainIdeas, profile, stackHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}, a full-stack builder focused on cinematic portfolios, product systems, and deployable automation.`,
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-red-700">About</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">{profile.name}</h1>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-600">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <div className="max-w-3xl text-lg leading-9 text-neutral-700">
            <p>{profile.summary}</p>
            <p className="mt-6">
              The portfolio is structured around cinematic presentation, but the goal is practical: a site that can publish,
              rank, explain the work, accept inquiries, and turn into a monetized content property when the real domain and
              content are ready.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {stackHighlights.map((item) => (
                <span key={item} className="rounded-sm border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-5 md:grid-cols-2">
            {domainIdeas.map((idea) => {
              const Icon = idea.icon;
              return (
                <div key={idea.label} className="rounded-sm border border-neutral-300 p-6">
                  <Icon size={24} className="text-teal-800" aria-hidden="true" />
                  <p className="mt-5 text-xl font-semibold">{idea.label}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    Use this as a launch identity, then point the final custom domain in Vercel before public indexing and AdSense review.
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-sm bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Start a conversation
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
