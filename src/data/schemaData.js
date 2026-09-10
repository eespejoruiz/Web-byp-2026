/**
 * Datos estructurados (JSON-LD) por ruta.
 *
 * Regla de oro de este archivo: **solo se marca lo que la página realmente
 * contiene**. Nada de precios, stock, valoraciones ni productos inventados. Un
 * marcado que promete algo que no está en la página es peor que no tener marcado:
 * Google lo detecta, y la penalización se la lleva todo el dominio.
 *
 * Qué resuelve, en corto: a un distribuidor lo que más le cuesta es que Google
 * entienda que es el canal de unas marcas concretas en un país concreto. Eso se
 * dice con la organización, con las marcas enlazadas a su fabricante y con los
 * productos atados a su marca.
 */

import { brandsData } from './brandsData';
import { productsData, productBrandNames } from './productsData';
import { blogPosts } from './blogPostsData';
import { caseStudiesData } from './caseStudiesData';
import { seoDeRuta, SITIO } from './seoData';
import { IMAGE } from '../constent/theme';

const ORG_ID = `${SITIO}/#organizacion`;
const WEB_ID = `${SITIO}/#sitio`;

// Datos de contacto: los mismos que están escritos en la cabecera, el pie y la
// página de contacto. Si cambian ahí, hay que cambiarlos aquí.
const TELEFONO = '+51985362946';
const EMAIL = 'proyectos@byptech.com';

const abs = (ruta) => SITIO + (ruta === '/' ? '/' : ruta);

/**
 * Las imágenes las empaqueta el compilador y quedan como rutas relativas
 * (/static/media/…). Schema.org las quiere absolutas.
 */
function imagenAbsoluta(x) {
  if (!x || typeof x !== 'string') return null;
  // Algunos archivos del proyecto llevan espacios en el nombre. Sin codificar,
  // la URL que ve Google se rompe en el primer espacio.
  const url = /^https?:\/\//.test(x) ? x : SITIO + (x.startsWith('/') ? x : '/' + x);
  return encodeURI(url);
}

/** Dominio oficial del fabricante, deducido de las fichas de producto. */
function webDeMarca(slug) {
  const p = productsData.find((x) => x.brand === slug && x.source);
  if (!p) return null;
  try {
    return new URL(p.source).origin;
  } catch {
    return null;
  }
}

function organizacion() {
  const logo = imagenAbsoluta(IMAGE.logo1);
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'B&P Tech',
    url: SITIO + '/',
    ...(logo ? { logo } : {}),
    description: 'Distribuidor en Perú de maquinaria y equipamiento para la industria alimentaria.',
    telephone: TELEFONO,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    areaServed: { '@type': 'Country', name: 'Perú' },
    knowsAbout: [
      'Equipamiento para panadería y pastelería',
      'Cocinas industriales',
      'Refrigeración comercial',
      'Lavado industrial de vajilla',
    ],
  };
}

function sitioWeb() {
  return {
    '@type': 'WebSite',
    '@id': WEB_ID,
    url: SITIO + '/',
    name: 'B&P Tech',
    inLanguage: 'es-PE',
    publisher: { '@id': ORG_ID },
  };
}

/**
 * Nombre corto para las migas. Google las enseña en el resultado de búsqueda, y
 * ahí un título completo queda largo y feo: se quiere «Marcas › RONDO», no
 * «Marcas que representamos en Perú › RONDO en Perú: laminado y formado de masa».
 */
const RAICES = {
  '/marcas': 'Marcas',
  '/industrias': 'Industrias',
  '/blog': 'Blog',
  '/casos-de-exito': 'Casos de éxito',
  '/nosotros': 'Nosotros',
  '/contacto': 'Contacto',
};

function nombreCorto(ruta) {
  if (RAICES[ruta]) return RAICES[ruta];

  if (ruta.startsWith('/marcas/')) {
    const m = brandsData.find((b) => b.slug === ruta.slice('/marcas/'.length));
    if (m) return m.name;
  }
  if (ruta.startsWith('/blog/')) {
    const p = blogPosts.find((x) => x.slug === ruta.slice('/blog/'.length));
    if (p) return p.title;
  }
  if (ruta.startsWith('/casos-de-exito/')) {
    const c = caseStudiesData.find((x) => x.slug === ruta.slice('/casos-de-exito/'.length));
    if (c) return c.title;
  }
  // Último recurso: el propio segmento con guiones convertidos en espacios.
  const seg = ruta.split('/').filter(Boolean).pop() || '';
  return seg.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase());
}

/** Migas de pan a partir de la propia ruta. La portada no lleva. */
function migas(ruta) {
  if (ruta === '/') return null;
  const partes = ruta.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: SITIO + '/' }];
  let acumulado = '';
  partes.forEach((seg, i) => {
    acumulado += '/' + seg;
    items.push({ '@type': 'ListItem', position: i + 2,
                 name: nombreCorto(acumulado), item: abs(acumulado) });
  });
  return { '@type': 'BreadcrumbList', '@id': abs(ruta) + '#migas', itemListElement: items };
}

/** Un producto tal y como está en la ficha: sin precio y sin disponibilidad. */
function producto(p) {
  const nodo = {
    '@type': 'Product',
    name: p.name,
    category: p.category,
    brand: { '@type': 'Brand', name: productBrandNames[p.brand] || p.brand },
  };
  if (p.description) nodo.description = p.description;
  const img = imagenAbsoluta(p.image);
  if (img) nodo.image = img;
  return nodo;
}

function listaDeProductos(items, nombre, ruta) {
  if (!items.length) return null;
  return {
    '@type': 'ItemList',
    '@id': abs(ruta) + '#productos',
    name: nombre,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: producto(p),
    })),
  };
}

/** "Feb 2026" -> "2026-02". Se queda en el mes a propósito: inventar el día seria mentir. */
const MESES = { ene: '01', feb: '02', mar: '03', abr: '04', may: '05', jun: '06',
  jul: '07', ago: '08', set: '09', sep: '09', oct: '10', nov: '11', dic: '12' };
function fechaISO(texto) {
  const m = /([a-zA-Zéó]{3})[a-z]*\.?\s+(\d{4})/.exec(String(texto || ''));
  if (!m) return null;
  const mes = MESES[m[1].slice(0, 3).toLowerCase()];
  return mes ? `${m[2]}-${mes}` : null;
}

/**
 * Devuelve el array de nodos JSON-LD que corresponde a una ruta, o null.
 */
export function schemaDeRuta(pathname) {
  const ruta = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';

  // La organización va en todas las páginas: los artículos la citan como autor y
  // editor por su identificador, y una referencia a un nodo que no está en la
  // misma página no la resuelve nadie.
  const nodos = [organizacion()];

  if (ruta === '/') {
    nodos.push(sitioWeb());
    return nodos;
  }

  const mg = migas(ruta);
  if (mg) nodos.push(mg);

  // --- marcas -------------------------------------------------------------
  if (ruta === '/marcas') {
    nodos.push({
      '@type': 'ItemList',
      '@id': abs(ruta) + '#marcas',
      name: 'Marcas representadas por B&P Tech en Perú',
      numberOfItems: brandsData.length,
      itemListElement: brandsData.map((b, i) => ({
        '@type': 'ListItem', position: i + 1, name: b.name, url: abs(b.route),
      })),
    });
    return nodos;
  }

  if (ruta.startsWith('/marcas/')) {
    const slug = ruta.slice('/marcas/'.length);
    const marca = brandsData.find((b) => b.slug === slug);
    if (marca) {
      const oficial = webDeMarca(slug);
      const nodoMarca = {
        '@type': 'Brand',
        '@id': abs(ruta) + '#marca',
        name: marca.name,
        description: marca.shortDescription || marca.tagline,
      };
      // El enlace al fabricante es lo que ata la marca a su dueño real.
      if (oficial) nodoMarca.sameAs = oficial;
      nodos.push(nodoMarca);

      const suyos = productsData.filter((p) => p.brand === slug);
      const lista = listaDeProductos(suyos, `Equipos ${marca.name} disponibles en Perú`, ruta);
      if (lista) nodos.push(lista);
    }
    return nodos;
  }

  // --- industrias ---------------------------------------------------------
  if (ruta.startsWith('/industrias/')) {
    const slug = ruta.slice('/industrias/'.length);
    const suyos = productsData.filter((p) => (p.industries || []).includes(slug));
    const meta = seoDeRuta(ruta);
    const lista = listaDeProductos(suyos, meta.title.split('|')[0].trim(), ruta);
    if (lista) nodos.push(lista);
    return nodos;
  }

  // --- blog ---------------------------------------------------------------
  if (ruta.startsWith('/blog/')) {
    const post = blogPosts.find((p) => p.slug === ruta.slice('/blog/'.length));
    if (post) {
      const art = {
        '@type': 'Article',
        '@id': abs(ruta) + '#articulo',
        headline: post.title,
        description: post.excerpt,
        inLanguage: 'es-PE',
        mainEntityOfPage: abs(ruta),
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
      };
      const f = fechaISO(post.date);
      if (f) art.datePublished = f;
      const img = imagenAbsoluta(post.img);
      if (img) art.image = img;
      nodos.push(art);
    }
    return nodos;
  }

  // --- casos de éxito -----------------------------------------------------
  if (ruta.startsWith('/casos-de-exito/')) {
    const caso = caseStudiesData.find((c) => c.slug === ruta.slice('/casos-de-exito/'.length));
    if (caso) {
      const art = {
        '@type': 'Article',
        '@id': abs(ruta) + '#caso',
        headline: caso.title,
        description: caso.headline,
        inLanguage: 'es-PE',
        mainEntityOfPage: abs(ruta),
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
      };
      const img = imagenAbsoluta(caso.heroImage);
      if (img) art.image = img;
      nodos.push(art);
    }
    return nodos;
  }

  return nodos;
}

/** El bloque completo, listo para meter en un <script type="application/ld+json">. */
export function jsonLdDeRuta(pathname) {
  const nodos = schemaDeRuta(pathname);
  if (!nodos || !nodos.length) return null;
  // Se limpian las claves con valor undefined para no dejar basura en el JSON.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodos },
    (k, v) => (v === undefined ? undefined : v));
}
