import React from "react";
import BypBreadcrumbs from "../components/byp/BypBreadcrumbs";

const WHATSAPP_URL = "https://wa.me/51985362946";

const Contect = () => (
  <div className="byp-page">
    <section className="byp-phero">
      <div className="byp-wrap">
        <p className="byp-code">// CONTACTO</p>
        <BypBreadcrumbs variant="dark" items={[{ label: "Contacto" }]} />
        <h1 className="byp-h1">Conversemos</h1>
        <p className="byp-lead">
          Cuéntanos tu industria, volumen y restricciones (espacio, energía,
          flujo). Te proponemos una solución clara, fiable y alineada a
          resultados. Respondemos dentro de 24 horas hábiles.
        </p>
      </div>
    </section>

    <section className="byp-section">
      <div className="byp-wrap">
        <div className="byp-contact-grid">
          {/* Datos de contacto */}
          <div>
            <div className="byp-head">
              <span className="byp-head__idx">01/</span>
              <h2 className="byp-h2">Datos de contacto</h2>
            </div>
            <div className="byp-contact-item">
              <span className="byp-mono">UBICACIÓN</span>
              <span className="byp-contact-val">Calle Cristóbal de Peralta Sur 395, Urb. Valle Hermoso de Monterrico, Surco, Lima – Perú</span>
            </div>
            <div className="byp-contact-item">
              <span className="byp-mono">EMAIL</span>
              <a href="mailto:proyectos@byptech.com">proyectos@byptech.com</a>
            </div>
            <div className="byp-contact-item">
              <span className="byp-mono">WHATSAPP</span>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                +51 985 362 946
              </a>
            </div>
          </div>

          {/* Placeholder del formulario (se reemplazará por iframe del CRM) */}
          <div className="byp-dashed-card">
            <p>
              FORMULARIO EN INTEGRACIÓN — ESCRÍBENOS POR WHATSAPP MIENTRAS
              TANTO
            </p>
            <a
              className="byp-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +51 985 362 946
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contect;
