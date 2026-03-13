import { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PlayCircle, ShieldCheck, HelpCircle, Lightbulb, Users, Award, ChevronDown } from "lucide-react";
import { courses } from "@/data/courses";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const course = courses.find((c) => c.slug === resolvedParams.slug);

    if (!course) {
        return {
            title: "Curso no encontrado | Cantón Creativo",
        };
    }

    return {
        title: `${course.title} | Cantón Creativo`,
        description: course.description,
    };
}

const faqs = [
    { q: "¿Tendré acceso de por vida?", a: "Sí, todos los cursos incluyen acceso vitalicio y actualizaciones futuras sin costo adicional.", icon: ShieldCheck },
    { q: "¿Necesito conocimientos previos?", a: "No, el curso está diseñado para llevar paso a paso desde cero absoluto hasta niveles avanzados.", icon: Lightbulb },
    { q: "¿Cómo accedo al contenido?", a: "Inmediatamente después del pago en Stripe, recibirás un correo con las instrucciones y el acceso a la plataforma.", icon: PlayCircle },
    { q: "¿Hay soporte si tengo dudas?", a: "¡Claro! Tendrás acceso a nuestra comunidad donde resolveremos todas tus inquietudes.", icon: Users },
    { q: "¿Se aceptan pagos en cuotas?", a: "De momento el pago es en una sola exhibición a través de nuestra pasarela segura en Stripe.", icon: Award }
];

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const course = courses.find((c) => c.slug === resolvedParams.slug);

    if (!course) {
        return (
            <div className="min-h-screen py-40 flex items-center justify-center flex-col bg-gradient-to-b from-[#051014] to-[#053040] text-white">
                <h1 className="text-4xl font-bold mb-4">Curso no encontrado</h1>
                <Link href="/consultoria" className="text-xl underline text-[#577c8e] hover:text-white transition-colors">Regresar a consultoría</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#051014] to-[#053040] text-white selection:bg-[#577c8e] selection:text-white pb-24">
            {/* 1. Hero */}
            <section className="pt-24 md:pt-32 pb-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                        {course.title}
                    </h1>
                    <p className="text-lg md:text-xl text-[#f4efeb] md:text-[#cdd7e0] max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md">
                        {course.description}
                    </p>
                </div>
            </section>

            {/* 2. Video */}
            <section className="px-4 pb-16">
                <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-sm aspect-video flex items-center justify-center border border-white/20 relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50 transition-opacity group-hover:opacity-70" />
                    <div className="text-white text-center relative z-10 transform transition-transform group-hover:scale-110">
                        <PlayCircle size={80} className="mx-auto mb-4 drop-shadow-2xl" strokeWidth={1.5} />
                        <p className="text-lg font-medium tracking-wide">Reproducir Video Introductorio</p>
                    </div>
                </div>
            </section>

            {/* 3. Social Proof (Marquee) */}
            <section className="py-12 border-y border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden flex items-center">
                <div className="w-full">
                    <p className="text-center text-xs md:text-sm font-bold text-[#577c8e] uppercase tracking-[0.2em] mb-8">
                        CREADORES QUE YA ESTUDIARON CON ESTE MÉTODO
                    </p>
                    <div className="flex gap-12 w-fit animate-[marquee-scroll_30s_linear_infinite] opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-3 flex-shrink-0 cursor-default">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                                    {String.fromCharCode(65 + i)}
                                </div>
                                <span className="text-xl font-black text-white">
                                    CREADOR {i + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Imagen Destacada */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto rounded-[2rem] p-2 md:p-4 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="rounded-[1.5rem] overflow-hidden">
                        <img
                            src={course.image}
                            alt={`Mockup de ${course.title}`}
                            className="w-full h-auto object-cover max-h-[600px] hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </section>

            {/* 5. FAQ (Glassmorphism) */}
            <section className="py-24 px-4 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#577c8e] rounded-full blur-[150px] opacity-20 pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-16 text-center drop-shadow-md">
                        Preguntas Frecuentes
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const Icon = faq.icon;
                            return (
                                <details key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 open:bg-white/10 open:border-white/20 open:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <summary className="flex items-center justify-between cursor-pointer p-6 text-lg font-bold text-white hover:text-[#f4efeb] transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[#577c8e]/20 flex items-center justify-center text-[#577c8e] group-open:bg-[#577c8e] group-open:text-white transition-colors">
                                                <Icon size={20} />
                                            </div>
                                            {faq.q}
                                        </div>
                                        <ChevronDown className="group-open:rotate-180 transition-transform text-[#577c8e]" />
                                    </summary>
                                    <div className="px-6 pb-6 pt-2 pl-[4.5rem] text-[#cdd7e0] leading-relaxed text-base">
                                        {faq.a}
                                    </div>
                                </details>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6. CTA Final (Compact & Elegant) */}
            <section className="pb-12 px-4 text-center relative z-10">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-10 leading-tight text-white drop-shadow-md">
                        El momento de escalar<br />tu contenido es <span className="text-[#577c8e] inline-block hover:scale-105 transition-transform duration-300">hoy</span>
                    </h2>
                    <Link href={course.stripeLink} target="_blank" rel="noopener noreferrer">
                        <button className="w-full max-w-[320px] bg-[#f4efeb] text-[#053040] py-4 md:py-5 px-8 rounded-full text-lg font-black tracking-wide hover:scale-105 hover:bg-white transition-all shadow-[0_0_40px_rgba(244,239,235,0.3)] hover:shadow-[0_0_60px_rgba(244,239,235,0.5)] flex items-center justify-center gap-2 mx-auto">
                            AÑADIR AL CARRITO
                        </button>
                    </Link>
                    <p className="text-[#577c8e] mt-6 text-sm font-medium flex items-center justify-center gap-2">
                        <ShieldCheck size={16} />
                        Pago 100% seguro garantizado por Stripe
                    </p>
                </div>
            </section>
        </div>
    );
}
