// Catálogo de equipos más comerciales (best sellers) por marca.
// Descripciones: textuales del documento del cliente (doc-cliente-conceptos.txt).
// Productos sin texto aprobado llevan solo nombre oficial + categoría.

import rondoAutomat from "../assets/images/brands/rondo-automat-2000.webp";
import rondoRondostar from "../assets/images/products/rondo-rondostar-5000.webp";
import rondoCompas from "../assets/images/gen/card-rondo-compas.webp";
import rondoCroissomat from "../assets/images/products/rondo-croissomat-40.webp";

import diosnaWendel from "../assets/images/brands/diosna-wendel.webp";
import diosnaSp from "../assets/images/products/diosna-sp.webp";
import diosnaPspv from "../assets/images/products/diosna-pspv-premium.webp";

import winterhalterUc from "../assets/images/products/winterhalter-uc.webp";
import winterhalterPt from "../assets/images/products/winterhalter-pt.webp";
import winterhalterUf from "../assets/images/products/winterhalter-uf.webp";

import trueGdm49 from "../assets/images/brands/true-gdm-49.webp";
import trueT49 from "../assets/images/products/true-t-49.webp";
import trueTuc48 from "../assets/images/products/true-tuc-48.webp";

import pietrobertoMix from "../assets/images/brands/pietroberto-mix.webp";
import pietrobertoOmega from "../assets/images/gen/card-pietroberto-omega3.webp";
import pietrobertoFenice from "../assets/images/products/pietroberto-fenice.webp";
import pietrobertoForm from "../assets/images/products/pietroberto-form-4cff.webp";
import pietrobertoSart from "../assets/images/gen/card-pietroberto-sart.webp";

import vitamixQuietOne from "../assets/images/brands/vitamix-quiet-one.webp";
import vitamixVitaPrep from "../assets/images/gen/card-vitamix-vitaprep.webp";

import caincoEstufa from "../assets/images/brands/cainco-estufa.webp";
import caincoAssadeira from "../assets/images/products/cainco-assadeira.webp";
import caincoEsqueleto from "../assets/images/products/cainco-esqueleto.webp";

import treifDivider660 from "../assets/images/products/jbtmarel-treif-divider-660.webp";
import treifDividerLineup from "../assets/images/gen/card-treif-lineup.webp";

import americanpanBreadTins from "../assets/images/products/americanpan-bread-tins.webp";
import americanpanBaguette from "../assets/images/products/americanpan-baguette-trays.webp";
import americanpanRack from "../assets/images/products/americanpan-rack.webp";

import pomatiT35 from "../assets/images/products/pomati-t35.webp";

export const productBrandNames = {
  rondo: "RONDO",
  diosna: "DIOSNA",
  winterhalter: "WINTERHALTER",
  true: "TRUE",
  pietroberto: "PIETROBERTO",
  vitamix: "VITAMIX",
  cainco: "CAINCO",
  jbtmarel: "JBT MAREL · TREIF",
  americanpan: "AMERICAN PAN",
  pomati: "POMATI",
};

export const productsData = [
  /* ---------------- RONDO ---------------- */
  {
    id: "rondo-automat-2000",
    brand: "rondo",
    name: "AUTOMAT 2000",
    category: "Laminadora mecánica",
    description:
      "Laminado rápido y eficiente: bandas y bloques de masa homogéneos en condiciones de espacio limitadas. Concebida para el funcionamiento continuo, con estructura robusta y duradera.",
    specs: {
      "Capacidad": "75–150 kg/h",
      "Bloque de masa": "8–12 kg",
      "Distancia entre rodillos": "0,3–45 mm",
      "Ancho de banda": "640 mm",
      "Velocidad de laminado": "60 cm/s",
      "Dimensiones (L × An)": "3800 × 1215 mm",
    },
    image: rondoAutomat,
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    source:
      "https://www.rondo-online.com/latam/es/m%C3%A1quinas-y-soluciones/laminadoras-mecanicas/automat-2000",
    featured: true,
  },
  {
    id: "rondo-rondostar-5000",
    brand: "rondo",
    name: "Rondostar 5000",
    category: "Laminadora electrónica",
    description:
      "Laminadora electrónica para panaderías de gran volumen: procesa la masa con cuidado en laminado y doblado continuo, con manejo táctil sencillo y una construcción pensada para la fiabilidad en producción sostenida.",
    specs: {
      "Capacidad": "150–200 kg/h",
      "Bloque de masa": "8–12 kg",
      "Distancia entre rodillos": "0,2–45 mm",
      "Ancho de banda": "640 mm",
      "Velocidad de laminado": "85 cm/s",
      "Dimensiones (L × An)": "3670 × 1260 mm",
    },
    image: rondoRondostar,
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    source:
      "https://www.rondo-online.com/latam/es/m%C3%A1quinas-y-soluciones/laminadoras-electronicas/rondostar-5000",
    featured: false,
  },
  {
    id: "rondo-compas-40",
    brand: "rondo",
    name: "Compas 4.0",
    category: "Laminadora electrónica",
    description:
      "Laminadora electrónica con cuatro accionamientos individuales que procesan todo tipo de masa de forma eficiente y cuidadosa, logrando un laminado hasta 35% más rápido con manejo táctil intuitivo y sistema de asistencia inteligente.",
    specs: {
      "Capacidad": "600–800 kg/h",
      "Bloque de masa": "15–20 kg",
      "Distancia entre rodillos": "0,2–65 mm",
      "Ancho de banda": "715 mm",
      "Velocidad de laminado": "10–130 cm/s",
      "Dimensiones (L × An)": "4450 × 1400 mm",
    },
    image: rondoCompas,
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    source:
      "https://www.rondo-online.com/latam/es/m%C3%A1quinas-y-soluciones/laminadoras-electronicas/compas-40",
    featured: false,
  },
  {
    id: "rondo-croissomat-40",
    brand: "rondo",
    name: "Croissomat 4.0",
    category: "Línea automática de croissants",
    description:
      "La Croissomat de RONDO es una solución compacta y altamente eficiente diseñada para la producción automática de croissants y productos enrollados, garantizando uniformidad, precisión y alta productividad en cada pieza.",
    specs: {
      "Producción sin relleno": "Hasta 4,500 croissants/hora",
      "Producción con relleno": "Hasta 2,800 croissants/hora",
      "Filas simultáneas": "2 a 5",
      "Ancho de banda": "Aprox. 530 mm",
      Versiones: "SCM y SCMG (con dosificador)",
    },
    image: rondoCroissomat,
    industries: ["panaderia", "cocinas-industriales"],
    source:
      "https://www.rondo-online.com/latam/es/m%C3%A1quinas-y-soluciones/lineas-de-procesamiento-y-l%C3%ADneas-combinadas/m%C3%A1quina-para-croissants-croissomat-40",
    featured: false,
  },

  /* ---------------- DIOSNA ---------------- */
  {
    id: "diosna-wendel",
    brand: "diosna",
    name: "Amasadora WENDEL",
    category: "Amasadora Wendel",
    description:
      "Las amasadoras Wendel de DIOSNA son sistemas de alto rendimiento, aptos para todo tipo de masas, y aportan un nuevo nivel de eficiencia a las operaciones de mayor envergadura. Las herramientas Wendel contrarrotativas aceleran el proceso de amasado y producen una mayor cantidad de masa en el mismo tiempo.",
    specs: {
      "Serie estándar": "W 160 A · W 240 A · W 401 A",
      "Serie premium (inox)": "WV 160 A · WV 240 A · WV 400 A",
      "Capacidad de masa": "160 / 240 / 400 kg según modelo",
      "Control (premium)": "Panel táctil con variador; hasta 40 recetas de 40 fases",
      "Serie industrial": "WH 240-600 A/E, de 1 a 4 amasadoras por sistema",
    },
    image: diosnaWendel,
    industries: ["panaderia", "cocinas-industriales"],
    source: "https://www.diosna.com/products/kneading-machines/wendel-kneader/",
    featured: true,
  },
  {
    id: "diosna-sp",
    brand: "diosna",
    name: "Amasadora espiral SP",
    category: "Amasadora de espiral",
    description:
      "La característica principal de las amasadoras de espiral es el movimiento de rotación de la cuba y el movimiento del gancho de espiral a un mismo tiempo. Trabaja la masa con una presión de arriba hacia abajo: el resultado es una menor oxidación, ideal para la elaboración de panes y bollería.",
    specs: {
      "SP 12 (sobremesa)": "250 g – 12 kg de masa · artesa 22 L",
      "Serie SP 24-120": "Artesa fija de 24, 40, 80 y 120 kg",
      "Serie SPV": "120, 160, 200 y 240 kg, artesa móvil o fija",
      "Tipo de artesa": "Fija con posicionamiento móvil (SP) o extraíble con tapa (SPV)",
      "Control": "Memoria de programas y secuencia de tiempo programable",
    },
    image: diosnaSp,
    industries: ["panaderia", "cocinas-industriales"],
    source: "https://www.diosna.com/products/kneading-machines/spiral-kneader/",
    featured: false,
  },
  {
    id: "diosna-pspv-premium",
    brand: "diosna",
    name: "Amasadora espiral Premium PSPV",
    category: "Amasadora de espiral",
    description:
      "Amasadora espiral premium de acero inoxidable con artesa extendible, móvil o estacionaria. Su herramienta de amasado de gran tamaño logra un mezclado homogéneo y un amasado intensivo en todo tipo de masas, desde trigo hasta integrales.",
    specs: {
      "Capacidad de masa": "120 a 300 kg según modelo",
      "Versiones": "PSPV 160 A y PSPV 240 A, artesa móvil o estacionaria",
      "Material": "Acero inoxidable sin recubrimiento, cierre de pinza de serie",
      "Control": "Memoria en teclado CS03 o pulsadores con temporizador; opcional PLC táctil",
    },
    image: diosnaPspv,
    industries: ["panaderia", "cocinas-industriales"],
    source:
      "https://www.diosna.com/products/kneading-machines/spiral-kneader/pspv-160-240-a/",
    featured: false,
  },

  /* ---------------- WINTERHALTER ---------------- */
  {
    id: "winterhalter-serie-uc",
    brand: "winterhalter",
    name: "Serie UC (undercounter)",
    category: "Lavavajillas bajo mostrador",
    description:
      "Las más vendidas: 4 modelos (UC-S, UC-M, UC-L, UC-XL) en versiones para lavavajillas, cristalería, cubiertos y bistró. Compactas (bajo mostrador) y extremadamente versátiles, para restaurantes, bares y cafeterías. Pantalla táctil inteligente, ajuste automático según tipo de suciedad y bajo consumo de agua y energía.",
    specs: {
      Modelos: "UC-S, UC-M, UC-L, UC-XL",
      Versiones: "Lavavajillas, cristalería, cubiertos, bistró",
    },
    image: winterhalterUc,
    industries: [
      "restaurantes",
      "bares-cafeterias",
      "comida-rapida",
      "hoteles-catering",
      "estadios",
    ],
    source:
      "https://www.winterhalter.com/pe-es/productos/lavavajillas-de-carga-frontal/",
    featured: true,
  },
  {
    id: "winterhalter-pt",
    brand: "winterhalter",
    name: "Serie PT",
    category: "Lavavajillas de cúpula",
    description:
      "Lavavajillas de cúpula para cocinas profesionales de actividad intensa: procesa canastillas llenas de forma rápida y fiable, con resultados de lavado consistentes en hoteles, restaurantes y catering incluso en horas pico.",
    specs: {
      "PT-M": "Cesta 500 × 500 mm · altura útil 440 mm",
      "PT-L": "Cesta 500 × 600 mm · altura útil 440 mm",
      "PT-XL": "Cesta 500 × 600 mm · altura útil 560 mm",
      "Sistema de lavado": "Dos brazos en forma de S con boquillas optimizadas",
      "Filtración": "Cuádruple",
      "Programas": "3 estándar + 4 adicionales",
    },
    image: winterhalterPt,
    industries: ["restaurantes", "hoteles-catering", "cocinas-industriales", "estadios"],
    source:
      "https://www.winterhalter.com/pe-es/lavavajillas-industriales/lavavajillas-de-cupula/",
    featured: false,
  },
  {
    id: "winterhalter-uf",
    brand: "winterhalter",
    name: "Serie UF",
    category: "Lavautensilios",
    description:
      "Lavautensilios con tecnología de enjuague robusta, pensado para suciedad fuerte en zonas de producción: ollas, bandejas, moldes y recipientes GN en panaderías, carnicerías, restaurantes y hoteles.",
    specs: {
      "Capacidad": "40 / 24 / 12 cestas por hora (teórico)",
      "Medidas de cesta": "612 × 672 mm y 1305 × 672 mm",
      "Altura útil de entrada": "640 mm y 800 mm",
      "Capacidad de tanque": "69 L y 138 L",
      "Filtración": "Cuádruple, sistema de lavado en acero inoxidable",
      "Interfaz": "Pantalla táctil",
    },
    image: winterhalterUf,
    industries: ["cocinas-industriales", "panaderia", "hoteles-catering"],
    source:
      "https://www.winterhalter.com/pe-es/lavavajillas-industriales/lavavajillas/s/lavautensilios/",
    featured: false,
  },

  /* ---------------- TRUE ---------------- */
  {
    id: "true-gdm-49",
    brand: "true",
    name: "GDM-49",
    category: "Refrigerador exhibidor de puertas de vidrio",
    description:
      "Refrigerador expositor vertical de puertas batientes de vidrio con refrigerante de hidrocarburo R290. Diseñado para exhibir alimentos y bebidas envasadas con iluminación LED interior y un sistema de refrigeración equilibrado de fábrica.",
    specs: {
      "Puertas": "2 batientes de vidrio, doble hoja con aislamiento térmico",
      "Parrillas": "8 ajustables, revestidas de PVC",
      "Dimensiones (An × F × Al)": "1374 × 754 × 1994 mm",
      "Peso": "173 kg",
      "Refrigerante": "R290 (ODP 0 · GWP 0,02)",
    },
    image: trueGdm49,
    industries: ["supermercados", "bares-cafeterias", "restaurantes", "comida-rapida", "estadios"],
    source:
      "https://www.truemfg.com/es/product/gdm-49-hctsl01/",
    featured: true,
  },
  {
    id: "true-t-49",
    brand: "true",
    name: "T-49",
    category: "Refrigerador vertical de puerta sólida",
    description:
      "Refrigerador vertical de montaje inferior con puertas sólidas de acero inoxidable y refrigerante de hidrocarburo R290. Su sistema de refrigeración equilibrado de fábrica y sus motores ECM mantienen la temperatura del gabinete de forma eficiente y confiable.",
    specs: {
      "Puertas": "2 sólidas",
      "Parrillas": "6 ajustables, revestidas de PVC",
      "Dimensiones (An × F × Al)": "1375 × 750 × 1991 mm",
      "Peso": "177 kg",
      "Refrigerante": "R290 (ODP 0 · GWP 0,02)",
    },
    image: trueT49,
    industries: [
      "restaurantes",
      "cocinas-industriales",
      "hoteles-catering",
      "carnicerias",
      "panaderia",
    ],
    source: "https://www.truemfg.com/es/product/t-49-hc/",
    featured: false,
  },
  {
    id: "true-tuc-48",
    brand: "true",
    name: "TUC-48",
    category: "Refrigerador bajo mesada (undercounter)",
    description:
      "Refrigerador bajo mostrador de dos puertas sólidas de acero inoxidable, con refrigerante R290 y aislamiento de poliuretano de alta densidad. Su flujo de aire guiado ofrece temperaturas uniformes en cocinas comerciales con espacio reducido.",
    specs: {
      "Puertas": "2 sólidas",
      "Parrillas": "4",
      "Dimensiones (An × F × Al)": "1229 × 766 × 756 mm",
      "Peso": "118 kg",
      "Refrigerante": "R290 (ODP 0 · GWP 0,02)",
    },
    image: trueTuc48,
    industries: ["restaurantes", "bares-cafeterias", "comida-rapida"],
    source: "https://www.truemfg.com/es/product/tuc-48-hc/",
    featured: false,
  },

  /* ---------------- PIETROBERTO ---------------- */
  {
    id: "pietroberto-mix",
    brand: "pietroberto",
    name: "Batidora Planetaria Serie MIX",
    category: "Batidora planetaria",
    description:
      "La batidora planetaria Pietroberto es mucho más que un equipo: es el corazón de una producción profesional eficiente, uniforme y de alta calidad.",
    specs: {
      Capacidades: "20L, 40L, 60L",
      Potencia: "Hasta 2 kW",
      Cuba: "Acero inoxidable (opción calefactable)",
      Sistema: "Elevación eléctrica + variador de velocidad",
    },
    image: pietrobertoMix,
    industries: ["panaderia", "cocinas-industriales", "hoteles-catering"],
    source:
      "http://pietroberto.com/pietroberto-detalle-productos/3/140/Planetary-mixer-MIX-series",
    featured: true,
  },
  {
    id: "pietroberto-omega-3",
    brand: "pietroberto",
    name: "Divisora Volumétrica OMEGA 3",
    category: "Divisora volumétrica",
    description:
      "La OMEGA 3 de Pietroberto redefine la división de masa profesional: precisión milimétrica, suavidad absoluta y eficiencia continua, todo en un solo equipo.",
    specs: {
      Sistema: "Hidráulico (35–60 atm)",
      "Capacidad tolva": "150 kg",
      Potencia: "3.35 kW",
      "Peso máquina": "~601 kg",
    },
    image: pietrobertoOmega,
    industries: ["panaderia", "cocinas-industriales"],
    source:
      "http://pietroberto.com/pietroberto-detalle-productos/3/53/Automatic-volumetric-diveder-OMEGA-model",
    featured: true,
  },
  {
    id: "pietroberto-fenice",
    brand: "pietroberto",
    name: "Amasadora de brazos FENICE (bracci tuffanti)",
    category: "Amasadora de brazos",
    description:
      "Las amasadoras de brazos imitan el amasado manual gracias a su sistema de dos brazos mecánicos que levantan y golpean la masa de manera intercalada. Muy valorada en la panadería artesanal por su capacidad de airear la masa sin sobrecalentarla.",
    specs: {
      "Modelos": "FENICE 160 · 200 · 300 · 400",
      "Capacidad de masa": "160 / 200 / 300 / 400 kg",
      "Capacidad de artesa": "235 / 340 / 505 / 670 L",
      "Potencia instalada": "7 / 8 / 9 / 10 kW",
      "Velocidad de brazos": "Variable, 25–70 golpes/min",
      "Peso": "1650 a 1900 kg según modelo",
    },
    image: pietrobertoFenice,
    industries: ["panaderia"],
    source:
      "https://pietroberto.com/pietroberto-dettaglio-prodotti/3/288/FENICE-160200300400-Twin-Arm-Mixer",
    featured: false,
  },
  {
    id: "pietroberto-form-4cff",
    brand: "pietroberto",
    name: "Formadora de barras FORM 4CFF",
    category: "Formadora de barras",
    description:
      "Formadora de barras de la línea EMME, de dos o cuatro cilindros, con rascadores en cilindro superior e inferior y dispositivo antirrotura de masa con empuje proporcional. A pedido incorpora tapiz de salida con placa formadora de filones fija o motorizada.",
    specs: {
      "Modelos": "emme2C · emme2Cff · emme2Cfm · emme4C · emme4Cff · emme4Cfm",
      "Ancho útil de trabajo": "550 mm",
      "Dimensiones (emme4Cff)": "2370 × 870 × 1200 mm",
      "Potencia instalada": "0,75 – 0,85 kW según modelo",
      "Peso": "215 a 250 kg según modelo",
    },
    image: pietrobertoForm,
    industries: ["panaderia"],
    source:
      "https://pietroberto.com/pietroberto-dettaglio-prodotti/3/173/Formatrici-EMME-Pietroberto-24-C",
    featured: false,
  },
  {
    id: "pietroberto-sart",
    brand: "pietroberto",
    name: "Divisora-boleadora automática SART",
    category: "Divisora-boleadora automática",
    description:
      "Divisora-boleadora automática compacta y silenciosa, apta para producción industrial y artesanal. Se usa de forma independiente o combinada en líneas de formado, con tolva de acero inoxidable teflonada.",
    specs: {
      "Modelos": "SART44 (4 filas) · SART53 (5 filas) · SART62 (6 filas)",
      "Dimensiones (An × L × Al)": "1610 × 1285 × 1845 mm",
      "Capacidad de tolva": "55 kg (opcional 200 kg)",
      "Potencia instalada": "2,3 kW",
      "Peso": "1120 a 1140 kg según modelo",
    },
    image: pietrobertoSart,
    industries: ["panaderia", "cocinas-industriales"],
    source:
      "https://pietroberto.com/pietroberto-dettaglio-prodotti/3/112/Spezzatrice-arrotondatrice-automatica-Pietroberto-mod-SART-445362",
    featured: false,
  },

  /* ---------------- VITAMIX ---------------- */
  {
    id: "vitamix-quiet-one",
    brand: "vitamix",
    name: "The Quiet One",
    category: "Licuadora comercial",
    description:
      "Licuadora comercial de bebidas con reducción de sonido patentada, pensada para barras de alto tránsito. Ofrece mezclas consistentes y mayor velocidad de servicio, con jarra Advance diseñada para reducir el ruido y prolongar su vida útil.",
    specs: {
      "Motor": "Hasta 3 HP de potencia de salida máxima",
      "Eléctrico": "120 V · 50/60 Hz · 15 A",
      "Dimensiones (Al × An × Pr)": "45,7 × 21,6 × 27,2 cm",
      "Peso": "9,1 kg",
      "Jarra": "Vaso Advance con Advance Blade",
    },
    image: vitamixQuietOne,
    industries: ["bares-cafeterias", "restaurantes", "comida-rapida", "hoteles-catering"],
    source:
      "https://www.vitamix.com/mx/es_mx/commercial/products/the-quiet-one",
    featured: true,
  },
  {
    id: "vitamix-vita-prep-3",
    brand: "vitamix",
    name: "Vita-Prep 3",
    category: "Licuadora de cocina profesional",
    description:
      "Licuadora comercial de preparación de alimentos para cocinas profesionales exigentes: motor de hasta 3 HP, control de velocidad variable y tamper para mezclas espesas o congeladas, con vaso de alto impacto libre de BPA.",
    specs: {
      "Motor": "Hasta 3 HP de potencia de salida máxima",
      "Eléctrico": "120 V · 50/60 Hz · 13 A",
      "Dimensiones (Al × An × Pr)": "50,8 × 19,1 × 22,2 cm",
      "Peso": "5,5 kg",
      "Jarra": "2,0 L de alto impacto, sin BPA, con tapón extraíble",
    },
    image: vitamixVitaPrep,
    industries: ["restaurantes", "cocinas-industriales", "hoteles-catering"],
    source:
      "https://www.vitamix.com/mx/es_mx/commercial/products/vita-prep-3",
    featured: false,
  },

  /* ---------------- CAINCO ---------------- */
  {
    id: "cainco-estufa",
    brand: "cainco",
    name: "Estufa cerrada",
    category: "Estufas y esqueletos",
    description:
      "Estufa cerrada con estantes fabricada en Aluminol, para el almacenamiento y manejo de bandejas de panificación en panaderías, supermercados e industria alimentaria. Disponible en distintas medidas estándar de bandeja.",
    specs: {
      "Material": "Aluminol",
      "Medidas de bandeja": "58×70 · 40×80 · 60×80 · 62×36 · 60×40 cm",
      "Aplicaciones": "Panaderías, supermercados, industria alimentaria",
    },
    image: caincoEstufa,
    industries: ["panaderia"],
    source:
      "https://cainco.com.br/site/produtos/1549-estufa-fechada-com-prateleiras.html",
    featured: true,
  },
  {
    id: "cainco-assadeira",
    brand: "cainco",
    name: "Assadeira para pan francés",
    category: "Bandejas de horneo",
    description:
      "Canaleta para pan francés con perfil de aluminio y construcción soldada o remachada, para el horneado de pan francés en panaderías e industria de panificación.",
    specs: {
      "Material": "Perfil de aluminio",
      "Construcción": "Soldada o remachada",
      "Medidas disponibles": "58×68 cm (5 y 6 ondas) · 595×790 mm (6 y 7 ondas)",
    },
    image: caincoAssadeira,
    industries: ["panaderia"],
    source:
      "https://cainco.com.br/site/produtos/1546-canaleta-para-pao-frances.html",
    featured: false,
  },
  {
    id: "cainco-esqueleto",
    brand: "cainco",
    name: "Carro esqueleto",
    category: "Estufas y esqueletos",
    description:
      "Carro esqueleto fabricado en Aluminol para transportar y almacenar bandejas en panaderías e industria de panificación. Disponible en diversos tamaños y configuraciones según la bandeja de trabajo.",
    specs: {
      "Material": "Aluminol",
      "Medidas de bandeja": "58×70 · 40×80 · 60×80 · 62×36 · 60×40 cm",
      "Configuraciones": "Diversos tamaños y configuraciones disponibles",
    },
    image: caincoEsqueleto,
    industries: ["panaderia"],
    source:
      "https://cainco.com.br/site/produtos/1550-estufa-esqueleto.html",
    featured: false,
  },

  /* ---------------- JBT MAREL · TREIF ---------------- */
  {
    id: "jbtmarel-treif-divider-660",
    brand: "jbtmarel",
    name: "TREIF DIVIDER 660+",
    category: "Cortadora de porciones",
    description:
      "Solución de corte versátil para el mercado de fiambres, indicada para procesadores pequeños y medianos. Apila o intercala en configuraciones como zig-zag o shaving, con tecnología ECO SLICING que permite cortar a mayor temperatura y reducir el costo energético.",
    specs: {
      "Grosor de corte": "0,5–50 mm",
      "Rotación de cuchilla": "Hasta 660 rpm",
      "Producto admitido": "Hasta 320 × 130 mm, 280 × 160 mm o Ø 220 mm",
      "Longitud de materia prima": "800–1000 mm",
      "Carga de conexión": "4,8 kW",
      "Peso": "Aprox. 620 kg",
    },
    image: treifDivider660,
    industries: ["carnicerias", "cocinas-industriales", "supermercados"],
    source: "https://www.jbtmarel.com/en/products/treif-divider-660/",
    featured: false,
  },
  {
    id: "jbtmarel-treif-divider-lineup",
    brand: "jbtmarel",
    name: "TREIF DIVIDER Lineup",
    category: "Cortadora de porciones",
    description:
      "Porcionadora de capacidad media con cuchilla circular y software que permite crear múltiples tipos de producto. Combina carga rápida y ergonómica, pantalla táctil y diseño higiénico, con tecnología ECO SLICING para cortar a temperaturas más altas.",
    specs: {
      "Grosor de corte": "0,5–40 mm",
      "Rotación de cuchilla": "Hasta 400 rpm",
      "Producto admitido": "Hasta 280 × 160 mm o 320 × 150 mm",
      "Longitud de materia prima": "Hasta 800 mm",
      "Carga de conexión": "4,0 kW",
      "Peso": "Aprox. 760 kg",
    },
    image: treifDividerLineup,
    industries: ["carnicerias", "cocinas-industriales", "supermercados"],
    source: "https://www.jbtmarel.com/en/products/treif-divider-lineup/",
    featured: false,
  },

  /* ---------------- AMERICAN PAN ---------------- */
  {
    id: "americanpan-bread-tins",
    brand: "americanpan",
    name: "Moldes de pan con tapa",
    category: "Moldes de panificación",
    description:
      "Línea de moldes de pan y tapas en configuraciones individual, en línea y en bloque, con recubrimiento antiadherente AMERICOAT o OptiShield. Cuando no existe la medida exacta, el fabricante cotiza el molde a medida.",
    specs: {
      "Capacidades de referencia": "Moldes de 500 g, 750 g y 800 g",
      "Configuraciones": "Individual, 2/3/4/5 en línea y en bloque",
      "Medidas exteriores": "Desde 364×303×18 mm hasta 800×313×96 mm",
      "Recubrimiento": "AMERICOAT Glazed u OptiShield Coated",
    },
    image: americanpanBreadTins,
    industries: ["panaderia"],
    source:
      "https://www.americanpan.com/europe/product-category/stock-baking-tins-trays/bread-tins-lids/",
    featured: false,
  },
  {
    id: "americanpan-baguette-trays",
    brand: "americanpan",
    name: "Bandejas para baguette",
    category: "Bandejas de horneo",
    description:
      "Bandejas de stock para baguette con distinta cantidad de canales, además de bandejas lisas y perforadas de tres y cuatro lados, en versión natural o con recubrimiento antiadherente.",
    specs: {
      "Configuraciones": "Bandejas de 5, 7, 8 y 9 canales",
      "Medidas exteriores": "Desde 600×400×20 mm hasta 800×600×26 mm",
      "Recubrimiento": "Natural, AMERICOAT Glazed u OptiShield Coated",
    },
    image: americanpanBaguette,
    industries: ["panaderia"],
    source:
      "https://www.americanpan.com/europe/product-category/stock-baking-tins-trays/baking-trays-baguette-trays/",
    featured: false,
  },
  {
    id: "americanpan-rack",
    brand: "americanpan",
    name: "Racks de horno y almacenamiento",
    category: "Racks",
    description:
      "Racks de horno y almacenamiento totalmente personalizables según la operación: se define el estilo, el tamaño de bandeja, el número de peldaños, la distancia entre ellos y el tipo de rueda.",
    specs: {
      "Personalización": "Estilo, tamaño de bandeja, peldaños, separación y ruedas",
      "Variantes": "Custom Oven Racks y Custom Storage Racks",
      "Pedido mínimo": "250 unidades",
    },
    image: americanpanRack,
    industries: ["panaderia", "cocinas-industriales"],
    source:
      "https://www.americanpan.com/europe/product-category/oven-and-storage-racks/",
    featured: false,
  },

  /* ---------------- POMATI ---------------- */
  {
    id: "pomati-t35",
    brand: "pomati",
    name: "Temperadora de Chocolate T35",
    category: "Temperadora de chocolate",
    description:
      "La T35 de Pomati es la solución definitiva para chocolaterías y pastelerías que buscan producción continua, precisión térmica y acabado perfecto.",
    specs: {
      "Capacidad de tanque": "50 kg",
      Producción: "Hasta 180 kg/hora",
      Potencia: "3.5 kW",
      Construcción: "Acero inoxidable AISI 304",
    },
    image: pomatiT35,
    industries: ["panaderia", "restaurantes", "hoteles-catering"],
    source:
      "https://www.pomati.it/en/tempering-and-melting-machines/t35-tempering-machine/",
    featured: true,
  },
];

export function getProductsByBrand(brandSlug) {
  return productsData.filter((p) => p.brand === brandSlug);
}

export function getProductsByIndustry(industrySlug) {
  return productsData.filter(
    (p) => Array.isArray(p.industries) && p.industries.includes(industrySlug)
  );
}
