import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectCoverflow } from "swiper/modules";

// استایل‌ها
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


const projects = [
  {
    title: "🌐 Translator App",
    description:
      "A sleek, modern, and lightweight text translation app built with vanilla JavaScript, using the Google Translate API via RapidAPI.",
    imageUrl: "/img/Screenshot Translate.png", // باید تو public/img باشه
    github: "https://github.com/MahdiJDS/translator-App",
    live: null,
  },
  {
    title: "plant-landing-page",
    description: "plant-landing-page with tailwind",
    imageUrl: "/img/Screenshot-Plant.png",
    github: "https://github.com/MahdiJDS/plant-landing-page",
    live: "https://mahdijds.github.io/plant-landing-page/",
  },
  {
    title: "To-Do App",
    description: "A task manager app with React hooks and localStorage support.",
    imageUrl: "/img/Screenshot ToList.png",
    github: "https://github.com/MahdiJDS/to-do-list-React",
    live: null,
  },
  {
    title: "restaurant-app",
    description: "A modern and interactive restaurant web application built with React.js and Tailwind CSS.",
    imageUrl: "img/Screenshot Restoran.png",
    github: "https://github.com/MahdiJDS/restaurant-app",
    live: null,
  },
  {
    title: "restaurant-app",
    description: "A modern, responsive, and fun Memory Matching Game built with React and styled using Tailwind CSS.Flip the cards, match the pairs, and test your brain! 🧩",
    imageUrl: "img/Screenshot memory-game.png",
    github: "https://github.com/MahdiJDS/Memory-game-React",
    live: null,
  },
  {
    title: "online-exam-ts",
    description: "A simple yet powerful online examination platform built with TypeScript, TailwindCSS, and Vanilla JS.",
    imageUrl: "img/Screenshot Exam.png",
    github: "https://github.com/MahdiJDS/online-exam-ts",
    live: null,
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-screen h-full flex flex-col items-center mx-auto px-6 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <Swiper
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
         coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation,Autoplay]}
        className="w-full"
      >
       {projects.map((project, index) => (
          <SwiperSlide
            key={index}
            className="w-full pb-5 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-[#1f1f3a] to-[#141421] h-full rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-500 transition text-white"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-green-600 rounded-lg hover:bg-green-500 transition text-white"
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
