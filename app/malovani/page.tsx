"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* 🎬 Jednotný animační systém */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const handleScroll = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const element = document.getElementById("galerie");
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

export default function PortretyNaZakazku() {
    const [index, setIndex] = useState(-1);

    const galleryImages = Array.from({ length: 6 }, (_, i) => ({
        src: `/pictures/portrait${i + 1}.jpg`,
        alt: `Ukázka malby na zakázku č. ${i + 1}`,
        width: 1200,
        height: 1500,
    }));

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.2,
                    mixBlendMode: "multiply",
                }}
            />

            <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-6 md:px-20 mt-8">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Portréty a obrazy na zakázku
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl max-w-3xl opacity-90 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Originální dárek nebo dekorace do vašeho interiéru – portréty a ručně malované obrazy podle vašich přání.
                </motion.p>

                <Link
                    href="#galerie"
                    onClick={handleScroll} //tohle opravuje tlacitko aby se dalo scrollnout vickrat
                    className="inline-block bg-[#7a5230] text-[#f5ecd9] px-10 py-4 rounded-full font-semibold hover:bg-[#5e3e25] hover:scale-105 transition-all shadow-lg"
                >
                    Ukázky prací
                </Link>
            </section>

            <section className="py-24 px-6 md:px-20 space-y-16 max-w-5xl mx-auto">

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold text-[#7a5230]">Portréty na zakázku</h2>
                        <p className="leading-relaxed">
                            Portrét na zakázku je originální a osobní dárek. Maluji podle kvalitní fotografie technikou tužky, akrylu i olejomalby.
                        </p>
                    </div>

                    <div
                        className="space-y-4"
                    >
                        <h2 className="text-3xl font-bold text-[#7a5230]">Abstraktní obrazy</h2>
                        <p className="leading-relaxed">
                            Ručně malovaný obraz je stylovým doplňkem interiéru. Malby jsou realizovány na kvalitní plátna a hotové i přes boky.
                        </p>
                    </div>
                </div>

                <div
                    className="space-y-4 mt-8"
                >
                    <h3 className="text-2xl font-bold">Důležité info</h3>
                    <ul className="space-y-3">
                        {[
                            "Portréty maluji podle kvalitní fotografie",
                            "Termín vyhotovení obvykle do 14 dnů",
                            "Možnost expresního dodání po dohodě",
                            "Bezpečné doručení (poštovné 90–120 Kč)",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-[#7a5230] mt-1">✦</span>
                                <span className="text-sm md:text-base italic">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="bg-[#fff7e6] p-8 rounded-3xl shadow-sm border border-[#7a5230]/10 mt-8"
                >
                    <h3 className="text-2xl font-bold mb-6">Orientační ceník</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="border-b border-[#7a5230]/20">
                            <th className="py-2">Formát</th>
                            <th className="py-2 text-right">Cena od</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-[#7a5230]/10">
                        <tr><td className="py-3 italic">A4</td><td className="py-3 text-right">1 200 Kč</td></tr>
                        <tr><td className="py-3 italic">A3</td><td className="py-3 text-right">1 800 Kč</td></tr>
                        <tr><td className="py-3 italic">40×50 cm</td><td className="py-3 text-right">2 500 Kč</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>


            <section
                id="galerie"
                className="py-10 px-6 md:px-20 bg-[#efe3c7] rounded-t-[3rem] shadow-2xl scroll-mt-24"
            >
                <div className="max-w-6xl mx-auto text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ukázky prací</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((img, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ y: -5 }}
                            onClick={() => setIndex(i)}
                            className="relative h-64 w-full rounded-2xl overflow-hidden shadow-md group"
                            aria-label={`Otevřít obrázek ${i + 1}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="object-cover transition duration-500 group-hover:scale-110"
                            />
                        </motion.button>
                    ))}
                </div>
            </section>

            <Lightbox open={index >= 0} close={() => setIndex(-1)} slides={galleryImages} index={index} />

            <section className="py-24 text-center">
                <h3 className="text-2xl mb-8">Chcete objednat portrét nebo obraz?</h3>
                <Link
                    href="/kontakt"
                    className="inline-block border-2 border-[#7a5230] text-[#7a5230] px-12 py-4 rounded-full font-bold hover:bg-[#7a5230] hover:text-[#f5ecd9] transition-all"
                >
                    Chci portrét na zakázku
                </Link>
            </section>

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20">
                © {new Date().getFullYear()} Atelier ZJ-art – Hořín u Mělníka
            </footer>
        </main>
    );
}
