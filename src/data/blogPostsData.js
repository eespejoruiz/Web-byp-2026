import { IMAGE } from "../constent/theme";

export const blogPosts = [
  {
    slug: "cadena-de-frio-retail-puertas-vs-abiertos",
    title: "Cadena de frío en retail: murales con puertas vs abiertos",
    date: "Feb 2026",
    img: IMAGE.blogGridpic1,
    excerpt: "Cómo estabilizar temperatura, reducir mermas y mejorar confort del cliente en supermercados.",
    sections: [
      { h: "Dolores del negocio", p: "Fluctuaciones de temperatura, mermas, pasillos fríos y visibilidad irregular del producto." },
      { h: "Soluciones", p: "Murales con puertas, iluminación LED, control de humedad por categoría y monitoreo remoto con alarmas inteligentes." },
      { h: "Resultados", p: "Menos merma, exhibición consistente y mejor experiencia de compra." }
    ]
  },
  {
    slug: "diseno-de-linea-qsr-velocidad-y-consistencia",
    title: "Diseño de línea para QSR: velocidad y consistencia",
    date: "Feb 2026",
    img: IMAGE.blogGridpic2,
    excerpt: "Líneas de ensamblaje, KDS y separación expo/delivery para tiempos de ticket predecibles.",
    sections: [
      { h: "Contexto", p: "Los picos de demanda requieren un flujo sin cruces y roles claros." },
      { h: "Claves de diseño", p: "Almacén → prep → cocción → expo; KDS y pick-up dedicado para delivery." },
      { h: "Impacto", p: "Menos errores, mejor ritmo y satisfacción del cliente." }
    ]
  },
  {
    slug: "panaderia-hornos-y-fermentacion-consistente",
    title: "Panadería: hornos y fermentación consistente",
    date: "Feb 2026",
    img: IMAGE.blogGridpic3,
    excerpt: "Elegir el horno y controlar fermentación para calidad diaria repetible.",
    sections: [
      { h: "Hornos", p: "Piso, carro rotativo o convección según producto, volumen y versatilidad." },
      { h: "Fermentación", p: "Control de temperatura y humedad para leudado constante." },
      { h: "Equipos clave", p: "Amasadoras (brazos/espiral), laminadoras y fermentadoras." }
    ]
  },
  {
    slug: "bares-y-cafeterias-estaciones-eficientes",
    title: "Bares & cafeterías: estaciones eficientes y repetibles",
    date: "Feb 2026",
    img: IMAGE.blogGridpic4,
    excerpt: "Underbar/backbar, refrigeración de insumos y flujo en poco espacio.",
    sections: [
      { h: "Dolores", p: "Volumen alto en espacio limitado y consistencia de bebidas." },
      { h: "Organización", p: "Pozos de hielo, lavabos, speed rails y backbar visible para acceso rápido." },
      { h: "Refrigeración", p: "Bajo barra para lácteos y garnishes, merchandisers para impulso." }
    ]
  },
  {
    slug: "laboratorios-cumplimiento-y-monitoreo-ddl",
    title: "Laboratorios: cumplimiento y monitoreo DDL",
    date: "Feb 2026",
    img: IMAGE.blogGridpic5,
    excerpt: "Rangos CDC, data loggers con sonda amortiguada y SOP de emergencia.",
    sections: [
      { h: "Rangos", p: "Refrigerados 2–8°C; congelados -50 a -15°C." },
      { h: "Monitoreo", p: "Digital data loggers con ±0.5°C y registro continuo." },
      { h: "SOP", p: "Estabilización de unidades nuevas y respuesta ante excursiones." }
    ]
  },
  {
    slug: "carnicerias-higiene-y-cadena-de-frio",
    title: "Carnicerías: higiene y cadena de frío",
    date: "Feb 2026",
    img: IMAGE.blogGridpic6,
    excerpt: "Sanitización, separación de zonas y materiales adecuados para operación segura.",
    sections: [
      { h: "Higiene", p: "Desarme de equipos, químicos food-safe y lavado a presión de superficies." },
      { h: "Temperaturas", p: "Refrigeración 1–4°C; congelación ≤ -18°C; salas a ~12°C cuando sea posible." },
      { h: "Infraestructura", p: "Pisos/paredes impermeables, drenajes y luz adecuada." }
    ]
  },
  {
    slug: "restaurantes-refrigeracion-por-estacion",
    title: "Restaurantes: refrigeración por estación",
    date: "Feb 2026",
    img: IMAGE.blogGridpic7,
    excerpt: "Recepción, prep, línea y bar con equipos de frío en el punto correcto.",
    sections: [
      { h: "Mapa de frío", p: "Almacén, mesas frías de prep, bases bajo cocción y bar." },
      { h: "Organización interna", p: "Arriba cocinados/listos; medio precocidos; abajo crudos; cajones vegetales." },
      { h: "Ubicación", p: "Evitar fuentes de calor que afecten desempeño." }
    ]
  },
  {
    slug: "energia-y-eficiencia-en-retail",
    title: "Energía y eficiencia en retail",
    date: "Feb 2026",
    img: IMAGE.blogGridpic8,
    excerpt: "Reducción de consumo en casos refrigerados y monitoreo proactivo.",
    sections: [
      { h: "Consumo en supermercados", p: "Refrigeración puede superar 60% del uso eléctrico." },
      { h: "Medidas", p: "Puertas en casos, LED, mantenimiento de sellos y AFDD." },
      { h: "Beneficio", p: "Menor costo operativo y estabilidad térmica." }
    ]
  },
  {
    slug: "roi-de-equipamiento-confiable",
    title: "ROI del equipamiento confiable",
    date: "Feb 2026",
    img: IMAGE.blogGridpic9,
    excerpt: "Menos downtime, calidad repetible y soporte que protege ingresos.",
    sections: [
      { h: "Costo oculto del barato", p: "Fallas y variabilidad que erosionan margen y reputación." },
      { h: "Confiabilidad y mantenimiento", p: "Programas preventivos e IoT para anticipar fallas." },
      { h: "Resultado", p: "Producción estable y retorno acelerado." }
    ]
  }
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
