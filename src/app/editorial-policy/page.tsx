import type { Metadata } from "next";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `Editorial and advertising policy for ${profile.domain}.`,
};

export default function EditorialPolicyPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase text-red-700">Editorial Policy</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Editorial and Advertising Policy</h1>
        <p className="mt-6 text-sm text-neutral-500">Last updated: May 20, 2026</p>

        <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Purpose</h2>
            <p className="mt-3">
              {profile.domain} publishes portfolio work, technical notes, and professional writing by {profile.name}. The
              goal is to make the work understandable, useful, and clearly separated from advertising or sponsorship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Content standards</h2>
            <p className="mt-3">
              Articles and case studies should be original, fact-checked where possible, and updated when important details
              change. Placeholder content should be replaced before public promotion or AdSense review.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Advertising</h2>
            <p className="mt-3">
              Ads, when enabled, are displayed in reserved spaces and labeled where appropriate. Advertising should not
              influence editorial conclusions, hide content, or encourage accidental clicks.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
