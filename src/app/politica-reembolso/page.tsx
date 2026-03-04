import { FadeIn } from "@/components/FadeIn";

export default function PoliticaReembolsoPage() {
    return (
        <main className="max-w-3xl mx-auto py-20 px-6">
            <FadeIn>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-8">
                        Política de Reembolsos y Cancelaciones
                    </h1>

                    <p className="text-lg leading-relaxed mb-6">
                        Debido a la naturaleza digital de nuestros servicios (infoproductos y consultorías en vivo), aplicamos políticas estrictas para garantizar el compromiso de ambas partes.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Llamadas de Consultoría:</h2>
                    <ul className="list-disc pl-6 space-y-3 mb-6">
                        <li className="leading-relaxed">
                            No existe reembolso en caso de no presentarse a la sesión acordada ("No show").
                        </li>
                        <li className="leading-relaxed">
                            Solo se cuenta con 15 minutos de tolerancia. Pasado este tiempo, la sesión se dará por iniciada y solo se repondrá el restante de la hora pactada.
                        </li>
                        <li className="leading-relaxed">
                            Se puede reagendar la sesión por única vez con al menos 3 horas de anticipación enviando un correo a contacto@cantoncreativo.com.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Cursos y Recursos Digitales (Tienda):</h2>
                    <p className="leading-relaxed">
                        Al tratarse de productos digitales de descarga inmediata o acceso a conocimiento, no ofrecemos reembolsos una vez procesado el pago, a menos que exista un error técnico comprobable que impida el acceso al material.
                    </p>
                </div>
            </FadeIn>
        </main>
    );
}
