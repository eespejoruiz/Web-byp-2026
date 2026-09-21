import React, { useEffect, useRef, useState } from "react";

const SLUG = "website";
const FORM_URL =
  "https://api-saas.selvagencia.com/api/v1/public/forms/website/view";

/**
 * Formulario de contacto del CRM de Selva.
 *
 * El embed oficial (`/forms/<slug>/embed.js`) hace dos cosas: crea un iframe
 * dentro de un contenedor y le ajusta la altura escuchando postMessage. Aqui
 * se monta el iframe directamente porque en una SPA su loader da problemas:
 * registra un listener de `message` por ejecucion y no lo suelta nunca, asi
 * que al volver a /contacto los listeners viejos siguen vivos y el ultimo
 * mensaje que llega —a veces con altura 0— deja el formulario colapsado.
 *
 * Montandolo aca el listener vive y muere con el componente, y las alturas
 * no positivas se descartan en vez de aplicarse.
 */
const BypContactForm = () => {
  const frame = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    let lastGood = 0;

    const onMessage = (event) => {
      const data = event.data;
      if (!data || data.type !== "selva-form-height" || data.slug !== SLUG) {
        return;
      }
      const next = Number(data.height) || 0;
      if (next > 0) {
        lastGood = next;
        setHeight(next);
      } else if (lastGood) {
        setHeight(lastGood);
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="byp-formhost">
      <iframe
        ref={frame}
        src={FORM_URL}
        title="Formulario de contacto B&amp;P Tech"
        loading="lazy"
        style={height ? { height: height + "px" } : undefined}
      />
    </div>
  );
};

export default BypContactForm;
