"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: "Domů", href: "/" },
        { label: "Malování na zakázku", href: "/malovani" },
        { label: "Fotogalerie", href: "/fotogalerie" },
        { label: "Kontakt", href: "/kontakt" },
        { label: "Příprava na talentové zkoušky na SŠ", href: "/priprava" },
        { label: "Výtvarný kroužek pro děti", href: "/krouzek" },
    ];

    return (
        <nav className="bg-gradient-to-r from-[#3e2b1f] to-[#2b1d12] text-[#f5ecd9] sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="font-bold text-xl tracking-wider">
                    Atelier ZJ‑art
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="hover:text-[#e0cba1] transition-colors"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        <span className="text-2xl">&#9776;</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col bg-[#3e2b1f] text-[#f5ecd9]">
                    {menuItems.map((item) => (
                        <li key={item.href} className="border-b border-[#2b1d12]">
                            <Link
                                href={item.href}
                                className="block px-4 py-3 hover:bg-[#2b1d12] transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
