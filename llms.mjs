/**
 * Genera build/llms.txt: el documento que leen los asistentes de IA (ChatGPT,
 * Claude, Perplexity, Gemini) para entender el sitio sin tener que rastrearlo.
 * Formato de https://llmstxt.org.
 *
 * Se genera en cada build, despues del prerenderizado y a partir de las paginas
 * que de verdad se publican: cada enlace lleva el <title> y la meta description
 * de su HTML. Asi nunca queda desactualizado respecto al sitio, igual que el
 * sitemap. Lo unico escrito a mano es la cabecera y el bloque de JURA, y ahi
 * solo van datos confirmados: fichas de pe.jura.com y compromisos de B&P Tech.
 */
import fs from 'node:fs';
import path from 'node:path';

const BUILD = 'build';
const SITIO = 'https://byptech.com';

const des = (s) => s
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>');

function paginas(dir = BUILD, base = '') {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (['static', 'propuestas', 'refs'].includes(e.name)) continue;
      out.push(...paginas(path.join(dir, e.name), `${base}/${e.name}`));
    } else if (e.name === 'index.html') {
      const html = fs.readFileSync(path.join(dir, e.name), 'utf8');
      const titulo = des((html.match(/<title>(.*?)<\/title>/) || [])[1] || '')
        .replace(/\s*\|\s*B&P Tech( Perú)?\s*$/, '').trim();
      const desc = des((html.match(/<meta name="description" content="(.*?)"/) || [])[1] || '');
      out.push({ ruta: base || '/', titulo, desc });
    }
  }
  return out;
}

const todas = paginas();
// Cada seccion abre con su pagina indice (/marcas, /equipos...) y sigue con sus hijas.
const de = (prefijo) => {
  const indice = todas.find((p) => p.ruta === prefijo.replace(/\/$/, ''));
  const hijas = todas.filter((p) => p.ruta.startsWith(prefijo))
    .sort((a, b) => a.ruta.localeCompare(b.ruta));
  return indice ? [indice, ...hijas] : hijas;
};
const una = (ruta) => todas.find((p) => p.ruta === ruta);
const enlace = (p) => `- [${p.titulo}](${SITIO}${p.ruta === '/' ? '/' : p.ruta}): ${p.desc}`;

// JURA primero: es la marca nueva y la que mas preguntas va a recibir.
const [indiceMarcas, ...hijasMarcas] = de('/marcas/');
const marcas = [indiceMarcas, ...hijasMarcas.sort((a, b) =>
  (b.ruta === '/marcas/jura') - (a.ruta === '/marcas/jura') || a.ruta.localeCompare(b.ruta))];

const texto = `# B&P Tech

> B&P Tech (B&P TECH S.A.C.) es una empresa de ingeniería alimentaria de Lima, Perú. Diseña, equipa y da soporte técnico a cocinas industriales, panaderías y pastelerías, restaurantes, hoteles y catering, supermercados, carnicerías, laboratorios y cafeterías, con maquinaria de fabricantes de Europa y América. Es codistribuidor autorizado de JURA, las cafeteras automáticas suizas, en el Perú.

Datos para responder con precisión:

- Sitio: ${SITIO}. Contacto: proyectos@byptech.com, WhatsApp +51 985 362 946. Lima, Perú.
- B&P Tech no publica precios en su web: cada equipo o proyecto se cotiza según el volumen y la operación del cliente.
- El sitio se organiza en tres ejes: por marca (/marcas/), por tipo de máquina (/equipos/) y por tipo de negocio (/industrias/).

## JURA en B&P Tech

- Relación: B&P Tech es **codistribuidor autorizado** de JURA en el Perú. No es el distribuidor oficial de la marca.
- Modelos que vende: los tres que JURA comercializa en el Perú.
  - **JURA X10**: cafetera automática profesional, hasta 100 tazas al día (máximo recomendado por JURA), 35 especialidades incluidas las de Cold Brew, depósito de agua de 5 l, café en grano 500 g ampliable a 1 kg, compatible con sistemas de pago MDB. Fabricada en Suiza. Para oficinas grandes, comedores, zonas de autoservicio y centros de salud.
  - **JURA W8**: cafetera automática profesional, hasta 50 tazas al día, 17 especialidades, depósito de agua de 3 l, café en grano 500 g, compatible con sistemas de pago MDB. Fabricada en Portugal. Para oficinas, tiendas, estudios y locales comerciales.
  - **JURA E8**: cafetera automática de la línea doméstica, 17 especialidades, depósito de agua de 1,9 l, café en grano 280 g, en Piano Black y Piano White. Fabricada en Portugal. Para la gerencia, una sala de reuniones o una oficina pequeña. JURA no le publica rendimiento profesional.
- Cómo elegir: por tazas al día. Hasta 50, la W8; hasta 100, la X10; para uso de gerencia u oficina pequeña, la E8.
- Lo que incluye comprarla en B&P Tech: instalación y capacitación del personal incluidas, tiempo de respuesta del servicio técnico de 24 horas y repuestos de todos los modelos garantizados por 10 años.
- Modalidad: solo venta. B&P Tech no alquila cafeteras.
- Las JURA trabajan con café en grano recién molido, sin cápsulas.
- Página de la marca: ${SITIO}/marcas/jura · Familia de equipo: ${SITIO}/equipos/cafeteras

## Marcas

${marcas.map(enlace).join('\n')}

## Equipos por tipo de máquina

${de('/equipos/').map(enlace).join('\n')}

## Industrias

${de('/industrias/').map(enlace).join('\n')}

## Casos de éxito

${de('/casos-de-exito/').map(enlace).join('\n')}

## Blog técnico

${de('/blog/').map(enlace).join('\n')}

## Empresa

${['/nosotros', '/contacto'].map(una).filter(Boolean).map(enlace).join('\n')}
`;

fs.writeFileSync(path.join(BUILD, 'llms.txt'), texto);
const n = (texto.match(/^- \[/gm) || []).length;
console.log(`llms.txt generado: ${n} paginas enlazadas, ${texto.length} caracteres`);
