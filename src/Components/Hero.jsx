import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaTelegram, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const typeRef = useRef(null);
  const words = ["Mahdi", "Developer", "Front-End"];
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const typeWord = () => {
      const currentWord = words[wordIndex.current];
      if (charIndex.current < currentWord.length) {
        typeRef.current.textContent += currentWord.charAt(charIndex.current);
        charIndex.current++;
        timeoutId.current = setTimeout(typeWord, 100);
      } else {
        timeoutId.current = setTimeout(deleteWord, 1000);
      }
    };

    const deleteWord = () => {
      const currentWord = words[wordIndex.current];
      if (charIndex.current > 0) {
        typeRef.current.textContent = currentWord.substring(0, charIndex.current - 1);
        charIndex.current--;
        timeoutId.current = setTimeout(deleteWord, 50);
      } else {
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutId.current = setTimeout(typeWord, 500);
      }
    };

    typeWord();

    return () => clearTimeout(timeoutId.current);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen w-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="flex flex-col-reverse w-screen justify-between items-center pl-10 md:flex-row">
        <div className="flex flex-col w-1/2 items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[150px]  text-4xl md:text-6xl md:h-full font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm <span ref={typeRef} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent "></span> 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-black/75 dark:text-white/80 max-w-2xl"
          >
            Front-End Developer specializing in{" "}
            <strong>React.js</strong> , <strong>Next.js</strong>, reusable components, and modern UI/UX-driven development.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold shadow-lg hover:from-indigo-700 hover:to-blue-600 transition rounded-xl hover:-translate-y-1 duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r to-blue-600 from-indigo-700 text-white font-bold shadow-lg hover:to-indigo-700 hover:from-blue-600 transition-all rounded-xl hover:-translate-y-1 duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>



        <div className="flex w-1/2 mt-20 mb-10">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            src="img/smiling-redhaired-boy-illustration.png"
            alt="personal-img"
            className="rounded-full md:h-[38rem] object-cover dark:border-blue-400"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
