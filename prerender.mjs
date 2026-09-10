/**
 * Prerenderizado estatico del build de CRA.
 *
 * Levanta un servidor sobre build/ con fallback a index.html, abre cada ruta en
 * Chromium, espera a que React termine de pintar y guarda el HTML resultante en
 * build/<ruta>/index.html. El resultado es que un rastreador recibe la pagina ya
 * escrita en vez de un <div id="root"></div> vacio.
 *
 * Uso: node prerender.mjs
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const BUILD = path.resolve('build');
const PORT = 4599;

// ---------------------------------------------------------------- rutas
// Las rutas se leen de src/App.js, no de una lista escrita a mano: si alguien
// añade una pagina y se olvida de este archivo, igual se prerenderiza.
function rutasDeApp() {
  const src = fs.readFileSync('src/App.js', 'utf8');
  return [...src.matchAll(/path=['"]([^'"]+)['"]/g)].map(m => m[1])
    .filter(r => r !== '*')            // el comodin se trata aparte, como 404
    .filter(r => !r.includes(':'))     // las rutas con slug se resuelven abajo
    .filter(r => !r.startsWith('/industria/')); // duplicados: nginx los redirige
}

function slugsDe(archivo, prefijo) {
  const src = fs.readFileSync(archivo, 'utf8');
  return [...src.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => prefijo + m[1]);
}

const RUTAS = [
  ...new Set(rutasDeApp()),
  ...slugsDe('src/data/blogPostsData.js', '/blog/'),
  ...slugsDe('src/data/caseStudiesData.js', '/casos-de-exito/'),
];

// ---------------------------------------------------------------- servidor
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4', '.xml': 'application/xml', '.txt': 'text/plain' };

const servidor = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let archivo = path.join(BUILD, url);
  if (!archivo.startsWith(BUILD)) { res.writeHead(403).end(); return; }
  if (!fs.existsSync(archivo) || fs.statSync(archivo).isDirectory()) archivo = path.join(BUILD, 'index.html');
  const cuerpo = fs.readFileSync(archivo);
  res.writeHead(200, { 'Content-Type': MIME[path.extname(archivo)] || 'application/octet-stream' });
  res.end(cuerpo);
});

// ---------------------------------------------------------------- prerender
const palabras = (html) => {
  const body = (html.match(/<body[\s\S]*?<\/body>/i) || [''])[0];
  return body.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ')
    .split(/\s+/).filter(Boolean).length;
};

await new Promise(r => servidor.listen(PORT, r));

const navegador = await chromium.launch({
  executablePath: process.env.PW_CHROMIUM || undefined,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const ctx = await navegador.newContext({ viewport: { width: 1366, height: 900 } });

// Durante el prerenderizado no se sale a internet: ni fuentes de Google, ni GA4,
// ni CDNs. Colgarian el proceso y ademas mandarian visitas falsas a Analytics.
await ctx.route('**/*', (route) => {
  const url = route.request().url();
  if (url.startsWith(`http://127.0.0.1:${PORT}`) || url.startsWith('data:')) return route.continue();
  return route.abort();
});

const informe = [];
let fallos = 0;

for (const ruta of RUTAS) {
  const pagina = await ctx.newPage();
  try {
    await pagina.goto(`http://127.0.0.1:${PORT}${ruta}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    // React tiene que haber pintado algo dentro de #root antes de guardar.
    await pagina.waitForFunction(
      () => document.getElementById('root') && document.getElementById('root').children.length > 0,
      null, { timeout: 30000 });
    await pagina.waitForTimeout(600);

    let html = await pagina.content();

    // El HTML guardado tiene que hidratarse, no volver a renderizarse desde cero.
    html = html.replace('<div id="root"', '<div id="root" data-prerendered="1"');

    const destino = ruta === '/' ? path.join(BUILD, 'index.html')
                                 : path.join(BUILD, ruta, 'index.html');
    fs.mkdirSync(path.dirname(destino), { recursive: true });
    fs.writeFileSync(destino, html);

    const n = palabras(html);
    if (n < 80) fallos++;
    informe.push({ ruta, palabras: n, bytes: html.length });
  } catch (e) {
    fallos++;
    informe.push({ ruta, error: e.message.split('\n')[0] });
  } finally {
    await pagina.close();
  }
}

// La pagina de error tambien se guarda, en build/404.html. nginx la sirve con
// codigo 404 real para las direcciones que no existen; antes cualquier disparate
// devolvia 200 con la portada, que Google cuenta como pagina rota igualmente.
{
  const pagina = await ctx.newPage();
  try {
    await pagina.goto(`http://127.0.0.1:${PORT}/__no-existe-${Date.now()}`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await pagina.waitForFunction(
      () => document.getElementById('root') && document.getElementById('root').children.length > 0,
      null, { timeout: 30000 });
    await pagina.waitForTimeout(400);
    fs.writeFileSync(path.join(BUILD, '404.html'), await pagina.content());
    informe.push({ ruta: '404.html', palabras: palabras(await pagina.content()), bytes: 0 });
  } catch (e) {
    fallos++;
    informe.push({ ruta: '404.html', error: e.message.split('\n')[0] });
  } finally {
    await pagina.close();
  }
}

await navegador.close();
servidor.close();

console.log('ruta'.padEnd(52), 'palabras', ' KB');
for (const r of informe) {
  console.log(r.ruta.padEnd(52),
    r.error ? 'ERROR ' + r.error : String(r.palabras).padStart(8) + String(Math.round(r.bytes / 1024)).padStart(4));
}
console.log(`\n${informe.length} rutas prerenderizadas, ${fallos} con problema`);
if (fallos) process.exitCode = 1;
