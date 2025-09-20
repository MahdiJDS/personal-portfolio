import { FaTelegram , FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* بخش معرفی مختصر */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Mahdi Jahed</h3>
          <p className="text-sm max-w-xs">
            Passionate Front-End Developer creating modern, responsive websites with React and Tailwind CSS.
          </p>
        </div>

        <div className="flex space-x-6 text-2xl">
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
            className="hover:text-gray-900 dark:hover:text-gray-100 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:mahdijahed56@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 dark:hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
        
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Mahdi Jahed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
