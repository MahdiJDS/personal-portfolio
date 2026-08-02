import { motion } from "framer-motion";
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
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mahdijahed56@email.com",
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

export default function Contact() {
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

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-50 text-gray-900 transition-colors dark:bg-[#0a0d14] dark:text-white"
    >
      <Toaster position="top-center" />

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-0 md:pt-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-xl"
        >
          <p className="mb-4 text-xs tracking-[0.3em] text-blue-600 dark:text-blue-400">
            CONTACT
          </p>

          <h2 className="text-4xl font-extrabold leading-tight">
            Let’s build something
            <span className="block text-blue-600 dark:text-blue-400">
              that actually matters
            </span>
          </h2>

          <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
            No pressure. If you have an idea, a challenge, or a role — let’s
            talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="space-y-6 lg:col-span-4">
            {CONTACTS.map((item, i) => {
              const content = (
                <>
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center rounded-xl
                      bg-blue-50 text-blue-600
                      dark:bg-white/10 dark:text-blue-400
                    "
                  >
                    <item.icon size={18} />
                  </div>

                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>

                    <p className="truncate text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              const className = `
                group flex items-center gap-5 rounded-2xl
                border border-gray-200 bg-white
                p-5 transition
                hover:border-blue-500/40 hover:-translate-y-1
                dark:border-white/10 dark:bg-white/[0.03]
              `;

              const animationProps = {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.08 },
              };

              return item.href ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={className}
                  {...animationProps}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={item.label}
                  className={className}
                  {...animationProps}
                >
                  {content}
                </motion.div>
              );
            })}
          </div>

          {/* Right */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              space-y-8 rounded-3xl
              border border-gray-200 bg-white
              p-12 transition-colors
              dark:border-white/10 dark:bg-white/[0.03]
              lg:col-span-8
            "
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={`
                    w-full rounded-xl
                    bg-gray-50 px-5 py-4 text-sm
                    text-gray-900 outline-none
                    ring-1 transition
                    focus:ring-blue-500
                    dark:bg-[#0a0d14] dark:text-white
                    ${errors.name
                      ? "ring-red-500"
                      : "ring-gray-200 dark:ring-white/10"
                    }
                  `}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Your email"
                  aria-invalid={!!errors.email}
                  className={`
                    w-full rounded-xl
                    bg-gray-50 px-5 py-4 text-sm
                    text-gray-900 outline-none
                    ring-1 transition
                    focus:ring-blue-500
                    dark:bg-[#0a0d14] dark:text-white
                    ${errors.email
                      ? "ring-red-500"
                      : "ring-gray-200 dark:ring-white/10"
                    }
                  `}
                />

                {errors.email && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register("message")}
                rows={6}
                placeholder="Tell me briefly what you're working on"
                aria-invalid={!!errors.message}
                className={`
                  w-full resize-none rounded-xl
                  bg-gray-50 px-5 py-4 text-sm
                  text-gray-900 outline-none
                  ring-1 transition
                  focus:ring-blue-500
                  dark:bg-[#0a0d14] dark:text-white
                  ${errors.message
                    ? "ring-red-500"
                    : "ring-gray-200 dark:ring-white/10"
                  }
                `}
              />

              {errors.message && (
                <p className="mt-2 text-xs text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                I usually reply within 24 hours.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  rounded-xl bg-blue-600
                  px-6 py-3
                  text-sm font-semibold text-white
                  transition
                  hover:bg-blue-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
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