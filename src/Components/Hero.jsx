import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const typeRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const words = ["React.js", "Next.js", "TypeScript", "Modern Web Apps"];

  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    // Respect users who've asked for less motion, and avoid an endless
    // timer loop running in the background for them.
    if (prefersReducedMotion) {
      if (typeRef.current) typeRef.current.textContent = words[0];
      return;
    }

    const typeWord = () => {
      const currentWord = words[wordIndex.current];
      if (!typeRef.current) return;

      if (charIndex.current < currentWord.length) {
        typeRef.current.textContent += currentWord.charAt(charIndex.current);
        charIndex.current++;
        timeoutId.current = setTimeout(typeWord, 90);
      } else {
        timeoutId.current = setTimeout(deleteWord, 1400);
      }
    };

    const deleteWord = () => {
      const currentWord = words[wordIndex.current];
      if (!typeRef.current) return;

      if (charIndex.current > 0) {
        typeRef.current.textContent = currentWord.substring(0, charIndex.current - 1);
        charIndex.current--;
        timeoutId.current = setTimeout(deleteWord, 45);
      } else {
        wordIndex.current = (wordIndex.current + 1) % words.length;
        timeoutId.current = setTimeout(typeWord, 400);
      }
    };

    typeWord();

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 py-24 dark:bg-[#0A0F1C]"
    >

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center lg:flex-row lg:justify-between">
        {/* Content */}
        <div className="w-full md:w-1/2">

          {/* SEO-important H1 */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-6xl dark:text-[#E7ECF5]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#8B7CFA] via-[#7C5CFF] to-[#5EE7C9] bg-clip-text text-transparent">
              Mahdi Jahed
            </span>
            <br />
            <span className="text-slate-600 dark:text-[#C7CEDA]">
              Frontend-focused Full-Stack Developer
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.22)}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-[#AEB6C4]"
          >
            I build modern and scalable web applications using{" "}
            <strong className="text-slate-900 dark:text-[#E7ECF5]">React.js</strong>,{" "}
            <strong className="text-slate-900 dark:text-[#E7ECF5]">Next.js</strong>, and{" "}
            <strong className="text-slate-900 dark:text-[#E7ECF5]">TypeScript</strong>.
            <br />
            Focused on clean UI architecture, efficient state management, robust
            APIs, and full-stack solutions.
          </motion.p>

          {/* Typewriter — styled as a live terminal line */}
          <motion.div
            {...fadeUp(0.34)}
            className="mt-7 flex w-full items-center gap-2
    overflow-x-auto scrollbar-hide rounded-lg border
    border-slate-200 bg-slate-50
    px-4 py-3 font-mono text-lg
    whitespace-nowrap
    dark:border-white/10 dark:bg-white/[0.03]
    md:text-xl"
          >
            <span aria-hidden="true" className="text-[#0D9488] dark:text-[#5EE7C9]">
              ❯
            </span>
            <span className="text-slate-500 dark:text-[#8892A0]">Focused_on:</span>
            <span ref={typeRef} className="text-slate-900 dark:text-[#E7ECF5]" />
            <span
              aria-hidden="true"
              className="ml-0.5 h-5 w-[2px] animate-pulse bg-[#6D45FF] dark:bg-[#7C5CFF]"
            />
            <span className="sr-only">
              React.js, Next.js, TypeScript, Modern Web Apps
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div {...fadeUp(0.46)} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#5B8CFF] px-7 py-3 font-bold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-6px_rgba(124,92,255,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:shadow-[0_8px_30px_-8px_rgba(124,92,255,0.65)] dark:hover:shadow-[0_12px_36px_-6px_rgba(124,92,255,0.75)]"
            >
              View Projects
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3 font-bold text-slate-800 transition duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:bg-[#7C5CFF]/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Hero Image, framed as a code-editor window — the page's signature element */}
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
            width={500}
            height={500}
            loading="eager"
            fetchPriority="high"
            className="
    aspect-square
    w-[400px]
    h-[400px]
    rounded-full
    object-cover
    lg:w-[500px]
    lg:h-[500px]
  "
          />
        </div>

      </div>
      {/* </div> */}
    </section >
  );
};

export default Hero;