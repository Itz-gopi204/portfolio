import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #151030 100%)",
        color: "#fff",
        border: "1px solid rgba(145,94,255,0.15)",
        boxShadow: "0 4px 24px rgba(145,94,255,0.08)",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(145,94,255,0.3)" }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: "2px solid rgba(145,94,255,0.3)",
        boxShadow: "0 0 12px rgba(145,94,255,0.2)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      }
    >
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-white text-[22px] font-bold leading-tight">
            {experience.title}
          </h3>
          {experience.isFreelance && (
            <span className="freelance-badge text-[10px]">Freelance</span>
          )}
        </div>
        <p
          className="text-secondary text-[15px] font-semibold mt-1"
          style={{ margin: "4px 0 0" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-3">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[13px] leading-[22px] pl-4 relative"
            style={{ borderLeft: "2px solid rgba(145,94,255,0.3)" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
