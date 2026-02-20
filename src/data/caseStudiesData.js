import { IMAGE } from "../constent/theme";

export const caseStudiesData = [
  {
    slug: "restaurante-ritmo-alto",
    title: "Restaurante de alto ritmo",
    company: "Grupo Gastronómico (CDMX)",
    heroImage: IMAGE.bnr2,
    headline: "Reducimos tiempos de servicio sin sacrificar calidad",
    videoId: "PkkV1vLHUvQ",
    gallery: [IMAGE.galleryPic1, IMAGE.galleryPic2, IMAGE.galleryPic3, IMAGE.galleryPic4],
    interview: [
      { q: "¿Cuál era el reto principal?", a: "Picos de demanda con tiempos de ticket variables y falta de consistencia en línea caliente y fría." },
      { q: "¿Qué solución implementamos?", a: "Rediseño de flujo en línea, refrigeración por estación y equipos programables para cocción rápida." },
      { q: "¿Qué cambió en la operación?", a: "Menos recorridos, mise en place claro, holding estable y mejor coordinación expo/delivery." }
    ],
    kpis: [
      { label: "Tiempo de ticket", before: "12.5 min", after: "7.8 min" },
      { label: "Devoluciones por temperatura", before: "3.2%", after: "0.6%" },
      { label: "Costo de mantenimiento mensual", before: "$", after: "$-" }
    ],
    comparisonBeforeAfter: [
      { metric: "Flujo de línea", before: "Cruces y esperas", after: "Secuencia continua" },
      { metric: "Cadena de frío", before: "Variaciones frecuentes", after: "Estable por estación" },
      { metric: "Consistencia", before: "Irregular", after: "Repetible" }
    ],
    comparisonLowVsBrand: [
      { metric: "Durabilidad", low: "Alta falla", brand: "Uso intensivo confiable" },
      { metric: "Eficiencia", low: "Consumo elevado", brand: "Optimizado y estable" },
      { metric: "Soporte", low: "Limitado", brand: "Garantía y respaldo" }
    ]
  },
  {
    slug: "retail-supermercado",
    title: "Retail Supermercado",
    company: "Cadena de Supermercados",
    heroImage: IMAGE.home3backgroundbg,
    headline: "Cadena de frío estable, exhibición impecable",
    videoId: "PkkV1vLHUvQ",
    gallery: [IMAGE.productPic1, IMAGE.productPic2, IMAGE.productPic3, IMAGE.productPic4],
    interview: [
      { q: "Dolor del negocio", a: "Pasillos fríos, mermas y variación de temperatura en murales abiertos." },
      { q: "Solución aplicada", a: "Murales con puertas, LED y monitoreo remoto con alarmas inteligentes." },
      { q: "Resultado", a: "Menos merma, mayor confort y exhibición consistente." }
    ],
    kpis: [
      { label: "Merma mensual", before: "4.8%", after: "2.1%" },
      { label: "Quejas por pasillo frío", before: "Alta", after: "Baja" },
      { label: "Consumo eléctrico en casos", before: "100%", after: "82%" }
    ],
    comparisonBeforeAfter: [
      { metric: "Temperatura de casos", before: "Fluctuante", after: "Uniforme" },
      { metric: "Visibilidad de producto", before: "Irregular", after: "Clara y atractiva" },
      { metric: "Rotación FIFO/FEFO", before: "Limitada", after: "Implementada" }
    ],
    comparisonLowVsBrand: [
      { metric: "Aislamiento", low: "Bajo", brand: "Alto rendimiento" },
      { metric: "Puertas", low: "Sin puertas", brand: "Puertas con cierre eficiente" },
      { metric: "Monitoreo", low: "Sin telemetría", brand: "AFDD y alertas" }
    ]
  },
  {
    slug: "hotel-banquetes",
    title: "Hotel & Banquetes",
    company: "Operador hotelero",
    heroImage: IMAGE.aboutPic2,
    headline: "Lavado industrial con consistencia y ahorro operativo",
    videoId: "PkkV1vLHUvQ",
    gallery: [IMAGE.galleryPic5, IMAGE.galleryPic6, IMAGE.galleryPic7, IMAGE.galleryPic8],
    interview: [
      { q: "Desafío", a: "Alta rotación de loza con reprocesos y consumo elevado de químicos." },
      { q: "Solución", a: "Lavavajillas industrial con programas optimizados y recuperación térmica." },
      { q: "Impacto", a: "Menos reprocesos, ahorro en insumos y ritmo de eventos más fluido." }
    ],
    kpis: [
      { label: "Reprocesos de lavado", before: "9.5%", after: "2.0%" },
      { label: "Consumo de químicos", before: "100%", after: "70%" },
      { label: "Rotación de eventos", before: "Lenta", after: "Ágil" }
    ],
    comparisonBeforeAfter: [
      { metric: "Calidad de lavado", before: "Variable", after: "Consistente" },
      { metric: "Tiempo de ciclo", before: "Largo", after: "Optimizado" },
      { metric: "Ergonomía", before: "Limitada", after: "Mejorada" }
    ],
    comparisonLowVsBrand: [
      { metric: "Recuperación térmica", low: "Nula", brand: "Eficiente" },
      { metric: "Programas", low: "Básicos", brand: "Precisos y repetibles" },
      { metric: "Mantenimiento", low: "Frecuente", brand: "Preventivo y estable" }
    ]
  }
];

export function getCaseBySlug(slug) {
  return caseStudiesData.find((c) => c.slug === slug);
}
