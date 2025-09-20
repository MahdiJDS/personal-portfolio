import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaAngleDoubleUp } from "react-icons/fa";

export default function UpButton() {
    const [has, setHas] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setHas(true);
            } else {
                setHas(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AnimatePresence>
            {has && (
                <motion.a
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 60 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed bottom-10 right-10 bg-blue-800 p-3 shadow-2xl rounded-md cursor-pointer hover:bg-blue-600 text-white text-xl duration-300"
                    href='#home'>
                    
                        <FaAngleDoubleUp />
                    
                </motion.a>
            )}
        </AnimatePresence>
    );
}
