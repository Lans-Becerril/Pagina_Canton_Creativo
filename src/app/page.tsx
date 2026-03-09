"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { CheckCircle2, TrendingUp, Users, HeartHandshake, BarChart3, PlaySquare, ListChecks, MousePointer2, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState<number>(0);

  const SUCCESS_CASES = [
    {
      id: 1,
      client: "Toshi",
      kicker: "Caso de Éxito - E-commerce",
      image: "/portafolio/toshi.webp",
      problem: "Toshi tenía un gran producto pero su presencia digital no reflejaba la calidad de su marca. Las ventas estaban estancadas y la confianza del usuario era baja debido a una interfaz obsoleta.",
      solution: "Rediseñamos toda su identidad digital y lanzamos una landing page optimizada para conversión. Implementamos una estrategia de contenido visual que conectó emocionalmente con su audiencia.",
      results: "Aumento del 150% en ventas en los primeros 3 meses y una percepción de marca premium reconocida en su nicho.",
      collage: [
        { src: "/portafolio/toshi.webp", top: "10%", left: "5%", width: "45%", rotate: -3 },
        { src: "/portafolio/tadaima.webp", top: "25%", right: "8%", width: "40%", rotate: 6 },
        { src: "/portafolio/big.webp", bottom: "15%", left: "10%", width: "50%", rotate: -2 },
        { src: "/portafolio/ceb.webp", top: "45%", right: "15%", width: "35%", rotate: 4 },
        { src: "/portafolio/dot.webp", bottom: "5%", right: "5%", width: "42%", rotate: -5 },
      ]
    },
    {
      id: 2,
      client: "Tadaima",
      kicker: "Caso de Éxito - Brand Awareness",
      image: "/portafolio/tadaima.webp",
      problem: "Tadaima buscaba posicionarse como referente en su sector, pero sus redes sociales se sentían desorganizadas y sin un mensaje claro. Llegaban a mucha gente, pero no a la correcta.",
      solution: "Establecimos un sistema de gestión de redes basado en autoridad. Creamos una narrativa visual coherente y profesional que destacó sus valores únicos.",
      results: "Crecimiento orgánico de +50k seguidores calificados y una tasa de interacción que superó el promedio de la industria.",
      collage: [
        { src: "/portafolio/tadaima.webp", top: "12%", left: "8%", width: "42%", rotate: 5 },
        { src: "/portafolio/mariscos.webp", top: "20%", right: "12%", width: "48%", rotate: -4 },
        { src: "/portafolio/dental.webp", bottom: "18%", left: "5%", width: "44%", rotate: 3 },
        { src: "/portafolio/marraniza.webp", top: "50%", right: "10%", width: "38%", rotate: -6 },
        { src: "/portafolio/maxwell.webp", bottom: "10%", right: "15%", width: "40%", rotate: 7 },
      ]
    }
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#184c56]/10 text-[#184c56] rounded-full">
              Agencia de Crecimiento Digital
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#053040] leading-[1.1] mb-6 max-w-4xl mx-auto">
              Tú lidera tu negocio, nosotros nos encargamos de que <span className="text-[#577c8e]">nunca te falten clientes.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#184c56] max-w-2xl mx-auto mb-10 leading-relaxed">
              Haz de tu presencia digital una máquina de conversión con la creatividad de nuestra agencia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-[#053040] text-[#ffffff] rounded-xl font-bold text-lg shadow-xl shadow-[#053040]/20 hover:scale-105 transition-transform">
                  Quiero escalar mi negocio
                </button>
              </a>
            </div>
          </FadeIn>
        </div>
        {/* Decorative element */}
        <div className="absolute -z-10 top-0 right-0 w-1/3 h-full bg-[#f4efeb]/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </header>

      {/* 2. Identificar el problema / Empatía */}
      <section className="py-24 bg-[#053040]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <span className="text-[#577c8e] font-bold uppercase tracking-widest text-sm">Tú domina tu negocio, nosotros nos encargamos del algoritmo ;)</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-tight text-[#ffffff]">
                Sabes que tienes un gran mensaje, pero pasas más tiempo adivinando qué publicar que cerrando clientes.
              </h2>
              <p className="mt-6 text-[#cdd7e0] text-xl italic font-light">
                ""No cuentes a la gente a la que llegas, llega a la gente que cuenta." — David Ogilvy"
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-[#184c56] border border-[#cdd7e0]/10 p-8 rounded-2xl relative overflow-hidden shadow-lg">
                <CheckCircle2 className="text-[#577c8e] w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-[#ffffff]">6+ Años de experiencia...</h3>
                <p className="text-[#cdd7e0] leading-relaxed text-lg relative z-10">
                  ayudando a decenas de marcas a profesionalizar su imagen y multiplicar su facturación. Somos tu equipo de crecimiento a la medida.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. EL PLAN (SERVICIOS - RESTAURAR) */}
      <section className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/fondos/fondoservicios.webp')" }}>


        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#053040] drop-shadow-lg mb-4">El motor de ventas que tu negocio necesita</h2>
              <p className="text-black text-lg font-medium drop-shadow-md">Deja de publicar a ciegas y empieza a operar con estrategia. Implementamos 4 engranajes probados para que pases de perseguir prospectos a tener un sistema que los atraiga.</p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* 1. Producción Audiovisual */}
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden bg-[#ffffff] group-hover:bg-[#053040] p-8 rounded-2xl shadow-sm border border-[#cdd7e0]/20 hover:border-[#577c8e] transition-all duration-500 group h-full">
                {/* Video de fondo */}
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
                  src="/videosservicios/produccion.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                {/* Overlay oscuro para contraste */}
                <div className="absolute inset-0 bg-[#053040] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out rounded-2xl" />
                {/* Contenido */}
                <div className="relative z-10">
                  <div className="mx-auto w-14 h-14 bg-[#f4efeb] group-hover:bg-[#577c8e] flex items-center justify-center rounded-xl mb-6 transition-all transform group-hover:-translate-y-2 group-hover:rotate-[360deg] duration-500">
                    <PlaySquare className="text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300">Producción Audiovisual</h4>
                  <p className="text-[#184c56] group-hover:text-[#cdd7e0] text-sm leading-relaxed transition-colors duration-300">Dando voz e imagen a tu marca, transformando ideas en historias que se sienten, se escuchan y emocionan.</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveService(0); }}
                    className="mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* 2. Creación de Páginas Web */}
            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden bg-[#ffffff] group-hover:bg-[#053040] p-8 rounded-2xl shadow-sm border border-[#cdd7e0]/20 hover:border-[#577c8e] transition-all duration-500 group h-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
                  src="/videosservicios/web.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-[#053040] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out rounded-2xl" />
                <div className="relative z-10">
                  <div className="mx-auto w-14 h-14 bg-[#f4efeb] group-hover:bg-[#577c8e] flex items-center justify-center rounded-xl mb-6 transition-all transform group-hover:-translate-y-2 group-hover:scale-110 duration-300">
                    <Globe className="text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300">Creación de Páginas Web</h4>
                  <p className="text-[#184c56] group-hover:text-[#cdd7e0] text-sm leading-relaxed transition-colors duration-300">Para dar hogar a tu presencia digital, construyendo espacios donde la experiencia del usuario se convierta en confianza.</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveService(1); }}
                    className="mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* 3. Gestión de Redes Sociales */}
            <FadeIn delay={0.3}>
              <div className="relative overflow-hidden bg-[#ffffff] group-hover:bg-[#053040] p-8 rounded-2xl shadow-sm border border-[#cdd7e0]/20 hover:border-[#577c8e] transition-all duration-500 group h-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
                  src="/videosservicios/redes.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-[#053040] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out rounded-2xl" />
                <div className="relative z-10">
                  <div className="mx-auto w-14 h-14 bg-[#f4efeb] group-hover:bg-[#577c8e] flex items-center justify-center rounded-xl mb-6 transition-all transform group-hover:-translate-y-2 group-hover:scale-110 duration-300">
                    <ListChecks className="text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300">Gestión de Redes Sociales</h4>
                  <p className="text-[#184c56] group-hover:text-[#cdd7e0] text-sm leading-relaxed transition-colors duration-300">Para darle vida al sistema nervioso de la empresa, asegurando que cada dato llegue a su destino con fluidez y precisión.</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveService(2); }}
                    className="mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* 4. Publicidad */}
            <FadeIn delay={0.4}>
              <div className="relative overflow-hidden bg-[#ffffff] group-hover:bg-[#053040] p-8 rounded-2xl shadow-sm border border-[#cdd7e0]/20 hover:border-[#577c8e] transition-all duration-500 group h-full">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-in-out"
                  src="/videosservicios/publicidad.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-[#053040] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out rounded-2xl" />
                <div className="relative z-10">
                  <div className="mx-auto w-14 h-14 bg-[#f4efeb] group-hover:bg-[#577c8e] flex items-center justify-center rounded-xl mb-6 transition-all transform group-hover:-translate-y-2 group-hover:rotate-[360deg] duration-500">
                    <MousePointer2 className="text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-[#053040] group-hover:text-[#ffffff] transition-colors duration-300">Publicidad</h4>
                  <p className="text-[#184c56] group-hover:text-[#cdd7e0] text-sm leading-relaxed transition-colors duration-300">Campañas enfocadas en la adquisición de clientes para dar impulso y alcance a tu mensaje y conectar tu propósito con las personas indicadas.</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveService(3); }}
                    className="mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Prueba Social */}
      <section className="py-24 bg-[#ffffff] border-[#ffffff]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-black text-[#053040] mb-4">Recomendaciones de gente chida 🤙🏼</h2>
          <p className="text-[#184c56] text-lg">Los que los mejores tiene para decirte.</p>
        </div>
        <FadeIn>
          <CoverflowCarousel />
        </FadeIn>
      </section>

      {/* 5. MARCAS QUE CONFÍAN EN NOSOTROS - Logo Marquee */}
      <section className="relative py-20 overflow-hidden bg-[url('/fondos/clientes-bg.webp')] bg-cover bg-center bg-no-repeat">
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#053040]/85 z-0" />

        {/* Contenido */}
        <div className="relative z-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Empresas que han confiado en el Cantón</h2>
              <p className="text-[#cdd7e0] text-lg">y han escalado sus resultados con nosotros.</p>
            </div>
          </FadeIn>

          {/* Marquee container */}
          <div className="relative w-full">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#053040] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#053040] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track — smooth slowdown on hover using CSS variables */}
            <div
              className="flex items-center gap-12 animate-[marquee-scroll_var(--marquee-duration)_linear_infinite] hover:[--marquee-duration:50s] transition-[--marquee-duration] duration-500 ease-in-out w-max px-12"
              style={{ "--marquee-duration": "25s" } as React.CSSProperties}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <div
                  key={n}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={`/logos/logo-${n}.svg`}
                    alt={`Cliente ${n}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              {/* Duplicated for seamless loop */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <div
                  key={`dup-${n}`}
                  className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md overflow-hidden flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <img
                    src={`/logos/logo-${n}.svg`}
                    alt={`Cliente ${n}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COSTO DE NO ACTUAR Y PORTAFOLIO */}
      <section className="py-24 bg-[#f4efeb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center md:text-left mb-16">
            <FadeIn>
              <h2 className="text-4xl font-black text-[#053040] mb-6 max-w-4xl">¿Cuánto dinero estás perdiendo por no tener una presencia digital profesional?</h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
              {/* 10 containers masonry */}
              {/* 1 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/toshi.webp" alt="Toshi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/C9BSYrQPGfF/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 2 */}
              <div className="group relative col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/tadaima.webp" alt="Tadaima" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/C7VP3n-h3e2/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 3 */}
              <div className="group relative col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/big.webp" alt="Big" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/DUMiYkDgE_8/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 4 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/ceb.webp" alt="CEB" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/DHpAvs7poYa/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 5 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/dot.webp" alt="Dot" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/reels/C-gt5vyNkiA/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 6 */}
              <div className="group relative col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/mariscos.webp" alt="Mariscos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/reels/DSnxFq6jnyF/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 7 */}
              <div className="group relative col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/dental.webp" alt="Dental" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/reels/DSTR2DCkUZP/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 8 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/marraniza.webp" alt="Marraniza" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/DTtadGdkRI7/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 9 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/maxwell.webp" alt="Maxwell" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.instagram.com/p/DU1HlD2iFo4/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
              {/* 10 */}
              <div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <img src="/portafolio/nabota.webp" alt="Nabota" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a href="https://www.facebook.com/profile.php?id=61588134355863" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors">Ver más</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-32 bg-[#053040] relative overflow-hidden border-[#ffffff]/10">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#577c8e] rounded-full blur-[120px]"></div>
        </div>
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-[#ffffff] mb-10 leading-tight">El mercado no espera. ¿Listo para delegar y dominar tu nicho?</h2>
            <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer">
              <button className="w-full sm:w-auto px-12 py-8 bg-[#ffffff] text-[#053040] text-2xl md:text-3xl font-black rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Hablemos de tu negocio
              </button>
            </a>
            <p className="mt-8 text-[#cdd7e0] font-medium">Sin compromisos. Solo platiquemos sobre tu negocio.</p>
          </div>
        </FadeIn>
      </section>
      {/* Modal Interactivo de Servicios */}
      <AnimatePresence>
        {activeService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl h-[85vh] bg-[#053040] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-white/10"
              style={{
                backgroundImage: "url('/fondos/modal-bg-1.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 backdrop-blur-md border border-white/20"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Columna Izquierda: Collage Asimétrico */}
                <div className="relative h-[40vh] lg:h-full bg-gradient-to-br from-black/40 to-transparent p-8 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Background decorative text/element */}
                    <span className="text-[12rem] font-black text-white/5 select-none pointer-events-none">RESULTADOS</span>
                  </div>

                  {SUCCESS_CASES[activeCase % SUCCESS_CASES.length].collage.map((img, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute',
                        top: img.top,
                        left: img.left,
                        right: img.right,
                        bottom: img.bottom,
                        width: img.width,
                        rotate: img.rotate,
                        zIndex: 10 + i
                      }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                      className="group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
                      whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
                      onClick={() => setActiveCase(i % SUCCESS_CASES.length)}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <img
                          src={img.src}
                          alt="Caso de éxito"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#053040]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-bold text-sm tracking-widest uppercase">Más info.</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Columna Derecha: StoryBrand Text */}
                <div className="relative h-full flex flex-col justify-center p-8 lg:p-16 bg-white/95 backdrop-blur-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-md"
                    >
                      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest uppercase bg-[#577c8e]/10 text-[#577c8e] rounded-full">
                        {SUCCESS_CASES[activeCase % SUCCESS_CASES.length].kicker}
                      </span>
                      <h3 className="text-4xl lg:text-5xl font-black text-[#053040] mb-8 leading-tight">
                        {SUCCESS_CASES[activeCase % SUCCESS_CASES.length].client}
                      </h3>

                      <div className="space-y-8">
                        <div>
                          <h4 className="flex items-center gap-2 text-[#577c8e] font-bold uppercase tracking-widest text-xs mb-3">
                            <span className="w-8 h-[2px] bg-[#577c8e]"></span>
                            El Problema
                          </h4>
                          <p className="text-[#184c56] text-lg leading-relaxed font-medium italic">
                            "{SUCCESS_CASES[activeCase % SUCCESS_CASES.length].problem}"
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 text-[#053040] font-bold uppercase tracking-widest text-xs mb-3">
                            <span className="w-8 h-[2px] bg-[#053040]"></span>
                            La Solución y Resultados
                          </h4>
                          <p className="text-[#184c56] text-lg leading-relaxed">
                            {SUCCESS_CASES[activeCase % SUCCESS_CASES.length].solution}
                          </p>
                          <div className="mt-6 p-6 bg-[#053040] rounded-2xl shadow-xl shadow-[#053040]/10">
                            <p className="text-white font-black text-xl leading-tight">
                              {SUCCESS_CASES[activeCase % SUCCESS_CASES.length].results}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 flex items-center gap-4">
                        <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer" className="flex-1">
                          <button className="w-full py-4 bg-[#053040] text-white rounded-xl font-black text-lg shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Quiero resultados así
                          </button>
                        </a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
