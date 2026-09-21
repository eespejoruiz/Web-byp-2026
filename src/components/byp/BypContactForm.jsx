import React, { useEffect, useRef } from "react";

const SLUG = "website";
const EMBED_SRC =
  "https://api-saas.selvagencia.com/api/v1/public/forms/website/embed.js";

/**
 * Formulario de contacto del CRM de Selva.
 *
 * El embed busca un contenedor con id `selva-form-<slug>`, le mete un iframe
 * dentro y queda escuchando postMessage para ajustarle la altura. Como esto
 * es una SPA, el script se inyecta en cada montaje: si viviera en el HTML
 * solo se ejecutaria en la primera carga y al navegar a /contacto desde otra
 * ruta el contenedor quedaria vacio.
 */
const BypContactForm = () => {
  const holder = useRef(null);

  useEffect(() => {
    const node = holder.current;
    if (!node) return undefined;

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (node) node.innerHTML = "";
    };
  }, []);

  return (
    <div className="byp-formhost">
      <div id={`selva-form-${SLUG}`} ref={holder} />
    </div>
  );
};

export default BypContactForm;
