import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiBootstrap,SiTypescript  } from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const technicalSkills = [
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-600" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" />, level: 85 },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" />, level: 85 },
  { name: "Tailwind", icon: <SiTailwindcss size={40} className="text-cyan-500" />, level: 90 },
  { name: "Bootstrap", icon: <SiBootstrap size={40} className="text-purple-600" />, level: 85 },
  { name: "TypeScript", icon: <SiTypescript size={40} className="text-gray-800 dark:text-white" />, level: 80 },
  { name: "Git", icon: <FaGitAlt size={40} className="text-red-500" />, level: 85 },
];

const softSkills = [
  { label: "Perseverance and motivation", desc: "ادامه مسیر حتی در شرایط سخت و پرچالش" },
  { label: "Committed and responsible", desc: "متعهد به کار و حرفه" },
  { label: "Problem Solving", desc: "توانایی تحلیل و حل مؤثر مشکلات پروژه‌ها" },
  { label: "Team Collaboration", desc: "همکاری مؤثر در تیم با ابزارهایی مثل Git و GitHub" },
  { label: "Self-Learning & Initiative", desc: "قدرت خودآموزی و یادگیری مستمر تکنولوژی‌های جدید" },
  { label: "Adaptability", desc: "توانایی سازگاری با شرایط و نیازهای مختلف پروژه" },
  { label: "Time Management", desc: "تمرکز بالا و اولویت‌بندی درست وظایف" },
  { label: "Communication", desc: "مهارت در بیان مفاهیم فنی و ارتباط مؤثر" },
  { label: "Creativity & Attention to Detail", desc: "توجه به جزئیات و طراحی رابط کاربری زیبا" },
  { label: "Growth Mindset", desc: "پذیرای بازخورد و پیگیر رشد و پیشرفت فردی" },
];

const Skills = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-[#0a192f] dark:to-[#0a192f] py-16 px-6 md:px-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white border-b-4 border-pink-600 inline-block mb-12">
          Skills
        </h2>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">🚀 Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-gray-800 dark:text-gray-300">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="flex items-center justify-center cursor-pointer ">
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
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-16 mb-4">🧠 Soft Skills</h3>
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
