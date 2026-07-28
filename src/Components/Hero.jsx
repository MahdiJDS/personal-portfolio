import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const typeRef = useRef(null);

  const words = ["Mahdi", "Developer", "Front-End"];

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const typeWord = () => {
      const currentWord = words[wordIndex.current];

      if (!typeRef.current) return;

      if (charIndex.current < currentWord.length) {
        typeRef.current.textContent += currentWord.charAt(
          charIndex.current
        );

        charIndex.current++;

        timeoutId.current = window.setTimeout(typeWord, 100);
      } else {
        timeoutId.current = window.setTimeout(deleteWord, 1000);
      }
    };

    const deleteWord = () => {
      const currentWord = words[wordIndex.current];

      if (!typeRef.current) return;

      if (charIndex.current > 0) {
        typeRef.current.textContent = currentWord.substring(
          0,
          charIndex.current - 1
        );

        charIndex.current--;

        timeoutId.current = window.setTimeout(deleteWord, 50);
      } else {
        wordIndex.current =
          (wordIndex.current + 1) % words.length;

        timeoutId.current = window.setTimeout(typeWord, 500);
      }
    };

    typeWord();

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="
        text-center
        p-4
        bg-gradient-to-b
        from-white
        to-gray-100
        dark:from-gray-900
        dark:to-gray-950
      "
    >
      <div
        className="
          flex
          flex-col-reverse
          justify-between
          items-center
          md:flex-row
        "
      >
        {/* Content */}
        <div className="flex w-full flex-col items-center md:w-1/2">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="
              min-h-[100px]
              text-4xl
              md:text-6xl
              font-extrabold
              text-gray-900
              dark:text-white
              leading-tight
            "
          >
            Hi, I'm{" "}
            <span
              ref={typeRef}
              className="
                inline-block
                min-w-[100px]
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                bg-clip-text
                text-transparent
              "
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="

              max-w-2xl
              text-lg
              md:text-xl
              text-black/75
              dark:text-white/80
            "
          >
            Frontend-focused Full-Stack Developer specializing in{" "}
            <strong>React.js</strong>, <strong>Next.js</strong>, and{" "}
            <strong>TypeScript</strong>. Building scalable web applications
            with modern UI architectures, efficient state management, robust
            APIs, and database-driven solutions.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            <a
              href="#projects"
              className="
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                px-6
                py-3
                font-bold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:from-indigo-700
                hover:to-blue-600
              "
            >
              View Projects
            </a>


            <a
              href="#contact"
              className="
                rounded-xl
                bg-gradient-to-r
                from-indigo-700
                to-blue-600
                px-6
                py-3
                font-bold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:to-indigo-700
                hover:from-blue-600
              "
            >
              Contact Us
            </a>

          </motion.div>

        </div>


        {/* Image */}
        <div
          className="
            flex
            w-full
            justify-center
            mt-10
            mb-10
            md:w-1/2
          "
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            src="/img/IMG_Hero-section.avif"
            alt="Mahdi Jahed Front-End Developer"
            width={600}
            height={600}
            loading="eager"
            fetchPriority="high"
            className="
    aspect-square
    w-[400px]
    h-[400px]
    rounded-full
    object-cover
    lg:w-[600px]
    lg:h-[600px]
  "
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
