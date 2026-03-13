"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export function ParticleBackground({ id = "tsparticles-bg" }: { id?: string }) {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null;
    }

    return (
        <Particles
            id={id}
            className="absolute inset-0 w-full h-full border-none m-0 p-0 z-[0]"
            options={{
                fullScreen: { enable: false },
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
        />
    );
}
