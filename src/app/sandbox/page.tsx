"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function SandboxPage() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: any) => {
        console.log("Partículas cargadas en el Sandbox:", container);
    };

    if (!init) {
        return (
            <div className="h-screen w-full bg-[#ffffff] flex items-center justify-center text-[#053040] font-bold">
                Cargando Entorno de Pruebas...
            </div>
        );
    }

    return (
        <main className="relative h-screen w-full bg-[#ffffff] overflow-hidden">
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.8,
                                }
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#053040", // Azul Oscuro
                        },
                        links: {
                            color: "#577c8e", // Azul Acero
                            distance: 150,
                            enable: true,
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1, // Movimiento lento y fluido
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 90, // Unas 80-100 para no saturar
                        },
                        opacity: {
                            value: 0.8,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 3 }, // Tamaño pequeño (1 a 3px)
                        },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0"
            />
            
            {/* Contenido centrado para visualización */}
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10 px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#053040] mb-4 bg-white/60 px-8 py-4 rounded-3xl backdrop-blur-md shadow-sm border border-white/20">
                    Red de Crecimiento
                </h1>
                <p className="text-[#577c8e] font-bold text-lg md:text-xl bg-white/60 px-6 py-2 rounded-full backdrop-blur-md shadow-sm border border-white/20">
                    Pasa el mouse para <span className="text-[#053040]">atraer</span> o haz clic para <span className="text-[#053040]">crear</span>
                </p>
            </div>
        </main>
    );
}
