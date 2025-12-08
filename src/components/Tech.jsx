import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const floatAnimation = {
  y: [-5, 5, -5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className='mt-10 flex flex-row flex-wrap justify-center gap-8'
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={itemVariants}
            className='w-28 h-28 flex flex-col items-center justify-center'
          >
            <motion.div
              animate={floatAnimation}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.9 }}
              className='w-16 h-16 rounded-full bg-tertiary flex items-center justify-center p-3 cursor-pointer shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300'
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-full h-full object-contain'
              />
            </motion.div>
            <motion.p
              className='text-white text-[12px] mt-3 text-center font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {technology.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
