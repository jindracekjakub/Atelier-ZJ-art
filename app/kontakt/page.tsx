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

export default function Kontakt() {
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setSent(true);
            form.reset();
        }
    };

    return (
        <main className="min-h-screen bg-[#f5ecd9] text-[#4b2e1e] font-serif selection:bg-[#7a5230] selection:text-[#f5ecd9] relative overflow-hidden">

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/textures/paper3.jpg')",
                    backgroundRepeat: "repeat",
                    opacity: 0.32,
                }}
            />

            <section className=" relative h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-20 ">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Kontakt
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl max-w-3xl opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Máte zájem o portrét, obraz nebo výtvarný kurz? Napište mi.
                </motion.p>
            </section>

            <section className="py-10 px-6 md:px-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-[#7a5230]">Kontaktní údaje</h2>

                    <div className="space-y-4 text-lg relative z-10">
                        <p><strong>Email:</strong> atelierzj-art@seznam.cz</p>
                        <p><strong>Telefon:</strong> +420 723 369 633</p>
                        <p><strong>Ateliér:</strong> Hořín u Mělníka</p>
                    </div>

                    <div className="mt-10 w-full h-96 rounded-3xl overflow-hidden shadow-lg ">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24128.1234!2d14.527!3d50.350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b0c12345!2sHorin%2C%20Czechia!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="bg-[#fff7e6] p-10 rounded-3xl shadow-md border border-[#7a5230]/10 space-y-10"
                >
                    <h3 className="text-2xl font-bold relative z-10">Napište mi zprávu</h3>

                    <input
                        name="name"
                        placeholder="Vaše jméno"
                        required
                        className="w-full p-4 rounded-xl border border-[#7a5230]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#7a5230]/40"
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Váš email"
                        required
                        className="w-full p-4 rounded-xl border border-[#7a5230]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#7a5230]/40"
                    />

                    <textarea
                        name="message"
                        placeholder="Vaše zpráva"
                        rows={5}
                        required
                        className="w-full p-4 rounded-xl border border-[#7a5230]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#7a5230]/40"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#7a5230] text-[#f5ecd9] py-4 rounded-full font-semibold hover:bg-[#5e3e25] transition"
                    >
                        Odeslat zprávu
                    </button>

                    {sent && (
                        <p className="text-green-700 text-center font-semibold">
                            Zpráva byla odeslána
                        </p>
                    )}
                </motion.form>
            </section>

            <footer className="py-10 text-center text-sm opacity-70 border-t border-[#7a5230]/20 ">
                © {new Date().getFullYear()} Atelier ZJ-art – Hořín u Mělníka
            </footer>
        </main>
    );
}
