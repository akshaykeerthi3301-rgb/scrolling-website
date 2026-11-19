import type { Study } from "@/lib/study-types";

export const webcraftAiStudy: Study = {
  dilemma:
    "A small business owner wants a website tonight and has no designer. Do you generate a whole application they cannot edit, or a single page they can change by clicking on it?",
  abstract:
    "WebCraft AI turns a plain-language description into a complete, styled website that the owner can edit and publish to a live address in one click. The first version was designed to generate a Next.js site. The product was then rebuilt to generate raw HTML, with a design studio, a section editor, three style variants and click-to-edit. It is live and early. There are no customer numbers, and the business case I wrote is not kept in the repository.",
  facts: [
    ["Product", "AI website generator for small businesses and professionals"],
    ["My role", "Product owner; built with AI coding assistants"],
    ["Timeline", "26 Apr 2026 first commit; rebuild on 7 May 2026"],
    ["Status", "Live at webcraft-ai.vercel.app; code is private"],
    ["Stack", "Next.js, a hosted open-weight model (Llama 3.3 70B via Groq), streaming responses, Vercel's deploy interface"],
    ["Not claimed", "Customers, usage or revenue: there are none recorded"],
  ],
  context: [
    "Small businesses and independent professionals need a web presence quickly and cannot afford an agency. General website builders still ask for design decisions and skills they do not have.",
  ],
  problem: [
    "The problem is time-to-live for a non-designer. They know what the business does, not how a site should be laid out, and they need something editable afterwards because first drafts are rarely right.",
  ],
  ideation: [
    "The original brief was an agent that generates a complete Next.js site from a single prompt, with clean, mobile-responsive, deployable output. The product that shipped is different: it generates a self-contained page, and puts the editing in the owner's hands.",
    "That editing is the product. Twenty-five templates give a starting point across food, beauty, wellness, services, retail and portfolios. A design studio sets colours, fonts and spacing. A section editor detects sections and lets the owner redo, reorder, hide or add them. Three variants (minimal, luxury and bold) can be compared side by side. Clicking any text edits it directly, uploaded photos are placed automatically, history allows twenty steps of undo, and one click deploys to a public address or downloads the HTML.",
  ],
  options: [
    {
      option: "Generate a full Next.js application",
      considered: "The original plan: production-quality code that could be extended.",
      verdict: "Replaced. A May rebuild moved to raw HTML generation, which suits a small business that wants to edit and publish, not maintain a codebase.",
    },
    {
      option: "A single generated result",
      considered: "Simplest to build.",
      verdict: "Replaced by three variants and an editor, because first drafts are rarely right and choice reduces the cost of a miss.",
    },
  ],
  decisions: [
    {
      title: "Output that the owner can edit",
      body: "Click-to-edit, a section editor and undo put control with the owner, so the model's draft is a starting point.",
      tradeoff: "More interface to build than a generator alone.",
    },
    {
      title: "One-click publishing",
      body: "Deploy goes through the hosting provider's interface, so the owner ends with a live address instead of a file.",
      tradeoff: "Dependence on a single host.",
    },
    {
      title: "An open-weight hosted model",
      body: "A free-tier hosted model keeps the cost of experiments low.",
      tradeoff: "Output quality and rate limits depend on that provider.",
    },
  ],
  corrections: [
    {
      title: "The first design changed",
      body: "The brief described generating a Next.js site, and the shipped product generates raw HTML. The commit history shows a rebuild of the generation approach on 7 May 2026 and a fix to the preview height. The reasons are not written down in the repository.",
    },
  ],
  results: [
    "A working product with templates, design studio, section editor, variants, click-to-edit, image injection, undo, deploy and download.",
    "Live at webcraft-ai.vercel.app.",
  ],
  unknowns: [
    "Whether a small business owner can get from a prompt to a publishable site without help. No user test is recorded.",
    "How good the generated sites are on average, and how often an owner has to correct them.",
    "The business case. I wrote one with market sizing and pricing, but it is not in the repository, so I do not quote its figures here.",
  ],
  lessons: [
    "A generator is not the product. The editing around it is.",
    "Offer choices instead of one answer when output quality varies.",
    "Write down why a design changed. The rebuild is visible; the reason is not.",
  ],
  questions: [
    "How would you measure whether a non-designer actually publishes a site, and what counts as success?",
    "A model's first draft will often be wrong. Which edits should be easiest, and how would you find out?",
    "What would a fair test of the generated sites against an agency's work look like?",
  ],
  sources: [
    "README.md (features, stack) and CLAUDE.md (original brief)",
    "Commit history, 26 Apr and 7 May 2026",
    "Live product: https://webcraft-ai.vercel.app",
  ],
};
