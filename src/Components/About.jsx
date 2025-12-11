import { motion } from "framer-motion";
import { FaTelegram , FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-screen px-8 py-24 bg-gradient-to-b from-white to-gray-100 text-center dark:from-gray-900 dark:to-gray-950 flex flex-col md:flex-row justify-center items-center gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-shrink-0"
      >
        <img
          src="/img/smiling-redhaired-boy-illustration.png"
          alt="Mahdi Jahed"
          className="rounded-full w-48 h-48 object-cover shadow-xl border-4 border-blue-500 dark:border-blue-400"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col text-gray-900 dark:text-gray-100"
      >
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-blue-700 dark:text-blue-400">
          About Me
        </h2>

        <p className="mb-6 leading-relaxed max-w-xl">
          I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Mahdi Jahed</span>, a passionate <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Front-End Developer</span> with a strong focus on
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> React</span> and modern web technologies. I specialize in crafting clean, efficient, and beautiful user interfaces that provide
          excellent user experiences.
        </p>

        <p className="mb-6 leading-relaxed max-w-xl">
          My main skills include
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> JavaScript</span> , <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> TypeScript</span> , <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Tailwind CSS</span>, and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Git</span> , and <span className="text-indigo-600 dark:text-indigo-400 font-semibold">React</span>. I am constantly learning and
          adapting to new tools and frameworks to improve my craft.
        </p>

        <p className="mb-8 leading-relaxed max-w-xl">
          My goal is to grow into a full-stack developer, contribute to impactful projects, and work collaboratively in innovative teams. I value clean code, teamwork, and continuous growth.
        </p>

        <div className="flex space-x-6 justify-center">
          <a
            href="https://t.me/Eng_IT_FrontD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-gray-100 hover:text-blue-700 dark:hover:text-gray-300 transition text-3xl"
          >
            <FaTelegram />
          </a>

          <a
            href="https://github.com/MahdiJDS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition text-3xl"
          >
            <FaGithub />
          </a>
          
        </div>
      </motion.div>
    </section>
  );
};

export default About;
