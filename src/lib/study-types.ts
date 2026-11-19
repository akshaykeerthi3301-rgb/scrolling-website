// Long-form case study shape. Written in the Harvard case tradition:
// a dilemma, the context, options actually considered, the decisions taken,
// what went wrong, what is and is not known, and questions for the reader.
// Rule: every claim must trace to a file, a measurement or a live page (see `sources`).

export type Study = {
  /** The decision point, as one sentence the reader has to answer. */
  dilemma: string;
  /** Three or four sentences: situation, action, result, caveat. */
  abstract: string;
  /** Exhibit 1: the facts at a glance. */
  facts: Array<[label: string, value: string]>;
  context: string[];
  problem: string[];
  /** How the idea formed and what the thesis was. */
  ideation: string[];
  /** Real alternatives that were weighed. */
  options: Array<{ option: string; considered: string; verdict: string }>;
  /** The decisions that shaped the product, with the cost accepted. */
  decisions: Array<{ title: string; body: string; tradeoff: string }>;
  /** Where my own plan or claim turned out wrong, and what caught it. */
  corrections: Array<{ title: string; body: string }>;
  /** What is established, with how it was established. */
  results: string[];
  /** What is not known. Said plainly. */
  unknowns: string[];
  lessons: string[];
  /** Questions for discussion, as in a classroom case. */
  questions: string[];
  /** Where each claim can be checked. */
  sources: string[];
};
