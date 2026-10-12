import { motion, useReducedMotion } from "framer-motion";
import { currentFocus, workingStyle } from "../constants";
import Reveal from "./Reveal";

const Focus = () => {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-card/80">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-mint/10 blur-3xl" />
              <p className="relative text-sm font-medium uppercase tracking-[0.16em] text-mint">
                {currentFocus.eyebrow}
              </p>
              <h2 className="relative mt-3 max-w-md font-serif text-3xl tracking-tight text-cream sm:text-4xl">
                {currentFocus.title}
              </h2>
              <p className="relative mt-4 max-w-lg leading-relaxed text-mist">{currentFocus.description}</p>
            </div>

            <ul className="divide-y divide-line">
              {currentFocus.points.map((point, index) => (
                <motion.li
                  key={point}
                  whileHover={reduce ? undefined : { x: 5 }}
                  className="flex gap-4 p-5 text-sm leading-relaxed text-mist sm:p-6"
                >
                  <span className="font-serif text-xl text-mint">0{index + 1}</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">How I work</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">
          From real problem to shipped system
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {workingStyle.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.07}>
            <motion.article
              whileHover={reduce ? undefined : { y: -6 }}
              className="h-full rounded-2xl border border-line bg-card/70 p-5"
            >
              <p className="font-serif text-2xl text-mint">{step.number}</p>
              <h3 className="mt-5 font-medium text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Focus;
