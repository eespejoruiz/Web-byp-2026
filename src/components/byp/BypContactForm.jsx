import React, { useEffect, useRef } from "react";

const SLUG = "website";
const EMBED_SRC =
  "https://api-saas.selvagencia.com/api/v1/public/forms/website/embed.js";

/**
 * Formulario de contacto del CRM de Selva.
 *
 * El embed busca un contenedor con id `selva-form-<slug>`, le mete un iframe
 * dentro y queda escuchando postMessage para ajustarle la altura. Como esto
 * es una SPA hay que inyectar el script en cada montaje: si viviera en el
 * HTML solo se ejecutaria en la primera carga y al navegar a /contacto desde
 * otra ruta el contenedor quedaria vacio.
 *
 * Dos cuidados que el embed no tiene:
 *
 *  1. Cada ejecucion registra su propio listener de `message` y no lo suelta
 *     nunca. Los iframes de montajes anteriores siguen publicando su altura
 *     aunque ya no esten a la vista, asi que aqui se los blanquea y se los
 *     saca antes de montar uno nuevo.
 *  2. El embed aplica cualquier altura que llegue, incluido 0, y el
 *     formulario se colapsa. El listener de abajo se registra DESPUES del
 *     suyo (en script.onload, no antes) para poder corregirlo: ignora los
 *     valores no positivos y reaplica la ultima altura buena.
 */
const BypContactForm = () => {
  const holder = useRef(null);

  useEffect(() => {
    const node = holder.current;
    if (!node) return undefined;

    document
      .querySelectorAll('script[src="' + EMBED_SRC + '"]')
      .forEach((s) => s.remove());
    document
      .querySelectorAll('iframe[src*="/forms/' + SLUG + '/view"]')
      .forEach((f) => {
        f.src = "about:blank";
        f.remove();
      });

    let lastGood = 0;
    let onHeight = null;

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;

    script.onload = () => {
      onHeight = (e) => {
        const data = e.data;
        if (!data || data.type !== "selva-form-height" || data.slug !== SLUG) {
          return;
        }
        const iframe = node.querySelector("iframe");
        if (!iframe) return;
        const height = Number(data.height) || 0;
        if (height > 0) {
          lastGood = height;
          iframe.style.height = height + "px";
        } else if (lastGood) {
          iframe.style.height = lastGood + "px";
        }
      };
      window.addEventListener("message", onHeight);
    };

    document.body.appendChild(script);

    return () => {
      if (onHeight) window.removeEventListener("message", onHeight);
      script.remove();
      const iframe = node.querySelector("iframe");
      if (iframe) iframe.src = "about:blank";
      node.innerHTML = "";
    };
  }, []);

  return (
    <div className="byp-formhost">
      <div id={"selva-form-" + SLUG} ref={holder} />
    </div>
  );
};

export default BypContactForm;
