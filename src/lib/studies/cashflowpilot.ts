import type { Study } from "@/lib/study-types";

export const cashflowpilotStudy: Study = {
  dilemma:
    "You are building an AI agent that sells to finance teams and then handles their invoices. How do you let it act on its own, while making it impossible for it to move money or go live before a human has agreed?",
  abstract:
    "CashFlowPilot is a demonstration of an autonomous sales-to-production agent for an invoice reconciliation product, built to show how an agent can be given freedom and still be provably contained. The design rule was fixed on day one: code does every calculation and enforces every gate, and AI only reads messy text and writes words. The agent can find, pitch and trial against fictional companies, but the step that creates a customer account is impossible without a human's signed release. It is built and tested locally with a 59-test suite. It is not deployed, and no accuracy figure for the AI reader is published.",
  facts: [
    ["Product", "Demo of an autonomous go-to-market agent plus a working invoice reconciliation engine"],
    ["My role", "Product owner: I set intent, goals, anti-goals and approved the design; the build used AI coding assistants. The stack choice was handed to the assistant and recorded as its call."],
    ["Timeline", "Designed and built 19 Nov 2026 (v0.1)"],
    ["Status", "Code on GitHub; runs locally; not deployed"],
    ["Evidence", "59 tests; 64 sample PDF invoices across 4 layouts, 7 of them scans; three design specs and three build plans"],
    ["Data", "All companies, people and invoices are fictional"],
  ],
  context: [
    "Finance leaders are asked to trust software that reads supplier invoices and matches them against purchase orders and goods receipts. A misread digit is a real loss, and an agent that can act before a human has approved anything is a liability rather than a feature. At the same time, agent demos usually show fluent behaviour and say little about what stops them from doing damage.",
    "This project exists as a portfolio piece with a specific purpose: to show rigorous agent design to a reviewer, with every simulated part placed behind a boundary so it could be swapped for a real provider later.",
  ],
  problem: [
    "The problem statement is a design problem, not a market one. How do you build an agent that works through the whole commercial lifecycle (find a company, pitch it, run a trial on sample invoices, brief a human, book a call) while guaranteeing that nothing irreversible happens without consent?",
    "Behind it sits a second problem: invoice data is messy. Layouts differ, some invoices are photocopied scans, and a language model reading them can be confidently wrong. A usable system has to catch that error before it reaches a number a finance leader will see.",
  ],
  ideation: [
    "The central idea was a hard lock. After the call is booked the lead enters a pre-sale hold, and only a human can move it on, by marking the deal won and signing a structured release directive that names the scope, the systems and the maximum automatic amount. The first customer environment starts in read-only shadow mode, where the agent's decisions are compared with an answer key before any live mode is allowed.",
    "From the start the spec stated what would count as failure even if the demo worked: the agent setting the won flag itself, a number shown as a financial result that came from a model, a public demo that can email a real address or run up an AI bill, or a demo that looks empty without an AI key. Writing the anti-goals first shaped every later choice.",
    "A second phase, the invoice engine, was added to make the product part real: the trial runs on actual PDF tax invoices with realistic structure, read the way a production tool would, with code where code is reliable, AI where layout understanding is needed, and code checking everything the AI returns.",
  ],
  options: [
    {
      option: "One web app on Vercel with a Postgres database",
      considered: "Free, fast on first visit, a single deployment, and the lock can be enforced on the server.",
      verdict: "Chosen.",
    },
    {
      option: "A Python service on a free host plus a separate front end",
      considered: "A familiar stack for agent work.",
      verdict: "Rejected. A cold start of about fifty seconds on the free tier would lose a portfolio visitor, and it needs two deployments.",
    },
    {
      option: "Everything in the browser",
      considered: "Fastest and cheapest.",
      verdict: "Rejected. The visitor could bypass the lock, which would turn the centrepiece into decoration.",
    },
    {
      option: "Pre-recorded animation with fixed numbers for the demo",
      considered: "Smooth and predictable.",
      verdict: "Rejected as dishonest. The redesign kept the real agent and real numbers, paced by the client so each request stays short.",
    },
    {
      option: "A paid model with PDFs sent directly, versus a free-tier model reading extracted text",
      considered: "Direct PDF reading is simpler; a free model keeps the cost at zero.",
      verdict: "Free-tier model by default, with a one-setting switch to the other, and an evaluation script to compare them.",
    },
  ],
  decisions: [
    {
      title: "Code owns the money, AI owns the words",
      body: "All arithmetic (totals, tax, return on investment, lead score, shadow accuracy) is plain, tested TypeScript, and money is stored in integer minor units, never floats. The model reads messy text and writes prose behind schemas, confidence thresholds and budgets.",
      tradeoff: "Less flexibility than letting a model reason about numbers, in exchange for results that are the same every time and can be tested to the rupee.",
    },
    {
      title: "One function is the only writer of a deal's stage",
      body: "A single transition function checks the allowed-transitions table, runs the guard, and writes the new state and an audit row together. Agent attempts to pass the lock are rejected and logged, not ignored.",
      tradeoff: "Every new capability has to go through one narrow door, which slows adding features and makes the lock testable.",
    },
    {
      title: "Read, then verify, then match",
      body: "For each invoice, code extracts the text layer, the model copies values exactly as printed, code confirms every value is on the page, then checks tax IDs, line maths, totals, round-off and amount in words, and runs a three-way match against the purchase order and goods receipt. Scans have no text layer, so the image goes to a vision model, and anything that does not add up goes to a person.",
      tradeoff: "Three stages and a human queue instead of one clever model call.",
    },
    {
      title: "Hard limits that fail safe",
      body: "A daily send cap of 20, an opt-out check before every send, a per-trial AI budget of 30 calls, a 300-call daily cap across visitors, three retries with backoff, and caching so identical documents are read once. When the cap is hit or there is no key, the system falls back to a code reader for known layouts.",
      tradeoff: "A demo that is sometimes less impressive when capped, rather than one that can run up a bill or break.",
    },
    {
      title: "Plant the defects, then keep an answer key",
      body: "Sample invoices are generated from a fixed seed with planted errors: wrong quantity, wrong price, duplicate invoice, wrong tax rate, tax arithmetic, a charge not on the order, a wrong total, an invalid tax ID, wrong tax type for the place of supply, and amount in words that differs from the total. The answer key is built from what was planted.",
      tradeoff: "The test data is synthetic, so what it proves is a method, not performance on real supplier documents.",
    },
  ],
  corrections: [
    {
      title: "The model was pulled out of the sales demo",
      body: "A commit on 19 Nov 2026 keeps the simulated sales journey off the real AI, so that only the invoice prototype reads with a model. The record does not give the reason. The effect is a smaller AI surface and a sales demo that behaves the same every time.",
    },
    {
      title: "The demo was held to the same honesty rule as the product",
      body: "The visitor-experience spec rejects scripted animation and requires that the displayed numbers come from the real agent. It also bans internal state codes on the main path and any ROI figure a finance leader would laugh at, so the demo's credibility is treated as a requirement, not polish.",
    },
  ],
  results: [
    "Runs end to end locally with no accounts or keys; a one-minute simulated journey and an invoice prototype that reads 64 sample PDFs.",
    "A 59-test suite covering money maths, the answer key, the lock, the circuit breakers and the full flow.",
    "The lock is enforced on the server and covered by tests, so provisioning before a signed release is rejected.",
    "Three specs and three build plans, each stating goals, non-goals and anti-goals before any code.",
  ],
  unknowns: [
    "AI reading accuracy. An evaluation script measures field-level accuracy against ground truth, but I have not published a figure and do not claim one.",
    "Performance on real supplier documents, which differ from generated samples in ways the samples may not capture.",
    "Whether a finance team would accept shadow mode as the way to start. No buyer has used it.",
  ],
  lessons: [
    "Write the anti-goals before the goals. They decided the architecture more than the features did.",
    "Make the safety property structural, not procedural. A lock that only one function can open is easier to test than a policy.",
    "Keep the model on the part that is genuinely fuzzy, such as reading layouts, and keep it off anything that produces a number.",
    "A demo that falls back gracefully without a key is a better demonstration of engineering than one that needs everything switched on.",
  ],
  questions: [
    "The release directive names a scope, systems and a maximum automatic amount. What would you add before a real customer signs it?",
    "Shadow mode compares the agent with an answer key. Where does that answer key come from with a real customer, and who owns it?",
    "The design puts a human at the only irreversible step. Where would you let the agent act alone, and what evidence would you want first?",
    "How would you design the evaluation that turns an AI reader's accuracy from a claim into a published number?",
  ],
  sources: [
    "docs/superpowers/specs/2026-11-19-cashflowpilot-design.md (intent, goals, anti-goals, approaches, decisions)",
    "docs/superpowers/specs/2026-11-19-invoice-engine-design.md",
    "docs/superpowers/specs/2026-11-19-cashflowpilot-experience-design.md",
    "README.md and the commit history (59 tests; cap and fallback behaviour)",
  ],
};
