import { FadeIn } from "@/components/FadeIn";

export default function PoliticaPrivacidadPage() {
    return (
        <main className="max-w-3xl mx-auto py-20 px-6">
            <FadeIn>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-3xl md:text-5xl font-black text-primary dark:text-white mb-8">
                        Política de Privacidad de Cantón Creativo
                    </h1>

                    <p className="text-lg leading-relaxed mb-6">
                        En Cantón Creativo nos importa tu privacidad. Esta declaración explica nuestras prácticas de recolección de información.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Información Personal:</h2>
                    <p className="leading-relaxed mb-6">
                        Recopilamos información que te identifique como individuo cuando creas una cuenta, reservas una consultoría o adquieres un recurso digital. También recopilamos datos de pago procesados de forma segura a través de pasarelas de terceros (Stripe).
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Cookies y Pixel de Terceros:</h2>
                    <p className="leading-relaxed mb-6">
                        Al visitar nuestro sitio, podríamos usar cookies y píxeles de seguimiento (como el Píxel de Meta) para asociar tu actividad en línea con fines de marketing, remarketing y mejora de nuestros embudos de venta.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Transferencia de Datos:</h2>
                    <p className="leading-relaxed mb-6">
                        Solo compartimos datos con entidades relacionadas o proveedores de servicios (pasarelas de pago, alojamiento web) estrictamente para cumplir con el servicio adquirido.
                    </p>

                    <h2 className="text-2xl font-bold mt-10 mb-4">Derechos ARCO:</h2>
                    <p className="leading-relaxed mb-6">
                        Tienes derechos de acceso, rectificación, cancelación y oposición sobre tus datos. Para ejercerlos, envía una solicitud a contacto@cantoncreativo.com con una identificación oficial. Te responderemos en un plazo máximo de 20 días hábiles.
                    </p>
                </div>
            </FadeIn>
        </main>
    );
}
