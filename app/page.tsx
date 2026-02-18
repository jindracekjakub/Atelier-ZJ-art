"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
    const images = Array.from({ length: 8 }, (_, i) => ({
        src: `/pictures/placeholder${i + 1}.jpg`,
        alt: `Výtvarná tvorba v Atelieru ZJ-art - ukázka ${i + 1}`,
    }));

    const [index, setIndex] = useState(-1);

    const handleScroll = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById("gallery");
        if (element) {
            const offset = element.offsetTop;
            animate(window.scrollY, offset, {
                type: "spring",
                stiffness: 90,
                damping: 20,
                onUpdate: (latest) => window.scrollTo(0, latest),
            });
        }
    };

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            {/* textura */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.32,
                }}
            />

            <section className="relative h-[95vh] flex flex-col items-center justify-center text-center px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Image
                        src="/pictures/logo1.png"
                        alt="Atelier ZJ-art logo"
                        width={570}
                        height={370}
                        priority
                        className="drop-shadow-lg"
                    />
                </motion.div>

                <motion.p
                    className="text-lg md:text-xl max-w-2xl mt-6 leading-relaxed opacity-90 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Výtvarný ateliér – portréty, obrazy na zakázku,
                    kurzy kresby a tvořivé dílny pro děti i dospělé.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <Link
                        href="#gallery"
                        onClick={handleScroll}
                        className="inline-block mt-10 bg-[#7a5230] text-[#f5ecd9] px-10 py-4 rounded-full font-semibold transition hover:bg-[#5e3e25] hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Prohlédnout galerii
                    </Link>
                </motion.div>
            </section>

            <section className="py-24 px-6 md:px-20 bg-[#efe3c7]">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/pictures/placeholder1.jpg"
                            alt="Ateliér ZJ-art"
                            width={500}
                            height={400}
                            className="rounded-2xl shadow-xl relative z-10"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                            O ateliéru
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Nabízím výtvarný kroužek pro děti v krásném ateliéru v Hoříně,
                            kde se zaměřuji na rozvoj tvořivosti, představivosti a fantazie.
                        </p>
                        <p className="leading-relaxed">
                            Pracuji v malých skupinách, s individuálním přístupem
                            a důrazem na radost z tvorby.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 text-center bg-[#f5ecd9]">
                <h2 className="text-3xl font-bold mb-12 relative z-10">
                    Proč právě kroužek u mě?
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6 ">
                    {[
                        { title: "Malé skupiny", text: "Individuální přístup ke každému dítěti." },
                        { title: "Podpora kreativity", text: "Rozvoj fantazie a sebevyjádření." },
                        { title: "Příjemné prostředí", text: "Ateliér v klidné části Hořína." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-[#efe3c7] p-8 rounded-2xl shadow-md"
                        >
                            <h3 className="font-semibold mb-3 text-lg text-[#452a14]">
                                {item.title}
                            </h3>
                            <p className="opacity-80">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section
                id="gallery"
                className="py-20 px-6 md:px-20 bg-[#efe3c7] rounded-t-[3rem] shadow-2xl scroll-mt-10">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16">
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            Galerie
                        </h3>
                    </header>

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
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"/>
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

            <section className="py-28 text-center bg-[#f5ecd9]">
                <h3 className="text-2xl mb-10 font-semibold">
                    Máte zájem o kurz nebo obraz na zakázku?
                </h3>

                <Link
                    href="/kontakt"
                    className="inline-block border-2 border-[#7a5230] text-[#7a5230] px-12 py-4 rounded-full font-bold hover:bg-[#7a5230] hover:text-[#f5ecd9] transition-all duration-300"
                >
                    Kontaktujte mě
                </Link>
            </section>

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20">
                © {new Date().getFullYear()} Atelier ZJ-art – Hořín u Mělníka
            </footer>
        </main>
    );
}
