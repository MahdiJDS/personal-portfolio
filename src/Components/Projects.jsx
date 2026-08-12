import { motion, useReducedMotion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "🏡 RealNest",
    description:
      "A production-ready full-stack real estate platform built with Next.js, Express.js, TypeScript, Prisma, PostgreSQL, Supabase, React Query, Zustand, and shadcn/ui.",
    imageUrl: "/img/projects/Screenshot-RealNest.avif",
    github: "https://github.com/MahdiJDS/real-estate-platform",
    live: "https://real-estate-platforms.vercel.app/",
  },
  {
    title: "🌐 Translator App",
    description:
      "A sleek, modern, and lightweight text translation app built with vanilla JavaScript, using the Google Translate API via RapidAPI.",
    imageUrl: "/img/projects/Screenshot Translate.avif",
    github: "https://github.com/MahdiJDS/translator-App",
    live: null,
  },
  {
    title: "plant-landing-page",
    description: "plant-landing-page with tailwind",
    imageUrl: "/img/projects/Screenshot-Plant.avif",
    github: "https://github.com/MahdiJDS/plant-landing-page",
    live: "https://mahdijds.github.io/plant-landing-page/",
  },
  {
    title: "taskforge App",
    description: "A task manager app with React hooks and localStorage support.",
    imageUrl: "/img/projects/Screenshot-ToList2.avif",
    github: "https://github.com/MahdiJDS/taskforge",
    live: null,
  },
  {
    title: "restaurant-app",
    description: "A modern and interactive restaurant web application built with React.js and Tailwind CSS.",
    imageUrl: "/img/projects/Screenshot Restoran.avif",
    github: "https://github.com/MahdiJDS/restaurant-app",
    live: null,
  },
  {
    title: "Memory-game",
    description:
      "A modern, responsive, and fun Memory Matching Game built with React and styled using Tailwind CSS. Flip the cards, match the pairs, and test your brain! 🧩",
    imageUrl: "/img/projects/Screenshot memory-game.avif",
    github: "https://github.com/MahdiJDS/Memory-game-React",
    live: null,
  },
  {
    title: "online-exam-ts",
    description: "A simple yet powerful online examination platform built with TypeScript, TailwindCSS, and Vanilla JS.",
    imageUrl: "/img/projects/Screenshot Exam.avif",
    github: "https://github.com/MahdiJDS/online-exam-ts",
    live: null,
  },
  {
    title: "MotionDrive",
    description: "An interactive React project where cars come alive. Click a car — watch it drive into your screen. Built with React, Tailwind, and GSAP",
    imageUrl: "/img/projects/Screenshot-car_gsap.avif",
    github: "https://github.com/MahdiJDS/MotionDrive",
    live: null,
  },
  {
    title: "Next-Shop",
    description:
      "Next-Shop is not just an online shop—it's a fully interactive, animated build with Next.js, React, TypeScript, and Tailwind CSS. Every click, scroll, and interaction is designed to delight the user.",
    imageUrl: "/img/projects/Screenshot-Nextshop.avif",
    github: "https://github.com/MahdiJDS/Next-Shop",
    live: null,
  },
];

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative flex w-full flex-col items-center overflow-hidden bg-gradient-to-b from-white to-slate-50 px-6 py-20 dark:from-[#0A0F1C] dark:to-[#0B111F] md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(circle,#0F172A0D_1px,transparent_1px)] [background-size:26px_26px] dark:opacity-[0.25] dark:[background-image:radial-gradient(circle,#FFFFFF14_1px,transparent_1px)]"
      />

      <motion.div
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mb-12 flex flex-col items-center gap-3 text-center"
      >

        <h2
          id="projects-heading"
          className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[#E7ECF5] md:text-5xl"
        >
          Things I&apos;ve{" "}
          <span className="bg-gradient-to-r from-[#8B7CFA] via-[#7C5CFF] to-[#5EE7C9] bg-clip-text text-transparent">
            Built
          </span>
        </h2>
      </motion.div>

      <Swiper
        style={{ "--swiper-theme-color": "#7C5CFF", "--swiper-navigation-size": "22px" }}
        autoplay={
          prefersReducedMotion ? false : { delay: 3500, disableOnInteraction: false }
        }
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={2}
        loop
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        breakpoints={{
          0: { slidesPerView: 1 },
          992: { slidesPerView: 3 },
        }}
        className="relative w-full pb-10"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.github}
            className="flex w-full items-center justify-center pb-10"
          >
            <motion.div
              initial={prefersReducedMotion ? undefined : { scale: 0.94, opacity: 0 }}
              whileInView={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1f1f3a] to-[#141421] shadow-2xl"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={`${project.title.replace(/\p{Emoji}/gu, "").trim()} — project screenshot`}
                  width={640}
                  height={256}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full object-fill sm:h-60"
                />
              </div>

              <div className="flex flex-grow flex-col p-5">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-300 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="rounded-lg bg-[#7C5CFF] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF]"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live demo of ${project.title}`}
                      className="rounded-lg border border-[#5EE7C9]/40 px-4 py-2 text-sm font-medium text-[#5EE7C9] transition hover:bg-[#5EE7C9]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EE7C9]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;