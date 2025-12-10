import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";

const navItems = ["Home", "About", "Projects","Skills", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.getElementById('p1').classList.replace('-translate-y-5', '-translate-y-16')
      document.getElementById('p2').classList.replace('-translate-y-16', '-translate-y-5')
    } else {
      setShouldRender(false);
      document.getElementById('p1').classList.replace('-translate-y-16', '-translate-y-5')
      document.getElementById('p2').classList.replace('-translate-y-5', '-translate-y-16')
    }
  }, [isOpen]);

  const onExitComplete = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-screen fixed top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MahdiDev
        </motion.h1>

        {/* Desktop Menu + ThemeToggle */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1, color: "#3B82F6" }}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item}
            </motion.a>
          ))}

          <button
            onClick={toggleDarkMode}
            className="px-3 py-1.5 rounded-lg text-xl font-medium bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden pr-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span id="p1" className="text-gray-800 dark:text-gray-100 absolute -translate-y-5 -translate-x-5 text-xl transition duration-300 ease-in-out">☰</span>
            <span id="p2" className="text-gray-800 absolute -translate-y-16 dark:text-gray-100 -translate-x-5 text-xl transition duration-300 ease-in-out">X</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence onExitComplete={onExitComplete}>
        {shouldRender && (
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden px-6 pb-4 flex flex-col space-y-8 h-screen items-center pt-24"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                className="text-gray-700 text-xl dark:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}

            <button
              onClick={() => {
                toggleDarkMode();
                setIsOpen(false);
              }}
              className="px-6 py-3 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:scale-105 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
