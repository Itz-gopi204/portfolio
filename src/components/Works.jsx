import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../constants";
import Reveal from "./Reveal";

const Works = () => {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Projects</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-cream sm:text-5xl">Selected work</h2>
          <p className="mt-3 max-w-xl text-mist">
            Production systems, hackathon builds, and a freelance product that is live.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const featured = index === 0;
            return (
            <Reveal key={project.name} delay={(index % 2) * 0.08} className={featured ? "md:col-span-2" : ""}>
              <motion.article
                whileHover={reduce ? undefined : { y: -8 }}
                className={`card-shine group flex h-full flex-col rounded-2xl border border-line bg-card/80 ${
                  featured ? "md:grid md:grid-cols-[16rem_1fr]" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br ${project.accent} to-transparent p-5 ${
                    featured ? "min-h-36 md:min-h-full md:rounded-l-2xl" : "h-28 rounded-t-2xl"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-xs uppercase tracking-[0.16em] text-cream/70">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    {project.logo && (
                      <img src={project.logo} alt="" className="h-12 w-12 object-contain drop-shadow" />
                    )}
                  </div>
                  <p className={`font-serif text-cream ${featured ? "mt-8 text-3xl" : "mt-6 text-xl"}`}>
                    {project.metric}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl tracking-tight text-cream">{project.name}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mist">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-cream/5 px-3 py-1 text-xs text-mist">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-medium text-mint"
                    whileHover={reduce ? undefined : { x: 4 }}
                  >
                    {project.linkLabel} →
                  </motion.a>
                </div>
              </motion.article>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
