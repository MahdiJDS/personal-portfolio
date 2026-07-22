import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaTelegram, FaGithub } from "react-icons/fa";

const About = () => {

  return (
    <section
      id="about"
      className="w-screen px-8 py-28 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 flex flex-col md:flex-row items-center justify-center gap-20 overflow-hidden"
    >
      {/* ======================
          AVATAR – SIGNATURE
      ====================== */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-72 h-72 flex items-center justify-center perspective-1000"
      >
        {/* Energy Pulse */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-500/30 dark:bg-blue-400/20 blur-3xl"
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Morphing Gradient Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600"
          animate={{
            rotate: 360,
            borderRadius: ["50%", "42%", "50%"],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            borderRadius: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Orbiting Particles */}
        {[...Array(7)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 rounded-full dark:bg-white bg-gray-800 shadow-xl"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6 + i * 1.8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: "50%",
              left: "50%",
              transformOrigin: `${85 + i * 6}px 0px`,
            }}
          />
        ))}

        {/* Avatar Image (3D Tilt) */}
        <motion.img
          src="/img/smiling-redhaired-boy-illustration.png"
          alt="Mahdi Jahed"
          loading="lazy"
          // style={{ rotateX, rotateY }}/
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          className="relative z-10 w-72 h-72 rounded-full object-cover bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-900 shadow-2xl"
        />
      </motion.div>


      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-xl text-center items-center flex flex-col text-gray-900 dark:text-gray-100"
      >
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-blue-700 dark:text-blue-400">
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
          </span>
          {" "}passionate about building modern, scalable, and interactive web
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
          </span>
          {" "}for building modern frontend architectures, along with{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Node.js, Express.js, Prisma, and PostgreSQL
          </span>
          {" "}for developing robust backend systems and data-driven applications.
        </p>

        <p className="mb-10 leading-relaxed">
          I focus on writing clean, maintainable code, designing reusable components,
          building efficient APIs, and creating seamless user experiences. My goal is
          to continue growing as a software engineer by developing scalable products
          that combine great design with reliable technology.
        </p>

        {/* Socials */}
        <div className="flex justify-center md:justify-start gap-8">
          <a
            href="https://t.me/Eng_IT_FrontD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-blue-600 dark:text-gray-100 hover:text-blue-800 dark:hover:text-gray-300 transition text-3xl"
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
