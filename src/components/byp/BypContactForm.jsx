import React, { useEffect, useMemo, useRef, useState } from "react";
import { medirFormularioEnviado, origenDeLaVisita } from "../../utils/medicion";

const SLUG = "website";
const FORM_ORIGIN = "https://api-saas.selvagencia.com";
const FORM_URL = `${FORM_ORIGIN}/api/v1/public/forms/website/view`;

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

  // Los UTM de la visita viajan al formulario: el CRM los guarda junto con la
  // solicitud y asi se sabe que campaña trajo cada contacto. Antes el iframe
  // se cargaba siempre con la URL pelada y todo llegaba sin origen.
  const src = useMemo(() => {
    const origen = origenDeLaVisita();
    return origen ? `${FORM_URL}?${origen}` : FORM_URL;
  }, []);

  useEffect(() => {
    let lastGood = 0;

    const onMessage = (event) => {
      const data = event.data;
      // Envio del formulario: queda listo para cuando el CRM avise con
      // postMessage({type: "selva-form-submitted", slug}). Solo se acepta si
      // viene del dominio del CRM, para que nadie pueda inflar conversiones.
      if (data && data.type === "selva-form-submitted" && data.slug === SLUG
          && event.origin === FORM_ORIGIN) {
        medirFormularioEnviado(SLUG);
        return;
      }
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
        src={src}
        title="Formulario de contacto B&amp;P Tech"
        loading="lazy"
        style={height ? { height: height + "px" } : undefined}
      />
    </div>
  );
};

export default BypContactForm;
