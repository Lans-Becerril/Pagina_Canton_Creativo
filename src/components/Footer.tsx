import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-[#cdd7e0]/20 dark:border-[#ffffff]/10 py-12 md:py-16 bg-[#ffffff] dark:bg-[#053040]">
            <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
                <div>
                    <Link href="/" className="block mb-4 flex justify-center">
                        <Image src="/canton.png" alt="Cantón Creativo Logo" width={180} height={45} className="object-contain" />
                    </Link>
                    <p className="text-sm text-[#184c56] dark:text-[#cdd7e0] max-w-xs mx-auto">
                        Estrategias high-ticket y consultoría premium para negocios creativos y B2B.
                    </p>
                </div>

                <div className="flex items-center gap-6 text-[#053040] dark:text-[#ffffff]">
                    <a href="#" className="hover:text-[#577c8e] dark:hover:text-[#577c8e] transition-colors" aria-label="Facebook">
                        <Facebook size={24} />
                    </a>
                    <a href="#" className="hover:text-[#577c8e] dark:hover:text-[#577c8e] transition-colors" aria-label="Instagram">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="hover:text-[#577c8e] dark:hover:text-[#577c8e] transition-colors" aria-label="YouTube">
                        <Youtube size={24} />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-6 text-sm text-[#184c56] dark:text-[#cdd7e0] mt-4">
                    <Link href="/politica-privacidad" className="hover:text-[#053040] dark:hover:text-[#ffffff] transition-colors">
                        Política de Privacidad
                    </Link>
                    <Link href="/politica-reembolso" className="hover:text-[#053040] dark:hover:text-[#ffffff] transition-colors">
                        Política de Reembolsos
                    </Link>
                </div>
            </div>
        </footer>
    );
}
