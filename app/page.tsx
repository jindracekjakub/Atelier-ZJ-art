"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

{/* galerie niga */}
export default function Home() {
    const images = Array.from({ length: 8 }, (_, i) => ({
        src: `/pictures/placeholder${i + 1}.jpg`,
        alt: `Výtvarná tvorba v Atelieru ZJ-art - ukázka ${i + 1}`,
    }));

    const handleScroll = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const element = document.getElementById("gallery");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const [index, setIndex] = useState(-1);

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.25,
                    mixBlendMode: "normal"
                }}
            />

            <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                        <Image
                            src="/pictures/logo1.png"
                            alt="Atelier ZJ-art logo"
                            width={500}
                            height={300}
                            priority
                            className="w-full h-auto"
                        />


                    <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
                        Výtvarný ateliér – portréty, obrazy na zakázku, kurzy kresby a tvořivé dílny pro děti i dospělé.
                    </p>
                    <Link
                        href="#gallery"
                        onClick={handleScroll}
                        className="inline-block bg-[#7a5230] text-[#f5ecd9] px-10 py-4 rounded-full font-semibold transition hover:bg-[#5e3e25] hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Prohlédnout galerii
                    </Link>
                </motion.div>
            </section>

            <section
                id="gallery"
                className="py-20 px-6 md:px-20 bg-[#efe3c7] rounded-t-[3rem] shadow-2xl scroll-mt-10">
                <div className="max-w-6xl mx-auto">
                    <header className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Výtvarný kroužek Mělník
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto text-lg leading-relaxed"
                        >
                            Hledáte kroužek malování pro vaše dítě? Chtěli byste namalovat portrét na zakázku? Jste z okolí Mělníku? V tom případě se neváhejte obrátit na mě.
                            Nabízím výtvarný kroužek pro děti v krásném ateliéru v Hoříně, v mělnickém okrese, kde se zaměřuji na rozvoj dětské tvořivosti, představivosti a fantazie.
                            Máte doma šikovného malého malíře a chtěli byste mu dát prostor k rozvoji jeho talentu či zálibě? Nabízím odpolední kroužek pro děti od 6- 11 let nebo pro starší jako průpravu k talentovým zkouškám 12-15 let.
                        </motion.p>
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

            <section className="py-24 text-center bg-[#f5ecd9]">
                <h3 className="text-2xl mb-8">Máte zájem o kurz nebo obraz na zakázku?</h3>
                <Link
                    href="/kontakt"
                    className="inline-block border-2 border-[#7a5230] text-[#7a5230] px-12 py-4 rounded-full font-bold hover:bg-[#7a5230] hover:text-[#f5ecd9] transition-all"
                >
                    Kontaktujte mě
                </Link>
            </section>

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20">
                © {new Date().getFullYear()} Atelier ZJ‑art – Hořín u Mělníka
            </footer>
        </main>
    );
}