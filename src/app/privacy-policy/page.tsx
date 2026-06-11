import type { Metadata } from "next";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${profile.domain}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase text-red-700">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Privacy Policy</h1>
        <p className="mt-6 text-sm text-neutral-500">Last updated: May 20, 2026</p>

        <div className="mt-10 grid gap-8 text-base leading-8 text-neutral-700">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Overview</h2>
            <p className="mt-3">
              {profile.domain} is a professional portfolio website for {profile.name}. The site may collect information
              that visitors submit through the contact form, such as name, email address, and project details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Analytics and advertising</h2>
            <p className="mt-3">
              This template is prepared for Google AdSense and similar advertising tools, but ads are disabled until the
              required publisher settings are configured. If advertising is enabled, third-party vendors may use cookies or
              similar technologies to serve and measure ads.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Contact data</h2>
            <p className="mt-3">
              Contact form submissions are used only to respond to project inquiries. Do not submit sensitive credentials,
              payment information, or private account details through the form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-950">Contact</h2>
            <p className="mt-3">
              Privacy questions can be sent to{" "}
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
