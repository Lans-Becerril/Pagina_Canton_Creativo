"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkeXW3_lbbrO12YN0PohRbNdXW5q45lowaY4L1fG-er9ison48Kjgp08lWN6wVxnCUxjzVzJvDflH5xacpeB4rR5uW93AJPq5be_LEmxUBQ7-_ZMw4LaEHjGiOZo92zZhg2uwENRvdVinaSZAGGr8T_O7iffnSTqdxJdQyZheecPRWsNRXO4RcaTbsvHmDQ7Xi_Q1i-PIH0nJGbBCYoipCOelJpdujZh26yWtO7FUVJT7dzoSNc_xQGGWEjpu0Olt2vej019p7Ywp4",
        title: `"Aumentamos x3 su facturación en 4 meses"`,
        type: "Caso de Éxito",
    },
    {
        id: 2,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYLTFcRTSTLiNsLqn6AWkFK_fYAlQiLzxdjq7Dxux2nVExo3HSbKiX4nHTyBK9_IWS7H6scF4eHQXMfD71AtLVHcZiDAy62vGelw6mF4q3YHNM4dfULNrwtRjOvOtNmvW7szt3zP4nhtELriURMY6vwQRV0aUhe6SJ1o_y0d1F1uTFFrJzMppx2nQE_wq2JU_0R7HPtj0El0ApJrDef-6rn-sCBsXRvAKFQttekPOd5yiH4XBr92ZDmNYkannKm2HaiofkYnLMjS3",
        title: `"Lanzamiento con +$10k en 2 semanas"`,
        type: "Agencia Creativa",
    },
    {
        id: 3,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbpsGkQXc27KoSJZKsRq5eMxc6kfMS7nOz8K82-UoXSvIUgcGrH-VEJRGiAou7pzGVYgHKd71-HVOEfPU4ncQfMGRT0OiY2PQxE6r7NkItTMI3TeVSJcg1oc3bucjCirnScKPwHPNEpBTSSJhAEswk5vuhpfDMkKKIh_dF82kMFFOn2sq6e3f1v4lJA8GqHxAa19kL17dlB2c7VcZ3WB09f0VArePDwT-yMtxLlCf9jTKz2TArnaw9WHvDf_U5p7sLTinQ_YQnlhh1",
        title: `"De 0 a Referentes en 6 meses"`,
        type: "B2B Consulting",
    },
];

export function CoverflowCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-cream/30 dark:bg-primary/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-black text-primary dark:text-white">Historias de transformación</h2>
            </div>

            <div className="relative flex items-center justify-center gap-6 px-4 mb-20 min-h-[500px]">
                {/* Navigation Left */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 lg:left-20 z-20 w-12 h-12 rounded-full bg-white dark:bg-primary shadow-lg flex items-center justify-center text-primary dark:text-white hover:scale-110 transition-transform"
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
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {isCenter && (
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
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Right */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 lg:right-20 z-20 w-12 h-12 rounded-full bg-white dark:bg-primary shadow-lg flex items-center justify-center text-primary dark:text-white hover:scale-110 transition-transform"
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

            {/* Metrics Grid */}
            <div className="max-w-5xl mx-auto px-4 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Leads Generados", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5Q_K5V1jkJBnvVvq_hHzblRfGIJzz-CE7JZ9uuahi2Vs5ZxrPO4udbRGmJWB7zTEgwhZIHrmFb9-3E5qd3QoNtHtZ5axvBIGdfbh8CLiDCeZJERlNBkS6qFQQDH8-fFbQfICG2zGfsJXU5PvZU_il8B23yhzqy7xPgHBqEMFYhBz5WP-3q7xIv3ZgPKZknLf6tcP35tGt-sSB_-AA6aBRPXnr2agG5GWdWrkzGU7l0AhFjTUeDALz8zWgWcfv9gpdPo1dbxrns4j" },
                    { label: "ROI Promedio 4.5x", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAATj62Wbg2p_08X8jrn_K34BIwSO2hzPmseNbmT1Bg5ri7U0VSTZAb4-BmL9UyDiKsx8bqyiDV6E7VBifDlwaqCjS-l5Mh7rVAVn6OOGr-gcffY2cGV8Bc-eyLz69qdLHJewssL3rLqoRQbOu7ClyXIMNS6yEFdJpt4uqAPB8-VJBMxIp2RFrNCwhTPRzxeLACxK_ymTMOFtNZIT0DBjVo2mjVaS8AC5WgITsJKCQg3NDl3CA-jrAFV0yGDxeiIB1ljmG1LYbPDV86" },
                    { label: "Engagement +200%", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIpMcMTQpzqc0o12wLdpDcYc_ACFPHPpLdPd-3FfewXRacAyFC4uwqO6WXwLEFn4EEsf8q2txWbejKv4vlGLB_RLrEAACFE_AbxkVy3l6o1iFtEe19gN7jG08oZCZ4fx3XQSXUM8qZTa0IH4JLs359uq8hb2q4mjY_Un6N5tsVloczwf5kope_CFQCuZhoxp8FHEEMdGx9Jvff29kRpGZBeDBm4ZjP5K6av3mNT-EdFPoIMnWQvCFpek04y9kKQNTuNB0c-i68D3DP" },
                    { label: "Ventas Directas", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVUoTytoMEXnjM2O3kIdjIUmfIjxXG4u65nlZxjSRnuLfyyXPdO_mahjXl9kKZPDo8cSWnrncO7nI3t_ZUwHBLfuD_N_71lR9KOWSusDJRwmcf7e3XGtYq89mUR-qvZAXgYKWTJlgD4Q35IArlvxTi00EmhxfK9L2eQPyUOMc6N7y6OPpG0OUZOh3CNwZMAyIU-I8IAWkHjtALyM6MSWlhKqHNqZcKZlgEOWFe1263rltFw6CKYS9qE5htzFJ_ZPPbFAni8SQH11V" },
                ].map((metric, i) => (
                    <div key={i} className="bg-white dark:bg-primary/20 p-4 rounded-xl shadow-sm border border-soft-blue/10 dark:border-white/10">
                        <img fetchPriority="low" className="rounded-lg mb-2 grayscale hover:grayscale-0 transition-all object-cover h-24 w-full" alt={metric.label} src={metric.src} />
                        <p className="text-[10px] font-bold text-slate-400 uppercase">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
