import type { Study } from "@/lib/study-types";

function Section({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <p className="font-mono text-xs text-neutral-500">{String(n).padStart(2, "0")}</p>
      <h2 className="mt-1 text-2xl font-semibold md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="grid gap-5 text-base leading-8 text-neutral-700">
      {items.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-base leading-8 text-neutral-700">
      {items.map((item) => (
        <li key={item} className="border-l-2 border-neutral-300 pl-4">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CaseStudyBody({ study }: { study: Study }) {
  let counter = 0;
  const next = () => ++counter;

  return (
    <div className="mx-auto max-w-3xl">
      <blockquote className="mt-14 border-l-4 border-neutral-950 pl-5 text-xl font-medium leading-9 md:text-2xl md:leading-10">
        {study.dilemma}
      </blockquote>
      <p className="mt-8 text-base leading-8 text-neutral-700">{study.abstract}</p>

      <div className="mt-10 overflow-hidden rounded-sm border border-neutral-300 bg-white">
        <p className="border-b border-neutral-200 bg-neutral-50 px-5 py-3 text-xs font-semibold uppercase text-neutral-500">
          Exhibit 1 &middot; At a glance
        </p>
        <dl className="divide-y divide-neutral-200 text-sm">
          {study.facts.map(([label, value]) => (
            <div key={label} className="grid gap-1 px-5 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd className="leading-7 text-neutral-700">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Section n={next()} title="Context">
        <Paragraphs items={study.context} />
      </Section>
      <Section n={next()} title="The problem">
        <Paragraphs items={study.problem} />
      </Section>
      <Section n={next()} title="Ideation and thesis">
        <Paragraphs items={study.ideation} />
      </Section>

      {study.options.length > 0 && (
      <Section n={next()} title="Options considered">
        <div className="grid gap-3">
          {study.options.map((o) => (
            <div key={o.option} className="rounded-sm border border-neutral-300 bg-white p-5">
              <p className="font-semibold">{o.option}</p>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                <span className="font-semibold text-neutral-950">Why considered: </span>
                {o.considered}
              </p>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                <span className="font-semibold text-neutral-950">Verdict: </span>
                {o.verdict}
              </p>
            </div>
          ))}
        </div>
      </Section>
      )}

      {study.decisions.length > 0 && (
      <Section n={next()} title="Decisions and what they cost">
        <div className="grid gap-4">
          {study.decisions.map((d) => (
            <div key={d.title} className="rounded-sm border border-neutral-300 bg-white p-5">
              <h3 className="text-lg font-semibold">{d.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{d.body}</p>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                <span className="font-semibold text-neutral-950">Trade-off: </span>
                {d.tradeoff}
              </p>
            </div>
          ))}
        </div>
      </Section>
      )}

      {study.corrections.length > 0 && (
      <Section n={next()} title="What went wrong, and what caught it">
        <div className="grid gap-4">
          {study.corrections.map((c) => (
            <div key={c.title} className="rounded-sm border border-amber-300 bg-amber-50 p-5">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-700">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>
      )}

      <Section n={next()} title="Results and evidence">
        <Bullets items={study.results} />
      </Section>
      <Section n={next()} title="What is not known">
        <Bullets items={study.unknowns} />
      </Section>
      <Section n={next()} title="Lessons">
        <Bullets items={study.lessons} />
      </Section>

      <Section n={next()} title="Questions for discussion">
        <ol className="grid list-decimal gap-3 pl-5 text-base leading-8 text-neutral-700">
          {study.questions.map((q) => (
            <li key={q}>{q}</li>
          ))}
        </ol>
      </Section>

      <div className="mt-14 rounded-sm border border-neutral-300 bg-white p-5">
        <p className="text-xs font-semibold uppercase text-neutral-500">Evidence trail</p>
        <ul className="mt-3 grid gap-2 text-sm leading-7 text-neutral-600">
          {study.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
