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

    const parametros = {
      lead_source: canal,
      link_url: href.split('?')[0],
      link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
    };
    if (canal === 'whatsapp') {
      try {
        const texto = new URL(href).searchParams.get('text');
        if (texto) parametros.wa_mensaje = texto.slice(0, 100);
      } catch (_) {
        // Enlace mal formado: se mide igual, sin el mensaje.
      }
    }
    enviar(parametros);
  }, true);
}

/** Lo llama el formulario del CRM cuando su iframe avisa que se envio. */
export function medirFormularioEnviado(slug) {
  enviar({ lead_source: 'formulario', form_id: slug });
}
