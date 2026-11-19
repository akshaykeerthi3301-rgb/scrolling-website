import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Briefcase,
  Globe2,
  Layers3,
  LineChart,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Akshay Keerthi",
  domain: "akshaykeerthi.vercel.app",
  title:
    "AI Strategy Consultant & Digital Transformation — IIM Sambalpur MBA | GenAI Implementation | Private Banking & HNI Wealth Advisory",
  email: "akshaykeerthi3301@gmail.com",
  phone: "+91-8606366187",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/akshay-keerthi",
  github: "https://github.com/akshaykeerthi3301-rgb",
  availability:
    "Open to AI strategy, digital transformation, and GenAI consulting engagements",
  summary:
    "IIM Sambalpur MBA with experience across private banking, independent AI product development, and client advisory. Currently managing INR 500 Cr+ in HNI client assets at ICICI Bank. Background in hands-on AI project work spanning fleet management SaaS, algorithmic trading, and GenAI tools. Recently delivered a full go-to-market strategy for a Bangalore-based business, resulting in a 20x increase in social reach within one week.",
};

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? `https://${profile.domain}`
  ).replace(/\/$/, "");
}

export const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const cinematicScenes = [
  {
    eyebrow: "01 / AI Strategy",
    title: "GenAI implementation grounded in business reality.",
    copy: "From LLM orchestration to agentic workflows — I design AI strategies that ship, not slide decks that stall. Every recommendation is backed by hands-on builds using Claude API, Python, and production-grade tooling.",
    metric: "5 AI products built",
  },
  {
    eyebrow: "02 / Domain Expertise",
    title: "Private banking discipline meets tech execution.",
    copy: "Managing INR 500 Cr+ in HNI assets at ICICI Bank sharpened my instinct for risk, client outcomes, and data-driven decisions. That same rigour drives every AI engagement.",
    metric: "INR 500 Cr+ AUM",
  },
  {
    eyebrow: "03 / Consulting Delivery",
    title: "Strategy through execution — solo or with your team.",
    copy: "Recently delivered a full GTM strategy for a Bangalore business — 20x social reach in one week. I work end-to-end: market sizing, content strategy, website builds, and measurable launch outcomes.",
    metric: "20x reach in 7 days",
  },
];

export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    icon: BrainCircuit,
    title: "AI Strategy & GenAI",
    body: "Design and implement GenAI solutions using Claude API, LLM orchestration, prompt engineering, and agentic workflows — with responsible AI governance built in.",
  },
  {
    icon: TrendingUp,
    title: "Wealth & Private Banking",
    body: "HNI advisory across equities, F&O, mutual funds, PMS, and alternate assets. Portfolio analysis in Excel and Power BI with data-backed recommendations for C-suite clients.",
  },
  {
    icon: Layers3,
    title: "Product Architecture",
    body: "Full-stack SaaS builds with Next.js, TypeScript, Prisma/PostgreSQL, Stripe billing, multi-tenant isolation, and API integrations — from prototype to pilot-ready.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    body: "Go-to-market strategy, customer segmentation, content strategy, market sizing, and business case development. MECE frameworks and evidence-led recommendations.",
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    body: "Power BI dashboards, Python backtesting engines, cross-market signal analysis, and performance attribution models that turn data into decisions.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    body: "Process automation with n8n, API integrations, system design, and workflow orchestration — connecting legacy operations to modern AI-powered tooling.",
  },
];

export const featuredWork = [
  {
    slug: "fleetsense",
    title: "FleetSense",
    type: "Full-stack SaaS platform",
    year: "2026",
    summary:
      "A multi-tenant SaaS platform for fleet operators covering 15+ data models across vehicles, drivers, compliance, predictive maintenance, fuel monitoring, and work orders.",
    points: [
      "Next.js 15 + TypeScript + Prisma/PostgreSQL",
      "Samsara telematics API + NHTSA recall integration",
      "Stripe billing + Clerk multi-tenant auth",
      "Built with Claude Code & GitHub Copilot",
    ],
    challenge:
      "Build a production-grade fleet management platform from scratch that handles real-world complexity — DVIR, HOS compliance, geofencing, predictive maintenance — while staying pilot-ready for first customers.",
    approach:
      "Designed a multi-tenant architecture with 15+ data models, integrated Samsara telematics API and NHTSA recall database for vehicle health monitoring, and added Stripe billing with Clerk authentication for enterprise-grade access control.",
    outcome:
      "Platform is complete and ready for pilot — full fleet operations suite with real-time telematics, compliance tracking, and automated work orders. Currently seeking first pilot fleet operators.",
  },
  {
    slug: "cross-asset-alpha-bot",
    title: "Cross Asset Alpha Bot",
    type: "Algorithmic trading system",
    year: "2026",
    summary:
      "A 2,085-line backtesting and paper trading engine for NSE futures with 7+ signal families, three-sleeve architecture, and cross-market regime detection.",
    points: [
      "Python — 2,085-line trading engine",
      "7+ signal families (ORB, VWAP, macro regime-switch)",
      "Upstox API + Telegram alerts + Google Sheets P&L",
      "Three-sleeve architecture (Intraday/Daily/Monthly)",
    ],
    challenge:
      "Build a systematic trading engine that pulls cross-asset signals, manages risk across multiple timeframes, and maintains strict paper-trading boundaries before live deployment.",
    approach:
      "Designed a three-sleeve architecture where Intraday, Daily, and Monthly strategies are independently risk-managed. Integrated FII/DII flows, VIX, crude, gold, and USD/INR for macro regime detection via Upstox API.",
    outcome:
      "Consistent paper trading profits in validation with full Telegram alerting and Google Sheets P&L sync. Engine is architecturally ready for live capital deployment.",
  },
  {
    slug: "webcraft-ai",
    title: "WebCraft AI",
    type: "GenAI website generation agent",
    year: "2026",
    summary:
      "A GenAI agent that generates customised websites from natural language — targeting India's 63 million SMEs with a full business case and SaaS pricing model.",
    points: [
      "Claude API + LLM orchestration",
      "Natural language to website generation",
      "B2B SaaS concept with market sizing",
      "Responsible AI considerations built in",
    ],
    challenge:
      "Create a GenAI agent capable of generating production-quality websites from conversational prompts while building a viable B2B business model for India's massive SME market.",
    approach:
      "Built an LLM-orchestrated pipeline using Claude API with structured prompt engineering. Developed the full business case: TAM/SAM/SOM market sizing, SaaS pricing tiers, responsible AI guardrails, and a phased GTM roadmap.",
    outcome:
      "Functional agent in refinement with a validated business case. The project demonstrates end-to-end GenAI product thinking — from prompt engineering to unit economics.",
  },
  {
    slug: "mind-customs",
    title: "Mind Customs — GTM Strategy",
    type: "Consulting engagement",
    year: "2026",
    summary:
      "Full go-to-market strategy and website build for a Bangalore-based automotive protection service — from customer segmentation to a 20x increase in social reach.",
    points: [
      "Business strategy + customer segmentation",
      "Instagram content strategy — 2K to 40K views",
      "End-to-end website design and build",
      "Solo engagement: strategy through execution",
    ],
    challenge:
      "Help a niche automotive protection service (rodent mesh installation) find its market in Bangalore — from zero digital presence to measurable traction.",
    approach:
      "Assessed positioning and GTM strategy, advising on locality-level targeting to identify highest-intent early adopters. Developed Instagram content strategy and designed the brand website end-to-end.",
    outcome:
      "20x increase in reel reach (2K to 40K views) within one week of implementation. Website complete and deployed. Full delivery from strategy through execution as a solo consultant.",
  },
  {
    slug: "cloud-printer",
    title: "Cloud Printer",
    type: "Startup concept — National finalist",
    year: "2023",
    summary:
      "A QR-code-enabled print vending machine concept — solo founder pitch selected as Startup Odisha National Finalist from a nationwide applicant pool.",
    points: [
      "QR-code print-on-demand from mobile",
      "Problem framing + unit economics",
      "Solo founder pitch at national level",
      "Startup Odisha National Finalist",
    ],
    challenge:
      "Conceptualise a hardware-meets-software product for on-demand document printing and pitch it convincingly as a solo founder at a national startup competition.",
    approach:
      "Designed the full concept: QR-code-enabled vending machine printing PDFs from a customer's phone on demand. Built the pitch covering problem framing, technical architecture, unit economics, and go-to-market strategy.",
    outcome:
      "Selected as Startup Odisha National Finalist — validating the business concept and pitch quality against a national applicant pool.",
  },
];

export type WorkItem = (typeof featuredWork)[number];

export const processSteps = [
  {
    title: "Diagnose the opportunity",
    body: "Map the business problem, identify where AI creates real value (not just novelty), and assess organisational readiness for implementation.",
  },
  {
    title: "Design the AI strategy",
    body: "Define the architecture, select the right models and tooling, set responsible AI boundaries, and build the business case with clear ROI metrics.",
  },
  {
    title: "Build and validate",
    body: "Ship working prototypes fast — real code, real APIs, real data. Validate with users before scaling. No slide-deck strategies that never reach production.",
  },
  {
    title: "Launch and measure",
    body: "Deploy to production, instrument for measurement, and iterate based on evidence. Strategy is only as good as the outcomes it delivers.",
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
    slug: "why-most-ai-strategies-fail",
    title: "Why most AI strategies fail before the first model ships",
    summary:
      "The gap between AI ambition and AI delivery is not technical — it is strategic. Most failures happen before anyone writes a line of code.",
    published: "2026-06-10",
    readTime: "5 min read",
    tags: ["AI Strategy", "GenAI", "Consulting"],
    sections: [
      {
        heading: "The strategy-tooling gap",
        body: "Most organisations treat AI strategy as a technology decision. Pick a model, pick a vendor, build a pipeline. But the real bottleneck is upstream: unclear business objectives, no success metrics, and no honest assessment of what the organisation can actually absorb. The best AI strategy starts with a business problem, not a model architecture.",
      },
      {
        heading: "Why hands-on experience matters",
        body: "Consultants who have never shipped an AI product give advice shaped by vendor demos and analyst reports. When you have built LLM pipelines, managed agentic workflows, and debugged prompt failures in production, your strategy recommendations carry a different weight. You know what breaks.",
      },
      {
        heading: "The responsible AI question nobody asks early enough",
        body: "Governance, safety boundaries, and responsible AI considerations are not post-launch checkboxes. They shape architecture decisions from day one. A strategy that treats AI ethics as a compliance afterthought will face expensive rework — or worse, real harm. Build the guardrails into the design phase.",
      },
    ],
  },
  {
    slug: "genai-for-indias-63-million-smes",
    title: "GenAI for India's 63 million SMEs — the real opportunity",
    summary:
      "India's SME market is massive, underserved, and ready for GenAI tools that solve real problems — not enterprise features repackaged at a lower price.",
    published: "2026-06-05",
    readTime: "4 min read",
    tags: ["GenAI", "India", "SME"],
    sections: [
      {
        heading: "The market nobody is building for properly",
        body: "India has 63 million SMEs contributing 30% of GDP. Most cannot afford enterprise AI tooling, and most consumer AI tools do not solve their actual problems: creating a professional web presence, managing customer communication, generating marketing content, and handling basic operations digitally. The opportunity is not to sell AI — it is to sell outcomes that happen to use AI.",
      },
      {
        heading: "What I learned building WebCraft AI",
        body: "Building a GenAI agent that generates websites from natural language taught me that the technical challenge is secondary. The real challenge is understanding what a small business owner in Tier 2 India actually needs from a website — and delivering it without requiring them to learn prompt engineering. The product must disappear behind the outcome.",
      },
      {
        heading: "SaaS pricing for a market that pays differently",
        body: "Enterprise SaaS pricing models do not translate to Indian SMEs. Usage-based pricing, freemium tiers, and vernacular interfaces are not nice-to-haves — they are market entry requirements. The GTM roadmap must account for distribution through existing trust networks: CAs, local business associations, and regional digital service providers.",
      },
    ],
  },
  {
    slug: "domain-expertise-is-the-moat",
    title:
      "From private banking to AI consulting — domain expertise is the moat",
    summary:
      "In a world where everyone can access the same AI models, the differentiator is not technical skill — it is understanding the domain deeply enough to know which problems are worth solving.",
    published: "2026-05-28",
    readTime: "4 min read",
    tags: ["Career", "AI", "Private Banking"],
    sections: [
      {
        heading: "Why domain knowledge compounds",
        body: "Managing INR 500 Cr+ in HNI assets taught me risk assessment, client psychology, and data-driven decision-making under uncertainty. Handling 300-400 employee relations cases monthly at Amazon taught me pattern recognition and process design at scale. These are not adjacent to AI consulting — they are the foundation of it.",
      },
      {
        heading: "The AI consultant who has shipped",
        body: "There is a meaningful difference between an AI consultant who recommends strategies and one who has built a 2,085-line trading engine, a multi-tenant SaaS platform, and a GenAI agent. When I advise on AI implementation, I am drawing on direct experience with API failures, prompt engineering edge cases, and the gap between demo and production.",
      },
      {
        heading: "Building at the intersection",
        body: "The most valuable AI consultants sit at the intersection of business domain expertise and technical implementation capability. An IIM MBA gives me the strategic vocabulary. Building five AI products gives me the technical credibility. The combination means I can talk to the C-suite about ROI and then sit down with the engineering team to ship it.",
      },
    ],
  },
];

export const experience = [
  {
    role: "Private Banking Manager (M1)",
    company: "ICICI Bank",
    location: "Bangalore",
    period: "Jun 2025 – Present",
    highlight: "INR 500 Cr+ AUM across 150+ HNI/CXO clients",
    metric: "50% MAB deficit reduction in 3 months",
  },
  {
    role: "Consultant",
    company: "Mind Customs",
    location: "Bangalore",
    period: "May 2026",
    highlight: "Full GTM strategy + website build — solo engagement",
    metric: "20x social reach in 1 week",
  },
  {
    role: "HR Associate",
    company: "Amazon",
    location: "Hyderabad",
    period: "Apr 2022 – Jan 2023",
    highlight: "300–400 ER cases/month, global workforce",
    metric: "90%+ CSAT, full SLA compliance",
  },
  {
    role: "MBA — General Management",
    company: "IIM Sambalpur",
    location: "Odisha",
    period: "2023 – 2025",
    highlight: "Strategy, Analytics, Finance, Marketing",
    metric: "Placement Committee member",
  },
];

export const achievements = [
  { label: "MAB Turnaround", value: "50%", detail: "INR 22 Cr to 11 Cr deficit reduction in 3 months" },
  { label: "Social Reach", value: "20x", detail: "2K to 40K reel views in one week" },
  { label: "Client CSAT", value: "90%+", detail: "Sustained across 300-400 monthly cases at Amazon" },
  { label: "National Finalist", value: "Top", detail: "Startup Odisha — Cloud Printer, solo founder" },
];

export const stackHighlights = [
  "Claude API",
  "Python",
  "Next.js",
  "TypeScript",
  "Power BI",
  "Prisma/PostgreSQL",
  "LLM Orchestration",
  "Vercel",
];

export const socialLinks = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
];

export const trustPages = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Editorial Policy", href: "/editorial-policy" },
];
