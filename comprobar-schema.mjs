/**
 * Revisa los datos estructurados del build ya prerenderizado.
 *
 * No comprueba solo que el JSON sea válido: comprueba que no prometa nada que la
 * página no tenga. Un marcado que declara productos, precios o valoraciones
 * inexistentes es motivo de penalización manual, así que aquí se busca
 * exactamente eso.
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD = path.resolve('build');
const SITIO = 'https://byptech.com';

const rutas = (dir = BUILD, base = '') => {
  const out = [];
  if (fs.existsSync(path.join(dir, 'index.html'))) out.push(base || '/');
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory() && !['static', 'assets', '_brand'].includes(e.name)) {
      out.push(...rutas(path.join(dir, e.name), `${base}/${e.name}`));
    }
  }
  return out;
};

const PROHIBIDO = ['offers', 'price', 'priceCurrency', 'aggregateRating', 'review',
  'ratingValue', 'availability'];

const fallos = [];
const resumen = [];

for (const ruta of rutas()) {
  const f = ruta === '/' ? path.join(BUILD, 'index.html') : path.join(BUILD, ruta, 'index.html');
  const html = fs.readFileSync(f, 'utf8');
  const m = html.match(/<script id="byp-jsonld" type="application\/ld\+json">([\s\S]*?)<\/script>/);

  if (!m) { fallos.push(`${ruta}: sin datos estructurados`); continue; }

  let datos;
  try { datos = JSON.parse(m[1]); }
  catch (e) { fallos.push(`${ruta}: JSON inválido — ${e.message}`); continue; }

  const grafo = datos['@graph'] || [];
  const tipos = grafo.map((n) => n['@type']);

  // 1. Nada de precios, stock ni valoraciones: el sitio no los publica.
  const crudo = JSON.stringify(datos);
  for (const p of PROHIBIDO) {
    if (new RegExp(`"${p}"\\s*:`).test(crudo)) fallos.push(`${ruta}: declara "${p}", que la página no muestra`);
  }

  // 2. Toda referencia por @id tiene que resolverse dentro de la misma página.
  const ids = new Set(grafo.map((n) => n['@id']).filter(Boolean));
  const refs = [...crudo.matchAll(/\{"@id":"([^"]+)"\}/g)].map((x) => x[1]);
  for (const r of new Set(refs)) {
    if (!ids.has(r)) fallos.push(`${ruta}: referencia a ${r} que no existe en la página`);
  }

  // 3. Las migas tienen que terminar en la propia página.
  const migas = grafo.find((n) => n['@type'] === 'BreadcrumbList');
  if (ruta !== '/') {
    if (!migas) fallos.push(`${ruta}: sin migas de pan`);
    else {
      const ultimo = migas.itemListElement[migas.itemListElement.length - 1];
      const esperado = SITIO + ruta;
      if (ultimo.item !== esperado) fallos.push(`${ruta}: la última miga apunta a ${ultimo.item}`);
      if (migas.itemListElement.some((x) => !x.name || !x.name.trim())) {
        fallos.push(`${ruta}: hay una miga sin nombre`);
      }
    }
  }

  // 4. Cada producto declarado tiene que aparecer escrito en la página.
  const listas = grafo.filter((n) => n['@type'] === 'ItemList');
  for (const l of listas) {
    for (const el of l.itemListElement || []) {
      const nombre = el.item ? el.item.name : el.name;
      if (!nombre) { fallos.push(`${ruta}: elemento de lista sin nombre`); continue; }
      const suelto = nombre.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp(suelto, 'i').test(html)) {
        fallos.push(`${ruta}: la lista declara "${nombre}" pero no está en la página`);
      }
    }
  }

  resumen.push({ ruta, tipos: [...new Set(tipos)].join(', '),
    productos: listas.reduce((a, l) => a + (l.itemListElement || []).length, 0) });
}

console.log(`${'ruta'.padEnd(50)} productos  tipos`);
for (const r of resumen) console.log(`${r.ruta.padEnd(50)}${String(r.productos).padStart(6)}    ${r.tipos}`);

if (fallos.length) {
  console.error(`\n${fallos.length} problemas:`);
  fallos.forEach((f) => console.error(' -', f));
  process.exit(1);
}
console.log(`\n${resumen.length} páginas con datos estructurados correctos y sin nada inventado.`);
