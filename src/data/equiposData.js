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
import cafeterasHero from "../assets/images/brands/jura-w8-latte.webp";

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
  // Abatidores: entran el 2 de octubre de 2026 con IRINOX, marca que B&P confirmó
  // que representa. «abatidor» son 720 búsquedas al mes en el Perú y «abatidor de
  // temperatura», 260. Sin foto de portada hasta tener permiso de la marca.
  {
    slug: "abatidores",
    route: "/equipos/abatidores",
    name: "Abatidores",
    h1: "Abatidores de temperatura",
    tagline: "Enfriar a +3 °C y congelar a −18 °C en el corazón del producto",
    categorias: ["Abatidor de temperatura"],
    industries: ["panaderia", "restaurantes", "hoteles-catering", "cocinas-industriales", "supermercados", "carnicerias", "comida-rapida"],
    parrafos: [
      "Un abatidor de temperatura hace en poco tiempo lo que una cámara no puede: lleva un producto recién horneado o cocinado a +3 °C en el corazón para conservarlo, o a −18 °C para congelarlo.",
      "La rapidez es lo que importa. Según IRINOX, el enfriamiento rápido frena el deterioro de los alimentos, detiene la oxidación y reduce la proliferación de bacterias, y la congelación ultrarrápida forma microcristales que no dañan la estructura del alimento.",
      "En la práctica, permite producir con anticipación: se hornea o se cocina en las horas tranquilas, se abate y se termina o se sirve cuando hace falta, sin perder calidad entre un momento y otro.",
      "Trabajamos con IRINOX, la marca italiana especializada en abatidores, en tres líneas: SimplyFresh, compacto, de 5 bandejas y 20 kg por ciclo; EasyFresh Next, de 10 a 70 kg con 7 funciones; y MultiFresh Next, de 25 a 95 kg con hasta 12 funciones según la versión, entre ellas descongelación, fermentación y cocción a baja temperatura. La elección depende de cuántos kilos sale de tu producción en cada ciclo.",
    ],
  },
  {
    slug: "hornos",
    route: "/equipos/hornos",
    name: "Hornos",
    h1: "Hornos industriales para panadería",
    tagline: "Tubos de vapor, eléctricos de pisos y rotativos de carro",
    categorias: [
      "Horno de pisos de tubos de vapor",
      "Horno eléctrico de pisos",
      "Horno rotativo",
    ],
    industries: ["panaderia", "supermercados", "cocinas-industriales", "hoteles-catering"],
    parrafos: [
      "El horno es la inversión que más condiciona qué puede producir una panadería: el tipo de pan, el volumen por turno y cuánto se parece cada horneada a la anterior.",
      "Mondial Forni fabrica en Italia las tres familias. Los de tubos de vapor cuecen por inercia térmica, con el calor entrando desde la solera, que es lo que pide el pan de gran formato. Los eléctricos de pisos dan control independiente piso a piso, así que se hornea a la vez a temperaturas distintas. Y los rotativos de carro son los de mayor rotación por hora. Los ocho modelos llevan el mismo control MFTouch, que guarda la curva de cada producto en la máquina y no en la cabeza de quien esté ese turno.",
    ],
  },
  {
    slug: "cafeteras",
    route: "/equipos/cafeteras",
    name: "Cafeteras",
    // "cafetera profesional" (390/mes) y "cafetera automatica" (480/mes) son las
    // consultas de la categoria; el nombre corto se queda para menus y migas.
    h1: "Cafeteras automáticas profesionales",
    tagline: "Automáticas profesionales para oficina, hotel y restaurante",
    heroImage: cafeterasHero,
    categorias: ["Cafetera automática profesional", "Cafetera automática"],
    industries: ["hoteles-catering", "restaurantes", "cocinas-industriales", "otros"],
    parrafos: [
      "Una cafetera automática profesional resuelve el café de un negocio sin dedicarle una persona: muele el grano, extrae y espuma la leche con un botón, y el resultado no depende de quién la use. Es la solución de las oficinas, hoteles, comedores y restaurantes que sirven café todo el día.",
      "Trabajamos con JURA, el fabricante suizo especializado en cafeteras automáticas, del que somos codistribuidores autorizados en el Perú. Su gama cubre tres volúmenes: la E8 para la gerencia o una oficina pequeña, la W8 para hasta 50 tazas al día y la X10 para hasta 100. Con instalación y capacitación incluidas, técnico en 24 horas y repuestos garantizados por diez años.",
    ],
    // Guía para elegir, aprobada por Enrique el 2-oct-2026 como sección de esta
    // página (no como artículo aparte: mientras Google indexe poco, se amplían las
    // páginas que ya existen). Cifras de JURA, las mismas del selector de
    // /marcas/jura; B&P es codistribuidor autorizado, nunca "oficial". Apunta a
    // "cafetera automática" (480/mes), "cafetera profesional" (390), "cafetera para
    // oficina" (110) y "cafetera superautomática" (70). Sin precios.
    guia: {
      titulo: "Cómo elegir una cafetera automática para tu oficina o negocio",
      secciones: [
        {
          titulo: "Empieza por las tazas al día",
          parrafos: [
            "La pregunta que decide la compra no es qué modelo es más nuevo, sino cuántos cafés se sirven en un día normal. JURA publica para sus cafeteras profesionales un rendimiento diario máximo recomendado, y con esa cifra conviene elegir: pasarse exige de más a la máquina, y quedarse muy por debajo es pagar capacidad que no se usa.",
          ],
          lista: [
            { lead: "Hasta 50 tazas al día: JURA W8.", text: "Hasta 83 espressos por hora, 17 especialidades, depósito de agua de 3 litros y 500 g de café en grano. Para oficinas, tiendas, estudios y locales comerciales." },
            { lead: "Hasta 100 tazas al día: JURA X10.", text: "Hasta 92 espressos por hora y 35 especialidades, incluidas las de Cold Brew, con depósito de 5 litros y de 500 g a 1 kg de café en grano. Para oficinas grandes, comedores, zonas de autoservicio y centros de salud." },
            { lead: "Para la gerencia o una oficina pequeña: JURA E8.", text: "Es de la línea doméstica de JURA, que no le publica un rendimiento profesional: está pensada para la gerencia, una sala de reuniones o una oficina pequeña." },
          ],
          cierre: [
            "Una forma rápida de calcularlo: cuenta cuántas personas toman café y cuántas veces al día. Veinte personas que toman dos cafés suman unas 40 tazas, el terreno de la W8.",
          ],
        },
        {
          titulo: "Automática, de cápsulas o de barra",
          lista: [
            { lead: "La automática", text: "muele el grano en el momento, dosifica, extrae y espuma la leche con un botón. El café sale igual lo prepare quien lo prepare, y por eso es la solución de las oficinas, hoteles, comedores y restaurantes que sirven café todo el día sin dedicarle una persona. En el mercado también se la llama superautomática." },
            { lead: "La de cápsulas", text: "usa café molido y envasado de antemano en porciones. Es sencilla de usar, pero el café no se muele en el momento y cada taza requiere comprar una cápsula." },
            { lead: "La máquina de barra", text: ", con portafiltro y molino aparte, da el mayor control sobre la extracción, pero el resultado depende de la mano del barista. Tiene sentido donde el café es el producto, como una cafetería." },
          ],
        },
        {
          titulo: "Qué mantenimiento necesita",
          parrafos: [
            "Una JURA se limpia sola con un botón, pero necesita sus consumibles originales para mantener la higiene y el sabor: pastillas de limpieza, limpiador del sistema de leche y filtro de agua CLARIS. Además, las piezas del circuito de leche se cambian cada pocos meses; el juego de accesorios HP3, por ejemplo, cada tres meses, según JURA. En nuestra página de JURA están los consumibles de cada modelo con su número de artículo.",
          ],
          enlace: { texto: "nuestra página de JURA", to: "/marcas/jura" },
        },
        {
          titulo: "Lo que incluye comprarla con B&P Tech",
          parrafos: [
            "Somos codistribuidores autorizados de JURA en el Perú. La instalación y la capacitación de tu personal van incluidas: la dejamos funcionando y enseñamos a quienes la van a usar a preparar, limpiar y cuidar la máquina. Después, respondemos en 24 horas cuando necesite atención y garantizamos repuestos para todos los modelos durante diez años.",
          ],
        },
      ],
    },
    // Preguntas frecuentes de la guía: se pintan en la página y schemaData las
    // declara tal cual como FAQPage.
    faqs: [
      {
        q: "¿Qué cafetera conviene para una oficina de 20 personas?",
        a: "Depende de cuántos cafés se tomen. Si cada persona toma dos al día, son unas 40 tazas: la W8, pensada para hasta 50 al día, cubre ese volumen con margen. Si la oficina crece o el café también se sirve a visitas, la X10 llega hasta 100.",
      },
      {
        q: "¿Una cafetera automática y una superautomática son lo mismo?",
        a: "En el mercado se usan los dos nombres. Lo que importa es si la máquina muele el grano y prepara la bebida completa con un botón: las JURA lo hacen, y por eso también se las llama superautomáticas.",
      },
      {
        q: "¿Qué mantenimiento necesita una cafetera automática?",
        a: "La limpieza la hace la propia máquina con un botón. Lo que hay que reponer son los consumibles: pastillas de limpieza, limpiador del sistema de leche y filtro de agua, y cada pocos meses las piezas del circuito de leche.",
      },
      {
        q: "¿La instalación está incluida?",
        a: "Sí. La instalación y la capacitación del personal van incluidas, con técnico en 24 horas y repuestos garantizados por diez años.",
      },
    ],
  },
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
    h1: "Amasadoras industriales",
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
    h1: "Laminadoras de masa",
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
    h1: "Batidoras planetarias industriales",
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
    h1: "Divisoras y boleadoras de masa",
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
    h1: "Cortadoras y porcionadoras industriales",
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
    h1: "Temperadoras de chocolate",
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
