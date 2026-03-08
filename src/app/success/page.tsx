"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
    const [calendlyUrl, setCalendlyUrl] = useState("");

    useEffect(() => {
        setCalendlyUrl(process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/cantoncreativo");
    }, []);

    return (
        <main className="flex-grow flex items-center justify-center p-6 lg:p-20 bg-background-light min-h-[80vh]">
            <FadeIn className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-soft-blue/20">
                <div className="p-8 md:p-12 text-center border-b border-soft-blue/10 bg-cream/30">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-20 h-20 text-accent-teal" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-primary mb-4">
                        ¡Reserva Confirmada!
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        El pago se procesó correctamente. Por favor, selecciona el día y hora para nuestra sesión en el calendario a continuación.
                    </p>
                </div>

                <div className="p-4 md:p-8 bg-white min-h-[600px] flex justify-center">
                    {calendlyUrl ? (
                        <iframe
                            src={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`}
                            width="100%"
                            height="650"
                            frameBorder="0"
                            title="Agendar sesión en Calendly"
                            className="rounded-xl border border-soft-blue/20"
                        ></iframe>
                    ) : (
                        <div className="flex items-center justify-center h-full w-full">
                            <p className="text-slate-400">Cargando calendario...</p>
                        </div>
                    )}
                </div>
            </FadeIn>
        </main>
    );
}
