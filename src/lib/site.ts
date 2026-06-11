import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Clapperboard,
  Globe2,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export const profile = {
  name: "Akshaykeerthi",
  domain: "akshaykeerthi-portfolio.vercel.app",
  title: "Full-stack builder for cinematic products, AI workflows, and deployable systems.",
  email: "hello@akshaykeerthi-portfolio.vercel.app",
  location: "India",
  availability: "Open to selective product, automation, and portfolio-grade web builds",
  summary:
    "I design and build polished web products that feel cinematic on the surface and stay practical underneath: fast, deployable, measurable, and ready for real users.",
};

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? `https://${profile.domain}`).replace(/\/$/, "");
}

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const cinematicScenes = [
  {
    eyebrow: "01 / Signal",
    title: "Cinematic interfaces that still ship cleanly.",
    copy: "The first impression is visual: motion, pacing, texture, and a clear story. Under it sits a production Next.js foundation ready for SEO, Vercel, and future content.",
    metric: "Frame-synced",
  },
  {
    eyebrow: "02 / Systems",
    title: "Full-stack logic, not just a pretty front.",
    copy: "Contact APIs, metadata, robots, sitemap, AdSense hooks, legal routes, and content lanes are built in from the start so the portfolio can become a real property.",
    metric: "Publish-ready",
  },
  {
    eyebrow: "03 / Direction",
    title: "A portfolio that can grow into a media engine.",
    copy: "The current sequence is generated locally. Later, the same manifest can point to AI-generated video frames, Vercel Blob assets, or a CMS-published scene library.",
    metric: "Modular",
  },
];

export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    icon: Layers3,
    title: "Product Architecture",
    body: "Turn vague ideas into route maps, components, APIs, and launchable product shells.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Frontends",
    body: "Build scroll-driven portfolio pages with frame sequences, pinned content, and responsive motion.",
  },
  {
    icon: BrainCircuit,
    title: "AI Workflow Design",
    body: "Design practical AI-assisted flows with clear safety boundaries, review steps, and useful outputs.",
  },
  {
    icon: LineChart,
    title: "Operational Dashboards",
    body: "Create dashboards that surface state, logs, metrics, and decisions without burying the operator.",
  },
  {
    icon: ShieldCheck,
    title: "Launch Readiness",
    body: "Prepare domains, SEO metadata, legal pages, privacy language, and deploy checks before public launch.",
  },
  {
    icon: TerminalSquare,
    title: "Automation",
    body: "Connect scripts, jobs, status files, and monitoring loops into workflows that keep moving.",
  },
];

export const featuredWork = [
  {
    slug: "cinematic-portfolio-engine",
    title: "Cinematic Portfolio Engine",
    type: "Portfolio property",
    year: "2026",
    summary:
      "A deployable portfolio template with scroll-synced imagery, AdSense infrastructure, and content routes for long-term discoverability.",
    points: ["Next.js App Router", "GSAP + Lenis", "Canvas frame sequence", "SEO + AdSense routes"],
    challenge:
      "Create a professional public portfolio that feels like a premium motion-led site while still being ready for real deployment, search indexing, and monetization.",
    approach:
      "Built a modular Next.js property with a canvas sequence renderer, structured content routes, trust pages, contact API, sitemap, robots, and environment-gated AdSense components.",
    outcome:
      "The project now has a cinematic homepage plus supporting pages and generated placeholder media that can later be replaced by real AI/video output.",
  },
  {
    slug: "alpha-control-room",
    title: "Alpha Control Room",
    type: "Trading research dashboard",
    year: "2026",
    summary:
      "A local operator dashboard pattern for monitoring paper-trading state, current-session outcomes, and daily strategy evidence.",
    points: ["Live status panels", "Artifact-backed data", "Operator workflow", "Paper-only boundary"],
    challenge:
      "Make strategy evidence legible without blurring the safety line between research, paper monitoring, and real broker execution.",
    approach:
      "Designed an operator-facing dashboard pattern that separates current-session status, daily P&L artifacts, backtest evidence, and explicit paper-only warnings.",
    outcome:
      "The pattern gives a future product a clear control-room direction: visible state, traceable artifacts, and strict operating boundaries.",
  },
  {
    slug: "mobile-adhd-calendar",
    title: "Mobile-first ADHD Calendar",
    type: "Focus app scaffold",
    year: "2026",
    summary:
      "A focused app shell built around daily tasks, calendar views, settings, and low-friction mobile interactions.",
    points: ["390px-first UI", "React state", "Bottom navigation", "Task sheet"],
    challenge:
      "Create a simple mobile-first planning experience that stays lightweight and avoids premature backend complexity.",
    approach:
      "Built a tabbed shell, today-focused task flow, progress areas, and bottom-sheet interaction pattern using in-memory state first.",
    outcome:
      "The scaffold keeps the initial product focused and easy to extend when persistence and native integrations are actually needed.",
  },
];

export type WorkItem = (typeof featuredWork)[number];

export const processSteps = [
  {
    title: "Clarify the value",
    body: "Define who the page is for, what action it should drive, and what proof the visitor needs before trusting it.",
  },
  {
    title: "Build the interface",
    body: "Create the visible system first: layout, animation, content hierarchy, and polished interaction states.",
  },
  {
    title: "Make it publishable",
    body: "Add metadata, routing, forms, policy pages, performance checks, and deploy-friendly configuration.",
  },
  {
    title: "Iterate with evidence",
    body: "Use browser verification, content performance, and real visitor behavior to refine the experience.",
  },
];

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  published: string;
  readTime: string;
  tags: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const insights: Insight[] = [
  {
    slug: "cinematic-portfolios-need-systems",
    title: "Cinematic portfolios need systems, not only scenes",
    summary:
      "A scroll-led portfolio works best when the motion is backed by durable content, SEO routes, and a clean publishing model.",
    published: "2026-05-20",
    readTime: "4 min read",
    tags: ["Portfolio", "Motion", "Publishing"],
    sections: [
      {
        heading: "The surface earns attention",
        body: "A cinematic portfolio should feel directed. The visitor should sense pacing, contrast, and progression before reading every line. That makes a frame sequence useful: it creates the feeling of a controlled film without relying on fragile video seeking.",
      },
      {
        heading: "The system earns trust",
        body: "A portfolio still needs the basics: clear pages, useful metadata, readable text, contact routes, and policy pages. These are not glamorous, but they help the site become a real online property instead of a one-page animation.",
      },
      {
        heading: "The best version is modular",
        body: "The cinematic layer should read from a manifest. Today that manifest can point to local generated frames. Later it can point to assets from a video provider, cloud storage, or a CMS. The page should not care where the frames came from.",
      },
    ],
  },
  {
    slug: "adsense-ready-does-not-mean-ad-heavy",
    title: "AdSense-ready does not mean ad-heavy",
    summary:
      "A professional site can prepare for monetization while keeping the visitor experience clean, honest, and content-led.",
    published: "2026-05-20",
    readTime: "3 min read",
    tags: ["AdSense", "SEO", "Trust"],
    sections: [
      {
        heading: "Approval starts with value",
        body: "AdSense review is not just a technical checklist. The site needs original content, clear navigation, and trust signals. A portfolio can support that with case studies, essays, process notes, and useful resources.",
      },
      {
        heading: "Ads should never fight the page",
        body: "Cinematic sections should stay clean. Ads belong in content routes, after meaningful sections, and in reserved spaces that do not shift the layout. Labels should be honest, and the design should never push people toward clicks.",
      },
      {
        heading: "Infrastructure can wait quietly",
        body: "The code can ship with an AdSense script component, ad units, and an ads.txt route while staying disabled by environment variables. Once the publisher ID and slots exist, the site can turn them on without redesigning.",
      },
    ],
  },
  {
    slug: "frame-sequences-over-video-seeking",
    title: "Why frame sequences beat video seeking for scroll experiences",
    summary:
      "For scroll-scrubbed hero sections, image sequences give more reliable frame control than manipulating a video element.",
    published: "2026-05-20",
    readTime: "5 min read",
    tags: ["Frontend", "Canvas", "Performance"],
    sections: [
      {
        heading: "Scroll is not playback",
        body: "A normal video wants to move through time continuously. Scroll moves forward, backward, pauses, jumps, and changes speed. Asking a video element to seek perfectly on every small scroll change can create visible stutter.",
      },
      {
        heading: "Canvas gives explicit control",
        body: "With a frame sequence, the page maps scroll progress to a frame number and draws that image. The browser still has work to do, but the mental model is simple and the result is predictable across fast forward, reverse, and pinned sections.",
      },
      {
        heading: "The tradeoff is preparation",
        body: "Frame sequences require an asset pipeline: generate frames, compress them, build a manifest, preload carefully, and offer reduced-motion fallbacks. That is extra work, but it is the right work for premium scroll cinematics.",
      },
    ],
  },
];

export const stackHighlights = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Lenis",
  "Canvas",
  "Vercel-ready",
];

export const socialLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Website", href: getSiteUrl() },
  { label: "Insights", href: "/insights" },
];

export const trustPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];

export const domainIdeas = [
  {
    icon: Globe2,
    label: profile.domain,
  },
  {
    icon: Sparkles,
    label: "akshaykeerthi.com later",
  },
];
