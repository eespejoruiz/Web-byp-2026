// Catálogo de equipos más comerciales (best sellers) por marca.
// Descripciones: textuales del documento del cliente (doc-cliente-conceptos.txt).
// Productos sin texto aprobado llevan solo nombre oficial + categoría.

import rondoAutomat from "../assets/images/brands/rondo-automat-2000.webp";
import rondoRondostar from "../assets/images/products/rondo-rondostar-5000.webp";
import rondoCompas from "../assets/images/products/rondo-compas-40.webp";
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
import pietrobertoOmega from "../assets/images/brands/pietroberto-omega.webp";
import pietrobertoFenice from "../assets/images/products/pietroberto-fenice.webp";
import pietrobertoForm from "../assets/images/products/pietroberto-form-4cff.webp";
import pietrobertoOmegaAb from "../assets/images/products/pietroberto-omega-ab.webp";

import vitamixQuietOne from "../assets/images/brands/vitamix-quiet-one.webp";
import vitamixVitaPrep from "../assets/images/products/vitamix-vita-prep-3.webp";

import caincoEstufa from "../assets/images/brands/cainco-estufa.webp";
import caincoAssadeira from "../assets/images/products/cainco-assadeira.webp";
import caincoEsqueleto from "../assets/images/products/cainco-esqueleto.webp";

import treifDivider660 from "../assets/images/products/jbtmarel-treif-divider-660.webp";
import treifDividerLineup from "../assets/images/products/jbtmarel-treif-divider-lineup.webp";

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
    description: "",
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
    description: "",
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
    description: "",
    image: diosnaPspv,
    industries: ["panaderia", "cocinas-industriales"],
    source: "https://www.diosna.com/products/kneading-machines/spiral-kneader/",
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
    description: "",
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
    description: "",
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
    description: "",
    image: trueGdm49,
    industries: ["supermercados", "bares-cafeterias", "restaurantes", "comida-rapida", "estadios"],
    source: "https://www.truemfg.com/es/product/gdm-49-hc-tsl01/",
    featured: true,
  },
  {
    id: "true-t-49",
    brand: "true",
    name: "T-49",
    category: "Refrigerador vertical de puerta sólida",
    description: "",
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
    description: "",
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
    image: pietrobertoFenice,
    industries: ["panaderia"],
    source:
      "http://pietroberto.com/pietroberto-detalle-productos/3/288/FENICE-160200300400-Mezclador-de-doble-brazo",
    featured: false,
  },
  {
    id: "pietroberto-form-4cff",
    brand: "pietroberto",
    name: "Formadora de barras FORM 4CFF",
    category: "Formadora de barras",
    description: "",
    image: pietrobertoForm,
    industries: ["panaderia"],
    source: "https://www.youtube.com/watch?v=wPKF4m0wgh8",
    featured: false,
  },
  {
    id: "pietroberto-omega-ab",
    brand: "pietroberto",
    name: "Divisora volumétrica hidráulica OMEGA A/B",
    category: "Divisora volumétrica con tolva",
    description: "",
    image: pietrobertoOmegaAb,
    industries: ["panaderia", "cocinas-industriales"],
    source: "https://www.youtube.com/watch?v=AwCHEE4LqnM",
    featured: false,
  },

  /* ---------------- VITAMIX ---------------- */
  {
    id: "vitamix-quiet-one",
    brand: "vitamix",
    name: "The Quiet One",
    category: "Licuadora comercial",
    description: "",
    image: vitamixQuietOne,
    industries: ["bares-cafeterias", "restaurantes", "comida-rapida", "hoteles-catering"],
    source: "https://www.vitamix.com/mx/es_mx/commercial/shop/the-quiet-one",
    featured: true,
  },
  {
    id: "vitamix-vita-prep-3",
    brand: "vitamix",
    name: "Vita-Prep 3",
    category: "Licuadora de cocina profesional",
    description: "",
    image: vitamixVitaPrep,
    industries: ["restaurantes", "cocinas-industriales", "hoteles-catering"],
    source: "https://www.vitamix.com/mx/es_mx/commercial/shop/vita-prep-3",
    featured: false,
  },

  /* ---------------- CAINCO ---------------- */
  {
    id: "cainco-estufa",
    brand: "cainco",
    name: "Estufa cerrada",
    category: "Estufas y esqueletos",
    description: "",
    image: caincoEstufa,
    industries: ["panaderia"],
    source: "https://cainco.com.br/estufas-e-esqueletos",
    featured: true,
  },
  {
    id: "cainco-assadeira",
    brand: "cainco",
    name: "Assadeira para pan francés",
    category: "Bandejas de horneo",
    description: "",
    image: caincoAssadeira,
    industries: ["panaderia"],
    source: "https://cainco.com.br/assadeiras-para-pao-frances",
    featured: false,
  },
  {
    id: "cainco-esqueleto",
    brand: "cainco",
    name: "Carro esqueleto",
    category: "Estufas y esqueletos",
    description: "",
    image: caincoEsqueleto,
    industries: ["panaderia"],
    source: "https://cainco.com.br/estufas-e-esqueletos",
    featured: false,
  },

  /* ---------------- JBT MAREL · TREIF ---------------- */
  {
    id: "jbtmarel-treif-divider-660",
    brand: "jbtmarel",
    name: "TREIF DIVIDER 660+",
    category: "Cortadora de porciones",
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
    description: "",
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
