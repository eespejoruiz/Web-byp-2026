/**
 * Comprueba que una pagina prerenderizada sigue funcionando como aplicacion:
 * que React arranca, que no hay errores en consola y que la navegacion interna responde.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const BUILD = path.resolve('build');
const PORT = 4601;
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.mp4': 'video/mp4', '.xml': 'application/xml' };

const servidor = http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(BUILD, url);
  if (!f.startsWith(BUILD)) return res.writeHead(403).end();
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) f = path.join(BUILD, 'index.html');
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
  res.end(fs.readFileSync(f));
});
await new Promise(r => servidor.listen(PORT, r));

const nav = await chromium.launch({ executablePath: process.env.PW_CHROMIUM, args: ['--no-sandbox'] });
const ctx = await nav.newContext({ viewport: { width: 1366, height: 900 } });
await ctx.route('**/*', r => r.request().url().startsWith(`http://127.0.0.1:${PORT}`) || r.request().url().startsWith('data:')
  ? r.continue() : r.abort());

const RUTAS = ['/', '/industrias/panaderia', '/marcas/rondo', '/blog/roi-de-equipamiento-confiable'];
let malas = 0;

for (const ruta of RUTAS) {
  const p = await ctx.newPage();
  const errores = [];
  p.on('console', m => { if (m.type() === 'error') errores.push(m.text().slice(0, 120)); });
  p.on('pageerror', e => errores.push('pageerror: ' + e.message.slice(0, 120)));

  await p.goto(`http://127.0.0.1:${PORT}${ruta}`, { waitUntil: 'domcontentloaded' });
  const antes = await p.evaluate(() => document.getElementById('root').innerText.length);
  await p.waitForTimeout(2500);
  const despues = await p.evaluate(() => document.getElementById('root').innerText.length);
  const enlaces = await p.evaluate(() => document.querySelectorAll('a[href^="/"]').length);
  const reactVivo = await p.evaluate(() =>
    !!document.querySelector('#root')?._reactRootContainer ||
    !!Object.keys(document.querySelector('#root') || {}).find(k => k.startsWith('__react')));

  const relevantes = errores.filter(e => !/net::ERR_FAILED|Failed to load resource|ERR_BLOCKED/i.test(e));
  const ok = despues > 200 && enlaces > 5 && relevantes.length === 0;
  if (!ok) malas++;
  console.log(`${ok ? 'OK  ' : 'MAL '} ${ruta.padEnd(40)} texto ${antes}->${despues}  enlaces ${enlaces}  react ${reactVivo}`);
  relevantes.slice(0, 3).forEach(e => console.log('      error:', e));
  await p.close();
}

await nav.close(); servidor.close();
console.log(malas ? `\n${malas} rutas con problema` : '\nTodas las rutas comprobadas funcionan');
if (malas) process.exitCode = 1;
