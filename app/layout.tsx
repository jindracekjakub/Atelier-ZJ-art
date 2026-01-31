import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
    title: 'Atelier ZJ-art',
    description: 'Výtvarný ateliér',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="cs">
        <body className="bg-[#f5ecd9] text-[#4b2e1e] font-serif">
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    );
}
import { Caveat } from "next/font/google";

const handwriting = Caveat({
    subsets: ["latin"],
    weight: ["400", "600"],
});

