import { productsData } from "./productsData";

import amasadorasHero from "../assets/images/brands/diosna-wendel.webp";
import refrigeracionHero from "../assets/images/brands/true-gdm-49.webp";
import licuadorasHero from "../assets/images/brands/vitamix-quiet-one.webp";
import laminadorasHero from "../assets/images/brands/rondo-automat-2000.webp";
import batidorasHero from "../assets/images/brands/pietroberto-mix.webp";
import divisorasHero from "../assets/images/brands/pietroberto-omega.webp";
import lavavajillasHero from "../assets/images/brands/winterhalter-u50.webp";
import moldesHero from "../assets/images/products/americanpan-bread-tins.webp";
import cortadorasHero from "../assets/images/products/jbtmarel-treif-divider-660.webp";
import chocolateHero from "../assets/images/products/pomati-t35.webp";

/**
 * Catálogo por TIPO DE MÁQUINA.
 *
 * El sitio estaba organizado por tipo de cliente (/industrias/) y por marca
 * (/marcas/), y el mercado peruano busca por máquina: «amasadora de pan» son
 * 720 búsquedas al mes y «equipos para panadería», 10. Este es el tercer eje.
 *
 * Cada familia agrupa las categorías reales de productsData; no hay ninguna
 * familia sin equipos detrás. Los hornos entran cuando esté cargado el
 * catálogo de Mondial Forni, que es la marca que los surte.
 */
export const equiposData = [
  {
    slug: "licuadoras",
    route: "/equipos/licuadoras",
    name: "Licuadoras profesionales",
    tagline: "Mezclado de uso continuo para barra y cocina",
    heroImage: licuadorasHero,
    categorias: ["Licuadora comercial", "Licuadora de cocina profesional"],
    industries: ["bares-cafeterias", "restaurantes", "comida-rapida", "hoteles-catering"],
    parrafos: [
      "La diferencia entre una licuadora doméstica y una profesional no está en la potencia que declara la etiqueta, sino en cuántos ciclos al día aguanta antes de que el motor o el vaso empiecen a fallar. En una barra de alto tránsito, el equipo de mezclado es de los que más veces se encienden en la jornada.",
      "Las de Vitamix son equipos de barra y de cocina profesional, con motores de hasta 3 HP de salida máxima y jarras de alto impacto. Conviene decirlo con claridad: quien en el Perú busca «licuadora industrial» a veces busca algo bastante más grande, de proceso. Si ese es el caso, mejor escríbenos y lo vemos.",
    ],
  },
  {
    slug: "refrigeracion",
    route: "/equipos/refrigeracion",
    name: "Refrigeración comercial",
    tagline: "Conservación, exhibición y cadena de frío",
    heroImage: refrigeracionHero,
    categorias: [
      "Refrigerador exhibidor de puertas de vidrio",
      "Refrigerador vertical de puerta sólida",
      "Refrigerador bajo mesada (undercounter)",
    ],
    industries: ["restaurantes", "supermercados", "hoteles-catering", "bares-cafeterias"],
    parrafos: [
      "El frío es el único equipo de una cocina que no puede pararse nunca. Cuando falla no se pierde una preparación: se pierde el inventario, y en un local de volumen eso es más dinero que la propia máquina.",
      "TRUE fabrica en Estados Unidos equipos pensados para trabajar dentro del calor de una cocina profesional, que es donde la mayoría de los equipos de frío sufren. Hay tres formatos según dónde vaya: exhibidor de puertas de vidrio para la sala, vertical de puerta sólida para almacén y bajo mesada para la línea de producción.",
    ],
  },
  {
    slug: "amasadoras",
    route: "/equipos/amasadoras",
    name: "Amasadoras",
    tagline: "Espiral, Wendel y brazos, según la masa que trabajes",
    heroImage: amasadorasHero,
    categorias: ["Amasadora de espiral", "Amasadora Wendel", "Amasadora de brazos"],
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    parrafos: [
      "La amasadora decide la estructura de la masa, y la estructura decide el producto final. No es un equipo que se elija por litros: se elige por el tipo de masa que se va a trabajar todos los días.",
      "El espiral es el estándar de la panadería de barra. El sistema WENDEL de DIOSNA amasa sin calentar la masa, que es lo que permite fermentaciones largas y controladas. Y la amasadora de brazos de Pietroberto reproduce el amasado manual, que sigue siendo lo que pide cierta panadería tradicional.",
    ],
  },
  {
    slug: "laminadoras",
    route: "/equipos/laminadoras",
    name: "Laminadoras",
    tagline: "Hojaldre, croissant y masas laminadas con espesor constante",
    heroImage: laminadorasHero,
    categorias: ["Laminadora electrónica", "Laminadora mecánica", "Línea automática de croissants"],
    industries: ["panaderia", "hoteles-catering", "cocinas-industriales"],
    parrafos: [
      "Laminar a mano es posible; laminar igual todos los días, no. Lo que separa un croissant de pastelería de uno de supermercado es que el espesor de cada capa sea el mismo en la primera bandeja y en la última.",
      "RONDO es la referencia mundial en laminado, y tiene tres niveles según el volumen: la mecánica para el obrador que empieza, la electrónica con regulación precisa del espesor, y la línea automática de croissants para producción continua.",
    ],
  },
  {
    slug: "batidoras",
    route: "/equipos/batidoras",
    name: "Batidoras planetarias",
    tagline: "Cremas, merengues y masas blandas en volumen",
    heroImage: batidorasHero,
    categorias: ["Batidora planetaria"],
    industries: ["panaderia", "restaurantes", "hoteles-catering"],
    parrafos: [
      "La batidora planetaria es el equipo más versátil de una pastelería: con el accesorio adecuado bate, mezcla y amasa. Por eso suele ser el que más horas trabaja y el primero que se queda corto cuando la producción crece.",
      "Pietroberto lleva más de cien años fabricando en Italia maquinaria de panificación. Su serie MIX está construida para uso industrial continuo, no para picos.",
    ],
  },
  {
    slug: "divisoras",
    route: "/equipos/divisoras",
    name: "Divisoras y formado",
    tagline: "Peso exacto por pieza, sin pesar a mano",
    heroImage: divisorasHero,
    categorias: ["Divisora volumétrica", "Divisora-boleadora automática", "Formadora de barras"],
    industries: ["panaderia", "cocinas-industriales"],
    parrafos: [
      "Dividir a ojo cuesta dinero dos veces: por los gramos de más que se regalan en cada pieza y por las que salen de menos y no se pueden vender. Multiplicado por la producción de un día, es de los cálculos que más sorprenden cuando se hace.",
      "Pietroberto cubre las tres operaciones de la línea: la divisora volumétrica corta por volumen, la divisora-boleadora divide y bolea en un solo paso, y la formadora da la forma final a la barra.",
    ],
  },
  {
    slug: "moldes-y-bandejas",
    route: "/equipos/moldes-y-bandejas",
    name: "Moldes, bandejas y carros",
    tagline: "Lo que sostiene el producto entre el amasado y el horno",
    heroImage: moldesHero,
    categorias: ["Moldes de panificación", "Bandejas de horneo", "Racks", "Estufas y esqueletos"],
    industries: ["panaderia", "cocinas-industriales", "supermercados"],
    parrafos: [
      "Es la parte del flujo que casi nunca se planifica y que decide buena parte de la merma: en qué molde se hornea, en qué bandeja se posa, en qué carro se transporta y en qué estufa fermenta.",
      "Aquí lo que se desgasta no es el metal sino el recubrimiento antiadherente, y de él depende cada cuánto hay que volver a comprar. American Pan fabrica moldes, bandejas y racks con recubrimiento de grado industrial; Cainco, estufas, carros y canaletas en Aluminol en las medidas estándar del mercado.",
    ],
  },
  {
    slug: "lavavajillas",
    route: "/equipos/lavavajillas",
    name: "Lavavajillas industriales",
    tagline: "Máquina, detergente y tratamiento de agua como un solo sistema",
    heroImage: lavavajillasHero,
    categorias: ["Lavavajillas bajo mostrador", "Lavavajillas de cúpula", "Lavautensilios"],
    industries: ["restaurantes", "hoteles-catering", "cocinas-industriales", "bares-cafeterias"],
    parrafos: [
      "En el Perú el agua es dura casi en todas partes, y esa es la razón por la que la vajilla sale opaca aunque la máquina lave bien. El resultado no depende solo del equipo: depende de la combinación de máquina, detergente y tratamiento del agua.",
      "Winterhalter fabrica los tres y los vende como sistema, que es lo que hace la diferencia visible en el vaso. Tres formatos según el volumen: bajo mostrador para barra, de cúpula para cocina y lavautensilios para ollas y bandejas.",
    ],
  },
  {
    slug: "cortadoras",
    route: "/equipos/cortadoras",
    name: "Cortado y porcionado",
    tagline: "Control del grosor al medio milímetro",
    heroImage: cortadorasHero,
    categorias: ["Cortadora de porciones"],
    industries: ["carnicerias", "supermercados", "cocinas-industriales"],
    parrafos: [
      "En un mostrador de supermercado o en una sala de despiece, el porcionado es donde se gana o se pierde margen. Cada gramo de más por bandeja, multiplicado por la producción del día, es dinero que no vuelve.",
      "TREIF es la marca alemana de tecnología de corte del grupo JBT Marel. Sus equipos DIVIDER porcionan desde medio milímetro de grosor e incorporan ECO SLICING, que permite cortar el producto a mayor temperatura y bajar lo que cuesta enfriarlo antes de procesarlo.",
    ],
  },
  {
    slug: "chocolate",
    route: "/equipos/chocolate",
    name: "Temperado de chocolate",
    tagline: "La curva sostenida, turno tras turno",
    heroImage: chocolateHero,
    categorias: ["Temperadora de chocolate"],
    industries: ["panaderia", "restaurantes", "hoteles-catering"],
    parrafos: [
      "Un chocolate mal temperado se reconoce a simple vista: pierde brillo, se marca de blanco y no rompe con el chasquido que el cliente asocia con calidad. Todo eso depende de una curva de temperatura que hay que sostener con precisión y repetir igual cada turno.",
      "Pomati fabrica en Italia equipos dedicados exactamente a ese control. No es un accesorio de la cocina: es el equipo que decide si el producto terminado se puede vender al precio que se quiere vender.",
    ],
  },
];

export function getEquipoBySlug(slug) {
  return equiposData.find((e) => e.slug === slug) || null;
}

export function getProductsByEquipo(slug) {
  const familia = getEquipoBySlug(slug);
  if (!familia) return [];
  return productsData.filter((p) => familia.categorias.includes(p.category));
}

export function getBrandsByEquipo(slug) {
  const suyos = getProductsByEquipo(slug);
  return [...new Set(suyos.map((p) => p.brand))];
}
