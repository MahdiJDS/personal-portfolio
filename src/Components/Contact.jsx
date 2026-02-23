import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
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
    value: "IRAN  -Tabriz",
  },
];

export default function Contact() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    toast.loading("Sending...");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.dismiss();
      toast.success("Message sent");
      reset();
    } catch {
      toast.dismiss();
      toast.error("Failed to send");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gray-50 text-gray-900 dark:bg-[#0a0d14] dark:text-white transition-colors"
    >
      <Toaster position="top-center" />

      <div className="mx-auto max-w-7xl px-6 pt-0 pb-10 md:pt-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-xl"
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
            No pressure. If you have an idea, a challenge, or a role — let’s talk.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">
          {/* CONTACT CHANNELS */}
          <div className="lg:col-span-4 space-y-6">
            {CONTACTS.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="
                group flex items-center gap-5 rounded-2xl
                border border-gray-200 bg-white
                dark:border-white/10 dark:bg-white/[0.03]
                p-5 transition hover:border-blue-500/40
                "
              >
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
              </motion.a>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
    lg:col-span-8 space-y-8 rounded-3xl
    border border-gray-200 bg-white
    dark:border-white/10 dark:bg-white/[0.03]
    p-12 transition-colors
  "
          >

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* NAME */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  className={`
        w-full rounded-xl
        bg-gray-50 text-gray-900
        dark:bg-[#0a0d14] dark:text-white
        px-5 py-4 text-sm outline-none
        ring-1 transition
        focus:ring-blue-500
        ${errors.name ? "ring-red-500" : "ring-gray-200 dark:ring-white/10"}
      `}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Your email"
                    className="
                    w-full rounded-xl
                    bg-gray-50 text-gray-900
                    dark:bg-[#0a0d14] dark:text-white
                    px-5 py-4 text-sm outline-none
                    ring-1 ring-gray-200 dark:ring-white/10
                    focus:ring-blue-500 transition
                    "
                  />
                )}
              />
            </div>

            <Controller
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={6}
                  placeholder="Tell me briefly what you’re working on"
                  className="
                  w-full resize-none rounded-xl
                  bg-gray-50 text-gray-900
                  dark:bg-[#0a0d14] dark:text-white
                  px-5 py-4 text-sm outline-none
                  ring-1 ring-gray-200 dark:ring-white/10
                  focus:ring-blue-500 transition
                  "
                />
              )}
            />

            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                I usually reply within 24 hours.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
        rounded-xl bg-blue-600 px-4 py-2
        text-sm font-semibold text-white
        transition hover:bg-blue-700
        disabled:opacity-60
        md:px-8 md:py-4
      "
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

            </div>

          </motion.form>
        </div>
      </div >
    </section >
  );
}
