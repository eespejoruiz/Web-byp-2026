/**
 * Datos que el cliente deja antes de pasar a WhatsApp (3-nov-2026, pedido de B&P).
 *
 * B&P quiere que cada mensaje de WhatsApp llegue con nombre, DNI o RUC, empresa y
 * ciudad. Aquí viven las piezas que comparten el formulario (BypWhatsappGate) y la
 * página de privacidad: validación, el mensaje que se arma y el recuerdo de 30 días
 * en este navegador (localStorage), para no volver a pedir los datos.
 */

export const CLAVE_DATOS = 'byp_wa_datos';
export const VIGENCIA_MS = 30 * 24 * 60 * 60 * 1000;
export const VERSION_PRIVACIDAD = '2026-11-03';
export const WA_RE = /^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i;
export const WA_NUMERO = '51985362946';

export const CIUDADES = [
  'Lima', 'Arequipa', 'Trujillo', 'Chiclayo', 'Piura', 'Cusco', 'Huancayo', 'Ica',
  'Iquitos', 'Tacna', 'Pucallpa', 'Cajamarca', 'Chimbote', 'Huánuco', 'Juliaca',
  'Puno', 'Ayacucho', 'Tarapoto', 'Chincha', 'Sullana', 'Huacho', 'Tumbes',
  'Moquegua', 'Abancay', 'Huaraz', 'Puerto Maldonado', 'Chachapoyas', 'Callao',
];

/** Los datos guardados, o null si no hay o ya pasaron los 30 días. */
export function leerDatosGuardados() {
  try {
    const crudo = window.localStorage.getItem(CLAVE_DATOS);
    if (!crudo) return null;
    const guardado = JSON.parse(crudo);
    if (!guardado || !guardado.t || !guardado.datos || Date.now() - guardado.t > VIGENCIA_MS) {
      window.localStorage.removeItem(CLAVE_DATOS);
      return null;
    }
    const d = guardado.datos;
    // Solo se usan si siguen siendo válidos (por si cambian las reglas).
    if (validarDatos(d).ok) return d;
    window.localStorage.removeItem(CLAVE_DATOS);
    return null;
  } catch (_) {
    return null;
  }
}

export function guardarDatos(datos) {
  try {
    window.localStorage.setItem(CLAVE_DATOS, JSON.stringify({ t: Date.now(), datos }));
  } catch (_) {
    // Sin localStorage (modo privado estricto): se pedirán otra vez la próxima.
  }
}

export function borrarDatosGuardados() {
  try {
    window.localStorage.removeItem(CLAVE_DATOS);
    return true;
  } catch (_) {
    return false;
  }
}

/** RUC peruano: 11 dígitos, prefijo válido y dígito verificador (módulo 11). */
export function esRucValido(ruc) {
  if (!/^(10|15|16|17|20)\d{9}$/.test(ruc)) return false;
  const pesos = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  const suma = pesos.reduce((s, p, i) => s + p * Number(ruc[i]), 0);
  let dv = 11 - (suma % 11);
  if (dv === 10) dv = 0;
  if (dv === 11) dv = 1;
  return dv === Number(ruc[10]);
}

const soloDigitos = (v) => String(v || '').replace(/\D/g, '');

/** DNI (8 dígitos) o RUC (11, con verificador). Devuelve los dígitos o null. */
export function normalizarDocumento(v) {
  const d = soloDigitos(v);
  if (d.length === 8) return d;
  if (d.length === 11 && esRucValido(d)) return d;
  return null;
}

/** Celular peruano: 9 dígitos que empiezan con 9, con o sin +51. */
export function normalizarCelular(v) {
  let d = soloDigitos(v);
  if (d.length === 11 && d.startsWith('51')) d = d.slice(2);
  return /^9\d{8}$/.test(d) ? d : null;
}

const limpio = (v, max) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, max);

/** Valida y limpia. Devuelve { ok, datos, errores }. */
export function validarDatos(entrada) {
  const errores = {};
  const nombre = limpio(entrada.nombre, 80);
  const celular = normalizarCelular(entrada.celular);
  const documento = normalizarDocumento(entrada.documento);
  const empresa = limpio(entrada.empresa, 120);
  const ciudad = limpio(entrada.ciudad, 60);
  if (nombre.length < 3 || !/[a-záéíóúñü]{2,}/i.test(nombre)) errores.nombre = 'Escribe tu nombre y apellido.';
  if (!celular) errores.celular = 'Escribe tu celular de 9 dígitos (empieza con 9).';
  if (!documento) {
    const d = soloDigitos(entrada.documento);
    errores.documento = d.length === 11
      ? 'Ese RUC no es válido: revisa los 11 dígitos.'
      : 'Escribe tu DNI (8 dígitos) o el RUC de tu empresa (11 dígitos).';
  }
  if (ciudad.length < 2) errores.ciudad = 'Escribe tu ciudad.';
  return {
    ok: Object.keys(errores).length === 0,
    datos: { nombre, celular: celular || '', documento: documento || '', empresa, ciudad },
    errores,
  };
}

/** Lo que dice el enlace que tocó el cliente: número y mensaje propio de la página. */
export function leerEnlace(href, tituloPagina) {
  let numero = WA_NUMERO;
  let texto = '';
  try {
    const u = new URL(href);
    const n = soloDigitos(u.hostname.startsWith('wa.me') ? u.pathname : u.searchParams.get('phone'));
    if (n) numero = n;
    texto = (u.searchParams.get('text') || '').trim();
  } catch (_) {
    // Enlace raro: se usa el número de B&P y el mensaje por defecto.
  }
  if (!texto) {
    texto = tituloPagina
      ? `Hola B&P TECH, escribo desde la página «${tituloPagina}».`
      : 'Hola B&P TECH, quiero hacer una consulta.';
  }
  return { numero, texto };
}

/** El mensaje que llega a B&P: el de la página y, debajo, los datos del cliente. */
export function armarMensaje(texto, datos, pagina) {
  const lineas = [
    texto,
    '',
    'Mis datos:',
    `• Nombre: ${datos.nombre}`,
    `• DNI/RUC: ${datos.documento}`,
  ];
  if (datos.empresa) lineas.push(`• Empresa: ${datos.empresa}`);
  lineas.push(`• Ciudad: ${datos.ciudad}`);
  if (pagina) lineas.push('', `Desde: ${pagina}`);
  return lineas.join('\n');
}

export function urlWhatsapp(numero, mensaje) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
