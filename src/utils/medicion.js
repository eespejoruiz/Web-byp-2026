/**
 * Medicion de contactos en GA4 (G-D1LYE5PHSD).
 *
 * Cada clic a WhatsApp, a un telefono o a un correo se registra como
 * `generate_lead`, que es el evento que despues se importa como conversion en
 * Google Ads. Es un solo listener para todo el sitio: no hace falta tocar los
 * enlaces uno por uno, y cualquier enlace nuevo queda medido solo.
 *
 * Parametros del evento:
 *  - lead_source: whatsapp | telefono | correo | formulario
 *  - link_text:   el texto del boton (hasta 100 caracteres)
 *  - wa_mensaje:  el mensaje prellenado de WhatsApp, que dice desde que
 *                 producto, marca o industria escribe el cliente
 *
 * No se envia ningun dato de la persona: solo que hubo un contacto y desde
 * donde. Antes de esto el bundle no disparaba ni un evento, asi que ni el SEO
 * ni la pauta podian demostrar que contactos traian.
 *
 * Desde el 3-nov-2026, WhatsApp pasa antes por un formulario (BypWhatsappGate):
 * el clic ya no cuenta como contacto. El generate_lead de WhatsApp lo dispara el
 * formulario con medirWhatsapp() cuando el cliente deja sus datos y se abre
 * WhatsApp (o directamente, si sus datos ya estaban guardados en el navegador).
 */

const CANALES = [
  [/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i, 'whatsapp'],
  [/^tel:/i, 'telefono'],
  [/^mailto:/i, 'correo'],
];

const CLAVES_ORIGEN = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const CLAVE_SESION = 'byp_origen';

function enviar(parametros) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', parametros);
  }
}

/** Cualquier otro evento de GA4 (sin datos de la persona). */
export function eventoGA(nombre, parametros) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', nombre, parametros || {});
  }
}

function parametrosDeEnlace(href, texto, canal) {
  const parametros = {
    lead_source: canal,
    link_url: href.split('?')[0],
    link_text: (texto || '').replace(/\s+/g, ' ').trim().slice(0, 100),
  };
  if (canal === 'whatsapp') {
    try {
      const mensaje = new URL(href).searchParams.get('text');
      if (mensaje) parametros.wa_mensaje = mensaje.slice(0, 100);
    } catch (_) {
      // Enlace mal formado: se mide igual, sin el mensaje.
    }
  }
  return parametros;
}

/**
 * El contacto por WhatsApp, cuando de verdad se abre WhatsApp. `href` es el
 * enlace ORIGINAL de la página (su mensaje dice desde dónde escribe el cliente):
 * nunca el que ya lleva el nombre o el DNI, que no pueden llegar a GA4.
 */
export function medirWhatsapp(href, texto, extra) {
  enviar({ ...parametrosDeEnlace(href, texto, 'whatsapp'), ...(extra || {}) });
}

/**
 * Guarda los UTM con los que llego la visita. El sitio es una SPA: si alguien
 * entra por un anuncio a /marcas/jura y despues va a /contacto, la URL de
 * /contacto ya no trae los UTM. Guardandolos en la sesion, el formulario puede
 * pasarselos al CRM igual.
 */
function guardarOrigen() {
  try {
    const params = new URLSearchParams(window.location.search);
    const origen = {};
    CLAVES_ORIGEN.forEach((k) => {
      const v = params.get(k);
      if (v) origen[k] = v.slice(0, 150);
    });
    if (Object.keys(origen).length) {
      window.sessionStorage.setItem(CLAVE_SESION, JSON.stringify(origen));
    }
  } catch (_) {
    // Sin sessionStorage (modo privado estricto): se sigue sin origen.
  }
}

/** Los UTM de la visita, como query string lista para añadir a una URL. */
export function origenDeLaVisita() {
  const salida = new URLSearchParams();
  try {
    const actual = new URLSearchParams(window.location.search);
    let guardado = {};
    try {
      guardado = JSON.parse(window.sessionStorage.getItem(CLAVE_SESION) || '{}');
    } catch (_) {
      guardado = {};
    }
    CLAVES_ORIGEN.forEach((k) => {
      const v = actual.get(k) || guardado[k];
      if (v) salida.set(k, v);
    });
  } catch (_) {
    // Durante el prerenderizado o sin window: sin origen.
  }
  return salida.toString();
}

export function iniciarMedicion() {
  if (typeof window === 'undefined' || window.__bypMedicion) return;
  window.__bypMedicion = true;

  guardarOrigen();

  document.addEventListener('click', (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!a) return;
    const href = a.getAttribute('href') || '';
    const canal = (CANALES.find(([re]) => re.test(href)) || [])[1];
    if (!canal) return;
    // WhatsApp lo mide el formulario previo (medirWhatsapp), no el clic.
    if (canal === 'whatsapp') return;

    enviar(parametrosDeEnlace(href, a.textContent, canal));
  }, true);
}

/** Lo llama el formulario del CRM cuando su iframe avisa que se envio. */
export function medirFormularioEnviado(slug) {
  enviar({ lead_source: 'formulario', form_id: slug });
}
