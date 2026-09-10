import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoDeRuta } from '../../data/seoData';
import { jsonLdDeRuta } from '../../data/schemaData';

/**
 * Escribe titulo, descripcion, canonical y etiquetas sociales del <head>
 * segun la ruta activa.
 *
 * Va montado una sola vez dentro del Layout de App.js, asi que cubre todas
 * las rutas sin tocar los 35 componentes de pagina. No pinta nada.
 *
 * Importa para el prerenderizado: el HTML que se guarda de cada ruta se toma
 * despues de que React haya corrido este efecto, de modo que cada archivo
 * queda con su propio titulo y su propio canonical. Sin esto, las 35 paginas
 * saldrian con el titulo de la portada y todas apuntando a byptech.com/,
 * que es peor que no prerenderizar.
 */
function fijaEtiqueta(selector, crear, valor) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = crear();
    document.head.appendChild(el);
  }
  if (el.tagName === 'LINK') el.setAttribute('href', valor);
  else el.setAttribute('content', valor);
  return el;
}

const meta = (name) => [
  `meta[name="${name}"]`,
  () => Object.assign(document.createElement('meta'), { name }),
];

const propiedad = (prop) => [
  `meta[property="${prop}"]`,
  () => {
    const el = document.createElement('meta');
    el.setAttribute('property', prop);
    return el;
  },
];

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, canonical, noindex } = seoDeRuta(pathname);

    document.title = title;
    fijaEtiqueta(...meta('description'), description);

    // La pagina de error no lleva canonical: apuntar a otra direccion le diria
    // a Google que este 404 es en realidad esa otra pagina.
    const link = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      fijaEtiqueta('link[rel="canonical"]', () => {
        const el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        return el;
      }, canonical);
    } else if (link) {
      link.remove();
    }

    const robots = document.head.querySelector('meta[name="robots"]');
    if (noindex) fijaEtiqueta(...meta('robots'), 'noindex, follow');
    else if (robots) robots.remove();

    fijaEtiqueta(...propiedad('og:title'), title);
    fijaEtiqueta(...propiedad('og:description'), description);
    fijaEtiqueta(...propiedad('twitter:title'), title);
    fijaEtiqueta(...propiedad('twitter:description'), description);
    if (canonical) {
      fijaEtiqueta(...propiedad('og:url'), canonical);
      fijaEtiqueta(...propiedad('twitter:url'), canonical);
    }

    // Datos estructurados. Se reemplaza el bloque entero en cada cambio de ruta
    // para que nunca queden mezclados los de dos páginas distintas.
    const previo = document.getElementById('byp-jsonld');
    if (previo) previo.remove();
    const ld = noindex ? null : jsonLdDeRuta(pathname);
    if (ld) {
      const s = document.createElement('script');
      s.id = 'byp-jsonld';
      s.type = 'application/ld+json';
      s.textContent = ld;
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
