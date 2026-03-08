"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause } from "lucide-react";

const testimonials = [
    {
        id: 1,
        video: "/testimonios/1.webm",
        title: `"Aumentamos x3 su facturación en 4 meses"`,
        type: "Caso de Éxito",
    },
    {
        id: 2,
        video: "/testimonios/2.webm",
        title: `"Lanzamiento con +$10k en 2 semanas"`,
        type: "Agencia Creativa",
    },
    {
        id: 3,
        video: "/testimonios/3.webm",
        title: `"De 0 a Referentes en 6 meses"`,
        type: "B2B Consulting",
    },
];

export function CoverflowCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Sync muted / playing state to the active center video
    useEffect(() => {
        videoRefs.current.forEach((vid, idx) => {
            if (!vid) return;
            vid.muted = idx === currentIndex ? isMuted : true;
            if (idx === currentIndex && isPlaying) {
                vid.play().catch(() => { });
            }
        });
    }, [currentIndex, isMuted, isPlaying]);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted((prev) => !prev);
    };

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const vid = videoRefs.current[currentIndex];
        if (!vid) return;
        if (isPlaying) {
            vid.pause();
        } else {
            vid.play().catch(() => { });
        }
        setIsPlaying((prev) => !prev);
    };

    return (
        <section className="py-24 bg-cream/30 overflow-hidden">



            <div className="relative flex items-center justify-center gap-6 px-4 mb-20 min-h-[500px]">
                {/* Navigation Left */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 lg:left-20 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
                >
                    <ChevronLeft />
                </button>

                <div className="relative w-full max-w-4xl flex justify-center items-center perspective-1000">
                    <AnimatePresence initial={false} mode="popLayout">
                        {testimonials.map((item, index) => {
                            const isCenter = index === currentIndex;
                            const isLeft = index === (currentIndex - 1 + testimonials.length) % testimonials.length;
                            const isRight = index === (currentIndex + 1) % testimonials.length;

                            if (!isCenter && !isLeft && !isRight) return null;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.4,
                                        scale: isCenter ? 1.05 : 0.9,
                                        x: isCenter ? 0 : isLeft ? -150 : 150,
                                        zIndex: isCenter ? 10 : 0,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                                    className={`absolute w-72 sm:w-80 aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl ${isCenter ? "border-4 border-white cursor-default" : "cursor-pointer"
                                        }`}
                                    onClick={() => {
                                        if (isLeft) handlePrev();
                                        if (isRight) handleNext();
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                                    <video
                                        ref={(el) => { videoRefs.current[index] = el; }}
                                        src={item.video}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    {isCenter && (
                                        <>
                                            {/* Playback Controls */}
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
                                                <button
                                                    onClick={toggleMute}
                                                    className="bg-black/40 backdrop-blur-md rounded-full p-2.5 text-white hover:bg-black/60 transition-all"
                                                >
                                                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                                </button>
                                                <button
                                                    onClick={togglePlay}
                                                    className="bg-black/40 backdrop-blur-md rounded-full p-2.5 text-white hover:bg-black/60 transition-all"
                                                >
                                                    {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                                                </button>
                                            </div>
                                            {/* Text overlay */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="absolute bottom-6 left-6 right-6 text-white text-left z-20"
                                            >
                                                <p className="font-black text-xl leading-tight">{item.title}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
                                                    <span className="text-xs font-bold uppercase tracking-wider">{item.type}</span>
                                                </div>
                                            </motion.div>
                                        </>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Right */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 lg:right-20 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:scale-110 transition-transform"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-3">
                {testimonials.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-2.5 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-accent-blue" : "w-2 bg-soft-blue"
                            }`}
                    />
                ))}
            </div>


        </section>
    );
}
