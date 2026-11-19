"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Clapperboard,
  GraduationCap,
  Play,
  RotateCcw,
} from "lucide-react";
import Lenis from "lenis";
import {
  achievements,
  capabilities,
  cinematicScenes,
  credentials,
  experience,
  profile,
  stackHighlights,
} from "@/lib/site";
import { caseStudies, labWorks } from "@/lib/works";
import { FrameSequenceCanvas } from "@/components/cinematic/frame-sequence-canvas";

const chapters = [
  { id: "intro", label: "Intro", range: "000-019" },
  { id: "projects", label: "Projects", range: "020-039" },
  { id: "minor-works", label: "Minor works", range: "040-059" },
  { id: "profile", label: "Profile", range: "060-079" },
  { id: "connect", label: "Connect", range: "080-095" },
];

const statusStyle = {
  live: "bg-emerald-400/15 text-emerald-300",
  code: "bg-sky-400/15 text-sky-300",
  private: "bg-white/10 text-white/60",
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function CinematicPortfolioExperience() {
  const lenisRef = useRef<Lenis | null>(null);
  const previousProgressRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"forward" | "reverse">("forward");
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeWork, setActiveWork] = useState(0);

  const frame = Math.round(progress * 95);
  const activeWorkItem = caseStudies[activeWork];

  const chapterProgress = useMemo(
    () =>
      chapters.map((chapter, index) => ({
        ...chapter,
        active: index === activeChapter,
        complete: index < activeChapter,
      })),
    [activeChapter],
  );

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let frameId = 0;

    const updateProgress = () => {
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress =
        documentHeight > 0
          ? clamp(window.scrollY / documentHeight, 0, 1)
          : 0;
      const previous = previousProgressRef.current;

      if (Math.abs(nextProgress - previous) > 0.001) {
        setDirection(nextProgress >= previous ? "forward" : "reverse");
      }

      previousProgressRef.current = nextProgress;
      setProgress(nextProgress);
      setActiveChapter(
        clamp(
          Math.round(nextProgress * (chapters.length - 1)),
          0,
          chapters.length - 1,
        ),
      );
    };

    updateProgress();

    if (!reduceMotion) {
      const lenis = new Lenis({
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.05,
      });
      lenisRef.current = lenis;

      const raf = (time: number) => {
        lenis.raf(time);
        updateProgress();
        frameId = requestAnimationFrame(raf);
      };

      frameId = requestAnimationFrame(raf);
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frameId);
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  function scrollToSection(id: string) {
    const target = document.getElementById(id);

    if (!target) {
      return;
    }

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -64 });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative isolate overflow-hidden bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-neutral-950">
        <FrameSequenceCanvas
          progress={progress}
          frameCount={96}
          frameBasePath="/sequences/akshay"
          className="opacity-95"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.88)_0%,rgba(5,5,4,0.56)_45%,rgba(5,5,4,0.26)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,4,0.08)_0%,rgba(5,5,4,0.18)_46%,rgba(5,5,4,0.86)_100%)]" />
      </div>

      {/* Frame counter */}
      <div className="fixed bottom-5 left-5 z-40 hidden rounded-sm border border-white/12 bg-neutral-950/70 px-3 py-2 text-xs text-white/70 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex md:items-center md:gap-3">
        <Clapperboard
          size={16}
          className="text-sky-300"
          aria-hidden="true"
        />
        <span>Frame {String(frame).padStart(3, "0")}</span>
        <span className="h-4 w-px bg-white/16" />
        <span className="inline-flex items-center gap-1">
          {direction === "forward" ? (
            <Play size={13} aria-hidden="true" />
          ) : (
            <RotateCcw size={13} aria-hidden="true" />
          )}
          {direction === "forward" ? "Forward" : "Reverse"}
        </span>
      </div>

      {/* Chapter nav */}
      <nav
        aria-label="Cinematic chapters"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 rounded-sm border border-white/12 bg-neutral-950/62 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl lg:block"
      >
        <div className="flex flex-col gap-1">
          {chapterProgress.map((chapter, index) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => scrollToSection(chapter.id)}
              className={`group flex min-w-36 items-center justify-between gap-3 rounded-sm px-3 py-2 text-left text-xs transition ${
                chapter.active
                  ? "bg-white text-neutral-950"
                  : "text-white/52 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="font-semibold">{chapter.label}</span>
              <span
                className={
                  chapter.active
                    ? "text-neutral-500"
                    : chapter.complete
                      ? "text-sky-300"
                      : "text-white/34"
                }
              >
                {chapter.range}
              </span>
              <span className="sr-only">{index + 1}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ── INTRO ── */}
      <section
        id="intro"
        className="relative min-h-screen px-5 pb-16 pt-28 md:px-8 md:pt-32"
      >
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/8 px-3 py-2 text-sm text-white/72 backdrop-blur-xl">
              <Briefcase size={15} aria-hidden="true" />
              Projects &middot; Minor works &middot; Profile
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                See the projects
                <ArrowDown size={16} aria-hidden="true" />
              </button>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Get in touch
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 lg:justify-self-end">
            {cinematicScenes.map((scene, index) => (
              <button
                key={scene.eyebrow}
                type="button"
                onClick={() =>
                  scrollToSection(
                    chapters[Math.min(index + 1, chapters.length - 1)].id,
                  )
                }
                className={`max-w-md border-l px-5 py-4 text-left backdrop-blur-xl transition duration-500 focus:outline-none focus:ring-2 focus:ring-sky-300/70 ${
                  activeChapter === index
                    ? "border-sky-300 bg-white/12 text-white"
                    : "border-white/14 bg-neutral-950/24 text-white/48 hover:bg-white/8 hover:text-white/78"
                }`}
              >
                <p className="text-xs font-semibold uppercase">
                  {scene.eyebrow}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-7">
                  {scene.title}
                </h2>
                <p className="mt-3 text-sm leading-6">{scene.copy}</p>
                <p className="mt-4 text-xs uppercase text-sky-300">
                  {scene.metric}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 border-t border-white/12 pt-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-wrap gap-2">
            {stackHighlights.map((item) => (
              <span
                key={item}
                className="rounded-sm border border-white/12 bg-white/7 px-3 py-1.5 text-xs text-white/64 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 text-sm text-white/64 transition hover:text-white"
          >
            Scroll to explore
            <ArrowDown size={16} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section
        id="projects"
        className="relative min-h-screen px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-sky-300">
                Projects
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                What broke, what I decided, what happened.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:justify-self-end">
              Each one says plainly whether it is live, only on GitHub, or
              private, and which trade-offs were mine.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid content-start gap-3">
              {caseStudies.map((work, index) => (
                <button
                  key={work.slug}
                  type="button"
                  onClick={() => setActiveWork(index)}
                  onMouseEnter={() => setActiveWork(index)}
                  className={`group rounded-sm border p-5 text-left backdrop-blur-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-300/70 ${
                    activeWork === index
                      ? "border-sky-300 bg-white text-neutral-950"
                      : "border-white/12 bg-neutral-950/52 text-white hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span
                      className={
                        activeWork === index
                          ? "text-neutral-500"
                          : "text-white/50"
                      }
                    >
                      {work.type}
                    </span>
                    <span
                      className={
                        activeWork === index
                          ? "text-neutral-500"
                          : "text-white/40"
                      }
                    >
                      {work.year}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-8">
                    {work.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-6 ${activeWork === index ? "text-neutral-600" : "text-white/58"}`}
                  >
                    {work.status.label}
                  </p>
                </button>
              ))}
            </div>

            <article
              data-lenis-prevent
              className="rounded-sm border border-white/14 bg-neutral-950/70 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl lg:sticky lg:top-24 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/12 pb-5">
                <div>
                  <span
                    className={`inline-block rounded-sm px-2.5 py-1 text-xs font-semibold ${statusStyle[activeWorkItem.status.kind]}`}
                  >
                    {activeWorkItem.status.label}
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold">
                    {activeWorkItem.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/66">
                    {activeWorkItem.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeWorkItem.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-sm border border-white/18 px-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                    >
                      {link.label}
                      <ArrowRight size={14} aria-hidden="true" />
                    </a>
                  ))}
                  <Link
                    href={`/work/${activeWorkItem.slug}`}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-white px-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-sky-100"
                  >
                    Full case study
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 py-6 sm:grid-cols-2">
                {activeWorkItem.points.map((point) => (
                  <div key={point} className="border-l border-sky-300/50 pl-4">
                    <CheckCircle2
                      size={16}
                      className="text-sky-300"
                      aria-hidden="true"
                    />
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-5 text-sm leading-7 text-white/68">
                <p>
                  <span className="block text-xs font-semibold uppercase text-white">
                    The operational friction
                  </span>
                  {activeWorkItem.challenge}
                </p>
                <p>
                  <span className="block text-xs font-semibold uppercase text-white">
                    Outcome and validation
                  </span>
                  {activeWorkItem.outcome}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section
        id="minor-works"
        className="relative px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-300">
              Minor works
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Smaller builds and experiments.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {labWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group flex flex-col rounded-sm border border-white/12 bg-neutral-950/52 p-5 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10"
              >
                <span
                  className={`self-start rounded-sm px-2.5 py-1 text-xs font-semibold ${statusStyle[work.status.kind]}`}
                >
                  {work.status.label}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{work.title}</h3>
                <p className="mt-1 text-xs text-white/44">
                  {work.type} &middot; {work.year}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {work.summary}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-white/80 transition group-hover:text-white">
                  Read more
                  <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
            <div className="flex flex-col justify-center rounded-sm border border-dashed border-white/18 p-5 text-white/50">
              <p className="text-lg font-semibold text-white/70">
                More to come.
              </p>
              <p className="mt-2 text-sm leading-6">
                New projects and minor works are added as they ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section id="profile" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-violet-300">
                Profile
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Where the judgment comes from.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:justify-self-end">
              Client desks and HR operations taught me how workflows fail under
              pressure. The builds are how I test what to do about it.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-white/12 bg-white/7 p-5 backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-sky-300">
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-white/54">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4">
            {experience.map((exp) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className="grid gap-4 rounded-sm border border-white/12 bg-neutral-950/52 p-5 backdrop-blur-xl md:grid-cols-[0.3fr_0.4fr_0.3fr] md:items-center"
              >
                <div className="flex items-center gap-3">
                  {exp.company === "IIM Sambalpur" ? (
                    <GraduationCap
                      size={20}
                      className="text-violet-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <Briefcase
                      size={20}
                      className="text-violet-300"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <p className="text-lg font-semibold">{exp.role}</p>
                    <p className="text-sm text-white/54">
                      {exp.company}, {exp.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/68">{exp.highlight}</p>
                <div className="flex items-center justify-between gap-4 md:justify-end">
                  <span className="rounded-sm bg-violet-400/15 px-3 py-1 text-xs font-semibold text-violet-300">
                    {exp.metric}
                  </span>
                  <span className="text-xs text-white/44">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {credentials.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-sm border border-white/12 bg-white/7 p-5 backdrop-blur-xl"
              >
                <Award
                  size={20}
                  className="mt-0.5 shrink-0 text-violet-300"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-white/54">{item.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {capabilities.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="rounded-sm border border-white/12 bg-white/7 p-5 backdrop-blur-xl"
                >
                  <Icon
                    size={24}
                    className="text-sky-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {group.body}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
                    {group.items.map((item) => (
                      <li key={item} className="border-l border-sky-300/40 pl-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONNECT ── */}
      <section id="connect" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-sm border border-white/12 bg-neutral-950/72 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase text-sky-300">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Let&apos;s talk.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/66">
                {profile.availability}
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-sky-100"
                >
                  Get in touch
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/16 px-6 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  All projects
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              <p className="mt-8 text-sm text-white/44">
                {profile.email} &middot; {profile.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
