"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Instagram, Facebook, Youtube, Menu, X } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname?.startsWith("/cursos/")) {
        return null;
    }

    return (
        <nav
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                "bg-white/40 backdrop-blur-md border-b border-white/20",
                scrolled ? "py-2 shadow-sm" : "py-4",
                "text-[#053040] font-bold"
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
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    <Link href="/" className="relative group text-sm hover:text-[#577c8e] transition-colors">
                        Agencia
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/consultoria" className="relative group text-sm hover:text-[#577c8e] transition-colors">
                        Consultoría
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/aprende" className="relative group text-sm hover:text-[#577c8e] transition-colors">
                        Aprende
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/tienda" className="relative group text-sm hover:text-[#577c8e] transition-colors">
                        Tienda
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#577c8e] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Right: Contáctanos and Social Icons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://wa.link/58p1sa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#053040] text-white px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                    >
                        Contáctanos
                    </a>
                    
                    <div className="flex items-center gap-4 ml-2">
                        <a href="https://instagram.com/cantoncreativo/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Instagram size={20} />
                        </a>
                        <a href="https://facebook.com/CantonCreativo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.youtube.com/@frank.escobedo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 text-[#053040]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-white/20 shadow-lg py-6 px-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-4 text-center">
                        <Link href="/" className="text-lg hover:text-[#577c8e] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Agencia</Link>
                        <Link href="/consultoria" className="text-lg hover:text-[#577c8e] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Consultoría</Link>
                        <Link href="/aprende" className="text-lg hover:text-[#577c8e] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Aprende</Link>
                        <Link href="/tienda" className="text-lg hover:text-[#577c8e] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Tienda</Link>
                        
                        <a
                            href="https://wa.link/58p1sa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#053040] text-white px-6 py-3 rounded-full text-base font-bold hover:scale-105 transition-transform mt-2 mx-auto"
                        >
                            Contáctanos
                        </a>
                    </div>

                    {/* Social Icons (Mobile) */}
                    <div className="flex justify-center gap-6 mt-2">
                        <a href="https://instagram.com/cantoncreativo/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://facebook.com/CantonCreativo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="https://www.youtube.com/@frank.escobedo" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:text-[#577c8e] transition-all duration-300 cursor-pointer">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
