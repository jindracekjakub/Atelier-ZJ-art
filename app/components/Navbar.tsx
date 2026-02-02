"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
        <nav className="bg-gradient-to-r from-[#4b3621] via-[#3e2b1f] to-[#2b1d12] text-[#f5ecd9] font-serif sticky top-0 z-50 shadow-lg overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-center items-center h-16 md:h-20">

                    <div className="hidden md:flex space-x-1 bg-[#1a1009]/20 rounded-[16px] p-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="hover:text-[#f0d9b5] px-4 py-2 rounded-[12px] transition-all duration-200 hover:bg-[#2b1d12]/40"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
                            className="w-12 h-12 flex items-center justify-center rounded-[12px] bg-[#2b1d12]/30 hover:bg-[#2b1d12]/50 transition-all duration-200"
                        >
                            <span className="text-2xl ">{open ? "X" : "☰"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="md:hidden animate-in slide-in-from-top-5 duration-300 mx-6 mt-3 mb-6">
                    <div className="bg-[#3e2b1f] rounded-[20px] shadow-xl overflow-hidden border border-[#2b1d12]/30">
                        <div className="flex flex-col p-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="hover:text-[#f0d9b5] px-4 py-4 rounded-[12px] transition-all duration-200 hover:bg-[#2b1d12]/30 m-1"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
