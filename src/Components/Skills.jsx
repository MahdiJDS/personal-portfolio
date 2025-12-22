import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaCheckCircle,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiRedux,
  SiFramer,
  SiNextdotjs,
  SiReactquery,
  SiReacthookform,
} from "react-icons/si";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const technicalSkills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" />, level: 90 },
  { name: "JavaScript (ES6+)", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 85 },
  { name: "React.js", icon: <FaReact size={40} className="text-blue-400" />, level: 85 },
  { name: "React Router", icon: <FaReact size={40} className="text-red-500" />, level: 85 },
  { name: "Redux Toolkit", icon: <SiRedux size={40} className="text-purple-500" />, level: 85 },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" />, level: 85 },
  { name: "React Query", icon: <SiReactquery size={40} className="text-blue-400" />, level: 70 },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-500" />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-600" />, level: 85 },
  { name: "Framer Motion", icon: <SiFramer size={40} className="text-purple-600" />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" />, level: 85 },
  { name: "React Hook Form", icon: <SiReacthookform size={40} className="text-blue-400" />, level: 85 },
  { name: "Yup Validation", icon: <FaCheckCircle size={40} className="text-green-600" />, level: 80 },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} className="text-red-500" />, level: 85 },
  { name: "REST APIs / Fetch / Axios", icon: <FaNetworkWired size={40} className="text-gray-600" />, level: 80 },
];

const softSkills = [
  { label: "Perseverance & Motivation", desc: "Continuing the journey even in challenging situations" },
  { label: "Committed & Responsible", desc: "Dedicated to work and professional duties" },
  { label: "Problem Solving", desc: "Ability to analyze and effectively solve project issues" },
  { label: "Team Collaboration", desc: "Working effectively within a team using tools like Git and GitHub" },
  { label: "Self-Learning & Initiative", desc: "Strong self-learning ability and continuous learning of new technologies" },
  { label: "Adaptability", desc: "Ability to adjust to different project needs and environments" },
  { label: "Time Management", desc: "High focus and proper task prioritization" },
  { label: "Communication", desc: "Clear explanation of technical concepts and effective communication" },
  { label: "Creativity & Attention to Detail", desc: "Focusing on details and designing beautiful user interfaces" },
  { label: "Growth Mindset", desc: "Open to feedback and committed to personal improvement" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-20 pt-0 pb-8 px-6 md:px-20
                 bg-gradient-to-br from-white via-gray-100 to-white
                 dark:from-[#0a192f] dark:to-[#0a192f]"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white border-b-4 border-pink-600 inline-block mb-8">
          Skills
        </h2>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">🚀 Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-800 dark:text-gray-300">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center cursor-pointer">
              <div id={`skill-${index}`} className="group flex flex-col items-center justify-center">
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </div>
              <Tooltip
                anchorSelect={`#skill-${index}`}
                content={`${skill.name}: ${skill.level}%`}
                place="top"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  fontSize: "0.85rem",
                }}
              />
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-12 mb-4">🧠 Soft Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-sm">
          {softSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#112240] p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              ✅ <strong>{skill.label}:</strong> {skill.desc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
