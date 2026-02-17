"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const images = [
    "/pictures/placeholder1.jpg",
    "/pictures/placeholder2.jpg",
    "/pictures/placeholder3.jpg",
    "/pictures/placeholder4.jpg",
    "/pictures/placeholder5.jpg",
    "/pictures/placeholder6.jpg",
];

export default function Galerie() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.2,
                }}
            />

            {/* HEADER */}
            <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-20">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Galerie tvorby
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl max-w-3xl opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Výběr portrétů, obrazů a prací z ateliéru
                </motion.p>
            </section>

            {/* GALLERY */}
            <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.03 }}
                            className="overflow-hidden rounded-3xl shadow-lg cursor-pointer group relative"
                            onClick={() => setSelected(src)}
                        >
                            <img
                                src={src}
                                alt="Obraz"
                                className="w-full h-80 object-cover transition duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#7a5230]/0 group-hover:bg-[#7a5230]/20 transition" />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* LIGHTBOX */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                    onClick={() => setSelected(null)}
                >
                    <motion.img
                        src={selected}
                        alt="Zvětšený obraz"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
                    />
                </div>
            )}

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20">
                © {new Date().getFullYear()} Atelier ZJ-art – Hořín u Mělníka
            </footer>
        </main>
    );
}
