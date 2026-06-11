"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cinematicScenes, profile, stackHighlights } from "@/lib/site";
import { FrameSequenceCanvas } from "@/components/cinematic/frame-sequence-canvas";

export function CinematicScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const triggerElement = containerRef.current;

    if (!triggerElement || reduceMotion) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const trigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.55,
      onUpdate: (self) => {
        const nextProgress = self.progress;
        setProgress(nextProgress);
        setActiveScene(Math.min(cinematicScenes.length - 1, Math.floor(nextProgress * cinematicScenes.length)));
      },
    });

    return () => {
      trigger.kill();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[330vh] bg-neutral-950 text-white">
      <div className="sticky top-0 min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <FrameSequenceCanvas
            progress={progress}
            frameCount={96}
            frameBasePath="/sequences/akshay"
            className="opacity-95"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.9)_0%,rgba(5,5,4,0.6)_45%,rgba(5,5,4,0.32)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-5 pb-8 pt-24 md:px-8 md:pt-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-sm border border-white/15 bg-white/8 px-3 py-2 text-sm text-white/72">
                <Sparkles size={15} aria-hidden="true" />
                {profile.domain}
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">{profile.title}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#work"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-amber-100"
                >
                  View selected work
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                >
                  Contact
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid gap-3 lg:justify-self-end">
              {cinematicScenes.map((scene, index) => (
                <div
                  key={scene.eyebrow}
                  className={`max-w-md border-l px-5 py-4 transition duration-500 ${
                    activeScene === index
                      ? "border-amber-300 bg-white/10 text-white"
                      : "border-white/14 bg-neutral-950/24 text-white/42"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase">{scene.eyebrow}</p>
                  <h2 className="mt-3 text-xl font-semibold leading-7">{scene.title}</h2>
                  <p className="mt-3 text-sm leading-6">{scene.copy}</p>
                  <p className="mt-4 text-xs uppercase text-amber-200">{scene.metric}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/12 pt-5 md:grid-cols-[1fr_auto] md:items-end">
            <div className="flex flex-wrap gap-2">
              {stackHighlights.map((item) => (
                <span key={item} className="rounded-sm border border-white/12 bg-white/7 px-3 py-1.5 text-xs text-white/64">
                  {item}
                </span>
              ))}
            </div>
            <Link href="#work" className="inline-flex items-center gap-2 text-sm text-white/64 transition hover:text-white">
              Scroll the portfolio
              <ArrowDown size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
