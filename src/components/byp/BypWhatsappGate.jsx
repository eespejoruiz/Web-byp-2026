import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { medirWhatsapp, eventoGA, origenDeLaVisita } from "../../utils/medicion";
import {
  WA_RE, CIUDADES, VERSION_PRIVACIDAD,
  leerDatosGuardados, guardarDatos, validarDatos, leerEnlace, armarMensaje, urlWhatsapp,
} from "../../utils/datosWhatsapp";

/**
 * Formulario previo a WhatsApp (3-nov-2026, pedido de B&P).
 *
 * Cualquier enlace a WhatsApp del sitio abre primero este formulario: nombre,
 * celular, DNI o RUC, empresa (opcional) y ciudad. Al continuar:
 *  - se abre WhatsApp con el mensaje propio de esa página (el producto o la
 *    página desde la que escribe el cliente) y, debajo, sus datos;
 *  - los datos van a Selva Boost, formulario «byp-tech-antes-de-whatsapp», por
 *    /api/whatsapp-lead (nginx lo pasa a la API de Boost, que no admite llamadas
 *    directas desde otro dominio);
 *  - se recuerdan 30 días en este navegador: la próxima vez va directo a WhatsApp.
 *
 * Si Boost no responde, WhatsApp se abre igual: el cliente nunca se queda trabado.
 * Al prerenderizar no pinta nada (cerrado devuelve null), así que no toca la
 * hidratación de ninguna página.
 */

const ENDPOINT = "/api/whatsapp-lead";
const VACIO = { nombre: "", celular: "", documento: "", empresa: "", ciudad: "", acepta: false, web: "" };

const tituloDePagina = () =>
  (typeof document !== "undefined" ? document.title : "")
    .replace(/\s*\|\s*B&P Tech.*$/i, "")
    .trim();

const paginaActual = () => `byptech.com${window.location.pathname === "/" ? "" : window.location.pathname}`;

function abrirEnPestana(url) {
  // Un <a> creado al vuelo, marcado para que este mismo formulario no lo vuelva
  // a interceptar. Dentro del clic del usuario, el navegador no lo bloquea.
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("data-wa-directo", "1");
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function idEnvio() {
  try {
    if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
  } catch (_) { /* sin crypto */ }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function enviarABoost(datos, enlace, honeypot) {
  const origen = {};
  try {
    new URLSearchParams(origenDeLaVisita()).forEach((v, k) => { origen[k] = v; });
  } catch (_) { /* sin origen */ }
  const cuerpo = {
    data: {
      nombre: datos.nombre,
      celular: `+51${datos.celular}`,
      dni_ruc: datos.documento,
      empresa: datos.empresa,
      ciudad: datos.ciudad,
      consulta: enlace.texto,
      pagina: `https://${paginaActual()}`,
      consentimiento: `Sí: acepta la Política de privacidad (versión ${VERSION_PRIVACIDAD}) el ${new Date().toISOString()}`,
      envio_id: idEnvio(),
      _hp_check: honeypot || "",
    },
    source: "web",
    metadata: { referrer: document.referrer || "", page_url: window.location.href.split("#")[0], ...origen },
  };
  try {
    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuerpo),
      keepalive: true,
      credentials: "omit",
    }).catch(() => {});
  } catch (_) {
    // Sin fetch o bloqueado: WhatsApp se abre igual.
  }
}

const BypWhatsappGate = () => {
  const [abierto, setAbierto] = useState(false);
  const [enlace, setEnlace] = useState(null);
  const [valores, setValores] = useState(VACIO);
  const [errores, setErrores] = useState({});
  const primerCampo = useRef(null);
  const origenFoco = useRef(null);

  useEffect(() => {
    const alHacerClic = (e) => {
      const a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
      if (!a || a.hasAttribute("data-wa-directo")) return;
      const href = a.getAttribute("href") || "";
      if (!WA_RE.test(href)) return;
      e.preventDefault();

      const info = { href, textoBoton: a.textContent || "", ...leerEnlace(href, tituloDePagina()) };
      const guardados = leerDatosGuardados();
      if (guardados) {
        // Ya los dejó en los últimos 30 días: directo a WhatsApp con sus datos.
        abrirEnPestana(urlWhatsapp(info.numero, armarMensaje(info.texto, guardados, paginaActual())));
        medirWhatsapp(href, info.textoBoton, { wa_formulario: "recordado" });
        return;
      }
      origenFoco.current = a;
      setEnlace(info);
      setValores(VACIO);
      setErrores({});
      setAbierto(true);
      eventoGA("wa_formulario_abierto", { link_url: href.split("?")[0], wa_mensaje: info.texto.slice(0, 100) });
    };
    document.addEventListener("click", alHacerClic, true);
    return () => document.removeEventListener("click", alHacerClic, true);
  }, []);

  useEffect(() => {
    if (!abierto) return undefined;
    document.body.classList.add("byp-wa-abierto");
    const t = setTimeout(() => primerCampo.current && primerCampo.current.focus(), 30);
    const alTeclear = (e) => { if (e.key === "Escape") cerrar(); };
    document.addEventListener("keydown", alTeclear);
    return () => {
      clearTimeout(t);
      document.body.classList.remove("byp-wa-abierto");
      document.removeEventListener("keydown", alTeclear);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierto]);

  function cerrar() {
    setAbierto(false);
    if (origenFoco.current && origenFoco.current.focus) {
      try { origenFoco.current.focus({ preventScroll: true }); } catch (_) { /* nada */ }
    }
  }

  function cambiar(campo) {
    return (e) => {
      const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setValores((x) => ({ ...x, [campo]: v }));
      if (errores[campo]) setErrores((x) => ({ ...x, [campo]: undefined }));
    };
  }

  function continuar(e) {
    e.preventDefault();
    const { ok, datos, errores: errs } = validarDatos(valores);
    if (!valores.acepta) errs.acepta = "Marca la casilla para continuar.";
    if (!ok || errs.acepta) {
      setErrores(errs);
      const primero = ["nombre", "celular", "documento", "ciudad", "acepta"].find((k) => errs[k]);
      const el = primero && document.getElementById(`byp-wa-${primero}`);
      if (el) el.focus();
      return;
    }
    // Primero WhatsApp, dentro del mismo clic (si no, el navegador lo bloquea).
    abrirEnPestana(urlWhatsapp(enlace.numero, armarMensaje(enlace.texto, datos, paginaActual())));
    guardarDatos(datos);
    enviarABoost(datos, enlace, valores.web);
    medirWhatsapp(enlace.href, enlace.textoBoton, { wa_formulario: "nuevo" });
    setAbierto(false);
  }

  if (!abierto || !enlace) return null;

  const campo = (id, etiqueta, props) => (
    <div className={`byp-wa__campo${errores[id] ? " byp-wa__campo--error" : ""}`}>
      <label htmlFor={`byp-wa-${id}`}>{etiqueta}</label>
      <input
        id={`byp-wa-${id}`}
        value={valores[id]}
        onChange={cambiar(id)}
        aria-invalid={errores[id] ? "true" : "false"}
        aria-describedby={errores[id] ? `byp-wa-${id}-error` : undefined}
        {...props}
      />
      {errores[id] && <p className="byp-wa__error" id={`byp-wa-${id}-error`}>{errores[id]}</p>}
    </div>
  );

  return (
    <div className="byp-wa" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) cerrar(); }}>
      <div className="byp-wa__panel" role="dialog" aria-modal="true" aria-labelledby="byp-wa-titulo">
        <div className="byp-wa__cab">
          <div>
            <p className="byp-wa__code">// ANTES DE PASAR A WHATSAPP</p>
            <h2 id="byp-wa-titulo" className="byp-wa__titulo">Déjanos tus datos y te atendemos con la cotización correcta</h2>
          </div>
          <button type="button" className="byp-wa__x" onClick={cerrar} aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="byp-wa__msg">
          <span className="byp-wa__msglbl">Tu consulta</span>
          <p>{enlace.texto}</p>
        </div>

        <form className="byp-wa__form" onSubmit={continuar} noValidate>
          {campo("nombre", "Nombre y apellido", { ref: primerCampo, type: "text", autoComplete: "name", maxLength: 80 })}
          <div className="byp-wa__fila">
            {campo("celular", "Celular", { type: "tel", inputMode: "tel", autoComplete: "tel-national", placeholder: "9XX XXX XXX", maxLength: 16 })}
            {campo("documento", "DNI o RUC", { type: "text", inputMode: "numeric", autoComplete: "off", maxLength: 14 })}
          </div>
          {campo("empresa", "Empresa (opcional)", { type: "text", autoComplete: "organization", maxLength: 120 })}
          {campo("ciudad", "Ciudad", { type: "text", autoComplete: "address-level2", list: "byp-wa-ciudades", maxLength: 60 })}
          <datalist id="byp-wa-ciudades">
            {CIUDADES.map((c) => <option value={c} key={c} />)}
          </datalist>

          <input
            className="byp-wa__hp"
            type="text"
            name="web"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={valores.web}
            onChange={cambiar("web")}
          />

          <div className={`byp-wa__acepta${errores.acepta ? " byp-wa__campo--error" : ""}`}>
            <input id="byp-wa-acepta" type="checkbox" checked={valores.acepta} onChange={cambiar("acepta")}
              aria-describedby={errores.acepta ? "byp-wa-acepta-error" : undefined} />
            <label htmlFor="byp-wa-acepta">
              Acepto que B&amp;P TECH use estos datos para responder mi consulta, según la{" "}
              <Link className="byp-inlink" to="/privacidad" target="_blank" rel="noopener">Política de privacidad</Link>.
            </label>
          </div>
          {errores.acepta && <p className="byp-wa__error" id="byp-wa-acepta-error">{errores.acepta}</p>}

          <button type="submit" className="byp-btn byp-wa__ir">Continuar a WhatsApp</button>
          <p className="byp-wa__nota">Se abrirá WhatsApp con tu consulta y estos datos. Los recordaremos 30 días en este navegador.</p>
        </form>
      </div>
    </div>
  );
};

export default BypWhatsappGate;
