import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroInfo, socialLinks } from "../constants";
import { ComputersCanvas } from "./canvas";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const profileVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 1,
    },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.8 + index * 0.1,
    },
  }),
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.img
            variants={profileVariants}
            src={heroInfo.image}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#915EFF] mb-4 shadow-lg shadow-purple-500/50"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 1, delay: 0.5 }}
            className='w-1 sm:h-80 h-40 violet-gradient'
          />
        </div>

        <div>
          <motion.h1
            variants={itemVariants}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{" "}
            <motion.span
              className='text-[#915EFF]'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {heroInfo.name}
            </motion.span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {heroInfo.title}
          </motion.p>
          <div className="flex flex-row gap-5 mt-5">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(link.url, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-tertiary hover:bg-white/10 transition-colors hover:shadow-lg hover:shadow-purple-500/50"
                title={link.name}
              >
                <img src={link.icon} alt={link.name} className="w-1/2 h-1/2 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ComputersCanvas />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <a href='#about'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
