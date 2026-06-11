import type { Metadata } from "next";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for ${profile.domain}.`,
};

export default function TermsPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase text-red-700">Terms</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Terms of Use</h1>
        <p className="mt-6 text-sm text-neutral-500">Last updated: May 20, 2026</p>

        <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Use of this site</h2>
            <p className="mt-3">
              This website presents professional portfolio information, writing, and contact options for {profile.name}.
              Content is provided for general informational purposes and may change over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">No guarantees</h2>
            <p className="mt-3">
              The site is provided as-is. While care is taken to keep information accurate, no guarantee is made that every
              detail is complete, current, or suitable for every use case.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Contact</h2>
            <p className="mt-3">
              Questions can be sent to{" "}
              <a className="underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
