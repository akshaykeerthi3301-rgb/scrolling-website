import type { Study } from "@/lib/study-types";

export const autoragEvalStudy: Study = {
  dilemma:
    "A language model is fluent at financial research and unreliable on its figures. How do you build a system whose answers can be checked, and a grader whose grades can themselves be trusted?",
  abstract:
    "AutoRAG-Eval turns a financial research question into a planned, tool-executed and independently graded answer. The design separates what was retrieved, what was computed and what was written, shows each stage's state, and has a second model grade the run against a rubric. The grader is itself guarded by a fixed reference set. It was built in August 2026 as a portfolio project with its requirements written first. In this repository the data tools default to mock data, so it demonstrates a method, not a verified research service, and no accuracy figure is published.",
  facts: [
    ["Product", "Multi-agent financial research with a built-in judge"],
    ["My role", "Wrote the product requirements, including success criteria and trade-offs; built with AI coding assistants"],
    ["Timeline", "18 to 20 Aug 2026"],
    ["Status", "Code on GitHub; Docker setup for a hosted demo; no public deployment verified"],
    ["Evidence", "Requirements document inside the README; 36 test functions; a golden dataset and rubric in the code"],
    ["Data", "Search and financial-data tools default to a mock provider, so it runs with no credentials"],
  ],
  context: [
    "Financial research synthesis means comparing metrics across filings, reconciling market data with commentary, and bounding speculation. It is the kind of task models handle fluently and cannot be trusted on without checking, because a hallucinated figure is expensive.",
    "The target user is a fintech founder, product manager or analyst who sits between strategy and technical execution and who will not accept 'trust me'. That person reads the trace, not just the answer.",
  ],
  problem: [
    "A single chat answer gives no way to see what was retrieved, what was computed and what was invented. Quality is a feeling, not a number.",
    "A second problem hides behind the first. If a model grades the answers, the grader needs its own evidence. Otherwise you have replaced one unchecked model with two.",
  ],
  ideation: [
    "The product requirements were written before the code, and open with a problem statement, a persona, user flows, a component table, non-goals, success criteria and trade-offs. Two user flows frame the product: an ad-hoc research query, and a regression check that asks whether a change to a prompt or tool broke anything.",
    "The structure follows from the problem. A planner decomposes the question into a dependency graph of typed subtasks. Workers execute each node by calling a validated tool or synthesising text. An orchestrator schedules nodes in order, retries failures, and logs every state transition. An evaluator agent grades the finished run on faithfulness, structure and hallucination.",
    "The claim that the grader is trustworthy rests on a golden dataset covering at least twelve query shapes: comparison, single-metric lookup, multi-hop, adversarial or unanswerable, and numerical reasoning. A regression suite runs it and is built to run in continuous integration.",
  ],
  options: [
    {
      option: "A graph framework for orchestration",
      considered: "Mature, with built-in checkpointing and visualisation.",
      verdict: "Rejected for a custom asynchronous state loop: full control and no framework-version drift, at the cost of building checkpointing myself, which structured logging covers.",
    },
    {
      option: "Require an API key to run at all",
      considered: "Simpler code with no fallback.",
      verdict: "Rejected for a mock-mode model fallback. It keeps tests and continuous integration free and deterministic, at the cost of mock answers that validate wiring, not quality.",
    },
    {
      option: "A pluggable, general retrieval framework",
      considered: "Reusable for any domain.",
      verdict: "Rejected for a narrow, fixed tool set, which keeps the data schemas exhaustive and reviewable.",
    },
    {
      option: "Optimise for speed",
      considered: "Faster answers.",
      verdict: "Rejected. The stated goal is auditability first.",
    },
  ],
  decisions: [
    {
      title: "Separate retrieval, computation and synthesis",
      body: "Each is a distinct stage with a visible state (pending, running, done, failed). Every tool call has validated inputs and outputs and is retried with backoff. A failure becomes a typed failed node, never a crash, and the run always terminates with a result, even a partial one.",
      tradeoff: "More structure and more code than one prompt, in exchange for a result that can be audited.",
    },
    {
      title: "Make the system read-only",
      body: "No tool can place an order, move funds or write to an external system. The retrieval tools are read-only and default to mock data.",
      tradeoff: "It can never act on its analysis, which is the point for a research tool.",
    },
    {
      title: "Grade every run against a fixed rubric",
      body: "The judge scores each run on a 1 to 5 scale with a structured verdict. A golden dataset with a determinism check guards the harness, so the same mock-mode run returns the same score.",
      tradeoff: "The mock-mode check proves the harness is stable. It does not prove the judge matches human judgment.",
    },
    {
      title: "Stay provider-agnostic",
      body: "The model client branches on one setting for construction and the raw call only. A free-tier backend works as a drop-in, and tracing covers both providers.",
      tradeoff: "A thin abstraction to maintain, in exchange for running at zero cost.",
    },
  ],
  corrections: [
    {
      title: "Where the project stops",
      body: "The project is two commits in August 2026. The tools default to mock data, and the README says the mock responses validate wiring, not quality. There is no recorded study comparing the judge with human graders, and no published accuracy figure. A case study that implied otherwise would be wrong.",
    },
  ],
  results: [
    "A written product requirements document with success criteria that can be checked: zero unhandled exceptions in mock and live mode, a stable score on repeated runs, typed failure states, tests that run with no network, and a reconstructable trace.",
    "36 test functions across models, orchestrator, tools and the evaluation harness.",
    "Optional tracing added on 20 Aug 2026, covering both model providers.",
  ],
  unknowns: [
    "How well the judge agrees with a human grader on real research answers.",
    "Behaviour on live filings and market data, since the default tools are mocked.",
    "Whether the golden dataset covers the failures that matter most in practice.",
  ],
  lessons: [
    "Write success criteria that a script can check. Several here are satisfied by a test, not by judgment.",
    "State the trade-offs next to the design. The custom loop and mock mode are choices with costs, and the cost is written down.",
    "A grader needs its own evidence. A model judging a model is not a result until a fixed set pins it.",
    "Know when to stop claiming. The honest status of a method demo is a method demo.",
  ],
  questions: [
    "What evidence would convince you that an LLM judge is trustworthy for financial answers?",
    "The design values auditability over latency. For which users would you reverse that choice, and why?",
    "How would you choose and grow the golden dataset so it keeps pace with real failures?",
    "Mock mode keeps tests free and deterministic but cannot test quality. How would you test quality without cost?",
  ],
  sources: [
    "README.md (requirements, architecture, trade-offs, safety, observability)",
    "src/evaluation/ (golden dataset, rubric, harness) and tests/",
    "Commit history, 18 and 20 Aug 2026",
  ],
};
