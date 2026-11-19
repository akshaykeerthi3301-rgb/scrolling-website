import type { Study } from "@/lib/study-types";

export const vendorsimStudy: Study = {
  dilemma:
    "You want to learn a job that no public document explains, and Amazon publishes no benchmarks for it. How do you build a training simulator without teaching people things that are false?",
  abstract:
    "VendorSim is a gated learning path and a living simulation of managing three vendors on a European Amazon store, built to understand the Brand Specialist role in Amazon Vendor Services from the inside. Before writing any product, I compiled a research report in which every claim carries a confidence tag, and it changed the design in five ways. The simulator's numbers are invented and labelled as such. Its fairness was tested over 60 scripted games. It is live, and it is a learning project, not evidence of real Amazon results.",
  facts: [
    ["Product", "Brand Specialist training platform with a three-vendor simulation"],
    ["My role", "Product owner and researcher; built with AI coding assistants under my direction"],
    ["Timeline", "18 to 19 Oct 2026 (research report compiled 18 Oct)"],
    ["Status", "Live at vendorsim.vercel.app"],
    ["Evidence", "Research report with confidence tags, a 34-term glossary, six self-checks, a 60-game fairness test"],
    ["Data", "All numbers in the game are invented; role facts come from Amazon's own job postings"],
  ],
  context: [
    "The role is Brand Specialist in Amazon Vendor Services: an operational account manager for vendors who sell wholesale to Amazon. Its work is diagnosing why a vendor's metrics are slipping (stock, catalogue content, ads, price, supply) and coordinating the right fix with the right internal team. The vocabulary alone (glance views, Buy Box, chargebacks, joint business plans) is a barrier to anyone coming from outside.",
    "Adjacent to this role sits an unusual research problem. Public information is partly Amazon's own job postings, partly news investigations, and partly practitioner blogs. None of it is an insider account.",
  ],
  problem: [
    "The learning problem: the skill is not memorising terms but matching the right lever to the actual cause of a problem. An unauthorised seller needs a brand-protection case, not more advertising. A learner needs to practise that judgment under pressure and with trade-offs.",
    "The integrity problem: a training product that states an invented insider detail teaches people something false. So the first job was to find out what could actually be known.",
  ],
  ideation: [
    "The research report opens by refusing an instruction. The prompt had asked it to answer as a former Amazon Vendor Manager. It states plainly that it is not one and has no access to Amazon's systems, because an invented insider detail in a training product is a defect. Every claim then carries a tag: Amazon's own words, a credible news investigation, a practitioner source, general knowledge not re-verified, or not verifiable and needing a real insider.",
    "Two product ideas followed. A gated Academy teaches four levels in order, from the marketplace ecosystem to strategic growth, and unlocks the simulation only when the last level is passed. The simulation then makes the learner manage three differently shaped vendors on a shared budget of five action points a week, with forced decisions when a crisis opens.",
  ],
  options: [
    {
      option: "Set the simulation on Amazon India",
      considered: "The natural home for an India-based learner.",
      verdict: "Rejected. Indian investment rules allow only a marketplace model, so a wholesale vendor relationship does not exist there in the form the simulator assumes.",
    },
    {
      option: "Score the player on revenue alone",
      considered: "Simple and satisfying.",
      verdict: "Rejected. Amazon's own posting says success is measured on input metrics such as stock, availability, price and content, so a revenue-only score would teach the wrong thing.",
    },
    {
      option: "Use a language model to voice the vendor founders",
      considered: "Richer, more varied dialogue.",
      verdict: "Rejected. A template engine needs no keys, costs nothing and cannot invent a fact.",
    },
    {
      option: "Open lessons freely",
      considered: "Less friction for the learner.",
      verdict: "Rejected. Lessons unlock in order, and a lesson completes only when every quick check is answered correctly.",
    },
  ],
  decisions: [
    {
      title: "Set the game on a European store",
      body: "The India-based Brand Specialist postings that are visible serve other countries' stores, and the wholesale model the role manages does not exist on the Indian store. The simulation uses a European store, and says why.",
      tradeoff: "Less local flavour for an Indian learner, in exchange for an accurate model of the role.",
    },
    {
      title: "Three vendors that play differently",
      body: "A mature grocery brand where margin slides under freight and storage costs, an electronics brand whose Buy Box is attacked by unauthorised sellers, and a legacy home-goods brand with a shaky supply chain whose founder distrusts ads, so they work at 40 percent strength.",
      tradeoff: "More content to build and balance, in exchange for a portfolio where no single lever solves everything.",
    },
    {
      title: "A crisis pauses the game",
      body: "An open crisis disables the advance-week button until you spend action points on a lever or accept the impact. A lever helps only if it matches the cause. Vendors remember ignored problems and escalate, and a performance improvement plan can end the run.",
      tradeoff: "A harsher game than a sandbox, because the point is to practise diagnosis, not to enjoy a win.",
    },
    {
      title: "Label every number honestly",
      body: "Amazon publishes no benchmarks for stock, conversion, Buy Box or fill rate, so every baseline is a designer's choice. An info card on every number and one page with every formula make the arithmetic visible, and Net PPM is marked as illustrative.",
      tradeoff: "The game is less 'realistic' in tone and more truthful about what it knows.",
    },
    {
      title: "Test that the game is fair",
      body: "A scripted careful manager (the right lever per cause, plans with co-op funding, terms when margin softens) is run through 60 simulated games, next to a neglectful one.",
      tradeoff: "Time spent on a test harness for a learning project, to avoid a game that punishes correct play.",
    },
  ],
  corrections: [
    {
      title: "My own Academy lesson had a metric wrong",
      body: "The research found that 'Unit Session percentage' is a Seller Central (third-party) metric and that Vendor Central has no such field; conversion there is derived from ordered units and page views. My first Academy module stated it for this role, so the report records that it was wrong and needed correcting.",
    },
    {
      title: "The first test run showed the game was too harsh",
      body: "A single shock could on its own leave a careful player one point under the performance-plan threshold. The shocks were softened, and availability-cutting shocks are never rolled in or just before a joined event week.",
    },
  ],
  results: [
    "Live at vendorsim.vercel.app.",
    "Four gated levels, a 34-term glossary, a final simulation, and an interview-preparation bonus module.",
    "Across 60 simulated games, the scripted careful manager was put on a performance plan in about none, and was never fired. A neglectful one nearly always ended on a plan.",
    "A research report with confidence tags, which separates what Amazon says from what practitioners say from what is unknown.",
  ],
  unknowns: [
    "Whether learners who complete it perform better in the actual role. No one has been measured.",
    "The real figures behind the role. Everything numeric in the game is fiction, and the research file lists what still needs a real insider.",
  ],
  lessons: [
    "Research before product. The report changed the setting, the scoring, the metric definitions and the way numbers are labelled.",
    "Tag every claim by how you know it. It makes the unknowns visible instead of buried.",
    "A simulator is an argument about cause and effect. Test it for fairness, or it teaches that good play loses.",
    "Say what is invented. It costs some polish and earns trust.",
  ],
  questions: [
    "The report refused to answer as an insider. When is declining a framing the right call in a product, and what does it cost?",
    "How would you validate that the simulator improves real performance, given no benchmarks exist?",
    "The wholesale model is absent from the Indian store. How would you adapt the training for a learner who will work on a different store than the one simulated?",
    "What would you add to catch a metric error, like the conversion definition, before a learner sees it?",
  ],
  sources: [
    "docs/RESEARCH-BRAND-SPECIALIST.md (findings F1 to F5, confidence tags)",
    "README.md (learning path, simulation rules, fairness test)",
    "Commit history, 18 to 19 Oct 2026",
    "Live product: https://vendorsim.vercel.app",
  ],
};
