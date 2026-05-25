import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      delay: index * 0.15,
    },
  }),
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  liveLink,
  isFreelance,
}) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        scale={1.02}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full project-card group"
      >
        {/* Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-xl">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

          {/* Freelance badge */}
          {isFreelance && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-3 left-3 freelance-badge z-10"
            >
              Freelance
            </motion.div>
          )}

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex gap-2 card-img_hover">
            {liveLink && (
              <motion.div
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={() => window.open(liveLink, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-emerald-500/90 hover:bg-emerald-400 shadow-lg transition-colors"
                title="Live site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            )}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 360, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:shadow-purple-500/50"
              title="Source code"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[22px] leading-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] leading-[22px]">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={`${name}-${tag.name}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + tagIndex * 0.08 }}
              whileHover={{ scale: 1.1, y: -1 }}
              className={`text-[12px] font-medium ${tag.color} px-2 py-0.5 rounded-full bg-white/5 cursor-default`}
            >
              #{tag.name}
            </motion.span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Projects spanning agentic AI systems, computer vision, full-stack
          applications, and freelance client work — each built for real-world impact.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
