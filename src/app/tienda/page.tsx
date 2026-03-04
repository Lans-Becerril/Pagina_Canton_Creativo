import { FadeIn } from "@/components/FadeIn";
import { Sparkles } from "lucide-react";

export default function TiendaPage() {
    return (
        <main className="flex flex-1 items-center justify-center p-6 lg:p-20 min-h-[80vh]">
            <FadeIn className="max-w-[960px] w-full">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch min-h-[450px] border border-soft-blue/20 dark:border-white/10 relative">

                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Image Section */}
                    <div
                        className="w-full md:w-1/2 bg-center bg-no-repeat bg-cover relative min-h-[250px] md:min-h-full"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80")' }}
                    >
                        <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
                        <div className="absolute bottom-6 left-6 text-white p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-xs uppercase tracking-widest font-bold">Recursos Premium</span>
                            </div>
                            <p className="text-sm opacity-90 font-medium">Presets, plantillas y herramientas exclusivas para creadores.</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center gap-6 relative z-10">
                        <div className="space-y-4">
                            <h1 className="text-primary dark:text-white text-4xl font-black tracking-tight">Próximamente...</h1>
                            <p className="text-accent-blue dark:text-slate-400 text-lg leading-relaxed font-medium">
                                Acelera tu edición. Eleva tu contenido. Muy pronto recursos premium, presets y plantillas diseñadas por nuestro equipo para optimizar tu flujo de trabajo.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sé el primero en saberlo</label>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <input
                                        className="flex-1 rounded-xl border-soft-blue/50 dark:border-slate-700 bg-black/5 focus:border-primary focus:ring-primary text-sm p-4 dark:bg-slate-800 dark:text-white"
                                        placeholder="Tu correo electrónico"
                                        type="email"
                                        required
                                    />
                                    <button type="button" className="bg-primary text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg transition-transform hover:scale-[1.02] active:scale-95 whitespace-nowrap">
                                        Notificarme al lanzar
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 pt-6 border-t border-soft-blue/30 dark:border-slate-800">
                                <div className="flex -space-x-4">
                                    {[
                                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
                                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80"
                                    ].map((img, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-cover bg-center"
                                            style={{ backgroundImage: `url('${img}')` }}
                                        ></div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-accent-blue flex items-center justify-center text-xs text-white font-black">
                                        +500
                                    </div>
                                </div>
                                <span className="text-xs text-slate-500 font-bold uppercase tracking-wider leading-tight">Ya están esperando el lanzamiento</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </main>
    );
}
