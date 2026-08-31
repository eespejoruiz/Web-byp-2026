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


export const brandsData = [
  {
    slug: "rondo",
    route: "/marcas/rondo",
    name: "RONDO",
    origin: "Suiza",
    tagline: "Precisión suiza para la excelencia en panificación y pastelería",
    logo: rondoLogo,
    heroImage: rondoHero,
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
