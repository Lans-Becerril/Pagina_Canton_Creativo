"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300",
                scrolled
                    ? "py-2 bg-[#ffffff]/80 dark:bg-[#053040]/80 backdrop-blur-md border-[#cdd7e0]/20 dark:border-[#ffffff]/10 shadow-sm"
                    : "py-4 bg-[#ffffff] dark:bg-[#053040] border-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/canton.png" alt="Cantón Creativo Logo" width={180} height={45} className="object-contain" priority />
                </Link>

                {/* Center: Navigation Grid exact */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[#053040] dark:text-[#ffffff]">
                    <Link href="/" className="text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Agencia
                    </Link>
                    <Link href="/consultoria" className="text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Consultoría
                    </Link>
                    <Link href="/aprende" className="text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Aprende
                    </Link>
                    <Link href="/tienda" className="text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Tienda
                    </Link>
                </div>

                {/* Right: Theme Toggle + Contáctanos */}
                <div className="flex items-center gap-4">
                    <ThemeSwitcher />
                    <a
                        href="mailto:contacto@cantoncreativo.com"
                        className="bg-[#053040] text-[#ffffff] dark:bg-[#577c8e] dark:text-[#ffffff] px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </nav>
    );
}
