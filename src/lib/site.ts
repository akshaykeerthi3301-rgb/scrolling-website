import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Briefcase, Layers3 } from "lucide-react";

export const profile = {
  name: "Akshay Keerthi",
  domain: "akshaykeerthi.vercel.app",
  title:
    "Akshay Keerthi: works, case studies and profile. Working AI products for messy, high-stakes workflows.",
  email: "akshaykeerthi3301@gmail.com",
  phone: "+91-8606366187",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/akshay-keerthi",
  github: "https://github.com/akshaykeerthi3301-rgb",
  availability:
    "Open to roles across AI product, strategy, sales and business development, and people operations.",
  summary:
    "IIM Sambalpur MBA. I build working AI products for messy, high-stakes workflows, after learning those workflows first-hand on a private banking desk and in Amazon HR operations.",
};

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ?? `https://${profile.domain}`
  ).replace(/\/$/, "");
}

export const navItems = [
  { label: "Case studies", href: "/work#case-studies" },
  { label: "Works", href: "/work#works" },
  { label: "Profile", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const cinematicScenes = [
  {
    eyebrow: "01 / Diagnose",
    title: "Messy workflows first.",
    copy: "Private banking escalations and 300–400 employee-relations cases a month showed me where a process actually breaks, and what people do when it does.",
    metric: "300–400 cases a month",
  },
  {
    eyebrow: "02 / Build",
    title: "Shipped, not slideware.",
    copy: "Jobinko and VendorSim are live. Jobinko has 408 commits behind it and a written decision log, including the decisions I reversed.",
    metric: "Live: jobinko.in",
  },
  {
    eyebrow: "03 / Control",
    title: "AI reads. Code decides.",
    copy: "Across my projects, models read messy text and write words. Code does the arithmetic and enforces the gates, so failures are contained.",
    metric: "Guardrails by design",
  },
];

export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    icon: Layers3,
    title: "Product & discovery",
    body: "Turning a vague complaint into a scoped product, and writing down why.",
    items: [
      "Problem framing and product requirement documents (Jobinko, AutoRAG-Eval)",
      "Roadmaps and decision logs, including reversals (Jobinko)",
      "Competitor and feature-parity analysis with evidence tags",
      "Pricing and go-to-market (Mind Customs, WebCraft AI)",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI systems & prototyping",
    body: "Shipping working systems where the model's job is small and checkable.",
    items: [
      "Code-enforced gates around language models (CashFlowPilot, Jobinko)",
      "Evaluation harnesses, judges and reference sets (AutoRAG-Eval)",
      "Planner and worker agent workflows with validated tool calls",
      "Next.js, TypeScript, Postgres and Python, shipped to production",
    ],
  },
  {
    icon: Briefcase,
    title: "Stakeholder & enterprise execution",
    body: "Working with people who have money, rules or deadlines at stake.",
    items: [
      "High-net-worth client advisory and escalations (ICICI Bank)",
      "Policy-heavy employee-relations cases under service targets (Amazon)",
      "Marketplace vendor management and account planning (VendorSim)",
      "Solo go-to-market delivery from strategy to launch (Mind Customs)",
    ],
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
    role: "Independent product builder",
    company: "Own products",
    location: "Bangalore",
    period: "2026 – Present",
    highlight: "Jobinko, VendorSim, CashFlowPilot, AutoRAG-Eval and more",
    metric: "2 products live",
  },
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
    highlight: "Go-to-market strategy and website build, solo",
    metric: "Reel views 2K to 40K in 1 week",
  },
  {
    role: "HR Associate",
    company: "Amazon",
    location: "Hyderabad",
    period: "Apr 2022 – Jan 2023",
    highlight: "300–400 employee-relations cases a month, global workforce",
    metric: "90%+ CSAT, full SLA compliance",
  },
  {
    role: "MBA — General Management",
    company: "IIM Sambalpur",
    location: "Odisha",
    period: "2023 – 2025",
    highlight: "Strategy, Analytics, HR, Marketing",
    metric: "Placement Committee member",
  },
];

export const credentials = [
  {
    title: "Executive Program in Forward Deployed AI Product Management",
    issuer: "IITM Pravartak",
  },
  { title: "Generative AI certification", issuer: "Microsoft" },
  { title: "Responsible AI certification", issuer: "United Nations" },
  { title: "B.Tech, Mechanical Engineering", issuer: "College of Engineering Muttathara" },
];

export const achievements = [
  { label: "MAB turnaround", value: "50%", detail: "INR 22 Cr to 11 Cr deficit reduction in 3 months" },
  { label: "Reel views", value: "20x", detail: "2K to 40K in one week (Mind Customs)" },
  { label: "Client CSAT", value: "90%+", detail: "Across 300–400 monthly cases at Amazon" },
  { label: "National finalist", value: "Top", detail: "Startup Odisha, Cloud Printer, solo founder" },
];

export const stackHighlights = [
  "Python",
  "TypeScript",
  "Next.js",
  "Postgres",
  "LLM agents",
  "Evals",
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
