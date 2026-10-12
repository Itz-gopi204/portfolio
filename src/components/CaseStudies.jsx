import { motion, useReducedMotion } from "framer-motion";
import { caseStudies } from "../constants";
import Reveal from "./Reveal";

const CaseStudies = () => {
  const reduce = useReducedMotion();

  return (
    <section id="case-studies" className="scroll-mt-20 border-y border-line bg-card/30">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="lab-kicker">Case studies</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">
            The thinking behind the build
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-mist">
            Two projects that show how I turn an unclear workflow into a measurable, usable system.
          </p>
        </Reveal>

        <div className="mt-10 space-y-6">
          {caseStudies.map((study, index) => (
            <Reveal key={study.name} delay={index * 0.08}>
              <article className="lab-frame overflow-hidden rounded-3xl border border-line bg-night/70">
                <div className="flex items-center justify-between border-b border-line px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-mist sm:px-8">
                  <span>Case file / {study.number}</span>
                  <span className="text-mint">Verified build</span>
                </div>
                <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative overflow-hidden border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-mint/10 blur-3xl" />
                    <p className="relative font-serif text-4xl text-mint/60">{study.number}</p>
                    <p className="relative mt-8 text-xs uppercase tracking-[0.16em] text-mist">{study.context}</p>
                    <h3 className="relative mt-2 font-serif text-3xl tracking-tight text-cream">{study.name}</h3>
                    <p className="relative mt-6 text-xs font-medium uppercase tracking-[0.14em] text-mint">
                      The challenge
                    </p>
                    <p className="relative mt-2 text-sm leading-relaxed text-mist">{study.challenge}</p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-mint">What I built</p>
                    <ul className="mt-4 space-y-3">
                      {study.contribution.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-relaxed text-mist">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-y border-line py-5">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-mist">
                        System flow
                      </p>
                      <ol className="mt-4 flex items-center overflow-x-auto pb-2">
                        {study.pipeline.map((node, nodeIndex) => (
                          <li key={node} className="flex shrink-0 items-center">
                            <div className="relative rounded-sm border border-line bg-card/80 px-2 py-2 text-[9px] font-medium uppercase tracking-[0.06em] text-cream">
                              <span className="mr-1 text-mint">{String(nodeIndex + 1).padStart(2, "0")}</span>
                              {node}
                            </div>
                            {nodeIndex < study.pipeline.length - 1 && (
                              <span aria-hidden className="h-px w-2 bg-mint/50" />
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {study.outcomes.map((outcome) => (
                        <div key={outcome} className="rounded-xl border border-line bg-card/80 px-4 py-3">
                          <p className="text-sm font-medium leading-snug text-cream">{outcome}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
                      <ul className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <li key={tag} className="rounded-full bg-cream/5 px-3 py-1 text-xs text-mist">
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <motion.a
                        href={study.link}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={reduce ? undefined : { x: 4 }}
                        className="shrink-0 text-sm font-medium text-mint"
                      >
                        {study.linkLabel} →
                      </motion.a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
