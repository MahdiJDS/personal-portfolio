import { motion } from "framer-motion";
import { FaTelegram, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-white
        to-gray-100
        px-6
        py-20
        dark:from-gray-900
        dark:to-gray-950
        md:px-8
        md:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-14
          lg:flex-row
          lg:gap-20
        "
      >
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="
            relative
            flex
            shrink-0
            items-center
            justify-center
          "
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              rounded-full
              bg-blue-500/20
              blur-3xl
              dark:bg-blue-400/10
            "
          />

          <img
            src="/img/IMG_About-section.avif"
            alt="Mahdi Jahed - Front-End Developer"
            width={400}
            height={400}
            loading="lazy"
            decoding="async"
            className="
              relative
              z-10
              aspect-square
              w-[300px]
              rounded-full
              bg-white
              object-fill
              shadow-2xl
              dark:border-gray-900
              dark:bg-gray-900
              lg:w-[400px]
            "
          />
        </motion.div>

        {/* About content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            flex
            max-w-2xl
            flex-col
            items-center
            text-center
            text-gray-900
            dark:text-gray-100
          "
        >
          <h2
            className="
              mb-6
              text-4xl
              font-extrabold
              tracking-wide
              text-blue-700
              dark:text-blue-400
              md:text-5xl
            "
          >
            About Me
          </h2>

          <p className="mb-6 leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Mahdi Jahed
            </span>
            , a{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Frontend-focused Full-Stack Developer
            </span>{" "}
            passionate about building modern, scalable, and interactive web
            applications using{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Next.js
            </span>
            , and{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              TypeScript
            </span>
            .
          </p>

          <p className="mb-6 leading-relaxed">
            My core stack includes{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              React, Next.js, Tailwind CSS, Zustand, TanStack Query
            </span>{" "}
            for building modern frontend architectures, along with{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Node.js, Express.js, Prisma, and PostgreSQL
            </span>{" "}
            for developing robust backend systems and data-driven applications.
          </p>

          <p className="mb-10 leading-relaxed">
            I focus on writing clean, maintainable code, designing reusable
            components, building efficient APIs, and creating seamless user
            experiences. My goal is to continue growing as a software engineer
            by developing scalable products that combine great design with
            reliable technology.
          </p>

          {/* Social links */}
          <div className="flex gap-8">
            <a
              href="https://t.me/Web_dev_JDS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="
                text-3xl
                text-blue-600
                transition-colors
                hover:text-blue-800
                dark:text-gray-100
                dark:hover:text-gray-300
              "
            >
              <FaTelegram aria-hidden="true" />
            </a>

            <a
              href="https://github.com/MahdiJDS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                text-3xl
                text-gray-900
                transition-colors
                hover:text-gray-700
                dark:text-gray-100
                dark:hover:text-gray-300
              "
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

