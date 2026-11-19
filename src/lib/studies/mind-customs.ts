import type { Study } from "@/lib/study-types";

export const mindCustomsStudy: Study = {
  dilemma:
    "A niche service that nobody searches for by name, in a city with no digital presence for it. Do you spend the first weeks on broad reach, or on finding the few neighbourhoods where the problem is most likely to be felt?",
  abstract:
    "Mind Customs is a Bangalore business that installs rodent-protection mesh in cars. I worked on it solo: positioning and go-to-market strategy, an Instagram content plan, and the website. The strategy chose narrow, locality-level targeting over broad reach, and the content plan was followed by reel views rising from 2K to 40K in a week. That figure is reach, not sales. The website was redesigned twice in a week and then fixed for phones. I have no sales or lead data to report.",
  facts: [
    ["Client", "Mind Customs, Bangalore (rodent-protection mesh for cars)"],
    ["My role", "Sole consultant: strategy, content plan and website build"],
    ["Timeline", "May to June 2026 (site built 7 to 11 Jun 2026)"],
    ["Status", "Live website, repository on GitHub"],
    ["Headline figure", "Reel views from 2K to 40K within a week of the new plan (client Instagram figures, reach only)"],
    ["Not claimed", "Leads, bookings or revenue: no such data is recorded here"],
  ],
  context: [
    "The service is unusual: protecting a car's wiring from rats with mesh. Few people know it exists until a rat has already damaged a car, and almost nobody searches for it by name. The site carries a monsoon promotion banner, so the rainy season appears to matter to the business.",
    "The business started with almost no digital presence, so the work had to build awareness and a way to convert it.",
  ],
  problem: [
    "The problem is demand creation under low awareness. The people who need the service do not yet know the category, and the business cannot afford broad advertising.",
    "A second problem is conversion. A visitor who is curious needs to see what is offered, see the price, and reach the owner quickly, on a phone, in a market where messaging is the normal way to enquire.",
  ],
  ideation: [
    "The strategy was to find who has the problem and meet them there. I assessed positioning, then advised targeting by locality to find the highest-intent early adopters, and built an Instagram content plan around the problem that people recognise instead of the product.",
    "The website followed the same logic: a hero with background video and a clear call to action, services, a car showcase and gallery using real photos from the business's own Instagram, visible pricing tiers, a contact form, a monsoon promotion banner, and a floating WhatsApp button for direct contact.",
  ],
  options: [
    {
      option: "Broad reach across the city",
      considered: "Larger audience for the content.",
      verdict: "Not chosen. I advised starting with locality-level targeting instead.",
    },
    {
      option: "A plain information site",
      considered: "Quick to build.",
      verdict: "Not chosen. The site was redesigned within days into a themed experience with a 3D car, scroll video and a telemetry-style pricing panel, to make a small business look credible and memorable.",
    },
  ],
  decisions: [
    {
      title: "Target by locality first",
      body: "Identify where the highest-intent early customers are and start there.",
      tradeoff: "Fewer people reached, in exchange for a more relevant audience and a measurable signal.",
    },
    {
      title: "Put pricing on the page",
      body: "A commit during the redesign explicitly improves price visibility and removes duplicated price text.",
      tradeoff: "Showing prices invites comparison, but removes a reason to hesitate before messaging.",
    },
    {
      title: "Contact through WhatsApp",
      body: "A floating WhatsApp button and a contact form sit on every screen.",
      tradeoff: "Leads arrive in a personal messaging inbox, which is convenient and hard to track.",
    },
  ],
  corrections: [
    {
      title: "Mobile layout broke repeatedly",
      body: "Within days of launch, a series of commits on 11 Jun 2026 fixed overlap on narrow phones: the hero over the ticker, the monsoon alert over text, a button over the headline, and a layout regression traced to an over-aggressive global style reset. The lesson was to test on the phones customers actually use before adding visual effects.",
    },
    {
      title: "A wrong link was live",
      body: "On 18 Oct 2026 the Instagram link had to be corrected to the right handle.",
    },
  ],
  results: [
    "Reel views rose from 2K to 40K within a week of the new content plan, as reported from the client's Instagram.",
    "A live website with services, gallery, pricing, lead capture and direct messaging.",
  ],
  unknowns: [
    "Whether the reach turned into enquiries, bookings or revenue. The record has no such data.",
    "Which locality-level choices drove the result. The strategy reasoning is not documented in the repository, and this study reports what I advised, not a tested causal result.",
    "Whether the redesigned site converts better than the original, since no before-and-after conversion data exists.",
  ],
  lessons: [
    "Reach is not revenue. A 20x on views is a good sign and not a result.",
    "Narrow beats broad when you have no budget, because it makes the signal readable.",
    "Visual ambition has a mobile cost. Test on small screens first.",
    "Write down the reasoning at the time. Here the outcome is recorded and the thinking is not.",
  ],
  questions: [
    "What would you measure after the reel views rose, to show whether the strategy worked commercially?",
    "How would you test the locality hypothesis cheaply, before committing the content plan to it?",
    "A themed, effects-heavy site and a plain one each carry a risk for a trades business. Which would you start with, and why?",
    "How do you keep leads from a messaging inbox countable?",
  ],
  sources: [
    "Repository: CLAUDE.md and commit history, 7 Jun to 18 Oct 2026",
    "Live site: https://mind-customs.vercel.app",
    "Engagement figure: client Instagram reel views, as reported by the client",
  ],
};
