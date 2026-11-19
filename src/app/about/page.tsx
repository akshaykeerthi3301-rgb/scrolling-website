import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, BookOpen, Briefcase, GraduationCap, ShieldCheck } from "lucide-react";
import { experience, profile, stackHighlights } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Profile of ${profile.name}: IIM Sambalpur MBA, private banking and HR operations background, and independent AI product builder.`,
};

const certifications = [
  {
    title: "Executive Program in Forward Deployed AI Product Management",
    issuer: "IITM Pravartak",
    detail: "Taking AI products from prototype into real customer workflows",
    status: "",
  },
  {
    title: "Generative AI certification",
    issuer: "Microsoft",
    detail: "Generative AI concepts and applications",
    status: "",
  },
  {
    title: "Responsible AI certification",
    issuer: "United Nations",
    detail: "Safe and accountable AI use",
    status: "",
  },
];

const skillCategories = [
  {
    title: "AI systems & prototyping",
    skills: ["LLM agents", "Evaluation harnesses", "Guardrails and gates", "Prompt design", "Responsible AI"],
  },
  {
    title: "Build tools",
    skills: ["Python", "Next.js", "TypeScript", "Postgres", "GitHub", "Vercel", "Power BI", "Excel"],
  },
  {
    title: "Domain & commercial",
    skills: ["HNI wealth advisory", "Employee relations", "Marketplace vendor management", "Go-to-market", "Business cases", "Client escalations"],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-100 pt-24 text-neutral-950">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-700">About</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-6xl">{profile.name}</h1>
            <p className="mt-5 text-sm text-neutral-600">
              {profile.location} &middot; IIM Sambalpur MBA
            </p>
          </div>
          <div className="max-w-3xl text-lg leading-9 text-neutral-700">
            <p>{profile.summary}</p>
            <p className="mt-6">
              {profile.availability}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex items-center gap-3">
            <Briefcase size={22} className="text-sky-700" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">Experience</h2>
          </div>
          <div className="mt-8 grid gap-4">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="grid gap-4 rounded-sm border border-neutral-200 bg-neutral-50 p-5 md:grid-cols-[0.35fr_0.35fr_0.3fr] md:items-center"
              >
                <div>
                  <p className="text-lg font-semibold">{exp.role}</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {exp.company}, {exp.location} &middot; {exp.period}
                  </p>
                </div>
                <p className="text-sm text-neutral-600">{exp.highlight}</p>
                <div className="md:text-right">
                  <span className="inline-block rounded-sm bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                    {exp.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex items-center gap-3">
          <GraduationCap size={22} className="text-sky-700" aria-hidden="true" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <p className="text-lg font-semibold">MBA — General Management</p>
            <p className="mt-2 text-sm text-neutral-600">
              IIM Sambalpur (Indian Institute of Management) &middot; 2023 – 2025
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Coursework: Business Strategy, Analytics, Organisational Behaviour, Finance, Marketing.
              Placement Committee member — coordinated outcomes for 40+ batch members.
            </p>
          </div>
          <div className="rounded-sm border border-neutral-200 bg-white p-6">
            <p className="text-lg font-semibold">B.Tech — Mechanical Engineering</p>
            <p className="mt-2 text-sm text-neutral-600">
              College of Engineering Muttathara, Kerala &middot; 2017 – 2021
            </p>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              Thermodynamics, Mechanics, Manufacturing, Mathematics.
              State-level inter-college football.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-sky-700" aria-hidden="true" />
            <h2 className="text-2xl font-semibold">Certifications</h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {certifications.map((cert) => (
              <div key={cert.title} className="rounded-sm border border-neutral-200 bg-neutral-50 p-5">
                <p className="font-semibold">{cert.title}</p>
                <p className="mt-2 text-sm text-neutral-500">{cert.issuer}</p>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{cert.detail}</p>
                {cert.status && <p className="mt-3 text-xs font-semibold text-sky-700">{cert.status}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex items-center gap-3">
          <BookOpen size={22} className="text-sky-700" aria-hidden="true" />
          <h2 className="text-2xl font-semibold">Toolkit</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="text-sm font-semibold uppercase text-neutral-500">{category.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-12 inline-flex h-12 items-center gap-2 rounded-sm bg-neutral-950 px-5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Get in touch
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
