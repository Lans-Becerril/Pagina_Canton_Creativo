"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { courses } from "@/data/courses";

export function CourseCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % courses.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
    };

    const getCardStyle = (index: number) => {
        if (index === currentIndex) {
            return {
                scale: 1.05,
                opacity: 1,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            };
        }
        
        // Let's determine if it's left or right
        const diff = (index - currentIndex + courses.length) % courses.length;
        const xOffset = diff === 1 ? 100 : diff === courses.length - 1 ? -100 : 0;
        
        return {
            scale: 0.9,
            opacity: 0.6,
            zIndex: 10,
            x: xOffset,
            boxShadow: "none"
        };
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto py-12 overflow-hidden flex flex-col items-center">
            {/* Controles: Botones de Flecha */}
            <div className="absolute top-1/2 left-4 md:left-12 -translate-y-1/2 z-30">
                <button
                    onClick={handlePrev}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#053040] hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            
            <div className="absolute top-1/2 right-4 md:right-12 -translate-y-1/2 z-30">
                <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#053040] hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Area de las Tarjetas */}
            <div className="relative w-full max-w-sm md:max-w-md h-[450px] md:h-[500px] flex justify-center items-center perspective-[1000px]">
                <AnimatePresence initial={false} custom={direction}>
                    {courses.map((course, index) => {
                        // Calculate position relative to currentIndex
                        let relativeDiff = index - currentIndex;
                        if (relativeDiff < -1 && courses.length > 2) relativeDiff += courses.length;
                        if (relativeDiff > 1 && courses.length > 2) relativeDiff -= courses.length;
                        
                        // We only render cards that are current, adjacent, or all of them if few
                        if (Math.abs(relativeDiff) > 1 && courses.length > 3) return null;

                        const xOffset = relativeDiff * 100; // Shift left or right percentage string roughly

                        return (
                            <motion.div
                                key={course.slug}
                                className="absolute top-0 w-full h-full rounded-[24px] overflow-hidden flex flex-col cursor-grab active:cursor-grabbing bg-[#053040]"
                                initial={{ opacity: 0, scale: 0.8, x: direction > 0 ? 200 : -200 }}
                                animate={{ 
                                    opacity: index === currentIndex ? 1 : 0.6, 
                                    scale: index === currentIndex ? 1.05 : 0.9,
                                    x: `${relativeDiff * 80}%`,
                                    zIndex: index === currentIndex ? 20 : 10,
                                    boxShadow: index === currentIndex ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = offset.x;
                                    if (swipe < -50) {
                                        handleNext();
                                    } else if (swipe > 50) {
                                        handlePrev();
                                    }
                                }}
                            >
                                {/* Superior para imagen */}
                                <div className="h-1/2 w-full bg-[#f4efeb]">
                                    <img 
                                        src={course.image} 
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    />
                                </div>
                                
                                {/* Inferior para contenido */}
                                <div className="h-1/2 w-full p-6 md:p-8 flex flex-col justify-between text-[#ffffff]">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3">{course.title}</h3>
                                        <p className="text-sm md:text-base text-[#cdd7e0] line-clamp-3">
                                            {course.description}
                                        </p>
                                    </div>
                                    
                                    {/* Botones */}
                                    <div className="flex gap-3 mt-4">
                                        <Link 
                                            href={course.stripeLink} 
                                            target="_blank"
                                            className="flex-1 bg-white text-[#053040] font-bold py-2.5 rounded-full text-center border border-white hover:bg-gray-100 transition-colors text-sm"
                                        >
                                            Comprar
                                        </Link>
                                        <Link 
                                            href={`/cursos/${course.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-transparent text-white font-bold py-2.5 rounded-full text-center border md:border-2 border-white hover:bg-white/10 transition-colors text-sm"
                                        >
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Paginación */}
            <div className="flex justify-center gap-2 mt-8 z-30">
                {courses.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentIndex 
                            ? "w-8 h-3 bg-[#053040]" 
                            : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Ir al curso ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
