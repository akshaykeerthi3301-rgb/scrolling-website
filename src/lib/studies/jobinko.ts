import type { Study } from "@/lib/study-types";

export const jobinkoStudy: Study = {
  dilemma:
    "A job-matching tool that sounds confident is worse than none when the confidence is wrong. Do you build one that refuses to show a role, one that ranks everything, or one that shows everything and sorts it honestly?",
  abstract:
    "Jobinko began as a bet that Indian early-career job seekers are not short of signal but are misled by confident, wrong signal. Over roughly ten weeks the product changed shape three times: from a gate that withheld roles, to a single ranked list, to visible buckets that hide nothing. Each change was recorded with its reason in a decision log. The product is live at jobinko.in, with a written trail of what was measured, what was reversed and what was wrong. It has no published usage numbers, and this case does not invent any.",
  facts: [
    ["Product", "AI job matching and application co-pilot for India"],
    ["My role", "Founder and product lead, setting scope, decisions and reversals; built with AI coding assistants under my direction"],
    ["Timeline", "September to November 2026 (name and domain changed 8 Oct 2026)"],
    ["Status", "Live at jobinko.in; 408 commits; 180 test files in the repository"],
    ["Method", "Product strategy documents first (offer, persona, pricing, design), then a staged build with a decision log"],
    ["Not claimed", "Usage, conversion, or hiring outcomes: no such data is published here"],
  ],
  context: [
    "India's large job portals show candidates a list of roles with a confident label attached. The brief for this product starts from one observation: a candidate with two years of experience can be told they are a \"Top Applicant\" for a posting that asks for fifteen. The candidate spends forty minutes tailoring a résumé, applies, and is filtered out at the first screen. The cost is not only time. It is the candidate's belief that the market is rejecting them for no reason.",
    "The named customer was narrow on purpose: Indian professionals up to five years into a career, applying to thirty to fifty roles a quarter and hearing back almost never. The engine itself was designed to be general, scoring any corporate role on skills, experience, qualification and location. The reasoning was commercial: with no marketing budget the first users come from a personal network, so the offer is narrow, but a general engine is cheaper to build than one per profession.",
  ],
  problem: [
    "The problem statement in the offer document is specific: the signal job seekers get is not missing, it is confidently wrong. Matching that ignores stated requirements, and presents the result with a badge, wastes the one scarce resource a job seeker has, which is the energy to apply well.",
    "Three further constraints shaped everything. The product had to be free to run, so it could not depend on paid data. It had to be lawful, so it could not scrape the portals whose terms forbid it. And it could not overclaim: a matching tool that promises perfect accuracy is itself an example of the problem it set out to fix.",
  ],
  ideation: [
    "The idea came out of a teardown of the category and a test of whether a lawful, free supply of job data existed. The answer was yes: the public job-board interfaces that companies already publish through applicant tracking systems (Greenhouse, Lever, Ashby, Workable, Recruitee and SmartRecruiters). A hand-built registry of about a hundred Indian company boards, extended by automated discovery, became the data supply and the intended moat.",
    "The core thesis was that precision beats volume. A short list in which nothing is a role the candidate cannot get is more valuable than a long list that looks impressive. The mechanism was designed in four layers, three of which run before any language model sees a job: supply, normalisation to a shared skills and occupation vocabulary, deterministic requirement checks, and only then a model to explain the result in a sentence.",
    "A survival check was written into the offer itself: could someone with a single ChatGPT prompt replicate this? The conclusion was no, because they cannot maintain a registry, run unattended daily, hold a profile over time, or avoid the fifteen-year error, since a language model weighs where this product checks. The moat was deliberately placed in the non-AI layers.",
  ],
  options: [
    {
      option: "Scrape the large portals",
      considered: "Largest supply of roles, and where candidates already look.",
      verdict: "Rejected. It breaches the portals' terms, and a public product cannot rest on that. Cost: it removed most of the volume a personal prototype had enjoyed.",
    },
    {
      option: "Gate: withhold roles the candidate is disqualified from",
      considered: "Matches the offer's promise that nothing in the list is a role you cannot get.",
      verdict: "Built first, then reversed. Gating hid roles candidates might have wanted to judge for themselves, and it needed a hard rule per profession, which was fragile.",
    },
    {
      option: "Rank everything in a single list",
      considered: "Simple, shows every role, lets the score carry the message.",
      verdict: "Built second, then refined. It buried the difference between a role that fits and one that fits except for the years.",
    },
    {
      option: "Buckets: matches you, experience out of range, location out of range, worth a look",
      considered: "Keeps every role visible and keeps the reason for doubt next to it.",
      verdict: "Adopted on 6 Sep 2026 and kept. Nothing is hidden, and the bucket is the disclosure.",
    },
  ],
  decisions: [
    {
      title: "A score that shows its arithmetic",
      body: "The scorer has six weighted components summing to 100: title 28, seniority 25, skills 20, location 10, credential 10 and work mode 7. Each stores the sentence of the posting it was read from, so a number can never hide that it means nothing.",
      tradeoff: "More engineering and more screen space than a single badge, in exchange for a result a candidate can check and dispute.",
    },
    {
      title: "The model reads and explains; code decides",
      body: "A model reads a résumé for skills and domain, and writes the one-line reason for a score. It never decides eligibility. Résumé drafting is limited to facts the candidate has confirmed, and a fabrication guard compares every generated document against the confirmed profile and blocks output when a claim has no support.",
      tradeoff: "The guard will sometimes refuse text a user wants. The remedy is to add the fact to the profile, not to let the model assert it.",
    },
    {
      title: "Say where coverage is thin",
      body: "When the product holds few roles for a candidate, it attributes that to its own coverage, not to the candidate's profile.",
      tradeoff: "It admits a limit on the product's own front page of results rather than flattering the user or the product.",
    },
    {
      title: "Apply-for-me, inside limits",
      body: "The original rule was that the product would never apply on anyone's behalf. On 25 Sep 2026 I reversed it: the extension can submit applications, off by default, capped at 25 a day, never past a CAPTCHA, never with a guessed answer, and a role is marked Applied only when the employer confirms.",
      tradeoff: "More value to the user and more risk. The limits are the honesty and legal boundaries that stayed locked when the rule was reversed.",
    },
    {
      title: "Free, then a paid plan allowed",
      body: "The first rule was free forever with no paid tier. On 7 Oct 2026 I allowed a paid plan. None is built, and the public copy stays free until one exists.",
      tradeoff: "Recording the reversal with its reason in the log, so no later session re-argues it by accident.",
    },
  ],
  corrections: [
    {
      title: "The scorer was broken and nobody had noticed",
      body: "The first scorer computed 70 plus four times the number of requirements minus a gap, and never read the candidate's profile. Two different candidates got identical numbers on the same role, and the value measured how wordy the posting was. The replacement was checked against live data: across 56 roles matching Product Manager, 51 scored differently for a 2-year and a 10-year candidate, averaging 73 and 92.",
    },
    {
      title: "An average cannot express a disqualifier",
      body: "Four components were at or near full marks for any in-city role needing no credential, so 55 points were awarded before anything was known about whether the person could do the job. An internship scored 79 for a two-year professional, and a role asking for four years scored 76 for someone with two. After the fix those became 45 and 53. A role asking for two years of product management scored 80 and Matches you for a candidate with two years in HR; it became 55, short on experience.",
    },
    {
      title: "The résumé checker was measuring the file, not the résumé",
      body: "The same résumé scored 34 out of 100 as a PDF and 65 as a Word file. One line of code joined all text on a page into a single line, so every PDF read as having no experience, skills or sections, and 13 of the 37 rules never fired. Six rebuilds had added checks on top of a parser that returned nothing, because there were no test fixtures to show it.",
    },
    {
      title: "Salary scoring was cancelled by its own measurement",
      body: "The plan assumed salary could not be modelled. That had been measured on posting text, never on the structured fields job-board interfaces return. Measured across 3,509 live India roles from six providers, a structured salary value appeared on 1.1 percent, so the feature was cancelled half a day in. The measurement gate was the deliverable, not the feature.",
    },
    {
      title: "Two of my own claims were wrong",
      body: "In planning the résumé studio, I had told the founder a whole-document rewrite would cost 6,000 to 10,000 tokens; it measured about 1,360. I had also said the projected score would rise substantially after a fix; it rose 0 to 1 point. Both were found by measuring before building, and both are corrected in the plan file.",
    },
  ],
  results: [
    "Live at jobinko.in. A UI makeover was deployed on 10 Nov 2026.",
    "408 commits and 180 test files in the repository, and a roadmap with checkable tasks.",
    "A decision log of more than forty staged entries, each with the date, the measurement and the reversal where there was one.",
    "A standing evidence rule for the project's own reports. After a verdict of \"9 of 16 features match\" was built from a competitor's marketing pages, every number now carries one tag: observed, measured, claimed or inferred.",
  ],
  unknowns: [
    "How many real candidates have used it, and whether the shortlist changes who gets interviews. The offer document set a target for a first cohort of 25 to 50 candidates, and no cohort result is published here.",
    "Whether the product's own fit judgement correlates with hiring outcomes. The offer says it holds no hiring-outcome data and must never imply otherwise.",
  ],
  lessons: [
    "Measure before building. Two features were cut or corrected because a measurement ran first, which cost hours and saved weeks.",
    "A weighted average cannot say no. Anything that must be a disqualifier needs to be a rule, not a score.",
    "Disclosure can do the job refusal was meant to do. Buckets kept every role and still told the truth about the doubt.",
    "Write down reversals. Every locked decision that was later changed is still in the log with its reason, which is what makes the next change safe.",
    "Keep the moat out of the part a model can absorb. The registry, the daily run and the checks are the product; the sentence explaining a score is not.",
  ],
  questions: [
    "After Stage A, the product hid no role at all. When is disclosure a better precision strategy than refusal, and when is it not?",
    "The founder reversed 'never apply on the candidate's behalf'. What evidence would you require before reversing a rule that defined the product?",
    "Only 1.1 percent of India roles carried a structured salary. How should a product handle salary honestly when the data is that thin?",
    "If foundation models absorb the explanation layer, what remains of the moat, and how would you test it?",
    "Design the first 25-person cohort to test the promise that nothing shown is a role the candidate cannot get. What would you count as failure?",
  ],
  sources: [
    "docs/PRODUCT.md and productos/define/1-Product-Offer.md (problem, customer, mechanism, guarantee)",
    "docs/PROJECT-STATE.md: Locked decisions; Stages A, J, Q, T, W, AI, AK",
    "docs/AGENT-SCORECARD.md (evidence tags)",
    "Live product: https://jobinko.in",
  ],
};
