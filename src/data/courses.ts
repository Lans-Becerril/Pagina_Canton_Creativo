export interface Course {
    slug: string;
    title: string;
    description: string;
    image: string;
    stripeLink: string;
}

export const courses: Course[] = [
    {
        slug: "analisis-de-metricas",
        title: "Análisis de Métricas",
        description: "¿Sientes que 60 min no son suficientes? Añade tiempo para profundizar en el rendimiento de tu canal.",
        image: "/hero/consultoria.webp", // Placeholder
        stripeLink: "https://buy.stripe.com/test_123", // Placeholder
    },
    {
        slug: "pilares-del-storytelling",
        title: "Pilares del Storytelling",
        description: "3 plantillas editables para aumentar tu CTR inmediatamente y crear narrativas irresistibles para tu audiencia.",
        image: "/hero/consultoria.webp", // Placeholder
        stripeLink: "https://buy.stripe.com/test_456", // Placeholder
    },
    {
        slug: "como-monetizar",
        title: "Cómo Monetizar",
        description: "La estructura exacta para retener a tu audiencia en cada video y diversificar las fuentes de ingresos reales.",
        image: "/hero/consultoria.webp", // Placeholder
        stripeLink: "https://buy.stripe.com/test_789", // Placeholder
    }
];
