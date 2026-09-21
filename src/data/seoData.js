/**
 * Titulo, descripcion y canonical de cada ruta.
 *
 * Una sola fuente para todo el sitio. El componente <Seo /> (src/components/byp/Seo.jsx)
 * lee este mapa segun la ruta actual y escribe las etiquetas en el <head>.
 *
 * Criterio de redaccion:
 *  - titulo entre 50 y 62 caracteres, con el termino por delante de la marca
 *  - descripcion entre 140 y 158 caracteres, que describa la pagina real y no promesas
 *  - nada que la pagina no contenga: si un equipo o una marca no esta en la web, no se nombra
 */

import { blogPosts } from './blogPostsData';
import { caseStudiesData } from './caseStudiesData';

export const SITIO = 'https://byptech.com';

const PAGINAS = {
  '/': {
    title: 'Equipos para cocinas industriales y panadería | B&P Tech',
    description: 'Ingeniería alimentaria en Perú: diseñamos, equipamos y damos soporte a cocinas industriales, panaderías, retail y hotelería con marcas líderes.',
  },
  '/nosotros': {
    title: 'Sobre B&P Tech: ingeniería alimentaria en Perú',
    description: 'Diseñamos y equipamos operaciones alimentarias con foco en eficiencia, higiene y continuidad. Así trabajamos y así acompañamos a nuestros clientes.',
  },
  '/contacto': {
    title: 'Contacto | B&P Tech Perú',
    description: 'Cuéntanos tu industria, volumen y restricciones de espacio, energía y flujo. Respondemos con una propuesta clara en menos de 24 horas.',
  },

  '/industrias': {
    title: 'Soluciones por industria | B&P Tech Perú',
    description: 'Equipamiento por vertical: restaurantes, panadería, cocinas industriales, supermercados, hoteles, comida rápida, laboratorios, carnicerías y estadios.',
  },
  '/industrias/cocinas-industriales': {
    title: 'Cocinas industriales: equipamiento y proyectos | B&P Tech',
    description: 'Cocción a gran escala con criterio de ingeniería: equipos, distribución y seguridad para cocinas industriales de alto volumen en Perú.',
  },
  '/industrias/panaderia': {
    title: 'Equipos para panadería y pastelería industrial | B&P Tech',
    description: 'Amasado, laminado y fermentación controlada con RONDO, DIOSNA y Pietroberto. Maquinaria de panificación para una producción constante día tras día.',
  },
  '/industrias/restaurantes': {
    title: 'Equipos para restaurantes: cocina y refrigeración | B&P Tech',
    description: 'Estaciones claras de recepción, preparación, cocción y lavado. Equipamiento para restaurantes que sostiene el ritmo del servicio sin caídas.',
  },
  '/industrias/supermercados': {
    title: 'Refrigeración y exhibición para supermercados | B&P Tech',
    description: 'Murales, islas y backroom: cadena de frío estable para retail, con menos mermas y una exhibición que vende. Refrigeración comercial en Perú.',
  },
  '/industrias/bares-cafeterias': {
    title: 'Equipos para bares y cafeterías | B&P Tech Perú',
    description: 'Underbar, backbar, hielo y refrigeración de insumos: estaciones eficientes y repetibles para el servicio de bebidas incluso en poco espacio.',
  },
  '/industrias/hoteles-catering': {
    title: 'Equipos para hoteles, banquetes y catering | B&P Tech',
    description: 'Abatimiento, regeneración y transporte con control térmico para banquetes y catering de volumen, sin perder calidad entre la cocina y el salón.',
  },
  '/industrias/comida-rapida': {
    title: 'Equipos para comida rápida y QSR | B&P Tech Perú',
    description: 'Líneas de ensamblaje, cocción acelerada y separación de expo y delivery: equipamiento QSR para tiempos de ticket predecibles y calidad repetible.',
  },
  '/industrias/laboratorios': {
    title: 'Refrigeración biomédica para laboratorios | B&P Tech',
    description: 'Estabilidad térmica y control crítico: refrigeración biomédica, monitoreo y trazabilidad para laboratorios que deben cumplir rangos exigentes.',
  },
  '/industrias/carnicerias': {
    title: 'Equipos para carnicerías: corte y cadena de frío | B&P Tech',
    description: 'Sierras, rebanadoras y maduración controlada con separación de zonas e higiene. Equipamiento de carnicería para una operación segura y continua.',
  },
  '/industrias/estadios': {
    title: 'Equipos para estadios y centros de eventos | B&P Tech',
    description: 'Grab and go, cocción acelerada y servicio continuo en alto tráfico: equipamiento para recintos que concentran toda su demanda en pocas horas.',
  },
  '/industrias/otros': {
    title: 'Proyectos especiales de equipamiento | B&P Tech Perú',
    description: 'Soluciones transversales para operaciones que no encajan en una vertical estándar. Cuéntanos el requerimiento y lo diseñamos a medida.',
  },

  '/equipos': {
    title: 'Equipos por tipo de máquina | B&P Tech Perú',
    description: 'Amasadoras, laminadoras, batidoras, refrigeración, lavavajillas, licuadoras y más: doce familias de equipo con las marcas que representamos en Perú.',
  },
  '/equipos/hornos': {
    title: 'Hornos industriales para panadería en Perú | B&P Tech',
    description: 'Hornos Mondial Forni de tubos de vapor, eléctricos de pisos y rotativos de carro, con control MFTouch. Ocho modelos con representación y servicio técnico en Perú.',
  },
  '/equipos/cafeteras': {
    title: 'Cafeteras automáticas profesionales en Perú | B&P Tech',
    description: 'Cafeteras automáticas JURA para oficina, hotel y restaurante, de 50 a 100 tazas al día. Técnico en 24 horas y repuestos garantizados por 10 años en Perú.',
  },
  '/equipos/licuadoras': {
    title: 'Licuadoras profesionales en Perú | B&P Tech',
    description: 'Licuadoras comerciales Vitamix para barra y cocina profesional: motores de hasta 3 HP y jarras de alto impacto, con representación y servicio técnico en Perú.',
  },
  '/equipos/refrigeracion': {
    title: 'Refrigeración comercial en Perú | B&P Tech',
    description: 'Exhibidores, refrigeradores verticales y bajo mesada TRUE para cocinas y retail: conservación y cadena de frío con respaldo técnico en Perú.',
  },
  '/equipos/amasadoras': {
    title: 'Amasadoras industriales en Perú | B&P Tech',
    description: 'Amasadoras de espiral, sistema WENDEL de DIOSNA y de brazos Pietroberto. Cada masa pide un amasado distinto: te decimos cuál encaja con tu producción.',
  },
  '/equipos/laminadoras': {
    title: 'Laminadoras de masa en Perú | B&P Tech',
    description: 'Laminadoras RONDO mecánicas, electrónicas y líneas automáticas de croissant: espesor constante de la primera bandeja a la última, con soporte en Perú.',
  },
  '/equipos/batidoras': {
    title: 'Batidoras industriales en Perú | B&P Tech',
    description: 'Batidoras planetarias Pietroberto para pastelería y panificación: el equipo más versátil del obrador, construido para uso industrial continuo.',
  },
  '/equipos/divisoras': {
    title: 'Divisoras y formadoras de masa en Perú | B&P Tech',
    description: 'Divisoras volumétricas, divisoras-boleadoras y formadoras de barras Pietroberto: peso exacto por pieza, sin pesar a mano.',
  },
  '/equipos/moldes-y-bandejas': {
    title: 'Moldes, bandejas y carros de panadería en Perú | B&P Tech',
    description: 'Moldes con recubrimiento de grado industrial de American Pan y estufas, carros y canaletas Cainco en Aluminol, en las medidas estándar del mercado.',
  },
  '/equipos/lavavajillas': {
    title: 'Lavavajillas industriales en Perú | B&P Tech',
    description: 'Winterhalter vende máquina, detergente y tratamiento de agua como un solo sistema, que es lo que hace la diferencia visible en el vaso con agua dura.',
  },
  '/equipos/cortadoras': {
    title: 'Cortadoras y porcionadoras en Perú | B&P Tech',
    description: 'Porcionadoras TREIF del grupo JBT Marel: control de grosor desde medio milímetro y ECO SLICING para cortar a mayor temperatura y gastar menos en frío.',
  },
  '/equipos/chocolate': {
    title: 'Temperadoras de chocolate en Perú | B&P Tech',
    description: 'Temperadoras Pomati de fabricación italiana: la curva sostenida turno tras turno, que es lo que decide el brillo y el chasquido del producto terminado.',
  },

  '/marcas': {
    title: 'Marcas que representamos en Perú | B&P Tech',
    // La lista anterior dejaba fuera a Mondial Forni desde que entro. Ahora nombra
    // las principales y da la cuenta total.
    description: 'JURA, RONDO, DIOSNA, WINTERHALTER, TRUE, Mondial Forni, Pietroberto, Vitamix y más: doce marcas de equipamiento alimentario con respaldo técnico en Perú.',
  },
  '/marcas/jura': {
    title: 'JURA Perú: cafeteras automáticas suizas | B&P Tech',
    description: 'Cafeteras automáticas JURA E8, W8 y X10 para oficinas, hoteles y restaurantes. Codistribuidor autorizado, técnico en 24 h y repuestos por 10 años.',
  },
  '/marcas/mondialforni': {
    title: 'Mondial Forni en Perú: hornos de panificación | B&P Tech',
    description: 'Hornos italianos Mondial Forni: tubos de vapor, eléctricos de pisos y rotativos de carro, todos con pantalla MFTouch, con representación y soporte en Perú.',
  },
  '/marcas/rondo': {
    title: 'RONDO en Perú: laminado y formado de masa | B&P Tech',
    description: 'Precisión suiza para panificación y pastelería. Laminadoras y líneas de formado RONDO con representación y soporte técnico en Perú.',
  },
  '/marcas/diosna': {
    title: 'DIOSNA en Perú: amasadoras WENDEL | B&P Tech',
    description: 'Ingeniería alemana para el amasado profesional. Amasadoras DIOSNA, incluida la WENDEL, con representación y servicio técnico en Perú.',
  },
  '/marcas/winterhalter': {
    title: 'WINTERHALTER Perú: lavavajillas industriales | B&P Tech',
    description: 'Tecnología alemana de lavado para el sector gastronómico: lavavajillas de campana, de cinta y bajo mostrador, con soporte y consumibles en Perú.',
  },
  '/marcas/true': {
    title: 'TRUE Refrigeration en Perú | B&P Tech',
    description: 'Refrigeración comercial TRUE: mesas refrigeradas, congeladores y exhibidores de fiabilidad probada para cocinas y retail, con representación en Perú.',
  },
  '/marcas/pietroberto': {
    title: 'Pietroberto Perú: maquinaria de panificación | B&P Tech',
    description: 'Más de cien años de ingeniería italiana en amasado y panificación. Equipos Pietroberto con representación y soporte técnico en Perú.',
  },

  '/marcas/vitamix': {
    title: 'Vitamix en Perú: licuadoras comerciales | B&P Tech',
    description: 'Licuadoras comerciales Vitamix para barras y cocinas de alto tránsito: The Quiet One y Vita-Prep 3, con representación y soporte técnico en Perú.',
  },
  '/marcas/cainco': {
    title: 'Cainco en Perú: bandejas, estufas y carros | B&P Tech',
    description: 'Bandejas de horneo, estufas y carros esqueleto en Aluminol para panaderías y supermercados, en las medidas estándar del mercado peruano.',
  },
  '/marcas/pomati': {
    title: 'Pomati en Perú: temperadoras de chocolate | B&P Tech',
    description: 'Temperado de chocolate con control preciso de la curva. Temperadoras Pomati de fabricación italiana con representación y servicio técnico en Perú.',
  },
  '/marcas/americanpan': {
    title: 'American Pan en Perú: moldes y bandejas | B&P Tech',
    description: 'Moldes de pan, bandejas para baguette y racks con recubrimiento antiadherente de grado industrial para panificación, disponibles en Perú.',
  },
  '/marcas/jbtmarel': {
    title: 'JBT Marel en Perú: cortadoras TREIF | B&P Tech',
    description: 'Porcionadoras y cortadoras TREIF para carnicerías, supermercados y salas de despiece, con control de grosor al medio milímetro y ECO SLICING.',
  },

  '/blog': {
    title: 'Blog técnico de equipamiento alimentario | B&P Tech',
    description: 'Criterios de selección, cadena de frío, eficiencia energética y diseño de líneas: artículos prácticos para quien decide qué equipo comprar.',
  },
  '/casos-de-exito': {
    title: 'Casos de éxito | B&P Tech Perú',
    description: 'Proyectos reales contados por reto, solución y resultado: qué cambió en la operación después de equiparla con criterio de ingeniería.',
  },
};

/** Recorta una descripcion a la longitud util sin partir una palabra. */
function recorta(texto, max = 158) {
  const limpio = String(texto || '').replace(/\s+/g, ' ').trim();
  if (limpio.length <= max) return limpio;
  return limpio.slice(0, max - 1).replace(/[\s,;:.]+\S*$/, '') + '…';
}

const lista = (x) => (Array.isArray(x) ? x : x && Array.isArray(x.default) ? x.default : []);

/**
 * Añade la marca al final salvo que el titulo ya sea largo: por encima de unos
 * 62 caracteres Google corta, y es preferible perder la marca que perder el tema.
 */
const conMarca = (titulo, sufijo = ' | B&P Tech') =>
  titulo.length + sufijo.length <= 62 ? titulo + sufijo : titulo;

/**
 * Devuelve {title, description, canonical} para una ruta.
 * Las rutas con slug (blog y casos) se resuelven contra sus propios datos.
 */
export function seoDeRuta(pathname) {
  const ruta = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';

  let meta = PAGINAS[ruta];

  if (!meta && ruta.startsWith('/blog/')) {
    const slug = ruta.slice('/blog/'.length);
    const post = lista(blogPosts).find((p) => p.slug === slug);
    if (post) {
      // El excerpt solo da 60-90 caracteres. Se completa con el primer bloque del
      // articulo para que la descripcion llegue a la longitud que Google muestra.
      const primero = (post.sections || [])[0];
      meta = {
        title: conMarca(post.title),
        description: recorta([post.excerpt, primero && primero.p].filter(Boolean).join(' ')
          || PAGINAS['/blog'].description),
      };
    }
  }

  if (!meta && ruta.startsWith('/casos-de-exito/')) {
    const slug = ruta.slice('/casos-de-exito/'.length);
    const caso = lista(caseStudiesData).find((c) => c.slug === slug);
    if (caso) {
      const entrevista = caso.interview || [];
      const reto = entrevista.find((i) => /reto|desaf|problema/i.test(i.q || '')) || entrevista[0];
      meta = {
        title: conMarca(`${caso.title}: caso de éxito`),
        description: recorta([caso.headline, reto && reto.a].filter(Boolean).join('. ')
          || PAGINAS['/casos-de-exito'].description),
      };
    }
  }

  // Las rutas /industria/* son duplicados historicos de /industrias/*.
  if (!meta && ruta.startsWith('/industria/')) {
    const equivalente = ruta.replace('/industria/', '/industrias/');
    if (PAGINAS[equivalente]) return { ...PAGINAS[equivalente], canonical: SITIO + equivalente };
  }

  // Ninguna coincidencia: es la pagina de error. No lleva canonical ni debe
  // indexarse, y necesita titulo propio para no aparecer como copia de la portada.
  if (!meta) {
    return {
      title: 'Página no encontrada | B&P Tech',
      description: 'La dirección que buscas no existe o cambió. Vuelve al inicio o escribe a B&P Tech y te orientamos hacia el equipo que necesitas.',
      canonical: null,
      noindex: true,
    };
  }

  return { ...meta, canonical: SITIO + (ruta === '/' ? '/' : ruta) };
}

export default PAGINAS;
