import { FadeIn } from "@/components/FadeIn";
import { CheckCircle2, PlayCircle, Lightbulb, CalendarDays, Clock, Palette, ListChecks, Award, ChevronDown, Scale, Camera, Mail } from "lucide-react";
import Link from "next/link";

export default function ConsultoriaPage() {
    const stripeLink1900 = "https://buy.stripe.com/5kQeVd3h6bPi3kSfNegrS03";
    const stripeLink10600 = "https://buy.stripe.com/7sY4gzaJy9Ha5t07gIgrS04";

    return (
        <>
            {/* Hero Section */}
            <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold tracking-wider uppercase mb-6">
                                Auditoría Estratégica
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-primary dark:text-white leading-tight mb-6">
                                Si quieres que tus VLOGS rifen, <span className="text-accent-blue">traza la ruta exacta.</span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed">
                                Haz una auditoría profunda de tu canal para dejar de improvisar y empezar a crecer a 100,000 subs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transition-transform text-center shadow-brand"
                                    href="#options"
                                >
                                    Ver opciones
                                </a>
                                <a
                                    className="flex items-center justify-center gap-2 text-primary dark:text-white font-semibold px-8 py-4 border-2 border-primary/20 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5"
                                    href="#results"
                                >
                                    <PlayCircle />
                                    Ver Casos de Éxito
                                </a>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-accent-blue/20 rounded-full blur-3xl"></div>
                                <img
                                    alt="Studio"
                                    className="relative rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 object-cover aspect-video w-full h-[400px]"
                                    src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </header>

            {/* Lead Magnet */}
            <section className="py-20 bg-cream dark:bg-primary/10">
                <div className="max-w-5xl mx-auto px-4">
                    <FadeIn>
                        <div className="bg-white dark:bg-background-dark rounded-3xl p-8 md:p-12 shadow-brand border border-soft-blue/30 flex flex-col md:flex-row items-center gap-10">
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">¿Te identificas con esto?</h2>
                                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 italic">
                                    "Subo mucho contenido pero nadie me ve... Siento que mi canal está estancado."
                                </p>
                                <div className="flex items-center gap-2 text-accent-teal font-bold uppercase tracking-widest text-sm">
                                    <span className="material-symbols-outlined text-xl">insights</span> Solución Inmediata
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <div className="bg-primary/5 dark:bg-white/5 p-6 rounded-2xl border border-primary/10">
                                    <h3 className="text-xl font-bold mb-4 dark:text-white">Obtén un Diagnóstico Gratuito</h3>
                                    <form className="space-y-4">
                                        <input
                                            className="w-full px-4 py-3 rounded-lg border-soft-blue focus:ring-primary focus:border-primary bg-white dark:bg-slate-800 dark:text-white"
                                            placeholder="Tu correo electrónico principal"
                                            type="email"
                                            required
                                        />
                                        <button type="button" className="w-full bg-accent-teal text-white font-bold py-3 rounded-lg hover:bg-primary transition-colors">
                                            ENVIAR MI DIAGNÓSTICO
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Offer Section */}
            <section className="py-24 bg-white dark:bg-background-dark" id="options">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <FadeIn>
                        <h2 className="text-4xl font-extrabold text-primary dark:text-white mb-4">El camino al crecimiento real</h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Selecciona el nivel de acompañamiento que necesitas para transformar tu canal de YouTube.
                        </p>
                    </FadeIn>
                </div>
                <div className="max-w-4xl mx-auto px-4 mb-24">
                    <FadeIn delay={0.2}>
                        <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border border-soft-blue/20 ring-4 ring-primary/5">
                            <div className="absolute top-0 right-0 bg-primary text-white px-8 py-2 font-bold rounded-bl-2xl">
                                Más Popular
                            </div>
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-primary dark:text-white">Llamada de asesoría (60 min)</h3>
                                        <p className="text-accent-blue font-medium mt-1 uppercase tracking-wider">Sesión estratégica 1-a-1</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl font-black text-primary dark:text-white">$1,900 MXN</div>
                                        <div className="text-slate-500 font-medium">($120 USD aprox.)</div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-8 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-accent-teal shrink-0" />
                                            <span className="font-medium text-slate-700 dark:text-slate-300">Miniclase introductoria</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-accent-teal shrink-0" />
                                            <span className="font-medium text-slate-700 dark:text-slate-300">Análisis detallado de métricas</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-accent-teal shrink-0" />
                                            <span className="font-medium text-slate-700 dark:text-slate-300">Hoja de ruta con recomendaciones</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="text-accent-teal shrink-0" />
                                            <span className="font-medium text-slate-700 dark:text-slate-300">Optimización de títulos y miniaturas</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-primary/5 dark:bg-accent-teal/10 rounded-xl p-4 text-center mb-8 border border-primary/10">
                                    <p className="text-primary dark:text-accent-blue font-bold text-lg">
                                        "¡Al finalizar tendrás tu canal listo para crecer sin parar!"
                                    </p>
                                </div>
                                <Link href={stripeLink1900} target="_blank">
                                    <button className="w-full bg-primary text-white py-5 rounded-2xl text-xl font-bold hover:bg-black transition-all shadow-lg flex items-center justify-center gap-3">
                                        RESERVAR MI SESIÓN <CalendarDays />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Tripwires */}
                <div className="max-w-7xl mx-auto px-4">
                    <FadeIn>
                        <h3 className="text-2xl font-bold text-center mb-10 text-primary dark:text-white">Servicios Complementarios</h3>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FadeIn delay={0.1}>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-soft-blue/20 hover:border-accent-blue/50 transition-colors group h-full flex flex-col">
                                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                    <Clock />
                                </div>
                                <h4 className="text-xl font-bold mb-2 dark:text-white">Hora extra de asesoría</h4>
                                <p className="text-slate-500 mb-6 text-sm">¿Sientes que 60 min no son suficientes? Añade tiempo para profundizar.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-primary dark:text-white">$1,000 MXN</span>
                                    <button className="text-accent-teal font-bold hover:underline">Añadir +</button>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-soft-blue/20 hover:border-accent-blue/50 transition-colors group h-full flex flex-col">
                                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                    <Palette />
                                </div>
                                <h4 className="text-xl font-bold mb-2 dark:text-white">Kit de Miniaturas Pro</h4>
                                <p className="text-slate-500 mb-6 text-sm">3 plantillas editables para aumentar tu CTR inmediatamente.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-primary dark:text-white">$850 MXN</span>
                                    <button className="text-accent-teal font-bold hover:underline">Añadir +</button>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.3}>
                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-soft-blue/20 hover:border-accent-blue/50 transition-colors group h-full flex flex-col">
                                <div className="w-12 h-12 bg-accent-blue/10 rounded-lg flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-white transition-colors">
                                    <ListChecks />
                                </div>
                                <h4 className="text-xl font-bold mb-2 dark:text-white">Script Checklist</h4>
                                <p className="text-slate-500 mb-6 text-sm">La estructura exacta para retener a tu audiencia en cada video.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-bold text-primary dark:text-white">$450 MXN</span>
                                    <button className="text-accent-teal font-bold hover:underline">Añadir +</button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Upsell Section */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <FadeIn>
                        <div className="relative overflow-hidden bg-gradient-to-br from-accent-teal to-primary rounded-[2.5rem] p-8 md:p-16 border border-white/10">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-blue/20 rounded-full blur-3xl"></div>
                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-block bg-yellow-400 text-primary px-4 py-1 rounded-full text-xs font-black uppercase mb-6 tracking-widest">
                                        Oferta Exclusiva
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Paquete Llamada + Curso Intensivo '0 a 100,000 subs'</h2>
                                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                        Ahorra más del 20% al contratar la asesoría junto con nuestro curso completo. Domina el algoritmo, la edición y la monetización de un solo golpe.
                                    </p>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3">
                                            <Award className="text-yellow-400" />
                                            <span className="font-bold">Bono si reservas HOY</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-3xl p-10 text-primary text-center">
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Inversión Total</div>
                                    <div className="text-5xl font-black mb-2">$10,600 MXN</div>
                                    <div className="text-lg text-slate-500 mb-8">($620 USD aprox.)</div>
                                    <Link href={stripeLink10600} target="_blank">
                                        <button className="w-full bg-primary text-white py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-transform shadow-xl mb-4">
                                            ¡SÍ, QUIERO EL PAQUETE!
                                        </button>
                                    </Link>
                                    <p className="text-xs text-slate-400 font-medium mt-2">Pago seguro procesado por Stripe</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-24 bg-background-light dark:bg-background-dark" id="results">
                <div className="max-w-7xl mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-4xl font-extrabold text-primary dark:text-white text-center mb-16 underline decoration-accent-blue decoration-4 underline-offset-8">
                            Nuestros Alumnos Hablan con Números
                        </h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuCF_RpYqTdyjv1CnL3A8lt10vs7SMpJ5ys7RHe84-rR73_e9ANTlCC5IyXV2Xg_p5nBPFNr0ijstpzSwCf-kodhSc6dlbd4PEn-Kxgj02Ii73NgCdJXpmL_O_r7jZGYYgsmjnX1nd8NKCKJyfBBGI9rFsqNmkWYGuy1xb7QXrMyisFeEQ81zAX-qyuQVgYQNf3BIl-MG8GFF1YPw0XKIGerXm2QItSpQ-_taNKWcD5qKYoyhl7I3AzdRDdb6NmL7ivSjhodfgg0BZKD",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ63pp0eu3rOw6kK7_07n6EveLSMKaMrnEFPn7nN7X-BQZOKDGNsDdnKbx3KslqcxegRyK1BIxUnKeTPA7ZBow4g-XCdS-twrD4z5JuUc_5D3kfVKDMkWhcvarayY5BSzjl7YJriMXHN3nrM0eWIpTzvSAqGOBZVRDT05MUOU6Y7NG4yCyzMFGVMl1FnjOZcUhExr17sVs8JZm7Loei2RsQNc37a6uZtxE6-a-LW2TqTAa2NW4_lu05kP8mvkkGrvXz73o3Sq_W8j6",
                            "https://lh3.googleusercontent.com/aida-public/AB6AXuBbzQoiE9BvzA0DOC5OmLxq38JEcgyhmIxkNTXOSUC0DXkjk2vOQ6CfoWg_uW_vwJ-LiiqeU3AYQJs1z41uzqNOiOPs2B184KW3WoSy3-_RMDI4ALVULrKOt-Y2ZwddKTgSD3SpZAywzeB8URLJgHHwvM8Sz-_sbXqG3vXVPlpFxtLIITMWaM0JyInaLo8oj4DE1q3MkDsaxOvuMog2ZUDYownJnnitxKZqTKuDz9gya6IpTEDRF80cu5FpcEY7YSjXNm57CsbmIm1g"
                        ].map((img, i) => (
                            <FadeIn key={i} delay={i * 0.2}>
                                <div className="rounded-2xl overflow-hidden shadow-brand border-2 border-transparent hover:border-accent-blue transition-all h-full">
                                    <img alt={`Analytics ${i + 1}`} className="w-full h-full object-cover" src={img} />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Costo de no actuar */}
            <section className="py-24 bg-soft-blue/20 dark:bg-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-primary dark:text-white mb-8">¿Cuánto te cuesta seguir igual?</h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>Cada semana que pasas subiendo videos sin una estrategia es <strong>tiempo que nunca recuperarás.</strong></p>
                            <p>Imagina seguir otros 6 meses invirtiendo horas de edición para solo 100 vistas. La frustración y el cansancio son reales, y están matando tu potencial creativo.</p>
                            <p className="text-primary dark:text-white font-bold text-2xl">Deja de quemar tu tiempo y empieza a construir tu audiencia hoy.</p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
