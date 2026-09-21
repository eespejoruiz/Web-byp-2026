/**
 * Guardia del despliegue.
 *
 * Recorre el build ya prerenderizado y se planta si algo salio mal:
 * paginas sin contenido, titulos repetidos, canonicals que no corresponden
 * o rutas que faltan. Si esto falla, la imagen no se publica.
 *
 * La razon de que exista: el prerenderizado puede fallar sin dar error —el
 * navegador guarda la pagina antes de que React pinte y el archivo queda
 * vacio— y el resultado seria publicar un sitio en blanco sin enterarse.
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD = path.resolve('build');
const SITIO = 'https://byptech.com';
const MINIMO_PALABRAS = 80;

const RUTAS_OBLIGATORIAS = [
  '/', '/nosotros', '/contacto', '/blog', '/casos-de-exito', '/industrias', '/marcas',
  '/industrias/cocinas-industriales', '/industrias/panaderia', '/industrias/restaurantes',
  '/marcas/rondo', '/marcas/winterhalter', '/marcas/jura', '/equipos/cafeteras',
];

const archivoDe = (ruta) =>
  ruta === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, ruta, 'index.html');

const palabras = (html) => {
  const body = (html.match(/<body[\s\S]*?<\/body>/i) || [''])[0];
  return body.replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
};

const fallos = [];
const titulos = new Map();

function todasLasRutas(dir = BUILD, base = '') {
  const salida = [];
  if (fs.existsSync(path.join(dir, 'index.html'))) salida.push(base || '/');
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && !['static', 'assets'].includes(e.name)) {
      salida.push(...todasLasRutas(path.join(dir, e.name), `${base}/${e.name}`));
    }
  }
  return salida;
}

for (const ruta of RUTAS_OBLIGATORIAS) {
  if (!fs.existsSync(archivoDe(ruta))) fallos.push(`falta la ruta ${ruta}`);
}

for (const ruta of todasLasRutas()) {
  const html = fs.readFileSync(archivoDe(ruta), 'utf8');

  const n = palabras(html);
  if (n < MINIMO_PALABRAS) fallos.push(`${ruta}: solo ${n} palabras en el HTML`);

  const t = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1];
  if (!t) fallos.push(`${ruta}: sin <title>`);
  else {
    if (titulos.has(t)) fallos.push(`${ruta}: mismo titulo que ${titulos.get(t)}`);
    titulos.set(t, ruta);
  }

  const c = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1];
  const esperado = SITIO + (ruta === '/' ? '/' : ruta);
  if (c !== esperado) fallos.push(`${ruta}: canonical ${c || '(falta)'} en vez de ${esperado}`);

  if (!/<meta name="description" content="[^"]{80,}"/i.test(html)) {
    fallos.push(`${ruta}: descripcion ausente o demasiado corta`);
  }
}

// El sitemap tiene que declarar exactamente las paginas que existen: ni una de
// menos (Google no la descubre) ni una de mas (le mandamos a un 404).
{
  const p = path.join(BUILD, 'sitemap.xml');
  if (!fs.existsSync(p)) fallos.push('no se genero sitemap.xml');
  else {
    const xml = fs.readFileSync(p, 'utf8');
    const declaradas = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => m[1].replace(SITIO, '').replace(/^$/, '/')));
    const reales = new Set(todasLasRutas());
    for (const r of reales) if (!declaradas.has(r)) fallos.push(`sitemap: falta ${r}`);
    for (const d of declaradas) if (!reales.has(d)) fallos.push(`sitemap: declara ${d}, que no existe`);
  }
}

// llms.txt: lo que leen los asistentes de IA. Tiene que existir, enlazar todas
// las paginas reales y no enlazar ninguna que no exista.
{
  const p = path.join(BUILD, 'llms.txt');
  if (!fs.existsSync(p)) fallos.push('no se genero llms.txt (node llms.mjs)');
  else {
    const txt = fs.readFileSync(p, 'utf8');
    const enlazadas = new Set([...txt.matchAll(/\]\((https:\/\/byptech\.com[^)]*)\)/g)]
      .map((m) => m[1].replace(SITIO, '').replace(/^$/, '/')));
    const reales = new Set(todasLasRutas());
    for (const e of enlazadas) if (!reales.has(e)) fallos.push(`llms.txt: enlaza ${e}, que no existe`);
    const sinEnlace = [...reales].filter((r) => r !== '/' && !enlazadas.has(r));
    if (sinEnlace.length) fallos.push(`llms.txt: faltan ${sinEnlace.join(', ')}`);
  }
}

if (fallos.length) {
  console.error('El build NO esta listo para publicar:\n');
  fallos.forEach((f) => console.error(' -', f));
  process.exit(1);
}
console.log(`Build correcto: ${todasLasRutas().length} rutas con contenido, titulo unico y canonical propio.`);
