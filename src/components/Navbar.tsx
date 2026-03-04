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
                <Link href="/" className={cn("flex items-center gap-3 hover:opacity-90 transition-all duration-300 origin-left", scrolled ? "scale-90" : "scale-100")}>
                    <Image
                        src="/logo-canton.png"
                        alt="Cantón Creativo Logo"
                        width={100}
                        height={30}
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Center: Navigation Grid exact */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 text-[#053040] dark:text-[#ffffff]">
                    <Link href="/" className="relative group text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Agencia
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/consultoria" className="relative group text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Consultoría
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/aprende" className="relative group text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Aprende
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/tienda" className="relative group text-sm font-medium hover:text-[#577c8e] transition-colors">
                        Tienda
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
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
