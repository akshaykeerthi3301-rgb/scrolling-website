import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, Timer } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} for AI strategy consulting, GenAI implementation, digital transformation, and product development engagements.`,
};

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 pt-24 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-sky-300">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">
            Let&apos;s discuss your AI transformation.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/64">{profile.availability}</p>

          <div className="mt-10 grid gap-4 text-sm text-white/64">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 transition hover:text-white">
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 transition hover:text-white">
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <p className="inline-flex items-center gap-3">
              <MapPin size={18} aria-hidden="true" />
              {profile.location}
            </p>
            <p className="inline-flex items-center gap-3">
              <Timer size={18} aria-hidden="true" />
              AI strategy, GenAI products, consulting, and digital transformation.
            </p>
          </div>
        </div>

        <div className="rounded-sm border border-white/12 bg-white p-6 text-neutral-950 md:p-8 dark:bg-white/6 dark:text-white">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
