import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    message: yup.string().min(10, 'It should be 10 characters.').required('Message is required'),
});



const Contact = () => {
    const [dataAll, setDataAll] = useState([])

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",

    });
    // useEffect(() => {
    //    localStorage.removeItem('DataC')
    // }, []);

    useEffect(() => {
        const stored = localStorage.getItem("DataC");
        if (stored) {
            setDataAll(JSON.parse(stored));
            console.log(dataAll)
        }
    }, []);

    useEffect(() => {
        if (dataAll.length > 0) {
            localStorage.setItem("DataC", JSON.stringify(dataAll));
            console.log(dataAll)
        }
    }, [dataAll]);




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
            toast.success("Message sent successfully!");
            reset();
        } catch (err) {
            toast.dismiss();
            toast.error("Failed to send message.");
            console.error(err);
        }
    };



    return (
        <section
            id="contact"
            className="w-screen flex justify-center items-center flex-col mx-auto px-8 py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
        >
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl font-extrabold mb-12 text-center text-blue-700 dark:text-blue-400 tracking-wide"
            >
                Get In Touch
            </motion.h2>

            <Toaster />

            <form
                onSubmit={handleSubmit(onSubmit)} noValidate className="w-[60%] ">
                <div className="mb-8">
                    <label htmlFor="name" className="block mb-3 font-semibold text-gray-800 dark:text-gray-300">
                        Name
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <motion.input
                                {...field}
                                initial={{ opacity: 0, x: -120 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                className={`w-full p-4 rounded-xl border transition 
              ${errors.name
                                        ? "border-red-500 focus:border-red-600 focus:ring-red-300"
                                        : "border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-300"
                                    } 
              bg-white dark:bg-gray-900 text-gray-900 dark:text-white
              focus:outline-none focus:ring-4`}
                            />
                        )}
                    />
                    {errors.name && <p className="mt-2 text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                <div className="mb-8">
                    <label htmlFor="email" className="block mb-3 font-semibold text-gray-800 dark:text-gray-300">
                        Email
                    </label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <motion.input
                                {...field}
                                initial={{ opacity: 0, x: 120 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "linear" }}
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className={`w-full p-4 rounded-xl border transition
              ${errors.email
                                        ? "border-red-500 focus:border-red-600 focus:ring-red-300"
                                        : "border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-300"
                                    }
              bg-white dark:bg-gray-900 text-gray-900 dark:text-white
              focus:outline-none focus:ring-4`}
                            />
                        )}
                    />
                    {errors.email && <p className="mt-2 text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="mb-10">
                    <label htmlFor="message" className="block mb-3 font-semibold text-gray-800 dark:text-gray-300">
                        Message
                    </label>
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <AnimatePresence>
                                <motion.textarea
                                    {...field}
                                    initial={{ opacity: 0, y: 120 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 120 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "linear" }}
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className={`w-full p-4 rounded-xl border resize-none transition
    ${errors.message
                                            ? "border-red-500 focus:border-red-600 focus:ring-red-300"
                                            : "border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-blue-300"
                                        }
    bg-white dark:bg-gray-900 text-gray-900 dark:text-white
    focus:outline-none focus:ring-4`}
                                />


                            </AnimatePresence>
                        )}
                    />
                    {errors.message && <p className="mt-2 text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                <motion.button
                    type="submit"
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold shadow-lg hover:from-indigo-700 hover:to-blue-600 transition"
                >
                    Send Message
                </motion.button>

            </form>
        </section >
    );
};

export default Contact;
