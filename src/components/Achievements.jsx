import { motion } from "framer-motion";

import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: index * 0.15,
    },
  }),
};

const emojiVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.3,
    rotate: [0, -15, 15, -15, 0],
    transition: { duration: 0.5 },
  },
};

const AchievementCard = ({ index, title, emoji, organization, description }) => (
  <motion.div
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.02, x: 10 }}
    className='bg-black-100 p-6 rounded-2xl w-full cursor-pointer hover:shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300'
  >
    <div className='flex items-start gap-4'>
      <motion.span
        variants={emojiVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className='text-4xl'
      >
        {emoji}
      </motion.span>
      <div className='flex-1'>
        <h3 className='text-white font-bold text-[20px]'>{title}</h3>
        <p className='text-secondary text-[14px] mt-1'>{organization}</p>
        <p className='text-white-100 text-[15px] mt-3'>{description}</p>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Recognition & Impact</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Highlights from hackathons, internships, and projects where I've delivered real-world impact.
      </motion.p>

      <div className='mt-10 flex flex-col gap-6'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
