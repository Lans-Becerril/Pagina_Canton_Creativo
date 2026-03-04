import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
    const logoUrl = "https://instagram.ftlc1-1.fna.fbcdn.net/v/t51.2885-19/408494258_3579481412368859_6886822701382280032_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDA3LmMyIn0&_nc_ht=instagram.ftlc1-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2QEbhJZkD-NGVeW5WXgpOCLoMKElh5rA1RWaDNeE6PtDnl1d0qFZD2EAAcvlXoHv7Ca_TDaXse24QBcNuW1dL6s9&_nc_ohc=M5AghAHp-MgQ7kNvwEfGNYq&_nc_gid=fqH2plwFzshSGMyx4de2rQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afxq1M-D7IS2YpgW0x1tjkErcjGZ5PfW_dLJ-Rd2Pk_uSw&oe=69AE943D&_nc_sid=7a9f4b";

    return (
        <footer className="bg-[#053040] text-[#ffffff] py-16 border-t border-[#184c56]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Columna 1: Marca */}
                    <div className="flex flex-col items-start">
                        <Link href="/" className="mb-6 flex items-center gap-3">
                            <Image
                                src="/logo-canton.png"
                                alt="Cantón Creativo Logo"
                                width={90}
                                height={25}
                                className="object-contain filter brightness-0 invert"
                            />
                        </Link>
                        <p className="text-[#cdd7e0] text-sm leading-relaxed max-w-xs">
                            Transformamos tu presencia digital en una máquina de conversión predecible.
                        </p>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-bold text-lg mb-6 text-[#ffffff]">Navegación</h4>
                        <nav className="flex flex-col gap-4 text-sm text-[#cdd7e0]">
                            <Link href="/" className="hover:text-[#577c8e] transition-colors">Agencia</Link>
                            <Link href="/consultoria" className="hover:text-[#577c8e] transition-colors">Consultoría</Link>
                            <Link href="/aprende" className="hover:text-[#577c8e] transition-colors">Aprende</Link>
                            <Link href="/tienda" className="hover:text-[#577c8e] transition-colors">Tienda</Link>
                        </nav>
                    </div>

                    {/* Columna 3: Legal y Contacto */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-bold text-lg mb-6 text-[#ffffff]">Legal y Contacto</h4>
                        <div className="flex flex-col gap-4 text-sm text-[#cdd7e0]">
                            <Link href="/politica-privacidad" className="hover:text-[#577c8e] transition-colors">Política de Privacidad</Link>
                            <Link href="/politica-reembolso" className="hover:text-[#577c8e] transition-colors">Política de Reembolsos</Link>
                            <a href="mailto:contacto@cantoncreativo.com" className="flex items-center gap-2 mt-2 text-[#ffffff] hover:text-[#577c8e] transition-colors font-medium">
                                <Mail size={16} />
                                contacto@cantoncreativo.com
                            </a>
                        </div>
                    </div>

                    {/* Columna 4: Sociales */}
                    <div className="flex flex-col items-start">
                        <h4 className="font-bold text-lg mb-6 text-[#ffffff]">Síguenos</h4>
                        <div className="flex items-center gap-5 text-[#cdd7e0]">
                            <a href="#" className="hover:text-[#ffffff] bg-[#184c56] p-3 rounded-full transition-transform hover:scale-110" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ffffff] bg-[#184c56] p-3 rounded-full transition-transform hover:scale-110" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-[#ffffff] bg-[#184c56] p-3 rounded-full transition-transform hover:scale-110" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea final */}
                <div className="pt-8 border-t border-[#184c56] text-center">
                    <p className="text-sm text-[#cdd7e0]">
                        © 2026 Cantón Creativo. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
