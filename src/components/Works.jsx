import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { textVariant } from "../utils/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      delay: index * 0.2,
    },
  }),
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-tertiary rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent" />

          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-white text-3xl font-bold">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-sm ${tag.color} bg-black-100 px-3 py-1 rounded-full`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>

            <motion.a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 bg-[#915EFF] rounded-lg text-white font-medium"
            >
              <img src={github} alt="github" className="w-5 h-5" />
              View Code
            </motion.a>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-white text-xl font-semibold mb-3">Overview</h3>
            <p className="text-secondary leading-relaxed">{project.description}</p>
          </div>

          {/* Key Features */}
          {project.features && (
            <div className="mt-6">
              <h3 className="text-white text-xl font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-secondary"
                  >
                    <span className="text-[#915EFF] mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact */}
          {project.impact && (
            <div className="mt-6 p-4 bg-black-100 rounded-xl">
              <h3 className="text-white text-xl font-semibold mb-2">Impact</h3>
              <p className="text-[#915EFF] font-medium">{project.impact}</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  features,
  impact,
  onViewDetails,
}) => {
  const project = { name, description, tags, image, source_code_link, features, impact };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.02}
        transitionSpeed={450}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300'
      >
        <div
          className='relative w-full h-[230px] overflow-hidden rounded-2xl cursor-pointer'
          onClick={() => onViewDetails(project)}
        >
          <motion.img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <span className="text-white font-medium flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              View Details
            </span>
          </motion.div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </motion.div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, tagIndex) => (
            <motion.p
              key={`${name}-${tag.name}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + tagIndex * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className={`text-[14px] ${tag.color} cursor-pointer`}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>

        <motion.button
          onClick={() => onViewDetails(project)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 w-full py-2 bg-black-100 rounded-lg text-secondary hover:text-white transition-colors text-sm font-medium"
        >
          View Case Study
        </motion.button>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These projects showcase my expertise in AI/ML, full-stack development,
          and building production-ready systems. Each represents real-world impact
          through innovation and technical excellence.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onViewDetails={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
