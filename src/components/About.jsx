import { motion, useReducedMotion } from "framer-motion";
import { about, education, recruiterSnapshot, technologies } from "../constants";
import Reveal from "./Reveal";

const marqueeItems = technologies.flatMap((group) => group.items);

const About = () => {
  const reduce = useReducedMotion();
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section id="about" className="scroll-mt-28 mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <p className="lab-kicker">About</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">What I actually do</h2>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-4 text-base leading-relaxed text-mist">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * index}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <aside className="lab-frame rounded-2xl border border-line bg-card/80 p-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mint">Quick profile</p>
            <dl className="mt-4 divide-y divide-line">
              {recruiterSnapshot.map((item) => (
                <div key={item.label} className="grid grid-cols-[6rem_1fr] gap-3 py-3 first:pt-0 last:pb-0">
                  <dt className="text-sm text-mist">{item.label}</dt>
                  <dd className="text-sm font-medium text-cream">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>

      <Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {education.map((item) => (
            <li key={item.detail} className="lab-frame rounded-2xl border border-line bg-card/80 px-5 py-4">
              <p className="text-sm text-mint">{item.note}</p>
              <p className="mt-1 font-medium text-cream">{item.detail}</p>
              <p className="mt-1 text-sm text-mist">
                {item.school} · {item.date}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="marquee-mask relative mt-10 overflow-hidden rounded-full border border-line bg-card/50 py-3">
        <motion.div
          className="flex w-max gap-3 px-3"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-line bg-night/60 px-4 py-1.5 text-sm text-cream"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {technologies.map((group, index) => (
          <Reveal
            key={group.category}
            delay={index * 0.08}
            className={index < 3 ? "lg:col-span-2" : "sm:col-span-2 lg:col-span-3"}
          >
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              className="card-shine lab-frame h-full rounded-2xl border border-line bg-card/80 p-5"
            >
              <h3 className="text-sm font-medium text-cream">{group.category}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={reduce ? undefined : { scale: 1.06 }}
                    className="rounded-full bg-cream/5 px-3 py-1 text-sm text-mist"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default About;
