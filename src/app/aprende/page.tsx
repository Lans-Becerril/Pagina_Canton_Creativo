import { FadeIn } from "@/components/FadeIn";
import { Tv, ThumbsUp, Users, ArrowRight } from "lucide-react";

export default function AprendePage() {
    return (
        <>
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative overflow-hidden px-6 py-16 lg:px-10 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <FadeIn className="flex flex-col gap-8">
                                <div className="inline-flex w-fit  items-center rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-blue">
                                    Nueva Convocatoria
                                </div>
                                <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-primary dark:text-white md:text-6xl lg:text-7xl">
                                    Crecer es difícil. Hacerlo solo es <span className="text-accent-blue italic">casi imposible.</span>
                                </h1>
                                <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
                                    Únete a nuestra comunidad privada diseñada para creativos que buscan escalar sus proyectos con guía real y apoyo colectivo.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="flex h-14 min-w-[240px] items-center justify-center rounded-xl bg-primary text-white dark:bg-accent-blue px-8 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                        Solicitar acceso a Skool
                                    </button>
                                    <button className="flex h-14 items-center justify-center rounded-xl border-2 border-primary/10 dark:border-white/10 px-8 text-lg font-bold text-primary dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                        Ver plan de estudios
                                    </button>
                                </div>
                            </FadeIn>
                            <FadeIn direction="left" delay={0.2} className="relative">
                                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-soft-blue shadow-2xl">
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{
                                            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')",
                                        }}
                                    ></div>
                                </div>
                                <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-2xl bg-accent-blue p-4 text-white shadow-xl lg:flex flex-col justify-end">
                                    <span className="text-3xl font-black">500+</span>
                                    <span className="text-xs font-bold uppercase tracking-tighter opacity-80 mt-1">Miembros activos</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="bg-soft-blue/10 dark:bg-white/5 px-6 py-20 lg:px-10">
                    <div className="mx-auto max-w-7xl">
                        <FadeIn className="mb-16 flex flex-col items-center text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary dark:text-white md:text-4xl">¿Por qué unirte a nosotros?</h2>
                            <div className="h-1.5 w-20 rounded-full bg-accent-blue"></div>
                        </FadeIn>

                        <div className="grid gap-8 md:grid-cols-3">
                            <FadeIn delay={0.1}>
                                <div className="group flex h-full flex-col gap-6 rounded-2xl bg-white dark:bg-slate-900 border border-transparent dark:border-white/10 p-8 transition-all hover:-translate-y-2 hover:shadow-xl dark:shadow-none hover:border-accent-blue/30">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 dark:bg-accent-blue/10 text-primary dark:text-accent-blue transition-colors group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent-blue">
                                        <Tv />
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">Llamadas Q&A en vivo</h3>
                                        <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                                            Sesiones directas semanales para resolver tus dudas específicas en tiempo real con mentores expertos.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <div className="group flex h-full flex-col gap-6 rounded-2xl bg-white dark:bg-slate-900 border border-transparent dark:border-white/10 p-8 transition-all hover:-translate-y-2 hover:shadow-xl dark:shadow-none hover:border-accent-blue/30">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 dark:bg-accent-blue/10 text-primary dark:text-accent-blue transition-colors group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent-blue">
                                        <ThumbsUp />
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">Feedback honesto</h3>
                                        <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                                            Crítica constructiva y profunda de expertos del sector para elevar la calidad de tus proyectos actuales.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <div className="group flex h-full flex-col gap-6 rounded-2xl bg-white dark:bg-slate-900 border border-transparent dark:border-white/10 p-8 transition-all hover:-translate-y-2 hover:shadow-xl dark:shadow-none hover:border-accent-blue/30">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 dark:bg-accent-blue/10 text-primary dark:text-accent-blue transition-colors group-hover:bg-primary group-hover:text-white dark:group-hover:bg-accent-blue">
                                        <Users />
                                    </div>
                                    <div>
                                        <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">Networking de alto nivel</h3>
                                        <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                                            Conecta con una red exclusiva de profesionales de alto calibre que comparten tus mismos objetivos de crecimiento.
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-6 py-24 lg:px-10">
                    <FadeIn>
                        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-primary dark:bg-slate-900 border dark:border-white/10 px-8 py-16 text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 blur-3xl rounded-full"></div>
                            <h2 className="mb-6 text-4xl font-black md:text-5xl relative z-10">¿Listo para dar el siguiente paso?</h2>
                            <p className="mx-auto mb-12 max-w-xl text-lg opacity-80 relative z-10">
                                Nuestra comunidad en Skool es el ecosistema donde las ideas se convierten en negocios rentables. No camines solo.
                            </p>
                            <div className="flex justify-center relative z-10">
                                <button className="group flex min-w-[320px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl bg-white dark:bg-accent-blue px-10 py-6 text-xl font-black tracking-tight text-primary dark:text-white transition-all hover:scale-105 active:scale-100 shadow-xl">
                                    <span>Solicitar acceso a Skool</span>
                                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                            <p className="mt-8 text-sm font-bold opacity-50 uppercase tracking-widest relative z-10">Plazas limitadas por mes</p>
                        </div>
                    </FadeIn>
                </section>
            </main>
        </>
    );
}
