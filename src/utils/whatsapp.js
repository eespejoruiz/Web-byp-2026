/**
 * Enlaces de cotización por WhatsApp con contexto (producto, marca,
 * industria o página) — el mensaje llega prellenado para que el equipo
 * comercial sepa desde dónde escribe el cliente.
 */
export const WHATSAPP_NUMBER = "51985362946";

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function waQuoteProduct(name, brandName) {
  return waLink(
    `Hola B&P TECH, quiero cotizar el equipo ${name}${brandName ? ` de ${brandName}` : ""}.`
  );
}

export function waQuoteBrand(brandName) {
  return waLink(`Hola B&P TECH, quiero cotizar equipos ${brandName}.`);
}

export function waQuoteIndustry(industryTitle) {
  return waLink(`Hola B&P TECH, necesito equipamiento para ${industryTitle}.`);
}

export function waQuotePage(pageLabel) {
  return waLink(`Hola B&P TECH, escribo desde la página ${pageLabel} y quiero una cotización.`);
}
