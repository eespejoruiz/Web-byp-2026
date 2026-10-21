/**
 * Páginas por modelo: una por cada cafetera JURA que vende B&P Tech.
 *
 * Entraron el 21 de octubre de 2026, con el OK de Enrique, para ganar las búsquedas
 * por modelo («jura e8», «jura w8», «jura x10», con o sin «precio» y «perú»). Las
 * fichas de pe.jura.com llevan un título genérico («Comprar cafeteras JURA online»)
 * y no salen para esas búsquedas (estudio en
 * seo_program/byptech/Transaccionales_SC_byptech_2026-10-21.md).
 *
 * De dónde sale cada dato, para no inventar nada:
 *  - datos técnicos, foto y descripción: productsData (fichas de pe.jura.com
 *    leídas el 21-sep-2026), por `producto`;
 *  - consumibles y accesorios: brandsData.jura.consumables, por `modelo`;
 *  - promesas de servicio: brandsData.jura.promise (confirmadas por Enrique el
 *    21-oct-2026: técnico en 24 horas y repuestos por diez años).
 * Sin precios: por ahora no se publican (decisión de Enrique, 21-oct-2026).
 */

const PRECIO =
  "Por ahora no publicamos precios: la cotización incluye la instalación, la capacitación de tu equipo, el técnico en 24 horas y los repuestos asegurados por diez años. Pídenos la tuya y compárala, en precio y en servicio posventa.";

export const modelosData = [
  {
    route: "/marcas/jura/x10",
    brand: "jura",
    producto: "jura-x10",
    modelo: "X10",
    h1: "JURA X10: cafetera automática profesional para hasta 100 tazas al día",
    tagline: "La profesional de mayor capacidad que JURA vende en el Perú",
    intro: [
      "La X10 es la profesional de mayor capacidad que JURA vende en el Perú. Muele el grano para cada taza y prepara 35 especialidades, entre ellas las de Cold Brew, que extrae en frío café recién molido con solo pulsar un botón. JURA le recomienda un máximo de 100 tazas al día: es la cafetera de las oficinas grandes, los comedores, las zonas de autoservicio y los centros de salud.",
    ],
    paraQuien: {
      texto: "Si en tu oficina se toman más de 50 cafés al día (unas 25 a 50 personas que toman dos), la X10 cubre el volumen con margen. Por debajo de 50 tazas, la W8 hace el mismo trabajo en menos espacio.",
      enlace: { texto: "la W8", to: "/marcas/jura/w8" },
    },
    faqs: [
      {
        q: "¿Cuántas tazas al día prepara la X10?",
        a: "JURA le recomienda un máximo de 100 al día. En una hora prepara 92 espressos, 68 cafés o 72 cappuccinos, según la norma DIN 18873-2.",
      },
      {
        q: "¿Qué es el Cold Brew de la X10?",
        a: "Café extraído en frío a partir de grano recién molido, que la X10 prepara en el momento con un botón.",
      },
      {
        q: "¿Se puede cobrar el café?",
        a: "Sí: admite MDB 2.0 para conectarla a los sistemas de pago habituales y el JURA Pocket Pilot para pago sin contacto. Los dos son opcionales.",
      },
      { q: "¿Cuánto cuesta la JURA X10?", a: PRECIO },
    ],
  },
  {
    route: "/marcas/jura/w8",
    brand: "jura",
    producto: "jura-w8",
    modelo: "W8",
    h1: "JURA W8: cafetera automática profesional para hasta 50 tazas al día",
    tagline: "La profesional compacta de JURA, en 29,5 cm de ancho",
    intro: [
      "La W8 es la profesional compacta de JURA: 17 especialidades en 29,5 cm de ancho, depósito de agua y de café con cierre, y bloqueo de funciones para controlar quién usa qué. JURA le recomienda un máximo de 50 tazas al día. Es la cafetera de las oficinas, tiendas, estudios y locales comerciales.",
    ],
    paraQuien: {
      texto: "Hasta unas 25 personas que toman dos cafés al día. Si son más, o el café también se sirve a las visitas, la X10.",
      enlace: { texto: "la X10", to: "/marcas/jura/x10" },
    },
    faqs: [
      {
        q: "¿Cuántas tazas al día prepara la W8?",
        a: "JURA le recomienda un máximo de 50 al día. En una hora prepara 83 espressos, 74 cafés o 50 cappuccinos, según la norma DIN 18873-2.",
      },
      {
        q: "¿Cabe en una oficina pequeña?",
        a: "Mide 29,5 cm de ancho, 44,3 cm de alto y 44,6 cm de fondo, y pesa 12,7 kg.",
      },
      {
        q: "¿Se puede cobrar el café?",
        a: "Sí, con MDB 2.0 para los sistemas de pago habituales o con el JURA Pocket Pilot para pago sin contacto. Los dos son opcionales.",
      },
      { q: "¿Cuánto cuesta la JURA W8?", a: PRECIO },
    ],
  },
  {
    route: "/marcas/jura/e8",
    brand: "jura",
    producto: "jura-e8",
    modelo: "E8",
    h1: "JURA E8: cafetera automática para la gerencia o una oficina pequeña",
    tagline: "La automática de la línea doméstica de JURA",
    intro: [
      "La E8 es la automática de la línea doméstica de JURA: 17 especialidades con café recién molido, molino P.A.G.2 y limpieza del sistema de leche con un botón. Para la gerencia, una sala de reuniones o una oficina pequeña. Disponible en Piano Black y Piano White.",
    ],
    paraQuien: {
      texto: "Conviene decirlo con claridad: es de la línea doméstica y JURA no le publica rendimiento profesional. Si en tu oficina se toman decenas de cafés al día, la que corresponde es la W8.",
      enlace: { texto: "la W8", to: "/marcas/jura/w8" },
    },
    faqs: [
      {
        q: "¿La E8 sirve para una oficina?",
        a: "Sí, para la gerencia, una sala de reuniones o una oficina pequeña. Es de la línea doméstica: para más volumen, la W8.",
      },
      { q: "¿Qué colores hay?", a: "Piano Black y Piano White." },
      {
        q: "¿Usa cápsulas?",
        a: "No. Muele café en grano para cada taza, así que trabajas con el café que elijas.",
      },
      { q: "¿Cuánto cuesta la JURA E8?", a: PRECIO },
    ],
  },
];

export function getModeloByRoute(route) {
  return modelosData.find((m) => m.route === route) || null;
}
