"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, animate } from "framer-motion";
import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Review {
    author_name: string;
    rating: number;
    text: string;
    relative_time_description: string;
    profile_photo_url: string;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill={i < rating ? "#c07a2e" : "none"}
                    stroke="#c07a2e"
                    strokeWidth="1.5"
                    className="w-4 h-4"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function Home() {
    const images = Array.from({ length: 8 }, (_, i) => ({
        src: `/pictures/placeholder${i + 1}.jpg`,
        alt: `Výtvarná tvorba v Atelieru ZJ-art - ukázka ${i + 1}`,
    }));

    const [index, setIndex] = useState(-1);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [overallRating, setOverallRating] = useState<number | null>(null);
    const [totalRatings, setTotalRatings] = useState<number | null>(null);
    const [reviewsLoading, setReviewsLoading] = useState(true);

    useEffect(() => {
        fetch("/api/reviews")
            .then((r) => r.json())
            .then((data) => {
                if (data.reviews) {
                    setReviews(data.reviews);
                    setOverallRating(data.rating);
                    setTotalRatings(data.user_ratings_total);
                }
            })
            .catch(console.error)
            .finally(() => setReviewsLoading(false));
    }, []);

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
        <main className="min-h-[200vh] bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.32,
                }}
            />

            {/* HERO */}
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
                    className="text-lg md:text-xl max-w-2xl mt-6 leading-relaxed opacity-90"
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
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

                <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto px-6">
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
                className="py-20 px-6 md:px-20 bg-[#efe3c7] rounded-t-[3rem] shadow-2xl scroll-mt-10"
            >
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

            <section className="py-24 px-6 md:px-20 bg-[#f5ecd9]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Co říkají rodiče a zákazníci
                        </h2>

                        {overallRating && (
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <span className="text-4xl font-bold text-[#c07a2e]">
                                    {overallRating.toFixed(1)}
                                </span>
                                <div>
                                    <StarRating rating={Math.round(overallRating)} />
                                    {totalRatings && (
                                        <p className="text-sm opacity-60">
                                            {totalRatings} hodnocení na Google
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {reviewsLoading ? (
                        <div className="flex justify-center items-center py-16">
                            <div className="w-8 h-8 border-2 border-[#7a5230] border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : reviews.length === 0 ? (
                        <p className="text-center opacity-50">Recenze se nepodařilo načíst.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-[#efe3c7] rounded-2xl p-6 shadow-md flex flex-col gap-3 border border-[#d4b896]/40"
                                >
                                    <div className="flex items-center gap-3">
                                        {review.profile_photo_url ? (
                                            <img
                                                src={review.profile_photo_url}
                                                alt={review.author_name}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-[#7a5230]/20 flex items-center justify-center text-[#7a5230] font-bold text-sm">
                                                {review.author_name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-semibold text-[#452a14] text-sm leading-tight">
                                                {review.author_name}
                                            </p>
                                            <p className="text-xs opacity-50">
                                                {review.relative_time_description}
                                            </p>
                                        </div>
                                    </div>

                                    <StarRating rating={review.rating} />

                                    <p className="text-sm leading-relaxed opacity-80 line-clamp-5">
                                        {review.text}
                                    </p>

                                    <div className="mt-auto pt-2 flex items-center gap-1.5 opacity-40">
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        </svg>
                                        <span className="text-xs font-medium">Google recenze</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    <div className="text-center mt-10">
                        <a
                            href={`https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? ""}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#7a5230] border border-[#7a5230]/40 px-6 py-2.5 rounded-full hover:bg-[#7a5230]/10 transition-colors"
                        >
                            Zobrazit všechny recenze na Google
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-28 text-center bg-[#efe3c7]">
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