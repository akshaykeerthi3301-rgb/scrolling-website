// All project content lives here. To add a project: append one object to `works`.
// Rules for this file: every claim must be checkable in the repo or the live product.
// Say what is live, what is only on GitHub, and what is private. Never blur the three.

export type WorkStatus = "live" | "code" | "private";

export type WorkLink = { label: string; href: string };

export type Work = {
  slug: string;
  title: string;
  type: string;
  year: string;
  /** "case-study" projects get a featured deep-dive; "lab" projects are smaller works. */
  tier: "case-study" | "lab";
  status: { kind: WorkStatus; label: string };
  links: WorkLink[];
  summary: string;
  /** Short proof points shown on cards. */
  points: string[];
  /** What was broken in the real world. */
  challenge: string;
  /** The system and product decisions, including how failures are contained. */
  approach: string;
  /** Trade-offs and calls that were mine. */
  owned: string[];
  /** What happened, and what is not known yet. */
  outcome: string;
};

export const works: Work[] = [
  {
    slug: "jobinko",
    title: "Jobinko",
    type: "AI job-matching product for India",
    year: "2026",
    tier: "case-study",
    status: { kind: "live", label: "Live at jobinko.in" },
    links: [
      { label: "Open the live product", href: "https://jobinko.in" },
      { label: "Code on GitHub", href: "https://github.com/akshaykeerthi3301-rgb/Saaf" },
    ],
    summary:
      "Ranks job postings against a résumé with a score that shows its arithmetic, tailors résumés from confirmed facts only, and fills application forms on the employer's own site.",
    points: [
      "Live in production at jobinko.in",
      "408 commits and 180 test files in the repository",
      "Itemised six-part match score: the working is shown",
      "Résumé text built only from facts the candidate confirmed",
    ],
    challenge:
      "Job seekers get padded lists that hide why a role fits or does not, and résumé filters that reject them without explanation. A list that silently drops roles, or invents skills to look helpful, costs the candidate trust and interviews.",
    approach:
      "Results are sorted into visible buckets (fits you, experience out of range, location out of range, worth a look) so nothing is hidden and the reason is shown. A model reads the résumé for skills and domain, but it never decides the score: code computes six weighted components. Résumé drafting is limited to confirmed facts, and the guard against invented skills shipped together with the feature, not after it. The extension's apply-for-me mode is off by default, capped at 25 a day, stops at any CAPTCHA or required question it cannot answer from saved facts, and marks a job Applied only when the employer confirms.",
    owned: [
      "Precision over volume: a short honest list beats a padded one.",
      "Reversed two of my own early decisions in the open: ranking instead of gating (4 Sep 2026) and assisted apply instead of never applying (25 Sep 2026). Each reversal is logged with its reason, not quietly edited.",
      "Where coverage is thin, the product says it is thin. It never blames the candidate.",
      "Set the evidence rule for the project's own reports: every number is tagged as observed, measured, claimed or inferred.",
    ],
    outcome:
      "Built, deployed and iterated through a full programme of product documents, a roadmap and a decision log. I am not publishing usage numbers here; the proof on offer is the shipped product and its written decision history.",
  },
  {
    slug: "cashflowpilot",
    title: "CashFlowPilot",
    type: "Autonomous sales agent with hard gates",
    year: "2026",
    tier: "case-study",
    status: { kind: "code", label: "Code on GitHub · runs locally · not deployed yet" },
    links: [
      { label: "Code on GitHub", href: "https://github.com/akshaykeerthi3301-rgb/cashflowpilot" },
    ],
    summary:
      "A demo of an AI agent that researches companies, pitches, runs a sandbox trial on invoices, books the call, and then locks until a human signs a release. Code does every calculation; AI only reads messy text.",
    points: [
      "59 automated tests: money maths, the pre-sale lock, circuit breakers, end to end",
      "Invoice engine reads 64 sample PDFs, 7 of them photocopied scans",
      "Hard AI budgets: 300 model calls a day, repeat documents cached",
      "All companies and invoices are fictional",
    ],
    challenge:
      "Finance teams will not trust an AI that reads an invoice and moves money. One misread digit is a real loss, and an agent that can act before a human approves is a liability.",
    approach:
      "The rule of the codebase: code does every calculation and enforces every gate; AI only reads messy text and writes words, behind schemas, confidence thresholds and budgets. For each invoice, AI copies values as printed, code confirms every value is actually on the page, then checks tax IDs, line maths, totals and a three-way match against purchase orders and goods receipts. Anything that does not add up goes to a person. A state machine is the only writer of a deal's stage, and the agent locks until the founder marks the deal won and signs a release; the customer then starts in read-only shadow mode.",
    owned: [
      "Chose a lock-then-shadow rollout over a faster autonomous start, trading speed for trust.",
      "Capped AI spend and fell back to code-only reading when the cap is hit.",
      "Kept the demo fictional and said so, rather than implying customers that do not exist.",
    ],
    outcome:
      "Runs end to end locally with a 59-test suite. A script measures AI reading accuracy against ground truth; I have not published a figure, so I am not quoting one. No public deployment yet.",
  },
  {
    slug: "vendorsim",
    title: "VendorSim",
    type: "Amazon vendor-management simulator and trainer",
    year: "2026",
    tier: "case-study",
    status: { kind: "live", label: "Live at vendorsim.vercel.app" },
    links: [{ label: "Open the live simulator", href: "https://vendorsim.vercel.app" }],
    summary:
      "A gated learning path and a living simulation of managing three vendors on a European Amazon store, built to learn the Brand Specialist role from the inside.",
    points: [
      "Live in production",
      "Four gated levels, a 34-term glossary, and a final simulation",
      "Weekly shocks, crises, vendor memory, and a performance-plan failure state",
      "Fairness tested over 60 scripted games",
    ],
    challenge:
      "Marketplace account management is learned on the job, and the jargon (glance views, Buy Box, chargebacks, JBP) hides the real skill: matching the right lever to the actual cause of a problem.",
    approach:
      "Three vendors with different profiles share five action points a week. A crisis pauses the simulation, and a lever only helps if it matches the cause: an unauthorised seller needs a brand-protection case, not an ad. Vendors remember ignored problems and escalate. A performance improvement plan freezes ads and plans, and can end the run. Role facts come from Amazon's own job postings; every number in the game is invented, and the research file says which claims are unverified.",
    owned: [
      "Labelled all numbers as illustrative, because Amazon publishes no benchmarks.",
      "Softened the shocks after the first test run showed one shock alone could put a careful player on a plan.",
      "Chose a template engine over an AI model for the vendor founders: no keys, no cost, no surprises.",
    ],
    outcome:
      "In 60 simulated games a scripted careful manager was put on a performance plan in about none, while a neglectful one nearly always was. That test is the evidence the game is fair; it is not evidence of real Amazon outcomes.",
  },
  {
    slug: "autorag-eval",
    title: "AutoRAG-Eval",
    type: "Multi-agent research with a built-in judge",
    year: "2026",
    tier: "case-study",
    status: { kind: "code", label: "Code on GitHub · no public deployment" },
    links: [
      { label: "Code on GitHub", href: "https://github.com/akshaykeerthi3301-rgb/autorag-eval" },
    ],
    summary:
      "Turns a financial research question into a planned, tool-executed and independently graded answer, then proves the grading is trustworthy with a golden-dataset regression suite.",
    points: [
      "Planner splits a question into a dependency graph of tasks",
      "Worker agents call tools with schema-validated inputs and outputs",
      "A separate judge grades each run against a fixed rubric",
      "Regression suite is built to run in CI",
    ],
    challenge:
      "Financial research is where language models are most useful and least trustworthy: a hallucinated figure is expensive, and a single chat answer gives no way to see what was retrieved, what was computed and what was invented.",
    approach:
      "Retrieval, computation and synthesis are separate stages with visible state (pending, running, done, failed). Every tool call is validated, and the user can read the trace, not just the answer. A judge grades each answer against a rubric, and a fixed set of reference questions guards the judge itself so quality is a number, not a feeling.",
    owned: [
      "Wrote the product requirements, including who it is for: someone who will not accept 'trust me'.",
      "Put evaluation inside the product instead of treating it as a later add-on.",
    ],
    outcome:
      "Built as a portfolio project with its requirements document, five test files and a Docker setup. I have not run it in front of real users, and I do not claim an accuracy figure.",
  },
  {
    slug: "mind-customs",
    title: "Mind Customs",
    type: "Go-to-market engagement",
    year: "2026",
    tier: "case-study",
    status: { kind: "live", label: "Live site, built solo" },
    links: [
      { label: "Open the live site", href: "https://mind-customs.vercel.app" },
      { label: "Code on GitHub", href: "https://github.com/akshaykeerthi3301-rgb/mind-customs" },
    ],
    summary:
      "Go-to-market strategy and website for a Bangalore automotive protection service, from who to target first to the content that reached them.",
    points: [
      "Locality-level targeting to find the highest-intent early customers",
      "Instagram content plan and the brand website, built end to end",
      "Reel views went from 2K to 40K in one week of the new plan",
      "Solo: strategy through delivery",
    ],
    challenge:
      "A niche service (rodent-proofing mesh for cars) with almost no digital presence in Bangalore. Nobody searches for it by name, so the work was finding who has the problem and meeting them there.",
    approach:
      "Assessed positioning, then narrowed to the localities with the most likely early adopters. Built a content plan around the problem people recognise, and designed the website so a visitor can act quickly.",
    owned: [
      "Picked narrow targeting over broad reach, and measured against the one thing that was cheap to observe: reel views.",
      "Built the site myself, so strategy and execution stayed in one hand.",
    ],
    outcome:
      "Reel views rose from 2K to 40K within a week of the new content plan (the client's Instagram figures). Views are reach, not revenue; I have no sales figure to quote.",
  },
  {
    slug: "fleetsense",
    title: "FleetSense",
    type: "Multi-tenant SaaS for fleet operators",
    year: "2026",
    tier: "lab",
    status: { kind: "live", label: "Pilot deployed · sign-in required" },
    links: [
      { label: "Code on GitHub", href: "https://github.com/akshaykeerthi3301-rgb/fleetsense" },
    ],
    summary:
      "Fleet operations suite covering vehicles, drivers, compliance, predictive maintenance, fuel and work orders, built to be ready for a first pilot customer.",
    points: [
      "15+ data models, separate data per customer",
      "Telematics and vehicle-recall data integrations",
      "Billing and sign-in handled by established providers",
      "Seeking a first pilot fleet",
    ],
    challenge:
      "Small fleets run on spreadsheets and phone calls, yet face real compliance rules such as inspection reports and driver hours.",
    approach:
      "One shared platform where each customer's data is isolated, with compliance, maintenance and work orders in one place and external data feeds for telematics and recalls.",
    owned: ["Scoped to a pilot-ready core rather than every fleet feature."],
    outcome:
      "Built and deployed, with no pilot customer yet. The two commits in the repository reflect a build done in short, focused passes, not a long-running product.",
  },
  {
    slug: "trading-research",
    title: "Trading research bots",
    type: "Strategy research, paper trading only",
    year: "2026",
    tier: "lab",
    status: { kind: "private", label: "Private code · paper trading only" },
    links: [],
    summary:
      "Two research bots for NSE derivatives that backtest ideas against real costs, discard what does not survive, and run the survivor unattended in paper trading.",
    points: [
      "8 option strategies tested on 22 months of minute data; 7 rejected",
      "Every test is net of brokerage, taxes, charges and slippage",
      "No real orders are ever sent: paper only by construction",
      "Known gaps are written in the README",
    ],
    challenge:
      "Most trading ideas look good before costs and fail after them, and a bot that is not honest about that is dangerous.",
    approach:
      "A cost model sits under every backtest and every paper trade. Candidates must survive it, and nothing in the paper-trading code calls a real order endpoint. The README separates what is live from what is built but idle.",
    owned: [
      "Killed seven of eight strategies rather than keep a flattering one.",
      "Documented gaps openly: thin automated tests on the money maths, and two unreconciled copies of one strategy.",
    ],
    outcome:
      "One strategy survived backtesting and has one closed paper cycle so far. That is too little to call a track record.",
  },
  {
    slug: "webcraft-ai",
    title: "WebCraft AI",
    type: "Website generator for small businesses",
    year: "2026",
    tier: "lab",
    status: { kind: "live", label: "Live at webcraft-ai.vercel.app" },
    links: [{ label: "Open the live product", href: "https://webcraft-ai.vercel.app" }],
    summary:
      "Describe a business in plain language and get an editable website you can publish, aimed at small businesses that cannot afford an agency.",
    points: [
      "Plain-language prompt to editable site",
      "Business case with market sizing and pricing tiers",
      "Live deployment",
      "Early-stage: three commits",
    ],
    challenge:
      "Small businesses need a web presence but not a design project. Generic builders still demand skills they do not have.",
    approach:
      "A language model drafts the site from a short description, and the owner edits and publishes it. The business case covers market size and pricing.",
    owned: ["Wrote the business case alongside the product, not after it."],
    outcome:
      "A working early prototype. I have no customer numbers, and I would not present it as more than a prototype.",
  },
  {
    slug: "cloud-printer",
    title: "Cloud Printer",
    type: "Startup concept · national finalist",
    year: "2023",
    tier: "lab",
    status: { kind: "private", label: "Concept and pitch" },
    links: [],
    summary:
      "A vending machine that prints documents from a phone via a QR code, pitched solo and selected as a Startup Odisha national finalist.",
    points: [
      "QR code to print, no app install",
      "Problem framing and unit economics",
      "Solo founder pitch",
      "Startup Odisha national finalist",
    ],
    challenge:
      "People who need a quick print, such as forms or tickets, often cannot find a working shop at the time they need it.",
    approach:
      "A machine that accepts a document from the customer's phone via QR code and prints on demand, with the pitch built around the problem, the machine and the unit economics.",
    owned: ["Pitched and defended the concept alone."],
    outcome:
      "Selected as a national finalist. The machine itself was never built.",
  },
];

export const caseStudies = works.filter((work) => work.tier === "case-study");
export const labWorks = works.filter((work) => work.tier === "lab");

export function getWork(slug: string) {
  return works.find((work) => work.slug === slug);
}
