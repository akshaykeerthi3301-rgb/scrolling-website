"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  Gauge,
  MousePointer2,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import Lenis from "lenis";
import { capabilities, cinematicScenes, featuredWork, processSteps, profile, stackHighlights } from "@/lib/site";
import { FrameSequenceCanvas } from "@/components/cinematic/frame-sequence-canvas";

const chapters = [
  { id: "intro", label: "Intro", range: "000-019" },
  { id: "work", label: "Work", range: "020-041" },
  { id: "process", label: "Process", range: "042-063" },
  { id: "capabilities", label: "Capabilities", range: "064-083" },
  { id: "launch", label: "Launch", range: "084-095" },
];

const launchChecklist = [
  "Free Vercel domain",
  "SEO metadata",
  "Contact API",
  "Policy pages",
  "AdSense hooks",
  "Frame manifest",
];

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
  const [activeStep, setActiveStep] = useState(0);
  const [activeCapability, setActiveCapability] = useState(1);
  const [checkedLaunchItems, setCheckedLaunchItems] = useState(() => new Set([0, 1, 2, 3, 4, 5]));

  const frame = Math.round(progress * 95);
  const activeWorkItem = featuredWork[activeWork];
  const activeProcessStep = processSteps[activeStep];
  const activeCapabilityItem = capabilities[activeCapability];
  const completedCount = checkedLaunchItems.size;

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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = documentHeight > 0 ? clamp(window.scrollY / documentHeight, 0, 1) : 0;
      const previous = previousProgressRef.current;

      if (Math.abs(nextProgress - previous) > 0.001) {
        setDirection(nextProgress >= previous ? "forward" : "reverse");
      }

      previousProgressRef.current = nextProgress;
      setProgress(nextProgress);
      setActiveChapter(clamp(Math.round(nextProgress * (chapters.length - 1)), 0, chapters.length - 1));
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

  function toggleLaunchItem(index: number) {
    setCheckedLaunchItems((items) => {
      const nextItems = new Set(items);

      if (nextItems.has(index)) {
        nextItems.delete(index);
      } else {
        nextItems.add(index);
      }

      return nextItems;
    });
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

      <div className="fixed bottom-5 left-5 z-40 hidden rounded-sm border border-white/12 bg-neutral-950/70 px-3 py-2 text-xs text-white/70 shadow-2xl shadow-black/30 backdrop-blur-xl md:flex md:items-center md:gap-3">
        <Clapperboard size={16} className="text-amber-200" aria-hidden="true" />
        <span>Frame {String(frame).padStart(3, "0")}</span>
        <span className="h-4 w-px bg-white/16" />
        <span className="inline-flex items-center gap-1">
          {direction === "forward" ? <Play size={13} aria-hidden="true" /> : <RotateCcw size={13} aria-hidden="true" />}
          {direction === "forward" ? "Forward" : "Reverse"}
        </span>
      </div>

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
                chapter.active ? "bg-white text-neutral-950" : "text-white/52 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="font-semibold">{chapter.label}</span>
              <span className={chapter.active ? "text-neutral-500" : chapter.complete ? "text-amber-200" : "text-white/34"}>
                {chapter.range}
              </span>
              <span className="sr-only">{index + 1}</span>
            </button>
          ))}
        </div>
      </nav>

      <section id="intro" className="relative min-h-screen px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/8 px-3 py-2 text-sm text-white/72 backdrop-blur-xl">
              <Sparkles size={15} aria-hidden="true" />
              {profile.domain}
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">{profile.title}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("work")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-200"
              >
                Start the film
                <ArrowDown size={16} aria-hidden="true" />
              </button>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Contact
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 lg:justify-self-end">
            {cinematicScenes.map((scene, index) => (
              <button
                key={scene.eyebrow}
                type="button"
                onClick={() => scrollToSection(chapters[Math.min(index + 1, chapters.length - 1)].id)}
                className={`max-w-md border-l px-5 py-4 text-left backdrop-blur-xl transition duration-500 focus:outline-none focus:ring-2 focus:ring-amber-200/70 ${
                  activeChapter === index
                    ? "border-amber-300 bg-white/12 text-white"
                    : "border-white/14 bg-neutral-950/24 text-white/48 hover:bg-white/8 hover:text-white/78"
                }`}
              >
                <p className="text-xs font-semibold uppercase">{scene.eyebrow}</p>
                <h2 className="mt-3 text-xl font-semibold leading-7">{scene.title}</h2>
                <p className="mt-3 text-sm leading-6">{scene.copy}</p>
                <p className="mt-4 text-xs uppercase text-amber-200">{scene.metric}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-5 border-t border-white/12 pt-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="flex flex-wrap gap-2">
            {stackHighlights.map((item) => (
              <span key={item} className="rounded-sm border border-white/12 bg-white/7 px-3 py-1.5 text-xs text-white/64 backdrop-blur-xl">
                {item}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="inline-flex items-center gap-2 text-sm text-white/64 transition hover:text-white"
          >
            Scroll or click through the reel
            <ArrowDown size={16} aria-hidden="true" />
          </button>
        </div>
      </section>

      <section id="work" className="relative min-h-screen px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-amber-200">Selected work</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Systems with a visible pulse.</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-white/66 md:justify-self-end">
              Every project card is a scene selector. Hover or click a card and the case study board reacts while the film behind the page keeps playing with the scroll.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="grid gap-4">
              {featuredWork.map((work, index) => (
                <button
                  key={work.title}
                  type="button"
                  onClick={() => setActiveWork(index)}
                  onMouseEnter={() => setActiveWork(index)}
                  className={`group rounded-sm border p-5 text-left backdrop-blur-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-200/70 ${
                    activeWork === index
                      ? "border-amber-300 bg-white text-neutral-950"
                      : "border-white/12 bg-neutral-950/52 text-white hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className={activeWork === index ? "text-neutral-500" : "text-white/50"}>{work.type}</span>
                    <span className={activeWork === index ? "text-neutral-500" : "text-white/40"}>{work.year}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-8">{work.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${activeWork === index ? "text-neutral-600" : "text-white/58"}`}>
                    {work.summary}
                  </p>
                </button>
              ))}
            </div>

            <article className="rounded-sm border border-white/14 bg-neutral-950/66 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-amber-200">Live case board</p>
                  <h3 className="mt-2 text-3xl font-semibold">{activeWorkItem.title}</h3>
                </div>
                <Link
                  href={`/work/${activeWorkItem.slug}`}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-white px-4 text-sm font-semibold text-neutral-950 transition hover:bg-amber-100"
                >
                  Open
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
              <div className="grid gap-5 py-6 md:grid-cols-3">
                {activeWorkItem.points.map((point) => (
                  <div key={point} className="border-l border-amber-200/50 pl-4">
                    <CheckCircle2 size={17} className="text-amber-200" aria-hidden="true" />
                    <p className="mt-3 text-sm leading-6 text-white/70">{point}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 text-sm leading-7 text-white/68 md:grid-cols-3">
                <p>
                  <span className="block text-xs font-semibold uppercase text-white">Challenge</span>
                  {activeWorkItem.challenge}
                </p>
                <p>
                  <span className="block text-xs font-semibold uppercase text-white">Approach</span>
                  {activeWorkItem.approach}
                </p>
                <p>
                  <span className="block text-xs font-semibold uppercase text-white">Outcome</span>
                  {activeWorkItem.outcome}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="relative min-h-screen px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-200">Process</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Built like a product, presented like a film.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="rounded-sm border border-white/12 bg-white/8 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/58">Director track</p>
              <h3 className="mt-3 text-3xl font-semibold">{activeProcessStep.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/68">{activeProcessStep.body}</p>
              <div className="mt-6 h-2 overflow-hidden rounded-sm bg-white/10">
                <div
                  className="h-full bg-amber-200 transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`border-t p-5 text-left transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-200/70 ${
                    activeStep === index
                      ? "border-teal-200 bg-white text-neutral-950"
                      : "border-white/18 bg-neutral-950/48 text-white backdrop-blur-xl hover:bg-white/10"
                  }`}
                >
                  <p className={`font-mono text-sm ${activeStep === index ? "text-teal-800" : "text-teal-200"}`}>
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${activeStep === index ? "text-neutral-600" : "text-white/58"}`}>
                    {step.body}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="relative min-h-screen px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-amber-200">Capabilities</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">The useful mix.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/66">{profile.summary}</p>
            <div className="mt-8 rounded-sm border border-white/12 bg-neutral-950/58 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm text-white/58">
                <MousePointer2 size={16} className="text-amber-200" aria-hidden="true" />
                Hover or click a capability to change the active brief.
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{activeCapabilityItem.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/66">{activeCapabilityItem.body}</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isActive = activeCapability === index;

              return (
                <button
                  key={capability.title}
                  type="button"
                  onClick={() => setActiveCapability(index)}
                  onMouseEnter={() => setActiveCapability(index)}
                  className={`rounded-sm border p-5 text-left backdrop-blur-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-200/70 ${
                    isActive
                      ? "border-amber-200 bg-white text-neutral-950"
                      : "border-white/12 bg-white/7 text-white hover:border-white/30 hover:bg-white/12"
                  }`}
                >
                  <Icon size={24} className={isActive ? "text-amber-700" : "text-amber-200"} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold">{capability.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${isActive ? "text-neutral-600" : "text-white/58"}`}>
                    {capability.body}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="launch" className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-sm border border-white/12 bg-neutral-950/72 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl md:grid-cols-[1fr_0.9fr] md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase text-red-200">Next step</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">Ready for the real domain.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
              Point a custom domain, set the AdSense environment variables, add final project details, and the site is ready for public review.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-amber-100"
              >
                Contact
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/16 px-5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                View work archive
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Gauge size={22} className="text-amber-200" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">Launch readiness</p>
                  <p className="text-xs text-white/50">{completedCount} of {launchChecklist.length} active</p>
                </div>
              </div>
              <p className="font-mono text-sm text-amber-200">{Math.round((completedCount / launchChecklist.length) * 100)}%</p>
            </div>
            <div className="mt-6 grid gap-3">
              {launchChecklist.map((item, index) => {
                const checked = checkedLaunchItems.has(index);

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleLaunchItem(index)}
                    className={`flex items-center justify-between gap-4 rounded-sm border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-amber-200/70 ${
                      checked
                        ? "border-emerald-300/40 bg-emerald-300/10 text-white"
                        : "border-white/12 bg-white/6 text-white/52 hover:bg-white/10"
                    }`}
                  >
                    <span>{item}</span>
                    <CheckCircle2 size={17} className={checked ? "text-emerald-200" : "text-white/24"} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
