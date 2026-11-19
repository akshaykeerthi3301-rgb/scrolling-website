import type { Study } from "@/lib/study-types";

export const cloudPrinterStudy: Study = {
  dilemma:
    "Students need printouts at the worst possible time and pay whatever the nearest vendor asks. Can a campus vending machine that takes a file from a phone and payment by UPI be both cheap enough for students and profitable enough to place on a campus?",
  abstract:
    "Cloud Printer is a 2023 start-up concept, pitched solo at Startup Odisha: a vending machine that accepts a file through a QR code, calculates the price, takes payment by UPI and prints, with no person involved. The pitch rests on primary research at a single campus and a cost model whose numbers, on a second reading, do not all agree with each other. It was selected as a national finalist. No prototype is recorded, and the concept was never tested with customers.",
  facts: [
    ["Product", "Automated campus print vending machine, file in by QR code, payment by UPI"],
    ["My role", "Sole founder, researcher and presenter"],
    ["Timeline", "2023, while at IIM Sambalpur"],
    ["Status", "Concept and pitch deck; no prototype recorded"],
    ["Outcome", "Selected as a Startup Odisha national finalist"],
    ["Evidence", "Two versions of the pitch deck, covering problem, solution, value proposition, business model, cost-profit analysis, go-to-market and team"],
  ],
  context: [
    "Most Indian campuses provide no printing facility, yet students print constantly: assignments, academic documents and, in an open-book exam period, large volumes. The pitch opens with two student quotes from the research: it would be easy if there were a proper printout service on campus, and local vendors charge too much, especially when students arrive at the last moment and the vendor charges as they please.",
  ],
  problem: [
    "The problem statement in the deck has four parts: campuses normally provide no printing; students print academic documents heavily; vendors charge different prices in different places; and many students cannot afford a printer of their own.",
    "The sharper problem is the moment of need. Printing is a last-minute task, so students have the least bargaining power exactly when they most need the service.",
  ],
  ideation: [
    "The solution is a machine connected to a cloud drive. A customer uploads a file through a QR code, the machine reads it and calculates the price, the customer pays by UPI, the machine confirms payment and prints. A secondary path sends a payment link and bill to the customer's mobile number.",
    "The value proposition is built on fixed, affordable pricing, no delay, vending-machine simplicity, digital payment and bill, and an eco-friendly paper option. The business model treats campuses and corporate or government offices as channels, and students and working professionals as segments.",
    "The economic argument comes from primary research at IIM Sambalpur, where a student was found to spend about ₹400 on printouts in a three-month exam season (variable, and about ₹250 for a single open-book exam). For a batch of 520 in which 300 pay that amount, spend is about ₹1.2 lakh.",
  ],
  options: [],
  decisions: [
    {
      title: "Start with campuses, not the open street",
      body: "Campuses give concentrated, repeated demand and a partner institution that can supply space, which the deck treats as a variable cost because the plan is collaboration.",
      tradeoff: "Demand follows the academic calendar, so revenue clusters in exam seasons.",
    },
    {
      title: "Price below the incumbent",
      body: "The deck models a ₹300 spend in place of the ₹400 found in research, at about ₹5 a page with volume discounts.",
      tradeoff: "Lower revenue per student, accepted to win share from vendors who charge as they please.",
    },
    {
      title: "Pay by UPI",
      body: "Payment is confirmed digitally before printing, so the machine needs no cash handling and no attendant.",
      tradeoff: "Depends on student phones and network access at the machine.",
    },
  ],
  corrections: [
    {
      title: "The deck's numbers do not fully agree",
      body: "One slide models 5,000 pages a month at ₹5 a page, giving ₹25,000 revenue and ₹19,200 profit after ₹5,800 of monthly costs, and says break-even takes five to six months against a capital cost of ₹50,000 to ₹80,000. Simple division gives about three to four months at that profit. The cost structure slide also lists a ₹20,000 monthly salary that the profit slide does not subtract. Another slide says break-even comes within two exam seasons. I would rebuild the model with one set of assumptions before presenting it again.",
    },
    {
      title: "Volume is an assumption",
      body: "The 5,000-page monthly volume is labelled an assumption in the deck, and the research behind the ₹400 figure is a small primary sample from one campus.",
    },
  ],
  results: [
    "Selected as a Startup Odisha national finalist, which validates the clarity of the pitch against a national field.",
    "A complete pitch structure, from problem to go-to-market, with the key metrics defined: machine utilisation and revenue per machine, customer acquisition cost, average order value, satisfaction and retention.",
  ],
  unknowns: [
    "Whether students would use the machine, and at what price, since no prototype or pilot is recorded.",
    "The real unit economics. The cost model is internally inconsistent and rests on an assumed volume.",
    "How the machine would handle jams, paper and ink restocking, and security of uploaded files, which the deck lists as features but does not detail.",
  ],
  lessons: [
    "A good pitch and a good model are different things. Check the model's arithmetic against itself before presenting.",
    "Primary research from one campus is a start, not a market size.",
    "State assumptions as assumptions. The deck did, which is what makes its weaknesses findable.",
  ],
  questions: [
    "Which single assumption would you test first with a prototype, and how cheaply?",
    "Demand clusters in exam periods. How would you design pricing or a second use to smooth it?",
    "How would you rebuild the cost model so break-even is stated once and consistently?",
    "What are the risks of storing students' uploaded documents, and how would you design around them?",
  ],
  sources: [
    "Cloud Printer pitch deck, two versions (problem, solution, value proposition, business canvas, cost-profit analysis, go-to-market, team)",
  ],
};
