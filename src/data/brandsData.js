import { IMAGE } from "../constent/theme";
import rondoLogo from "../assets/images/brands/rondo-logo.svg";
import rondoHero from "../assets/images/brands/rondo-automat-2000.webp";
import diosnaLogo from "../assets/images/brands/diosna-logo.svg";
import diosnaHero from "../assets/images/brands/diosna-wendel.webp";
import winterhalterLogo from "../assets/images/brands/winterhalter-logo.png";
import winterhalterHero from "../assets/images/brands/winterhalter-u50-hero.webp";
import trueLogo from "../assets/images/brands/true-logo.png";
import trueHero from "../assets/images/brands/true-gdm-49.webp";
import pietrobertoLogo from "../assets/images/brands/pietroberto-logo.png";
import pietrobertoHero from "../assets/images/brands/pietroberto-mix.webp";
import pietrobertoMix from "../assets/images/brands/pietroberto-mix.webp";
import pietrobertoOmega from "../assets/images/brands/pietroberto-omega.webp";
import rondoAmbient from "../assets/images/gen/brand-rondo.webp";
import diosnaAmbient from "../assets/images/gen/brand-diosna.webp";
import winterhalterAmbient from "../assets/images/gen/brand-winterhalter.webp";
import trueAmbient from "../assets/images/gen/brand-true.webp";
import pietrobertoAmbient from "../assets/images/gen/brand-pietroberto.webp";
// Marcas que hasta hoy solo tenian logo en el indice. El hero de cada una es la
// foto del equipo que ya estaba verificada en productsData; no hay ambientImage
// generada para ellas y la plantilla la salta sin romperse.
import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import vitamixHero from "../assets/images/brands/vitamix-quiet-one.webp";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import caincoHero from "../assets/images/brands/cainco-estufa.webp";
import pomatiLogo from "../assets/images/brands/pomati-logo.png";
import pomatiHero from "../assets/images/products/pomati-t35.webp";
import americanpanLogo from "../assets/images/brands/americanpan-logo.png";
import americanpanHero from "../assets/images/products/americanpan-bread-tins.webp";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";
import jbtmarelHero from "../assets/images/products/jbtmarel-treif-divider-660.webp";
// JURA: material grafico oficial de la marca, con autorizacion de uso para B&P
// Tech como codistribuidor. Salen de api.jura.com, las mismas fichas del Peru.
import juraLogo from "../assets/images/brands/jura-logo.png";
import juraHero from "../assets/images/brands/jura-x10-hero.webp";
import juraAmbient from "../assets/images/gen/brand-jura.webp";


export const brandsData = [
  {
    slug: "jura",
    route: "/marcas/jura",
    name: "JURA",
    // El H1 por defecto es el nombre de la marca. Aqui se dice lo que se busca:
    // "cafetera jura" y "jura peru" son las dos consultas de marca con volumen.
    h1: "Cafeteras JURA en Perú",
    logo: juraLogo,
    heroImage: juraHero,
    ambientImage: juraAmbient,
    origin: "Suiza",
    productType: "Cafeteras automáticas",
    // B&P Tech es CODISTRIBUIDOR autorizado; el distribuidor oficial en el Peru es
    // otra empresa. Ningun texto de esta ficha debe decir "oficial" ni "representante".
    tagline: "Cafeteras automáticas suizas para oficinas, hoteles y restaurantes",
    shortDescription:
      "Cafeteras automáticas suizas que muelen el grano para cada taza: E8, W8 y X10, de hasta 100 tazas al día, con técnico en 24 horas y repuestos garantizados por 10 años.",
    officialSite: "https://www.jura.com",
    industries: ["hoteles-catering", "restaurantes", "cocinas-industriales", "otros"],
    promise: [
      { title: "Técnico en 24 horas", text: "Ese es nuestro tiempo de respuesta cuando una máquina necesita atención." },
      { title: "Repuestos por 10 años", text: "Garantizados para todos los modelos que vendemos." },
      { title: "Codistribuidor autorizado", text: "JURA nos eligió para vender sus cafeteras en el Perú." },
      { title: "Café en grano, sin cápsulas", text: "Cada taza se muele en el momento de prepararla." },
    ],
    sections: [
      {
        title: "Café de barista, sin barista",
        paragraphs: [
          "Una cafetera automática JURA muele el grano, dosifica, extrae y espuma la leche con un solo botón. En un negocio eso significa algo muy concreto: el café sale igual de bueno lo prepare quien lo prepare, en el primer turno y en el último.",
          "Detrás hay dos tecnologías propias de la marca. El molino P.A.G.2 muele cada taza en el momento y entra en reposo entre preparación y preparación, que es lo que alarga su vida útil. Y el Proceso de Extracción por Pulsos (P.E.P.) hace pasar el agua a intervalos cortos, que es de donde sale el espresso intenso de las JURA.",
        ],
      },
      {
        title: "Lo que añade comprarla con B&P Tech",
        paragraphs: [
          "Una cafetera automática vale lo que vale su servicio. Por eso nos comprometemos a responder en 24 horas cuando una máquina necesita atención, y garantizamos repuestos para todos los modelos durante diez años.",
          "Y si tu negocio ya trabaja con nosotros por el lavavajillas Winterhalter, la refrigeración True o la línea de panadería, la cafetera entra en la misma relación: un solo proveedor, un solo interlocutor técnico, una sola factura.",
        ],
      },
    ],
    selector: {
      title: "Elige por tazas al día, no por modelo",
      intro:
        "La pregunta que decide la compra no es qué modelo es más nuevo, sino cuántos cafés se sirven en un día normal. JURA publica para sus profesionales un rendimiento diario máximo recomendado, y esa es la cifra con la que conviene elegir: pasarse de él exige de más a la máquina, y quedarse muy por debajo es pagar capacidad que no se usa.",
      note: "Rendimiento diario máximo recomendado y tazas por hora según JURA (norma DIN 18873-2). La E8 es de la línea doméstica y JURA no le publica rendimiento profesional.",
      columns: ["Tazas al día", "Espressos por hora", "Especialidades", "Depósito de agua", "Café en grano", "Pensada para"],
      rows: [
        { model: "E8", to: null, values: ["Uso doméstico", "—", "17", "1,9 l", "280 g", "Gerencia, sala de reuniones, oficina pequeña"] },
        { model: "W8", to: null, values: ["Hasta 50", "83", "17", "3 l", "500 g", "Oficinas, tiendas, estudios y locales comerciales"] },
        { model: "X10", to: null, values: ["Hasta 100", "92", "35, con Cold Brew", "5 l", "500 g a 1 kg", "Oficinas grandes, comedores, autoservicio y centros de salud"] },
      ],
    },
    advantages: [
      "Café en grano recién molido para cada taza, sin cápsulas.",
      "Limpieza del sistema de leche automática, con un botón, en los tres modelos.",
      "Higiene con certificación TÜV y filtro de agua CLARIS integrado.",
      "W8 y X10 compatibles con sistemas de pago y telemetría (MDB 2.0 y JURA Pocket Pilot, opcionales), para cobrar el café en zonas de autoservicio.",
      "La X10 prepara Cold Brew en el momento, extraído en frío a partir de grano recién molido.",
    ],
    faqs: [
      {
        q: "¿Qué cafetera JURA necesito para mi negocio?",
        a: "Depende de cuántas tazas sirves al día. Hasta 50, la W8. Hasta 100, la X10, que además prepara Cold Brew. Para la gerencia, una sala de reuniones o una oficina pequeña, la E8. Son los rendimientos máximos que recomienda JURA para cada modelo.",
      },
      {
        q: "¿Qué pasa si la cafetera falla?",
        a: "Nuestro tiempo de respuesta es de 24 horas. Una cafetera parada en una oficina o en un hotel se nota enseguida, y por eso es el compromiso que ponemos por delante.",
      },
      {
        q: "¿Hay repuestos en el Perú?",
        a: "Sí. Garantizamos repuestos para todos los modelos JURA que vendemos durante diez años.",
      },
      {
        q: "¿Usa cápsulas?",
        a: "No. Las JURA trabajan con café en grano, que muelen en el momento de preparar cada taza. Eso permite trabajar con el café que elijas, sin depender de las cápsulas de una marca.",
      },
      {
        q: "¿Se puede cobrar el café en una zona de autoservicio?",
        a: "Sí, con la W8 y la X10. Las dos admiten la conexión MDB 2.0, que las enlaza con los sistemas de pago habituales, y el software gratuito JURA Pocket Pilot para pago sin contacto y gestión. Ambos son opcionales.",
      },
      {
        q: "¿Sirve para una cafetería de especialidad?",
        a: "Para una barra con barista y más de cien tazas al día conviene una máquina de espresso tradicional. Una JURA brilla justo donde no hay barista: oficinas, hoteles, comedores y restaurantes que sirven café sin dedicarle una persona.",
      },
      {
        q: "¿Se pueden alquilar?",
        a: "No: trabajamos solo con venta. La máquina es de tu empresa, con su garantía y con repuestos asegurados por diez años.",
      },
    ],
    closingStatement:
      "Una cafetera automática vale lo que vale su servicio. La nuestra viene con técnico en 24 horas y repuestos asegurados por diez años.",
  },

  {
    slug: "mondialforni",
    route: "/marcas/mondialforni",
    name: "MONDIAL FORNI",
    origin: "Italia",
    tagline: "Hornos de pisos y rotativos con control MFTouch",
    shortDescription:
      "Hornos de tubos de vapor, eléctricos de pisos y rotativos de carro para panificación y pastelería, todos con pantalla táctil MFTouch.",
    industries: ["panaderia", "supermercados", "cocinas-industriales", "hoteles-catering"],
    productType: "Hornos de panificación",
    sections: [
      {
        title: "Tres formas de hornear, y hay que elegir bien",
        paragraphs: [
          "El horno es la inversión más grande de una panadería y la que más condiciona qué se puede producir. Mondial Forni fabrica en Italia las tres familias, y cada una responde a una pregunta distinta.",
          "Los de tubos de vapor —Mondial, Ecomondial y LEM— cuecen por inercia térmica: el calor entra desde la solera y aguanta, que es lo que pide el pan de gran formato. Los eléctricos de pisos —Dekomondial y Domino— dan control independiente por piso, así que se hornea a la vez a temperaturas distintas. Y los rotativos de carro —Techno, Basic y Slim— son los de mayor rotación por hora, porque entra un carro entero y el producto gira dentro.",
        ],
      },
      {
        title: "MFTouch: la receta deja de estar en la cabeza del maestro",
        paragraphs: [
          "Los ocho modelos llevan el control MFTouch, una pantalla táctil a color que guarda hasta ochenta recetas de nueve fases cada una, con encendido y apagado programados y acceso por contraseña.",
          "En la práctica eso significa que la curva de horneo de cada producto queda escrita en la máquina y no depende de quién esté ese turno. Para una panadería que crece, o que abre un segundo local, es la diferencia entre repetir la calidad y volver a aprenderla.",
        ],
      },
    ],
  },

  {
    slug: "vitamix",
    route: "/marcas/vitamix",
    name: "VITAMIX",
    origin: "Estados Unidos",
    tagline: "Licuadoras comerciales para barras y cocinas de alto tránsito",
    logo: vitamixLogo,
    heroImage: vitamixHero,
    shortDescription:
      "Licuadoras comerciales de uso intensivo, con motores de hasta 3 HP y jarras diseñadas para resistir el ritmo de una barra profesional.",
    industries: ["bares-cafeterias", "restaurantes", "comida-rapida", "hoteles-catering"],
    productType: "Licuadoras comerciales",
    sections: [
      {
        title: "Potencia pensada para el servicio, no para la vitrina",
        paragraphs: [
          "Vitamix fabrica en Estados Unidos equipos de mezclado para uso comercial continuo. La diferencia frente a una licuadora doméstica no está en la potencia nominal sino en para cuántos ciclos al día está construida: motores de hasta 3 HP de salida máxima, control de velocidad variable y jarras de alto impacto pensadas para que el vaso no sea la pieza que se rompe primero.",
          "En una barra de café o en una cocina de alto tránsito, el equipo de mezclado es de los que más veces se enciende en el día. Ahí la fiabilidad deja de ser una ficha técnica y se vuelve una cuestión de servicio.",
        ],
      },
      {
        title: "Dos equipos para dos problemas distintos",
        paragraphs: [
          "The Quiet One está diseñada específicamente para barras donde el ruido es parte de la experiencia del cliente: incorpora reducción de sonido y una jarra Advance que además alarga la vida útil del vaso.",
          "Vita-Prep 3 está pensada para la cocina, no para la barra: mezclas espesas, purés y preparaciones congeladas, con tamper para empujar el producto y jarra de 2 litros libre de BPA.",
        ],
      },
    ],
  },
  {
    slug: "cainco",
    route: "/marcas/cainco",
    name: "CAINCO",
    origin: "Brasil",
    tagline: "Bandejas, estufas y carros para el flujo diario de una panadería",
    logo: caincoLogo,
    heroImage: caincoHero,
    shortDescription:
      "Bandejas de horneo, estufas y carros esqueleto en Aluminol para panaderías, supermercados e industria de panificación.",
    industries: ["panaderia", "supermercados"],
    productType: "Bandejas, estufas y carros",
    sections: [
      {
        title: "Lo que sostiene el producto entre el amasado y el horno",
        paragraphs: [
          "Entre que la masa sale de la amasadora y entra al horno hay un recorrido que casi nunca se planifica y que decide buena parte de la merma: en qué bandeja se posa el pan, en qué carro se transporta, en qué estufa fermenta. Cainco fabrica en Brasil esa parte del flujo.",
          "Las bandejas, estufas y carros se construyen en Aluminol y se fabrican en las medidas estándar de bandeja del mercado (58×70, 40×80, 60×80, 62×36 y 60×40 cm), que es lo que permite que el equipamiento nuevo entre en la línea que ya existe sin rehacerla.",
        ],
      },
      {
        title: "Pan francés: una canaleta, no una bandeja plana",
        paragraphs: [
          "El pan francés no se hornea bien sobre una superficie plana. Cainco fabrica canaletas de perfil de aluminio, con construcción soldada o remachada, en configuraciones de 5, 6 y 7 ondas según la medida de bandeja.",
          "Es una pieza de bajo costo unitario que se compra por decenas y que se cambia cada pocos años: conviene que las medidas coincidan con los carros y las estufas que ya están en planta.",
        ],
      },
    ],
  },
  {
    slug: "pomati",
    route: "/marcas/pomati",
    name: "POMATI",
    origin: "Italia",
    tagline: "Temperado de chocolate con control real de la curva",
    logo: pomatiLogo,
    heroImage: pomatiHero,
    shortDescription:
      "Temperadoras de chocolate de fabricación italiana para pastelería, chocolatería y hotelería, con control preciso del ciclo de temperado.",
    industries: ["panaderia", "restaurantes", "hoteles-catering"],
    productType: "Temperadoras de chocolate",
    sections: [
      {
        title: "El temperado no se improvisa",
        paragraphs: [
          "Un chocolate mal temperado se reconoce a simple vista: pierde brillo, se marca de blanco y no rompe con ese chasquido que el cliente asocia con calidad. Todo eso depende de una curva de temperatura que hay que sostener con precisión y de forma repetible, turno tras turno.",
          "Pomati fabrica en Italia equipos dedicados exactamente a ese control. No es un accesorio de la cocina: es el equipo que decide si el producto terminado se puede vender al precio que se quiere vender.",
        ],
      },
    ],
  },
  {
    slug: "americanpan",
    route: "/marcas/americanpan",
    name: "AMERICAN PAN",
    origin: "Estados Unidos",
    tagline: "Moldes y bandejas con recubrimiento de grado industrial",
    logo: americanpanLogo,
    heroImage: americanpanHero,
    shortDescription:
      "Moldes de pan, bandejas para baguette y racks de horno con recubrimientos antiadherentes de larga duración para panificación industrial.",
    industries: ["panaderia", "cocinas-industriales"],
    productType: "Moldes, bandejas y racks",
    sections: [
      {
        title: "El recubrimiento es el consumible real",
        paragraphs: [
          "En panificación industrial el molde no se compra una vez: se compra, se desgasta y se vuelve a comprar. Lo que determina cada cuánto ocurre eso no es el metal, es el recubrimiento antiadherente y cuántos ciclos de horno aguanta antes de empezar a pegar.",
          "American Pan fabrica en Estados Unidos moldes, bandejas y racks con recubrimientos de grado industrial, en configuraciones individuales, en línea y en bloque, pensados para líneas donde el molde entra y sale del horno varias veces al día.",
        ],
      },
    ],
  },
  {
    slug: "jbtmarel",
    route: "/marcas/jbtmarel",
    name: "JBT MAREL",
    origin: "Alemania",
    tagline: "Porcionado y corte de precisión con tecnología TREIF",
    logo: jbtmarelLogo,
    heroImage: jbtmarelHero,
    shortDescription:
      "Cortadoras y porcionadoras TREIF para carnicerías, supermercados y cocinas de producción, con control de grosor al medio milímetro.",
    industries: ["carnicerias", "supermercados", "cocinas-industriales"],
    productType: "Cortadoras y porcionadoras",
    sections: [
      {
        title: "TREIF, la ingeniería de corte del grupo",
        paragraphs: [
          "TREIF es la marca alemana de tecnología de corte dentro del grupo JBT Marel. Sus equipos porcionan fiambres, carnes y quesos con control de grosor desde medio milímetro y velocidades de cuchilla de hasta 660 rpm, apilando o intercalando el producto según lo que pida el envase final.",
          "En un mostrador de supermercado o en una sala de despiece, el porcionado es donde se gana o se pierde margen: cada gramo de más por bandeja, multiplicado por la producción del día, es dinero que no vuelve.",
        ],
      },
      {
        title: "ECO SLICING: cortar más caliente cuesta menos",
        paragraphs: [
          "Los equipos DIVIDER incorporan ECO SLICING, una tecnología que permite cortar el producto a temperaturas más altas de lo habitual. Eso reduce lo que hay que gastar en enfriar la materia prima antes de procesarla, que en una sala de corte es una de las partidas energéticas más grandes.",
          "El DIVIDER 660+ está pensado para procesadores pequeños y medianos; el DIVIDER Lineup, para capacidad media con software de recetas y pantalla táctil.",
        ],
      },
    ],
  },
  {
    slug: "rondo",
    route: "/marcas/rondo",
    name: "RONDO",
    origin: "Suiza",
    tagline: "Precisión suiza para la excelencia en panificación y pastelería",
    logo: rondoLogo,
    heroImage: rondoHero,
    ambientImage: rondoAmbient,
    shortDescription:
      "Laminadoras de clase mundial diseñadas para profesionales exigentes. Ingeniería suiza de precisión, innovación constante y robustez excepcional.",
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    productType: "Laminadoras",
    sections: [
      {
        title: "La referencia mundial en laminado",
        paragraphs: [
          "La laminadora de RONDO representa el más alto estándar en tecnología de laminado a nivel mundial. Diseñada para profesionales exigentes, combina ingeniería suiza de precisión, innovación constante y una robustez excepcional que garantiza resultados consistentes en cada proceso.",
          "Pensada para optimizar la producción artesanal e industrial, la laminadora RONDO permite trabajar masas con absoluta uniformidad, respetando su estructura y logrando capas perfectas. Ya sea para croissants, hojaldres, masas danesas o productos especiales, su desempeño asegura un laminado homogéneo que se traduce en una textura superior y un acabado impecable.",
        ],
      },
      {
        title: "Diseño y operación",
        paragraphs: [
          "Su diseño ergonómico y funcional facilita la operación diaria, reduciendo el esfuerzo del operador y aumentando la productividad. Los controles intuitivos, junto con su sistema de regulación precisa del espesor, permiten adaptar cada proceso a las necesidades específicas del producto, garantizando repetibilidad y eficiencia.",
          "RONDO se distingue por su enfoque en higiene, seguridad y durabilidad. Sus materiales de alta calidad y acabados sanitarios cumplen con los estándares internacionales más exigentes, asegurando una larga vida útil y un mantenimiento sencillo.",
        ],
      },
      {
        title: "Modelo destacado: AUTOMAT 2000",
        paragraphs: [
          "La AUTOMAT 2000 de RONDO es la solución ideal para panaderías y pastelerías que buscan eficiencia, robustez y facilidad de uso en el laminado diario.",
        ],
        groups: [
          {
            title: "Laminado rápido y eficiente",
            items: [
              {
                title: "Motor potente y silencioso",
                text: "Permite un estirado rápido, uniforme y continuo.",
              },
              {
                title: "Rodillos robustos de gran diámetro",
                text: "Aseguran un laminado homogéneo incluso con masas exigentes.",
              },
              {
                title: "Amplia banda de laminado",
                text: "Facilita el trabajo con piezas grandes y reduce tiempos de proceso.",
              },
            ],
          },
          {
            title: "Robusta para funcionamiento a varios turnos",
            items: [
              {
                title: "Construcción sólida",
                text: "Diseñada para soportar jornadas extensas sin perder rendimiento.",
              },
              {
                title: "Componentes de alta calidad",
                text: "Garantizan durabilidad y confiabilidad a largo plazo.",
              },
            ],
          },
          {
            title: "Manejo sencillo y amigable",
            items: [
              {
                title: "Rueda de ajuste intuitiva",
                text: "La curva de laminado mecánica predefinida facilita el ajuste manual.",
              },
              {
                title: "Distancia automática entre rodillos",
                text: "Se configura automáticamente al cambiar la dirección de giro.",
              },
            ],
          },
        ],
      },
    ],
    advantages: [
      "Laminado uniforme con precisión milimétrica",
      "Mayor eficiencia operativa y ahorro de tiempo",
      "Diseño robusto y duradero",
      "Fácil limpieza y mantenimiento",
      "Adaptabilidad a diversos tipos de masa y producción",
    ],
    closingStatement:
      "Invertir en una laminadora RONDO es apostar por calidad, rendimiento y consistencia. Es la herramienta ideal para llevar la producción a un nivel superior, elevando cada creación a estándares profesionales de clase mundial.",
  },

  {
    slug: "diosna",
    route: "/marcas/diosna",
    name: "DIOSNA",
    origin: "Alemania",
    tagline: "Ingeniería alemana para masas perfectas",
    logo: diosnaLogo,
    heroImage: diosnaHero,
    ambientImage: diosnaAmbient,
    shortDescription:
      "Amasadoras WENDEL de alta potencia, precisión y confiabilidad para panaderías, pastelerías e industrias que buscan consistencia y calidad superior.",
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    productType: "Amasadoras",
    sections: [
      {
        title: "Potencia y precisión en el amasado profesional",
        paragraphs: [
          "La amasadora WENDEL de DIOSNA es sinónimo de potencia, precisión y confiabilidad en el proceso de amasado profesional. Reconocida a nivel mundial por su ingeniería alemana de alto rendimiento, esta máquina está diseñada para satisfacer las exigencias de panaderías, pastelerías e industrias que buscan consistencia, eficiencia y calidad superior en cada lote.",
          "Gracias a su innovador sistema de amasado, la amasadora WENDEL de DIOSNA garantiza una óptima absorción de agua, una perfecta oxigenación de la masa y el desarrollo ideal del gluten. El resultado es una masa homogénea, elástica y perfectamente estructurada, base fundamental para productos finales de excelencia.",
        ],
      },
      {
        title: "Construcción y tecnología",
        paragraphs: [
          "Su construcción robusta y componentes de alta durabilidad aseguran un funcionamiento continuo incluso en entornos de producción intensiva. Su tecnología permite un control preciso de los tiempos y velocidades, adaptándose a distintos tipos de masas, desde las más suaves hasta las más exigentes.",
          "El diseño ergonómico y seguro facilita la operación diaria, mientras que sus superficies lisas y materiales de alta calidad garantizan una limpieza eficiente, cumpliendo con los más altos estándares de higiene.",
        ],
      },
      {
        title: "Sistema Wendel: herramientas contrarrotativas",
        paragraphs: [
          "El sistema Wendel utiliza herramientas contrarrotativas que aceleran el proceso de amasado y aumentan la producción por unidad de tiempo. DIOSNA no solo ofrece una amasadora, sino una solución integral para elevar la calidad de cada producto.",
        ],
      },
    ],
    advantages: [
      "Amasado intensivo y uniforme con desarrollo óptimo del gluten",
      "Mayor rendimiento y consistencia en la producción",
      "Control preciso de velocidades y tiempos",
      "Estructura robusta para uso industrial continuo",
      "Diseño higiénico y fácil mantenimiento",
    ],
    closingStatement:
      "DIOSNA no solo ofrece una amasadora, sino una solución integral para elevar la calidad de cada producto. Es la elección de los profesionales que entienden que una masa perfecta es el inicio de un resultado extraordinario.",
  },

  {
    slug: "winterhalter",
    route: "/marcas/winterhalter",
    name: "WINTERHALTER",
    origin: "Alemania",
    tagline: "Excelencia alemana en higiene profesional",
    logo: winterhalterLogo,
    heroImage: winterhalterHero,
    ambientImage: winterhalterAmbient,
    shortDescription:
      "Sistema integral de lavado que combina máquina, detergentes y tratamiento de agua para una limpieza perfecta, brillo superior y desinfección confiable.",
    industries: [
      "restaurantes",
      "cocinas-industriales",
      "hoteles-catering",
      "bares-cafeterias",
      "comida-rapida",
    ],
    productType: "Lavavajillas industriales",
    sections: [
      {
        title: "Máxima expresión en tecnología de lavado",
        paragraphs: [
          "Los lavavajillas de WINTERHALTER representan la máxima expresión en tecnología de lavado para el sector gastronómico. Diseñados bajo los más altos estándares de ingeniería alemana, ofrecen resultados impecables, eficiencia operativa y una higiene absoluta en cada ciclo.",
          "WINTERHALTER no es solo un equipo, es un sistema integral de lavado que combina máquina, detergentes y tratamiento de agua para garantizar una limpieza perfecta, brillo superior y desinfección confiable. Cada componente está diseñado para trabajar en armonía, logrando resultados consistentes incluso en los entornos más exigentes.",
        ],
      },
      {
        title: "Eficiencia y adaptabilidad",
        paragraphs: [
          "Gracias a su avanzada tecnología, estos lavavajillas optimizan el consumo de agua, energía y químicos, reduciendo costos operativos sin comprometer el rendimiento. Su capacidad de adaptación permite cubrir distintas necesidades: desde bares y cafeterías hasta restaurantes de alta demanda y operaciones industriales.",
          "El diseño inteligente y ergonómico facilita su uso diario, con controles intuitivos, ciclos rápidos y una operación silenciosa. Además, su construcción robusta asegura una larga vida útil, mientras que su enfoque en higiene cumple con las normativas internacionales más estrictas.",
        ],
      },
    ],
    advantages: [
      "Resultados de lavado impecables y brillo superior",
      "Máxima eficiencia en consumo de agua, energía y detergente",
      "Sistema integral que garantiza higiene y desinfección",
      "Operación rápida, silenciosa y fácil de usar",
      "Alta durabilidad y confiabilidad alemana",
    ],
    closingStatement:
      "Elegir WINTERHALTER es apostar por eficiencia, calidad y reputación. Es la solución ideal para negocios que entienden que la limpieza perfecta no es un detalle, sino un estándar.",
  },

  {
    slug: "true",
    route: "/marcas/true",
    name: "TRUE",
    origin: "Estados Unidos",
    tagline: "Liderazgo americano en frío profesional",
    logo: trueLogo,
    heroImage: trueHero,
    ambientImage: trueAmbient,
    shortDescription:
      "Equipos de refrigeración reconocidos mundialmente por su confiabilidad, eficiencia y rendimiento superior en entornos profesionales.",
    industries: [
      "restaurantes",
      "panaderia",
      "cocinas-industriales",
      "hoteles-catering",
      "supermercados",
      "comida-rapida",
      "carnicerias",
      "bares-cafeterias",
    ],
    productType: "Refrigeración comercial",
    sections: [
      {
        title: "Confiabilidad y rendimiento superior",
        paragraphs: [
          "Los equipos de refrigeración de TRUE son reconocidos a nivel mundial por su confiabilidad, eficiencia y rendimiento superior en entornos profesionales. Diseñados para superar las exigencias de la industria gastronómica, representan una inversión segura para negocios que priorizan la conservación perfecta de sus productos.",
          "TRUE combina innovación tecnológica con una construcción robusta para garantizar temperaturas estables, incluso en condiciones de uso intensivo. Sus sistemas de refrigeración de alto desempeño aseguran una conservación óptima de alimentos y bebidas, manteniendo frescura, calidad y seguridad en todo momento.",
        ],
      },
      {
        title: "Materiales y sostenibilidad",
        paragraphs: [
          "Cada equipo está fabricado con materiales premium, como acero inoxidable de alta resistencia, lo que no solo prolonga su vida útil, sino que también facilita la limpieza y asegura estándares superiores de higiene. Además, su diseño inteligente maximiza el espacio de almacenamiento y mejora la eficiencia operativa en cocina, panadería, pastelería, cafetería o retail.",
          "Comprometidos con la sostenibilidad, los equipos TRUE incorporan tecnologías energéticamente eficientes y refrigerantes ecológicos, reduciendo el impacto ambiental y los costos operativos sin comprometer el rendimiento.",
        ],
      },
    ],
    advantages: [
      "Temperatura constante y conservación superior",
      "Alta eficiencia energética y menor costo operativo",
      "Construcción robusta y duradera en acero inoxidable",
      "Diseño funcional que optimiza el espacio",
      "Tecnología ecológica y sostenible",
    ],
    closingStatement:
      "TRUE no solo enfría, preserva la calidad, protege la inversión y potencia la operación. Es la elección de los profesionales que entienden que la refrigeración es el corazón de su negocio.",
  },

  {
    slug: "pietroberto",
    route: "/marcas/pietroberto",
    name: "PIETROBERTO",
    origin: "Italia",
    tagline: "Potencia, precisión y tradición italiana",
    logo: pietrobertoLogo,
    heroImage: pietrobertoHero,
    ambientImage: pietrobertoAmbient,
    shortDescription:
      "Más de 100 años de experiencia en panificación y pastelería. Ingeniería de precisión, potencia industrial y versatilidad total.",
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    productType: "Batidoras planetarias y divisoras",
    videos: [
      {
        id: "wPKF4m0wgh8",
        title:
          "Formatrice Professionale con 2 o 4 Cilindri in Acciaio Inox per Pane | Pietroberto FORM 2C / 4C",
      },
      {
        id: "AwCHEE4LqnM",
        title:
          "Volumetric Divider NEW OMEGA A-B-C oil-free - Spezzatrice Volumetrica senza olio - PIETROBERTO",
      },
      {
        id: "CZBfZQsgERY",
        title:
          "Twin Arm Mixer FENICE PIETROBERTO - Impastatrice a bracci tuffanti PIETROBERTO - 160 200 300 400",
      },
      {
        id: "h7TYiKlO4HU",
        title:
          "Fenice 45-60-80 kg Impastatrice a Bracci Tuffanti - Twin Arms Mixer - Pietroberto - Italia",
      },
    ],
    products: [
      {
        name: "Batidora Planetaria (Serie MIX)",
        tagline: "Potencia, precisión y tradición italiana en cada mezcla",
        description:
          "La batidora planetaria Pietroberto es mucho más que un equipo: es el corazón de una producción profesional eficiente, uniforme y de alta calidad. Diseñada en Italia con más de 100 años de experiencia en panificación y pastelería, combina ingeniería de precisión, potencia industrial y versatilidad total.",
        features: [
          {
            title: "Movimiento planetario perfecto",
            text: "Garantiza mezclas homogéneas sin zonas sin trabajar, gracias al amplio diámetro de sus herramientas que cubren casi toda la cuba.",
          },
          {
            title: "Variación de velocidad continua",
            text: "Control total del proceso para adaptarse a masas, cremas, merengues o emulsiones delicadas.",
          },
          {
            title: "Sistema silencioso de alto rendimiento",
            text: "Engranajes en baño de aceite que reducen el ruido incluso a altas velocidades.",
          },
          {
            title: "Elevación eléctrica de cuba",
            text: "Ergonomía y facilidad de uso con operación mediante panel de control.",
          },
          {
            title: "Construcción robusta industrial",
            text: "Estructura de acero de gran espesor que asegura durabilidad, estabilidad y trabajo intensivo.",
          },
        ],
        applications: [
          "Panadería: masas suaves, brioche, premezclas",
          "Pastelería: cremas, batidos, bizcochos",
          "Chocolatería: rellenos, ganaches",
          "Gastronomía: salsas, emulsiones, purés",
        ],
        tools: [
          "Gancho (amasado)",
          "Paleta (mezcla)",
          "Batidor (aireación)",
        ],
        specs: {
          capacidades: "20L, 40L, 60L",
          potencia: "Hasta 2 kW",
          estructura: "Acero industrial",
          cuba: "Acero inoxidable (opción calefactable)",
          sistema: "Elevación eléctrica + variador de velocidad",
        },
        benefits: [
          "Mayor uniformidad en cada lote",
          "Reducción de tiempos de producción",
          "Menor esfuerzo operativo",
          "Máxima higiene (acero inoxidable)",
          "Equipo confiable para trabajo continuo",
        ],
        closingStatement:
          "Si buscas consistencia en cada mezcla y rendimiento sin límites, Pietroberto no es una opción... es una inversión estratégica para tu crecimiento.",
      },
      {
        name: "Divisora Volumétrica OMEGA 3",
        tagline: "Precisión industrial sin estrés para tu masa",
        description:
          "La OMEGA 3 de Pietroberto redefine la división de masa profesional: precisión milimétrica, suavidad absoluta y eficiencia continua, todo en un solo equipo. Diseñada para panaderías exigentes y producciones industriales, esta divisora volumétrica trabaja la masa como si fuera hecha a mano, pero con la velocidad y consistencia que exige el mercado actual.",
        features: [
          {
            title: "Sistema hidráulico de alta precisión",
            text: "Permite ajustar la presión entre 35 y 60 atm para adaptarse a cualquier tipo de masa, desde suaves hasta fermentadas.",
          },
          {
            title: "División sin estrés de la masa",
            text: "El sistema volumétrico con pistón respeta la fermentación y la estructura interna, logrando productos finales de mayor calidad.",
          },
          {
            title: "SIN aceite = ahorro total",
            text: "Elimina completamente el sistema de lubricación, reduciendo mantenimiento, costos y riesgos de contaminación.",
          },
          {
            title: "Tolva de gran capacidad (150 kg)",
            text: "Alimentación continua para producciones intensivas sin interrupciones.",
          },
          {
            title: "Espolvoreador automático de harina",
            text: "Mejora el flujo de trabajo y evita adherencias durante la división.",
          },
        ],
        applications: [
          "Pan tradicional y artesanal",
          "Panetones y masas enriquecidas",
          "Pizza y masas hidratadas",
          "Bollería y fermentaciones largas",
        ],
        specs: {
          tipo: "Divisora volumétrica automática",
          sistema: "Hidráulico",
          capacidadTolva: "150 kg",
          potencia: "3.35 kW",
          pesoMaquina: "~601 kg",
          produccion: "Piezas uniformes en amplio rango de gramajes",
        },
        benefits: [
          "Uniformidad perfecta en cada pieza",
          "Producción continua sin fatiga operativa",
          "Menor desperdicio de masa",
          "Reducción drástica de costos de mantenimiento",
          "Mayor calidad final del producto (mejor alveolado y volumen)",
        ],
        closingStatement:
          "Mientras otras divisoras fuerzan la masa... la OMEGA 3 es amigable y la respeta.",
      },
    ],
    sections: [
      {
        title: "Tradición e innovación italiana",
        paragraphs: [
          "Con más de 100 años de experiencia en el diseño y fabricación de maquinaria para panificación y pastelería, Pietroberto representa la esencia de la ingeniería italiana: precisión, potencia y versatilidad al servicio de la producción profesional.",
          "Cada equipo Pietroberto es el resultado de décadas de investigación y desarrollo, combinando tradición artesanal con tecnología de vanguardia para ofrecer soluciones que elevan la calidad y productividad de cualquier operación.",
        ],
      },
    ],
    advantages: [
      "Más de 100 años de experiencia en el sector",
      "Ingeniería italiana de precisión",
      "Versatilidad total: panadería, pastelería, chocolatería y gastronomía",
      "Construcción industrial robusta y duradera",
      "Soporte técnico especializado",
    ],
    closingStatement:
      "Pietroberto no es una opción, es una inversión estratégica para tu crecimiento. La elección de los profesionales que buscan consistencia y excelencia en cada producción.",
  },
];

export function getBrandBySlug(slug) {
  return brandsData.find((b) => b.slug === slug);
}

export function getBrandsByIndustry(industrySlug) {
  return brandsData.filter(
    (b) => Array.isArray(b.industries) && b.industries.includes(industrySlug)
  );
}
