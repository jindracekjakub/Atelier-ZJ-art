"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const images = [
    { src: "/pictures/placeholder1.jpg", alt: "Placeholder 1" },
    { src: "/pictures/placeholder2.jpg", alt: "Placeholder 2" },
    { src: "/pictures/placeholder3.jpg", alt: "Placeholder 3" },
    { src: "/pictures/placeholder4.jpg", alt: "Placeholder 4" },
    { src: "/pictures/placeholder5.jpg", alt: "Placeholder 5" },
    { src: "/pictures/placeholder6.jpg", alt: "Placeholder 6" },
];

export default function Galerie() {
    const [index, setIndex] = useState<number>(-1);

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.32,
                }}
            />

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

            <section
                id="gallery"
                className="py-20 px-6 md:px-20 bg-[#efe3c7] rounded-t-[3rem] scroll-mt-10"
            >
                <div className="max-w-6xl mx-auto">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                onClick={() => setIndex(i)}
                                className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md cursor-pointer group"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images}
                index={index}
            />

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20">
                © {new Date().getFullYear()} Atelier ZJ-art – Hořín u Mělníka
            </footer>
        </main>
    );
}
