import { motion } from "framer-motion";
import { FaTelegram, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const stack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"],
  Backend: ["Node.js", "Express.js", "Prisma", "PostgreSQL"],
};

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
            alt="Mahdi Jahed, Frontend-focused Full-Stack Developer"
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
            id="about-heading"
            className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-[#E7ECF5]"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#8B7CFA] via-[#7C5CFF] to-[#5EE7C9] bg-clip-text text-transparent">
              Me
            </span>
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

          <p className="mb-10 leading-relaxed">
            I focus on writing clean, maintainable code, designing reusable
            components, building efficient APIs, and creating seamless user
            experiences. My goal is to continue growing as a software engineer
            by developing scalable products that combine great design with
            reliable technology.
          </p>
         
          <div className="mb-10 flex justify-center items-center w-full flex-col gap-5">
            {Object.entries(stack).map(([group, items]) => (
              <div key={group} className="flex flex-col items-center gap-2.5 sm:items-start sm:text-left">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 dark:text-[#8892A0]">
                  {group}
                </span>
                <ul className="flex flex-wrap justify-center gap-2 sm:justify-start">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-[#C7CEDA]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://t.me/Web_dev_JDS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-700 transition-colors duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/10 hover:text-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:text-[#8B7CFA]"
            >
              <FaTelegram aria-hidden="true" />
            </a>

            <a
              href="https://github.com/MahdiJDS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-700 transition-colors duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/10 hover:text-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:text-[#8B7CFA]"
            >
              <FaGithub aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/mahdi-jahed-jds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-700 transition-colors duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/10 hover:text-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:text-[#8B7CFA]"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mahdijahed56@gmail.com"
              target="_blank"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-2xl text-slate-700 transition-colors duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/10 hover:text-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:text-[#8B7CFA]"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

