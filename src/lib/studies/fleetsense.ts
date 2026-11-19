import type { Study } from "@/lib/study-types";

export const fleetsenseStudy: Study = {
  dilemma:
    "Small fleet operators run on spreadsheets and phone calls, but face real compliance rules. How much of a fleet-management platform do you build before a single customer has asked for it?",
  abstract:
    "FleetSense is a multi-tenant platform for fleet operators covering vehicles, drivers, maintenance, fuel, inspection reports, compliance, geofences and billing, built in June 2026 to be ready for a first pilot customer. The record is thin: two commits and a project brief. It shows what was scoped and which services were chosen, and it does not show the discovery work behind it. There is no pilot customer yet.",
  facts: [
    ["Product", "Fleet management SaaS: tracking, drivers, maintenance, fuel, inspections, compliance, billing"],
    ["My role", "Product owner and designer; built with AI coding assistants"],
    ["Timeline", "June 2026"],
    ["Status", "Pilot deployment, sign-in required; code on GitHub"],
    ["Scale of build", "15 database models; dashboard modules for vehicles, drivers, alerts, maintenance, fuel, inspections, compliance, reports, billing and a live map"],
    ["Not claimed", "A customer, usage or revenue: there is none"],
  ],
  context: [
    "Fleet operators manage vehicles, drivers, service schedules and regulatory inspections. Smaller operators often do this across spreadsheets, paper and phone calls, which is where service dates get missed and compliance records go missing.",
  ],
  problem: [
    "The problem is fragmentation under rules. A fleet has to keep inspection reports, service schedules and driver records that someone may ask to see, and the cost of a gap is a fine or an accident.",
    "A secondary problem is the customer: a first pilot fleet. The platform had to be complete enough to be worth trying and cheap enough to start.",
  ],
  ideation: [
    "The brief scopes an AI-assisted, multi-tenant business product: each customer's data is isolated, sign-in and organisation handling come from an established provider, subscriptions are billed monthly or annually through a payment provider, and vehicle recall and decode data comes from a public safety database. A webhook receives telematics events.",
    "The scope followed the regulatory jobs a fleet has to do: driver vehicle inspection reports, a compliance status page, alerts, maintenance schedules and a fuel log, with a live map and exportable reports.",
  ],
  options: [],
  decisions: [
    {
      title: "Use established services for the hard, risky parts",
      body: "Authentication and organisation handling, and payments, are delegated to specialist providers rather than built.",
      tradeoff: "Dependence on third parties, in exchange for not building security-critical features alone.",
    },
    {
      title: "Isolate each customer's data",
      body: "A multi-tenant design keeps each organisation's records separate.",
      tradeoff: "More careful design from the start, which a single-customer tool would avoid.",
    },
    {
      title: "Aim at a pilot, not the full market",
      body: "The goal is a working core that a first fleet can try, not every feature a large fleet would need.",
      tradeoff: "Scope is deliberately limited, so some fleets' needs will not be met.",
    },
  ],
  corrections: [
    {
      title: "Build ahead of demand",
      body: "The platform was built before any fleet had agreed to use it. Two commits, no tests recorded, and no pilot customer mean that the central assumption, that a small fleet will pay for this, is untested.",
    },
  ],
  results: [
    "A working, deployed pilot instance with sign-in, covering the modules listed above.",
    "A schema of 15 models and routes for each module.",
  ],
  unknowns: [
    "Whether any fleet will adopt it, and what they would pay.",
    "The discovery work: who was interviewed, what the competing tools were, and why this scope. The repository does not record it.",
    "The reliability of the integrations under real data, since no customer has used it.",
  ],
  lessons: [
    "Scope a first customer before scoping the product. The most valuable missing artefact is a conversation with a fleet manager.",
    "Building is cheap now. The scarce resource is a real user.",
    "Say plainly that there is no customer. It is more useful to a reader than a feature list.",
  ],
  questions: [
    "Whom would you interview first, and what would you ask, to decide which three modules to keep?",
    "What would a fair first pilot look like, and how long should it run before you judge it?",
    "Which of the bought-in services would you replace first if the pilot succeeded, and why?",
  ],
  sources: [
    "Repository: CLAUDE.md (scope, stack and routes) and the Prisma schema (15 models)",
    "Commit history, 11 Jun 2026",
    "API route for telematics webhooks in the repository",
  ],
};
