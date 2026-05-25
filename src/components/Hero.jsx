import { motion } from "framer-motion";

import { styles } from "../styles";
import { heroInfo, socialLinks } from "../constants";
import { ComputersCanvas } from "./canvas";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const profileVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, duration: 1 },
  },
};

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, delay: 0.8 + index * 0.1 },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Floating background orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="orb orb-purple w-[520px] h-[520px] absolute -top-32 -right-32 opacity-50"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.05, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="orb orb-cyan w-[380px] h-[380px] absolute bottom-10 left-0 opacity-35"
        />
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="orb orb-purple w-[200px] h-[200px] absolute top-1/2 left-1/3 opacity-20"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            variants={profileVariants}
            className="relative"
          >
            {/* Glowing ring behind profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #915EFF, #00cea8, #915EFF)",
                filter: "blur(4px)",
                opacity: 0.7,
              }}
            />
            <img
              src={heroInfo.image}
              alt="profile"
              className="relative w-32 h-32 rounded-full object-cover border-2 border-[#915EFF]/50 shadow-2xl shadow-purple-500/40 z-10"
            />
          </motion.div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-[2px] sm:h-80 h-40 mt-4"
            style={{
              background: "linear-gradient(180deg, #804dee 0%, rgba(60,51,80,0) 100%)",
            }}
          />
        </div>

        <div className="pt-2">
          <motion.h1
            variants={itemVariants}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-[#915EFF]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                textShadow: "0 0 40px rgba(145,94,255,0.5)",
              }}
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

          {/* Animated role pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-4"
          >
            {["Agentic AI", "Computer Vision", "FastAPI", "PyTorch"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, type: "spring", stiffness: 200 }}
                className="text-[12px] px-3 py-1 rounded-full font-medium text-white/80"
                style={{
                  background: "rgba(145,94,255,0.15)",
                  border: "1px solid rgba(145,94,255,0.3)",
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Social links */}
          <div className="flex flex-row gap-4 mt-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                custom={index}
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.2, rotate: 8, y: -4 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.open(link.url, "_blank")}
                className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer transition-all duration-200"
                style={{
                  background: "rgba(21,16,48,0.8)",
                  border: "1px solid rgba(145,94,255,0.3)",
                  boxShadow: "0 0 0 0 rgba(145,94,255,0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(145,94,255,0.4)";
                  e.currentTarget.style.borderColor = "rgba(145,94,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 0 0 rgba(145,94,255,0)";
                  e.currentTarget.style.borderColor = "rgba(145,94,255,0.3)";
                }}
                title={link.name}
              >
                <img src={link.icon} alt={link.name} className="w-5 h-5 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ComputersCanvas />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10"
      >
        <a href="#about">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary/60 flex justify-center items-start p-2"
            style={{ boxShadow: "0 0 12px rgba(145,94,255,0.2)" }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
