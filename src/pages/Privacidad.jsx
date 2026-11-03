import React, { useState } from "react";
import BypBreadcrumbs from "../components/byp/BypBreadcrumbs";
import { borrarDatosGuardados } from "../utils/datosWhatsapp";

/**
 * Política de privacidad (3-nov-2026). Nace con el formulario previo a WhatsApp,
 * que pide DNI o RUC: la casilla de aceptación enlaza aquí. Contenido según el
 * deber de información de la Ley 29733 y su reglamento (D. S. 016-2024-JUS).
 */

const idx = (n) => String(n).padStart(2, "0") + "/";

const Seccion = ({ n, titulo, children }) => (
  <div className="byp-article__section">
    <div className="byp-article__head">
      <span className="byp-head__idx">{idx(n)}</span>
      <h2>{titulo}</h2>
    </div>
    {children}
  </div>
);

const Privacidad = () => {
  const [borrado, setBorrado] = useState("");

  const borrar = () => {
    setBorrado(borrarDatosGuardados()
      ? "Listo: borramos tus datos de este navegador."
      : "Tu navegador no nos dejó borrarlos; puedes hacerlo desde su configuración.");
  };

  return (
    <div className="byp-page">
      <section className="byp-phero">
        <div className="byp-wrap">
          <BypBreadcrumbs items={[{ label: "Privacidad" }]} />
          <p className="byp-code">// LEGAL · PRIVACIDAD</p>
          <h1 className="byp-h1">Política de privacidad</h1>
          <p className="byp-lead">Qué datos te pedimos cuando nos escribes, para qué los usamos, dónde se guardan y cómo ejercer tus derechos.</p>
        </div>
      </section>

      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-article byp-legal">
            <Seccion n={1} titulo="Quién es responsable de tus datos">
              <p>El responsable es B&amp;P TECH S.A.C. (B&amp;P Tech), con RUC 20611910089 y domicilio en Calle Cristóbal de Peralta Sur 395, Urb. Valle Hermoso de Monterrico, Santiago de Surco, Lima, Perú.</p>
              <p>Para cualquier consulta sobre tus datos, escríbenos a <a className="byp-inlink" href="mailto:jbejarano@byptech.com">jbejarano@byptech.com</a>.</p>
            </Seccion>

            <Seccion n={2} titulo="Qué datos te pedimos">
              <ul className="byp-legal__lista">
                <li><strong>Antes de pasar a WhatsApp:</strong> nombre y apellido, celular, DNI o RUC, empresa (opcional) y ciudad. También guardamos la página desde la que escribes y el mensaje de tu consulta.</li>
                <li><strong>En el formulario de contacto:</strong> nombre, apellido, correo, empresa y tu mensaje.</li>
              </ul>
              <p>Son obligatorios el nombre, el celular, el DNI o RUC y la ciudad, y en el formulario de contacto, el nombre y el correo. Sin ellos no podemos registrar tu consulta por ese medio. Si prefieres no darlos, puedes llamarnos al <a className="byp-inlink" href="tel:+51985362946">+51 985 362 946</a> o escribirnos a <a className="byp-inlink" href="mailto:jbejarano@byptech.com">jbejarano@byptech.com</a>.</p>
            </Seccion>

            <Seccion n={3} titulo="Para qué los usamos">
              <p>Solo para atender tu consulta: identificarte, preparar la cotización o la demostración que pides y contactarte por WhatsApp, por teléfono o por correo sobre ella. No los usamos para enviarte publicidad y no los vendemos ni los cedemos a terceros.</p>
            </Seccion>

            <Seccion n={4} titulo="Dónde se guardan y quién los ve">
              <p>Se guardan en el banco de datos de clientes y contactos comerciales de B&amp;P TECH S.A.C., dentro de Selva Boost, el sistema de gestión de clientes que administra para nosotros SELVA MARKETING SOSTENIBLE S.A.C. como encargada del tratamiento. Solo acceden el equipo comercial de B&amp;P y, para dar soporte al sistema, Selva.</p>
              <p>Los servidores de Selva Boost están en Brasil y algunos de los servicios de correo y mensajería que usa están en otros países, así que tus datos pueden salir del Perú. En todos los casos se protegen con las medidas de seguridad que exige la ley.</p>
              <p>Cuando continúas a WhatsApp, el mensaje lo envías tú desde tu cuenta, y WhatsApp (Meta Platforms) lo trata según sus propias condiciones.</p>
            </Seccion>

            <Seccion n={5} titulo="Cuánto tiempo los guardamos">
              <p>Mientras atendemos tu consulta y hasta dos años después de tu último contacto con nosotros. Luego los eliminamos, salvo que una ley nos obligue a conservarlos más tiempo o que nos pidas borrarlos antes.</p>
            </Seccion>

            <Seccion n={6} titulo="En tu navegador">
              <p>Para no pedirte los mismos datos cada vez que nos escribes, los guardamos en tu propio navegador durante 30 días (almacenamiento local). Puedes borrarlos cuando quieras:</p>
              <div className="byp-legal__borrar">
                <button type="button" className="byp-btn" onClick={borrar}>Borrar mis datos de este navegador</button>
                <p className="byp-legal__estado" role="status">{borrado}</p>
              </div>
              <p>Además usamos Google Analytics para medir, en conjunto, cuántas personas visitan cada página y cuántas nos contactan. A Google no le enviamos tu nombre, tu DNI ni tu celular.</p>
            </Seccion>

            <Seccion n={7} titulo="Tus derechos">
              <p>Puedes pedir el acceso a tus datos, su rectificación o su cancelación, oponerte a su uso y retirar tu consentimiento en cualquier momento. Escríbenos a <a className="byp-inlink" href="mailto:jbejarano@byptech.com">jbejarano@byptech.com</a> con tu nombre, tu DNI y tu pedido, y te respondemos dentro de los plazos que fija la ley.</p>
              <p>Si no quedas conforme con la respuesta, puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales del Ministerio de Justicia y Derechos Humanos.</p>
            </Seccion>

            <Seccion n={8} titulo="Otras precisiones">
              <p>No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos. Los tratamos conforme a la Ley N.° 29733, Ley de Protección de Datos Personales, y a su reglamento, aprobado por el Decreto Supremo N.° 016-2024-JUS.</p>
              <p className="byp-legal__fecha">Última actualización: 3 de noviembre de 2026.</p>
            </Seccion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacidad;
