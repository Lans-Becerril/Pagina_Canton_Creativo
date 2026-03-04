import { FadeIn } from "@/components/FadeIn";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { CheckCircle2, TrendingUp, Users, HeartHandshake, BarChart3, PlaySquare, ListChecks, MousePointer2, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden bg-[#ffffff] dark:bg-[#053040]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#184c56]/10 text-[#184c56] dark:bg-[#cdd7e0]/10 dark:text-[#cdd7e0] rounded-full">
              Marketing de Resultados
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#053040] dark:text-[#ffffff] leading-[1.1] mb-6 max-w-4xl mx-auto">
              Si quieres dominar tu nicho, <span className="text-[#577c8e]">multiplica tus ventas.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#184c56] dark:text-[#cdd7e0] max-w-2xl mx-auto mb-10 leading-relaxed">
              Haz de tu presencia digital una máquina de conversión predecible con nuestra agencia creativa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/consultoria">
                <button className="px-8 py-4 bg-[#053040] dark:bg-[#577c8e] text-[#ffffff] rounded-xl font-bold text-lg shadow-xl shadow-[#053040]/20 hover:scale-105 transition-transform">
                  Agendar sesión
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
        {/* Decorative element */}
        <div className="absolute -z-10 top-0 right-0 w-1/3 h-full bg-[#f4efeb]/50 dark:bg-[#184c56]/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </header>

      {/* 2. Identificar el problema / Empatía */}
      <section className="py-24 bg-[#f4efeb] dark:bg-[#184c56]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="text-[#577c8e] dark:text-[#cdd7e0] font-bold uppercase tracking-widest text-sm">El Desafío</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-[#053040] dark:text-[#ffffff]">
                Sabes que tienes un gran mensaje, pero pasas más tiempo editando y adivinando qué publicar que cerrando clientes.
              </h2>
              <p className="mt-6 text-[#184c56] dark:text-[#cdd7e0] text-xl italic font-light">
                "El estancamiento agota."
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-[#ffffff] dark:bg-[#053040] border border-[#cdd7e0]/20 dark:border-[#ffffff]/10 p-8 rounded-2xl relative overflow-hidden shadow-lg">
                <CheckCircle2 className="text-[#577c8e] w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[#053040] dark:text-[#ffffff]">3+ Años de Experiencia</h3>
                <p className="text-[#184c56] dark:text-[#cdd7e0] leading-relaxed text-lg relative z-10">
                  Llevamos más de 3 años descifrando los algoritmos y las redes para que tú no tengas que hacerlo. No somos solo una agencia, somos tu departamento de crecimiento.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. EL PLAN (SERVICIOS - RESTAURAR) */}
      <section className="py-24 max-w-7xl mx-auto px-4 bg-[#ffffff] dark:bg-[#053040]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#053040] dark:text-[#ffffff] mb-4">El Plan Estratégico</h2>
            <p className="text-[#184c56] dark:text-[#cdd7e0] text-lg">Un ecosistema diseñado para escalar tu marca personal o comercial.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl border border-[#cdd7e0]/20 dark:border-transparent hover:border-[#577c8e] transition-colors group h-full">
              <div className="w-14 h-14 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#577c8e] transition-colors">
                <PlaySquare className="text-[#053040] dark:text-[#ffffff] group-hover:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#053040] dark:text-[#ffffff]">Producción Audiovisual</h4>
              <p className="text-[#184c56] dark:text-[#cdd7e0] text-sm leading-relaxed">Contenido visual de alto impacto optimizado para retención y viralidad.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl border border-[#cdd7e0]/20 dark:border-transparent hover:border-[#577c8e] transition-colors group h-full">
              <div className="w-14 h-14 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#577c8e] transition-colors">
                <ListChecks className="text-[#053040] dark:text-[#ffffff] group-hover:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#053040] dark:text-[#ffffff]">Gestión de Redes</h4>
              <p className="text-[#184c56] dark:text-[#cdd7e0] text-sm leading-relaxed">Estrategia y administración de comunidades para crear autoridad real.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl border border-[#cdd7e0]/20 dark:border-transparent hover:border-[#577c8e] transition-colors group h-full">
              <div className="w-14 h-14 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#577c8e] transition-colors">
                <MousePointer2 className="text-[#053040] dark:text-[#ffffff] group-hover:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#053040] dark:text-[#ffffff]">Publicidad</h4>
              <p className="text-[#184c56] dark:text-[#cdd7e0] text-sm leading-relaxed">Campañas de Paid Media enfocadas en ROI y adquisición de leads calificados.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl border border-[#cdd7e0]/20 dark:border-transparent hover:border-[#577c8e] transition-colors group h-full">
              <div className="w-14 h-14 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-xl mb-6 group-hover:bg-[#577c8e] transition-colors">
                <Globe className="text-[#053040] dark:text-[#ffffff] group-hover:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#053040] dark:text-[#ffffff]">Páginas Web</h4>
              <p className="text-[#184c56] dark:text-[#cdd7e0] text-sm leading-relaxed">Diseño de landing pages de alta conversión que venden mientras duermes.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Prueba Social */}
      <section className="py-24 bg-[#f4efeb] dark:bg-[#184c56] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-black text-[#053040] dark:text-[#ffffff] mb-4">Historias de Éxito</h2>
          <p className="text-[#184c56] dark:text-[#cdd7e0] text-lg">Casos reales de marcas que escalaron con Cantón Creativo.</p>
        </div>
        <FadeIn>
          <CoverflowCarousel />
        </FadeIn>
      </section>

      {/* 5. ESTADÍSTICAS (NUEVA UBICACIÓN) */}
      <section className="py-24 max-w-7xl mx-auto px-4 bg-[#ffffff] dark:bg-[#053040]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#053040] dark:text-[#ffffff] mb-4">Resultados que hablan por sí solos.</h2>
            <p className="text-[#184c56] dark:text-[#cdd7e0] text-lg max-w-2xl mx-auto">Métricas reales de clientes que decidieron dejar de improvisar y comenzaron a escalar con estrategia.</p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl group h-full cursor-pointer hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <Users className="w-10 h-10 text-[#053040] dark:text-[#ffffff] transition-colors duration-300 group-hover:text-[#577c8e]" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-[#053040] dark:text-[#ffffff]">Leads Generados</h4>
              <p className="text-[#577c8e] dark:text-[#cdd7e0] font-bold text-lg">+15,000 acumulados</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl group h-full cursor-pointer hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="w-10 h-10 text-[#053040] dark:text-[#ffffff] transition-colors duration-300 group-hover:text-[#577c8e]" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-[#053040] dark:text-[#ffffff]">ROI Promedio</h4>
              <p className="text-[#577c8e] dark:text-[#cdd7e0] font-bold text-lg">4.5x</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl group h-full cursor-pointer hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <HeartHandshake className="w-10 h-10 text-[#053040] dark:text-[#ffffff] transition-colors duration-300 group-hover:text-[#577c8e]" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-[#053040] dark:text-[#ffffff]">Engagement</h4>
              <p className="text-[#577c8e] dark:text-[#cdd7e0] font-bold text-lg">+200% aumento</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-[#f4efeb] dark:bg-[#184c56] p-8 rounded-2xl group h-full cursor-pointer hover:shadow-xl transition-all flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#ffffff] dark:bg-[#053040] flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="w-10 h-10 text-[#053040] dark:text-[#ffffff] transition-colors duration-300 group-hover:text-[#577c8e]" />
              </div>
              <h4 className="text-2xl font-black mb-2 text-[#053040] dark:text-[#ffffff]">Ventas Directas</h4>
              <p className="text-[#577c8e] dark:text-[#cdd7e0] font-bold text-lg">Alza sostenible</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. COSTO DE NO ACTUAR Y PORTAFOLIO (CORRECCIÓN MASONRY) */}
      <section className="py-24 bg-[#f4efeb] dark:bg-[#184c56] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center md:text-left mb-16">
            <FadeIn>
              <h2 className="text-4xl font-black text-[#053040] dark:text-[#ffffff] mb-6 max-w-4xl">¿Cuánto dinero y oportunidades estás perdiendo por no tener una presencia digital profesional?</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
              {/* 10 containers masonry */}
              {/* 1 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" alt="Portafolio 1" className="w-full h-full object-cover" />
              </div>
              {/* 2 */}
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Portafolio 2" className="w-full h-full object-cover" />
              </div>
              {/* 3 */}
              <div className="col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Portafolio 3" className="w-full h-full object-cover" />
              </div>
              {/* 4 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" alt="Portafolio 4" className="w-full h-full object-cover" />
              </div>
              {/* 5 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1533750349088-cd071a92f449?q=80&w=800&auto=format&fit=crop" alt="Portafolio 5" className="w-full h-full object-cover" />
              </div>
              {/* 6 */}
              <div className="col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=800&auto=format&fit=crop" alt="Portafolio 6" className="w-full h-full object-cover" />
              </div>
              {/* 7 */}
              <div className="col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop" alt="Portafolio 7" className="w-full h-full object-cover" />
              </div>
              {/* 8 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="Portafolio 8" className="w-full h-full object-cover" />
              </div>
              {/* 9 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" alt="Portafolio 9" className="w-full h-full object-cover" />
              </div>
              {/* 10 */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop" alt="Portafolio 10" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-32 bg-[#ffffff] dark:bg-[#053040] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#577c8e] rounded-full blur-[120px]"></div>
        </div>
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#053040] dark:text-[#ffffff] mb-10 leading-tight">¿Listo para escalar sin límites?</h2>
            <Link href="/consultoria">
              <button className="w-full sm:w-auto px-12 py-8 bg-[#053040] dark:bg-[#577c8e] text-[#ffffff] text-2xl md:text-3xl font-black rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Hablemos de tu negocio
              </button>
            </Link>
            <p className="mt-8 text-[#184c56] dark:text-[#cdd7e0] font-medium">Sin compromisos. Solo una charla sobre crecimiento.</p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
