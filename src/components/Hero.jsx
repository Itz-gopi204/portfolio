import { motion, useReducedMotion } from "framer-motion";
import { email, hero, highlights, phone, profileImage, resumeUrl, socialLinks } from "../constants";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="mx-auto max-w-page px-5 pb-6 pt-10 sm:px-8 sm:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-mint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {hero.role}
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-4 font-serif text-5xl leading-[1.02] tracking-tight text-cream sm:text-7xl"
          >
            {hero.name}
          </motion.h1>
          <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
            {hero.summary}
          </motion.p>
          <motion.p variants={item} className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist">
            <span>{hero.location}</span>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-cream transition-colors hover:text-mint">
              {phone}
            </a>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href={`mailto:${email}`}
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-night shadow-glow"
            >
              Email me
            </motion.a>
            <motion.a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="rounded-full border border-line bg-card/80 px-5 py-2.5 text-sm font-medium text-cream"
            >
              View resume
            </motion.a>
            {socialLinks
              .filter((link) => link.name !== "Email")
              .map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line px-4 py-2.5 text-sm text-mist transition-colors hover:border-mint/50 hover:text-cream"
                >
                  {link.name}
                </a>
              ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto w-64 sm:w-72 md:justify-self-end"
        >
          <motion.div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-mint/40 via-transparent to-violet-400/30 blur-2xl"
            animate={reduce ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.6rem] border border-cream/10 bg-card shadow-glow"
          >
            <img
              src={profileImage}
              alt="Portrait of Gopi Jagadheesh"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.dl
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55, ease }}
        className="mt-14 grid gap-4 sm:grid-cols-3"
      >
        {highlights.map((stat, index) => (
          <motion.div
            key={stat.label}
            whileHover={reduce ? undefined : { y: -4 }}
            className="rounded-2xl border border-line bg-card/70 p-5 backdrop-blur"
            transition={{ delay: index * 0.05 }}
          >
            <dt className="font-serif text-3xl text-cream">{stat.value}</dt>
            <dd className="mt-1 text-sm text-mist">{stat.label}</dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  );
};

export default Hero;
