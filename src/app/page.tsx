"use client";

import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/FadeIn";
import { CoverflowCarousel } from "@/components/CoverflowCarousel";
import { CheckCircle2, TrendingUp, Users, HeartHandshake, BarChart3, PlaySquare, ListChecks, MousePointer2, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState<number>(0);
  const [shuffledPortfolio, setShuffledPortfolio] = useState<any[]>([]);

  // Shuffle Portfolio on mount (SSR Safe)
  useEffect(() => {
    const allCases = SERVICES_DATA.flatMap((service, sIdx) =>
      service.cases.map((item, cIdx) => ({ ...item, sIdx, cIdx }))
    );
    const shuffled = [...allCases].sort(() => Math.random() - 0.5);
    setShuffledPortfolio(shuffled);
  }, []);

  // Scroll Lock
  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeService]);

  const SERVICES_DATA = [
    {
      title: "Producción Audiovisual",
      cases: [
        { client: "Toshi", kicker: "Audiovisual - Viral", media: "/videosservicios/produccion.webm", problem: "Toshi necesitaba un video que capturara la esencia de su marca de forma disruptiva y viral.", solution: "Producimos un reel de alto impacto visual con transiciones dinámicas.", results: "+200k reproducciones orgánicas." },
        { client: "Tadaima", kicker: "Audiovisual - Storytelling", media: "/videosservicios/produccion.webm", problem: "Falta de conexión emocional con el espectador en sus anuncios.", solution: "Guionizamos y grabamos un spot enfocado en la experiencia del cliente.", results: "Incremento del 40% en CTR." },
        { client: "Big", kicker: "Audiovisual - Evento", media: "/videosservicios/produccion.webm", problem: "Necesitaban documentar su evento anual con calidad cinematográfica.", solution: "Cobertura multi-cámara y edición after-movie profesional.", results: "Material premium para preventa 2026." },
        { client: "Mariscos", kicker: "Audiovisual - Foodie", media: "/videosservicios/produccion.webm", problem: "Su comida se veía bien, pero no 'antojaba' en video.", solution: "Tomas macro y diseño sonoro (ASMR) gastronómico.", results: "Aumento de reservas vía Instagram." },
        { client: "Dental", kicker: "Audiovisual - Edu", media: "/videosservicios/produccion.webm", problem: "Procedimientos complejos difícilmente explicables.", solution: "Videos educativos con animaciones y voz en off profesional.", results: "Reducción de dudas en consulta." },
      ]
    },
    {
      title: "Creación de Páginas Web",
      cases: [
        { client: "Toshi Shop", kicker: "E-commerce Premium", media: "/portafolio/toshi.webp", problem: "Ventas estancadas por un sitio web lento y confuso.", solution: "Tienda online custom en Next.js con UX optimizada.", results: "150% más de ventas en 3 meses." },
        { client: "CEB México", kicker: "Landing Page - Leads", media: "/portafolio/ceb.webp", problem: "Mucho tráfico pero pocos formularios completados.", solution: "Diseño de landing enfocada en conversión con StoryBrand.", results: "Costo por lead reducido a la mitad." },
        { client: "Dot Agencia", kicker: "Web Corporativa", media: "/portafolio/dot.webp", problem: "Sitio web que no reflejaba su autoridad actual.", solution: "Web minimalista con animaciones premium y alta velocidad.", results: "Imagen de marca renovada." },
        { client: "Maxwell", kicker: "SaaS Platform", media: "/portafolio/maxwell.webp", problem: "Plataforma compleja difícil de navegar para el usuario.", solution: "Dashboard intuitivo y diseño de interfaz moderno.", results: "Mejora en la retención de usuarios." },
        { client: "Nabota", kicker: "One Page - Médico", media: "/portafolio/nabota.webp", problem: "Presencia digital inexistente para lanzamiento de producto.", solution: "One-page elegante con toda la información clave necesaria.", results: "Lanzamiento exitoso con presencia sólida." },
      ]
    },
    {
      title: "Gestión de Redes Sociales",
      cases: [
        { client: "Tadaima Social", kicker: "Community - Expert", media: "/portafolio/tadaima.webp", problem: "Redes abandonadas y sin estrategia de contenido clara.", solution: "Gestión 360 con pilares de contenido de autoridad.", results: "+50k seguidores orgánicos." },
        { client: "Marraniza", kicker: "Growth Strategy", media: "/portafolio/marraniza.webp", problem: "Interacción nula a pesar de tener muchos seguidores.", solution: "Dinámicas interactivas y contenido de tendencia relevante.", results: "Engagement rate triplicado." },
        { client: "Big Brand", kicker: "Branding Visual", media: "/portafolio/big.webp", problem: "Estética de feed desordenada y poco profesional.", solution: "Design System para redes y curaduría visual estricta.", results: "Feed de clase mundial." },
        { client: "Mariscos VIP", kicker: "Influencer Marketing", media: "/portafolio/mariscos.webp", problem: "Necesitaban llegar a gente nueva en su ciudad.", solution: "Campaña con micro-influencers locales y contenido real.", results: "Tráfico constante al local físico." },
        { client: "Dental Care", kicker: "Personal Brand", media: "/portafolio/dental.webp", problem: "El doctor no lograba generar confianza en digital.", solution: "Estrategia de videos de cara a cámara con tips útiles.", results: "Agenda llena por 2 meses." },
      ]
    },
    {
      title: "Publicidad",
      cases: [
        { client: "Ads King", kicker: "Google & Meta", media: "/portafolio/toshi.webp", problem: "Inversión publicitaria sin retorno claro o medible.", solution: "Embudo de ventas completo con retargeting dinámico.", results: "ROAS de 5.5x garantizado." },
        { client: "Lead Master", kicker: "Ads - B2B", media: "/portafolio/ceb.webp", problem: "Leads de baja calidad que no compraban nada.", solution: "Segmentación avanzada por intereses y comportamiento.", results: "Leads calificados listos para cierre." },
        { client: "Scalers", kicker: "Escalamiento", media: "/portafolio/dot.webp", problem: "Miedo a invertir más por no saber si funcionaría.", solution: "Pruebas A/B constantes de creativos y audiencias.", results: "Presupuesto escalado con éxito." },
        { client: "Local Boom", kicker: "Ads - Local", media: "/portafolio/mariscos.webp", problem: "Poca afluencia de clientes entre semana.", solution: "Anuncios geolocalizados con ofertas relámpago.", results: "Local lleno todos los días." },
        { client: "Full Conversion", kicker: "E-comm Ads", media: "/portafolio/maxwell.webp", problem: "Carritos abandonados sin una estrategia de recuperación.", solution: "Campañas de remarketing con cupones personalizados.", results: "Recuperación del 20% de carritos." },
      ]
    }
  ];

  const COLLAGE_COORDS = [
    { top: "15%", left: "15%", width: "50%", rotate: -5 },
    { top: "25%", right: "15%", width: "45%", rotate: 6 },
    { bottom: "15%", left: "15%", width: "48%", rotate: -3 },
    { top: "40%", right: "10%", width: "42%", rotate: 4 },
    { bottom: "10%", right: "12%", width: "40%", rotate: -7 },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <header className="relative pt-20 pb-32 overflow-hidden bg-[#ffffff]">
        <ParticleBackground id="particles-hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="relative">
              <div>
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#184c56]/10 text-[#184c56] rounded-full">
                  Agencia de publicidad digital
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#053040] leading-[1.1] mb-6 max-w-4xl mx-auto">
                  Tú lidera tu negocio, nosotros nos encargamos de que <span className="text-[#577c8e]">nunca te falten clientes.</span>
                </h1>
              </div>
              <div>
                <p className="text-lg md:text-xl text-[#184c56] max-w-2xl mx-auto mb-10 leading-relaxed">
                  Haz de tu presencia digital una máquina de conversión con la creatividad de nuestra agencia.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer px-8 py-4 bg-[#053040] text-[#ffffff] rounded-xl font-bold text-lg shadow-xl shadow-[#053040]/20 hover:scale-105 transition-transform">
                      Quiero escalar mi negocio
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* 2. Identificar el problema / Empatía */}
      <section className="relative py-24 bg-[#053040] overflow-hidden">
        {/* Decorative parallax orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#577c8e]/10 rounded-full blur-[120px] -z-10 pointer-events-none"
        />
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
      <section className="relative py-24 overflow-hidden bg-[#f4efeb]">


        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#053040] mb-4">El motor de ventas que tu negocio necesita</h2>
              <p className="text-black text-lg font-medium">Deja de publicar a ciegas y empieza a operar con estrategia. Implementamos 4 engranajes probados para que pases de perseguir prospectos a tener un sistema que los atraiga.</p>
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
                    className="cursor-pointer mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
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
                    className="cursor-pointer mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
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
                    className="cursor-pointer mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
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
                    className="cursor-pointer mt-4 px-6 py-2 bg-transparent border border-[#053040]/30 text-[#053040] group-hover:border-white/50 group-hover:text-white rounded-full hover:bg-white hover:text-[#053040] transition-all font-bold text-sm"
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Empresas que han confiado en el Cantón...</h2>
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
          <div className="text-center md:text-right mb-16">
            <FadeIn>
              <h2 className="text-4xl font-black text-[#053040] mb-3 max-w-4xl md:ml-auto">¿Cuánto dinero estás perdiendo por no tener una presencia digital profesional?</h2>
              <p className="text-[#184c56] text-xl font-medium max-w-4xl md:ml-auto">Conoce algunos de nuestros proyectos</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
              {shuffledPortfolio.length > 0 ? (
                shuffledPortfolio.map((item, index) => {
                  const isVideo = item.sIdx === 0;
                  // Masonry logic: vary spans based on index
                  let colSpan = "col-span-1";
                  let rowSpan = "row-span-1";

                  if (index === 1 || index === 6) rowSpan = "row-span-2";
                  if (index === 2) { colSpan = "col-span-2"; rowSpan = "row-span-2"; }
                  if (index === 5) colSpan = "col-span-1 md:col-span-2";

                  return (
                    <div key={`${item.sIdx}-${item.cIdx}`} className={`group relative ${colSpan} ${rowSpan} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all`}>
                      {isVideo ? (
                        <video src={item.media} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <img src={item.media} alt={item.client} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      )}
                      <div className="absolute inset-0 bg-[#053040]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                        <p className="text-white font-black text-lg mb-2">{item.client}</p>
                        <button
                          onClick={() => { setActiveService(item.sIdx); setActiveCase(item.cIdx); }}
                          className="cursor-pointer px-6 py-2 bg-[#ffffff] text-[#053040] font-bold rounded-full hover:bg-[#577c8e] hover:text-[#ffffff] transition-colors"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : null}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. CTA Final */}
      <section className="py-32 bg-[#ffffff] relative overflow-hidden">
        <ParticleBackground id="particles-cta" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black text-[#053040] mb-10 leading-tight">El mercado no espera. ¿Listo para delegar la creatividad y dominar tu nicho?</h2>
            <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer">
              <button className="cursor-pointer w-full sm:w-auto px-8 py-4 bg-[#053040] text-[#ffffff] text-lg md:text-xl font-bold rounded-xl shadow-xl shadow-[#053040]/20 hover:scale-105 active:scale-95 transition-all">
                ¡Hagamos que suceda!
              </button>
            </a>
            <p className="mt-8 text-[#184c56] font-medium">Sin compromisos. Solo platiquemos sobre tu negocio.</p>
          </FadeIn>
        </div>
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
                className="cursor-pointer absolute top-6 right-6 p-3 bg-white hover:bg-white/90 text-[#052734] rounded-full transition-colors z-50 shadow-lg border border-white/20"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Columna Izquierda: Collage Asimétrico */}
                <div className="relative h-[40vh] lg:h-full bg-gradient-to-br from-black/40 to-transparent p-8 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Background decorative text/element */}
                    <span className="text-[10rem] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">
                      {SERVICES_DATA[activeService].title.split(' ')[0]}
                    </span>
                  </div>

                  {SERVICES_DATA[activeService].cases.map((item, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: 'absolute',
                        top: COLLAGE_COORDS[i].top,
                        left: COLLAGE_COORDS[i].left,
                        right: COLLAGE_COORDS[i].right,
                        bottom: COLLAGE_COORDS[i].bottom,
                        width: COLLAGE_COORDS[i].width,
                        rotate: COLLAGE_COORDS[i].rotate,
                        zIndex: 10 + i
                      }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                      className={`group cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-4 ${activeCase === i ? 'border-[#577c8e] scale-105 z-40' : 'border-white/10'}`}
                      whileHover={{ scale: 1.1, zIndex: 50, rotate: 0 }}
                      onClick={() => setActiveCase(i)}
                    >
                      <div className="relative aspect-[4/3] w-full">
                        {activeService === 0 ? (
                          <video
                            src={item.media}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={item.media}
                            alt={item.client}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
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
                      key={`${activeService}-${activeCase}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-md h-[60vh] lg:h-[70vh] overflow-y-auto pr-4 pb-8 [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#053040] [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-widest uppercase bg-[#577c8e]/10 text-[#577c8e] rounded-full">
                        {SERVICES_DATA[activeService].cases[activeCase].kicker}
                      </span>

                      <div className="flex items-center gap-4 mb-8">
                        {activeService === 0 ? (
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#577c8e] flex-shrink-0">
                            <video src={SERVICES_DATA[activeService].cases[activeCase].media} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <img
                            src={SERVICES_DATA[activeService].cases[activeCase].media}
                            alt={SERVICES_DATA[activeService].cases[activeCase].client}
                            className="w-14 h-14 rounded-full object-cover border-2 border-[#577c8e] flex-shrink-0"
                          />
                        )}
                        <h3 className="text-4xl lg:text-5xl font-black text-[#053040] leading-tight">
                          {SERVICES_DATA[activeService].cases[activeCase].client}
                        </h3>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="flex items-center gap-2 text-[#577c8e] font-bold uppercase tracking-widest text-xs mb-3">
                            <span className="w-8 h-[2px] bg-[#577c8e]"></span>
                            El Problema
                          </h4>
                          <p className="text-[#184c56] text-lg leading-relaxed font-medium italic">
                            "{SERVICES_DATA[activeService].cases[activeCase].problem}"
                          </p>
                        </div>

                        <div>
                          <h4 className="flex items-center gap-2 text-[#053040] font-bold uppercase tracking-widest text-xs mb-3">
                            <span className="w-8 h-[2px] bg-[#053040]"></span>
                            La Solución y Resultados
                          </h4>
                          <p className="text-[#184c56] text-lg leading-relaxed">
                            {SERVICES_DATA[activeService].cases[activeCase].solution}
                          </p>
                          <div className="mt-6">
                            <p className="text-[#053040] font-black text-xl leading-tight border-l-4 border-[#577c8e] pl-4">
                              {SERVICES_DATA[activeService].cases[activeCase].results}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 flex items-center gap-4">
                        <a href="https://wa.link/58p1sa" target="_blank" rel="noopener noreferrer" className="flex-1">
                          <button className="cursor-pointer w-full py-3 bg-[#053040] text-white rounded-xl font-black text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
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
