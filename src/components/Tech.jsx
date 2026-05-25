import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const CATEGORIES = ["Languages", "AI / ML", "Web & API", "DevOps & Tools"];

const categoryMeta = {
  "Languages":     { color: "#38ef7d", border: "rgba(56,239,125,0.35)",  glow: "rgba(56,239,125,0.15)"  },
  "AI / ML":       { color: "#915EFF", border: "rgba(145,94,255,0.35)",  glow: "rgba(145,94,255,0.15)"  },
  "Web & API":     { color: "#00cea8", border: "rgba(0,206,168,0.35)",   glow: "rgba(0,206,168,0.15)"   },
  "DevOps & Tools":{ color: "#56ccf2", border: "rgba(86,204,242,0.35)",  glow: "rgba(86,204,242,0.15)"  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0, scale: 0.88 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 130, damping: 14 },
  },
};

const TechChip = ({ technology, accentColor, borderColor, glowColor }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{
      scale: 1.08,
      y: -4,
      boxShadow: `0 8px 24px ${glowColor}`,
      borderColor: accentColor,
      transition: { duration: 0.18 },
    }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200"
    style={{
      background: "rgba(21,16,48,0.85)",
      border: `1px solid ${borderColor}`,
    }}
  >
    <img
      src={technology.icon}
      alt={technology.name}
      className="w-7 h-7 object-contain flex-shrink-0"
      onError={(e) => { e.target.style.display = "none"; }}
    />
    <span className="text-white text-[14px] font-medium whitespace-nowrap">
      {technology.name}
    </span>
  </motion.div>
);

const Tech = () => {
  const grouped = CATEGORIES.map((cat) => ({
    label: cat,
    meta: categoryMeta[cat],
    items: technologies.filter((t) => t.category === cat),
  }));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-10">
        {grouped.map(({ label, meta, items }) => (
          <div key={label}>
            {/* Category header */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="text-[12px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full"
                style={{
                  color: meta.color,
                  background: meta.glow,
                  border: `1px solid ${meta.border}`,
                }}
              >
                {label}
              </span>
              <div
                className="flex-1 h-px"
                style={{
                  background: `linear-gradient(90deg, ${meta.border}, transparent)`,
                }}
              />
            </div>

            {/* Tech chips */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {items.map((technology) => (
                <TechChip
                  key={technology.name}
                  technology={technology}
                  accentColor={meta.color}
                  borderColor={meta.border}
                  glowColor={meta.glow}
                />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
