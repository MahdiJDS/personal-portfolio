import { FaTelegram, FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://t.me/Web_dev_JDS",
    label: "Visit Mahdi Jahed on Telegram",
    icon: FaTelegram,
  },
  {
    href: "https://github.com/MahdiJDS",
    label: "Visit Mahdi Jahed on Github",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/mahdi-jahed-jds",
    label: "Visit Mahdi Jahed on LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahdijahed56@gmail.com",
    label: "Email Mahdi Jahed",
    icon: FaEnvelope,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-10 text-slate-600 dark:border-white/10 dark:bg-[#0A0F1C] dark:text-[#AEB6C4]">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="max-w-xs text-center md:text-left">
          <p className="mb-2 text-xl font-bold text-slate-900 dark:text-[#E7ECF5]">
            Mahdi Jahed
          </p>
          <p className="text-sm leading-relaxed">
            Frontend-focused Full-Stack Developer crafting modern web applications
            with React, Next.js, TypeScript, and scalable technologies.
          </p>
        </div>

        {/* Social links */}
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-600 transition-colors duration-300 hover:border-[#7C5CFF]/60 hover:bg-[#7C5CFF]/10 hover:text-[#6D45FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/15 dark:text-[#E7ECF5] dark:hover:text-[#8B7CFA]"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex flex-col items-center gap-1 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mahdi Jahed. All rights reserved.</p>
        <span aria-hidden="true" className="font-mono text-xs text-slate-400 dark:text-[#8892A0]">
        </span>
      </div>
    </footer>
  );
};

export default Footer;