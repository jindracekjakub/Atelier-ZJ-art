"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { label: "Domů", href: "/" },
        { label: "Výtvarný kroužek pro děti", href: "/krouzek" },
        { label: "Malování na zakázku", href: "/malovani" },
        { label: "Fotogalerie", href: "/fotogalerie" },
        { label: "Kontakt", href: "/kontakt" },
        { label: "Příprava na talentové zkoušky na SŠ", href: "/priprava" },
    ];

    return (
        <nav className="sticky top-6 z-50 mx-4 md:mx-8 font-serif">
            <div className="bg-[#3e2b1f]/90 backdrop-blur-md rounded-[28px] shadow-2xl border border-[#f0d9b5]/10 px-6 py-4 transition-all duration-300">

                {/* Desktop layout */}
                <div className="flex justify-between items-center">

                    {/* Logo + Název */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 relative">

                        </div>
                        <span className="text-xl md:text-2xl font-semibold tracking-wide text-[#f5ecd9] group-hover:text-[#f0d9b5] transition">
                            AtelierZJ-Art
                        </span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-2 bg-[#2b1d12]/40 rounded-[20px] p-2">
                        {menuItems.map((item) => {
                            const active = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-[14px] text-sm transition-all duration-300
                                        ${active
                                        ? "bg-[#f0d9b5] text-[#2b1d12] shadow-md"
                                        : "text-[#f5ecd9] hover:text-[#f0d9b5]"
                                    }
                                    `}
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>

                                    {!active && (
                                        <span className="absolute left-4 bottom-2 w-0 h-[2px] bg-[#f0d9b5] transition-all duration-300 group-hover:w-[calc(100%-2rem)]"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
                            className="w-12 h-12 flex items-center justify-center rounded-[14px] bg-[#2b1d12]/40 hover:bg-[#2b1d12]/60 transition-all duration-300"
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute h-[2px] w-full bg-[#f5ecd9] transition-all duration-300 ${
                                        open ? "rotate-45 top-3" : "top-1"
                                    }`}
                                />
                                <span
                                    className={`absolute h-[2px] w-full bg-[#f5ecd9] transition-all duration-300 ${
                                        open ? "opacity-0" : "top-3"
                                    }`}
                                />
                                <span
                                    className={`absolute h-[2px] w-full bg-[#f5ecd9] transition-all duration-300 ${
                                        open ? "-rotate-45 top-3" : "top-5"
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden mt-4 animate-in slide-in-from-top-5 duration-300">
                        <div className="bg-[#2b1d12]/70 rounded-[22px] shadow-xl border border-[#f0d9b5]/10 p-3 backdrop-blur-md">
                            {menuItems.map((item) => {
                                const active = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`block px-4 py-3 rounded-[14px] mb-2 transition-all duration-300
                                            ${
                                            active
                                                ? "bg-[#f0d9b5] text-[#2b1d12]"
                                                : "text-[#f5ecd9] hover:bg-[#3e2b1f]"
                                        }
                                        `}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}