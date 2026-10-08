import { motion, useReducedMotion } from "framer-motion";
import { experiences } from "../constants";
import Reveal from "./Reveal";

const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Work</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">Where I've built</h2>
        </Reveal>

        <div className="relative mt-10 space-y-6 pl-0 sm:pl-8">
          <motion.span
            aria-hidden
            className="absolute bottom-2 left-[7px] top-2 hidden w-px origin-top bg-gradient-to-b from-mint via-mint/40 to-transparent sm:block"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          {experiences.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                className="card-shine relative rounded-2xl border border-line bg-card/80 p-6 sm:p-7"
              >
                <span className="absolute -left-8 top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-mint bg-night shadow-[0_0_0_4px_rgb(var(--night))] sm:block" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt=""
                        className="h-12 w-24 rounded-lg border border-line bg-white object-contain p-1"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-medium text-cream">{job.title}</h3>
                      <p className="text-sm text-mist">
                        {job.company}
                        {job.place ? ` · ${job.place}` : ""}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-mint sm:text-right">
                    <p>{job.date}</p>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block text-cream hover:text-mint"
                      >
                        {job.linkLabel} →
                      </a>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-mist">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
