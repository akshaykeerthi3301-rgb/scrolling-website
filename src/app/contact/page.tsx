import type { Metadata } from "next";
import { Mail, Timer } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} for portfolio, full-stack product, cinematic web, and automation projects.`,
};

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 pt-24 text-white">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-amber-200">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">Let us build the next version cleanly.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/64">{profile.availability}</p>

          <div className="mt-10 grid gap-4 text-sm text-white/64">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 transition hover:text-white">
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </a>
            <p className="inline-flex items-center gap-3">
              <Timer size={18} aria-hidden="true" />
              Best for serious builds, portfolio launches, and product systems.
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
