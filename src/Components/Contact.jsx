import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long")
    .required("Message is required"),
});

const CONTACTS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mahdijahed56@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahdijahed56@gmail.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/MahdiJDS",
    href: "https://github.com/MahdiJDS",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+98 923 170 2132",
    href: "tel:+989231702132",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Iran - Tabriz",
  },
];

const inputClasses = (hasError) => `
  w-full rounded-xl
  bg-slate-50 px-5 py-4 text-sm
  text-slate-900 outline-none
  ring-1 transition
  focus:ring-2 focus:ring-[#7C5CFF]
  dark:bg-[#0A0F1C] dark:text-[#E7ECF5]
  ${hasError ? "ring-red-500" : "ring-slate-200 dark:ring-white/10"}
`;

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const loading = toast.loading("Sending...");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.dismiss(loading);
      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.dismiss(loading);
      toast.error("Failed to send message.");
    }
  };

  const fadeUp = (extra = {}) =>
    prefersReducedMotion
      ? {}
      : {
          viewport: { once: true, amount: 0.2 },
          ...extra,
        };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900 transition-colors dark:from-[#0A0F1C] dark:to-[#0B111F] dark:text-[#E7ECF5]"
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#141421",
            color: "#E7ECF5",
            border: "1px solid rgba(255,255,255,0.1)",
          },
          success: { iconTheme: { primary: "#5EE7C9", secondary: "#141421" } },
          error: { iconTheme: { primary: "#FF6B6B", secondary: "#141421" } },
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(circle,#0F172A0D_1px,transparent_1px)] [background-size:26px_26px] dark:opacity-[0.25] dark:[background-image:radial-gradient(circle,#FFFFFF14_1px,transparent_1px)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-20 md:py-24">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          {...fadeUp({ transition: { duration: 0.6 } })}
          className="mb-10 max-w-xl"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-[#B9C2D0]">
            <span className="text-[#0D9488] dark:text-[#5EE7C9]">{"//"}</span>
            contact
          </span>

          <h2 id="contact-heading" className="text-4xl font-extrabold leading-tight tracking-tight">
            Let&rsquo;s build something
            <span className="block bg-gradient-to-r from-[#8B7CFA] via-[#7C5CFF] to-[#5EE7C9] bg-clip-text text-transparent">
              that actually matters
            </span>
          </h2>

          <p className="mt-6 text-base text-slate-600 dark:text-[#AEB6C4]">
            No pressure. If you have an idea, a challenge, or a role — let&rsquo;s
            talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <ul className="space-y-6 lg:col-span-4">
            {CONTACTS.map((item, i) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C5CFF]/10 text-[#6D45FF] dark:bg-white/10 dark:text-[#8B7CFA]">
                    <item.icon aria-hidden="true" size={18} />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-500 dark:text-[#8892A0]">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  </div>
                </>
              );

              const className =
                "group flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#7C5CFF]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] dark:border-white/10 dark:bg-white/[0.03]";

              const animationProps = prefersReducedMotion
                ? {}
                : {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: true },
                    transition: { delay: i * 0.08 },
                  };

              return (
                <li key={item.label}>
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={`${item.label}: ${item.value}`}
                      className={className}
                      {...animationProps}
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <motion.div className={className} {...animationProps}>
                      {content}
                    </motion.div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 transition-colors dark:border-white/10 dark:bg-white/[0.03] md:p-12 lg:col-span-8"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  {...register("name")}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={inputClasses(!!errors.name)}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="mt-2 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  {...register("email")}
                  type="email"
                  placeholder="Your email"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={inputClasses(!!errors.email)}
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="mt-2 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="contact-message"
                {...register("message")}
                rows={6}
                placeholder="Tell me briefly what you're working on"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className={`resize-none ${inputClasses(!!errors.message)}`}
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="mt-2 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-[#8892A0]">
                I usually reply within 24 hours.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#5B8CFF] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(124,92,255,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C5CFF] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}