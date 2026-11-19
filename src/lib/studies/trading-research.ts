import type { Study } from "@/lib/study-types";

export const tradingResearchStudy: Study = {
  dilemma:
    "Most trading ideas look profitable until costs and hindsight are removed. How do you build research tooling that is willing to kill your own strategies, and honest about the ones it keeps?",
  abstract:
    "Two research bots for Indian index derivatives, one the origin and one a stricter rebuild, were built around a single discipline: nothing reaches even paper trading until it passes fixed gates on out-of-sample data, net of a full cost model. In the later project, eight option strategies were tested on about 22 months of minute data and seven were rejected. One survived, and it has one closed paper cycle, which is too little to call a track record. The code is private, and no real orders are ever sent.",
  facts: [
    ["Product", "Strategy research and paper-trading bots for NIFTY options and related derivatives"],
    ["My role", "Set the research questions, the gates and the rules; built with AI coding assistants"],
    ["Timeline", "Mid to late August 2026 for the later bot; the parent project began earlier"],
    ["Status", "Private code; paper trading only; no real broker orders, by construction"],
    ["Evidence", "Written validation gates; a status document classifying every candidate; a test suite on the cost model; a README that lists known gaps"],
    ["Not claimed", "Any live-money result. The paper record is one closed cycle."],
  ],
  context: [
    "Retail derivatives trading in India is expensive in ways a backtest hides: brokerage, securities transaction tax, exchange and regulator charges, stamp duty, tax on fees, and slippage on the specific strikes traded. A strategy that looks profitable before costs can lose money after them, and small-capital options strategies are especially sensitive.",
    "The parent project had already produced a lesson. Its earlier evidence turned out to be fitted to one market regime and contaminated by lookahead, meaning that a test had used information that would not have been known at the time. The later bot exists to rebuild the evidence on a foundation that could not make those mistakes.",
  ],
  problem: [
    "The problem is epistemic. When a backtest shows a profit, how much of it is real? The answer depends on whether costs are modelled, whether inputs were knowable at decision time, and whether the result holds in both halves of the test window and over enough trades.",
    "The operational problem is just as practical: a research tool that cannot run unattended, refresh its own credentials, or keep its dashboard current will quietly go stale.",
  ],
  ideation: [
    "The thesis was a negative one: a research tool is valuable in proportion to how many ideas it refuses. Before any strategy ran, the validation gates were written down, carried over from the parent project: net profit positive in both halves of the window, a profit factor of at least 1.2, at least 40 trades, and at least 55 percent of months positive.",
    "Two further rules sit on top. Every input must have been knowable at decision time: no same-day US closes used in the Indian session, no end-of-day volatility when the entry price was quoted, and respect for actual expiry settlement. And costs must be modelled as a full round trip, including the spread on the strikes actually traded.",
    "A promotion path follows from this. A strategy that passes the gates goes to shadow paper trading for twenty to forty live sessions, is compared with its backtest, and only then could be sized up. Phase 0 asked the make-or-break question first: how much usable history does the data access actually grant? About 22 months of real one-minute candles for NIFTY options, which fixed the depth of every later test.",
  ],
  options: [
    {
      option: "Keep the strategy that backtested best",
      considered: "The usual path: tune until the curve looks good.",
      verdict: "Rejected. Seven of eight candidates in the final README failed on margin, curve-fitting or lack of any real signal.",
    },
    {
      option: "Naked and ratio option strategies",
      considered: "Higher premium and higher apparent returns.",
      verdict: "Discarded as infeasible. One needed roughly ₹176k of margin per lot against a ₹1.5 lakh account.",
    },
    {
      option: "Directional strategies on technical signals",
      considered: "Familiar, and many are tempting.",
      verdict: "Failed. Classic technical signals showed near-zero predictive power in the research, and a directional edge that did exist needed far more capital than the account had.",
    },
    {
      option: "Defined-risk premium selling through a double calendar spread",
      considered: "Positive theta, near delta-neutral, with limited risk.",
      verdict: "The lone survivor. Backtested profit factor of 4.54, 3.51 percent a month on ₹1.5 lakh, worst month −0.79 percent, 15 of 20 months positive.",
    },
  ],
  decisions: [
    {
      title: "Write the gates before the strategies",
      body: "The pass or fail criteria exist as a document before any candidate runs, so a result cannot be argued into passing afterwards.",
      tradeoff: "It rejects strategies that might have worked in the next market. The gates are strict on purpose.",
    },
    {
      title: "Paper only, by construction",
      body: "Nothing in the paper-trading code calls a real order endpoint, and this can be verified by searching the code. It is isolated from the sibling project, with separate credentials and environment.",
      tradeoff: "No chance of a real-money result from this tool, which is the point at this stage.",
    },
    {
      title: "Separate what is built from what is live",
      body: "The README has a table that states which layers are live (data, costs, backtest engine, the double calendar, paper execution) and which are built but idle, such as a capital allocator that has nothing to allocate between.",
      tradeoff: "A less impressive status page and a more honest one.",
    },
    {
      title: "Run unattended and keep the dashboard honest",
      body: "A daily scheduled job on a cloud machine refreshes its own login, checks entry and exit rules and updates state. The dashboard sync was automated after it went stale for a week.",
      tradeoff: "Operational complexity that a notebook would not have, so that the system keeps running without me.",
    },
  ],
  corrections: [
    {
      title: "The live path under-costed every trade",
      body: "A fix on 29 Aug 2026 found that the live paper session charged only flat brokerage, so every paper trade was too cheap. A reconciliation test was added to compare the live path with the validated backtest cost model, and a hand-derived cost test closed a gap in an earlier test.",
    },
    {
      title: "The at-the-money strike was chosen the wrong way",
      body: "The live session picked the at-the-money strike by nearest-to-spot, not by put-call parity. It was corrected, and a historical trade from before the cost fix is flagged on the dashboard.",
    },
    {
      title: "The README names its remaining gaps",
      body: "The cost model and strike logic had caught three real bugs, all found by manually noticing a suspicious backtest, not by tests. The live and backtested versions of the same strategy are two separate implementations that have not been cross-checked, and the dashboard can lag live state.",
    },
  ],
  results: [
    "Eight strategy candidates tested on about 22 months of minute-level options data, net of a full cost model, with seven rejected.",
    "One survivor, with a backtest profit factor of 4.54, and one closed paper cycle of +₹3,363 over 18 to 25 Aug 2026, with another open.",
    "Daily unattended paper trading on a scheduled job, with a public dashboard.",
    "Known-answer tests that pin the cost maths to the rupee, and a defined-risk check across every real double-calendar cycle.",
  ],
  unknowns: [
    "Whether the edge persists. One closed cycle is not a record, and the shadow phase of twenty to forty sessions has not finished.",
    "Which candidate list is canonical. A mid-August status document counted fourteen candidates and listed two successful sleeves, and the later README counts eight and one survivor. I use the later README and have not reconciled them.",
    "How the strategy behaves under live fills and spreads, which differ from backtest assumptions.",
  ],
  lessons: [
    "A research tool earns trust by what it rejects. Seven rejections are more convincing than one winner.",
    "Costs are part of the strategy. The most serious bug was a live path that charged too little.",
    "Point-in-time correctness is a rule, not a hope. If you cannot prove an input was known at decision time, do not use it.",
    "Keep a table of live versus built. It stops you, and your reader, from confusing the two.",
  ],
  questions: [
    "The gates were written before the strategies. How would you stop them being quietly loosened after a disappointing run?",
    "One survivor out of eight is a classic multiple-testing setup. How would you estimate the chance it is luck?",
    "The live path reimplements the strategy instead of importing the tested one. What is the case for and against fixing that first?",
    "At what point does a paper record justify risking real money, and who should decide?",
  ],
  sources: [
    "trading/theta-engine README.md (status, what is live, known gaps)",
    "docs/VALIDATION_GATES.md, docs/PHASE0_FINDINGS.md, docs/STATUS.md",
    "Commit history, 29 Aug 2026 (cost and strike fixes, reconciliation tests)",
    "Private repositories: not linked",
  ],
};
