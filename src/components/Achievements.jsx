import { motion, useReducedMotion } from "framer-motion";
import { achievements } from "../constants";
import Reveal from "./Reveal";

const Achievements = () => {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Achievements</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">A few results</h2>
      </Reveal>

      <ol className="mt-8 overflow-hidden rounded-2xl border border-line bg-card/70">
        {achievements.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <motion.li
              whileHover={reduce ? undefined : { x: 6 }}
              className="border-b border-line px-6 py-5 last:border-b-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-medium text-cream">{item.title}</h3>
                <p className="text-sm text-mint">{item.organization}</p>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">
                {item.description}
                {item.link && (
                  <>
                    {" "}
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-mint hover:text-cream">
                      {item.linkLabel} →
                    </a>
                  </>
                )}
              </p>
            </motion.li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default Achievements;
