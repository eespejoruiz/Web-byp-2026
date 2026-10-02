import React from "react";
import { Link } from "react-router-dom";
import { getEquipoBySlug, getProductsByEquipo, getBrandsByEquipo } from "../../data/equiposData";
import { getBrandBySlug } from "../../data/brandsData";
import { industryData } from "../../data/industryData";
import BypProductGrid from "../../components/byp/BypProductGrid";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { waQuotePage } from "../../utils/whatsapp";

const Chevron = () => (
  <svg className="byp-faq__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const idx = (n) => String(n).padStart(2, "0") + "/";

/* Un párrafo con, como mucho, un enlace interno dentro (enlace.texto tiene que
   aparecer tal cual en el párrafo). */
const conEnlace = (texto, enlace, key) => {
  const i = enlace ? texto.indexOf(enlace.texto) : -1;
  if (i < 0) return <p key={key}>{texto}</p>;
  return (
    <p key={key}>
      {texto.slice(0, i)}
      <Link className="byp-inlink" to={enlace.to}>{enlace.texto}</Link>
      {texto.slice(i + enlace.texto.length)}
    </p>
  );
};

/** Página de una familia de equipos. Todo sale de equiposData + productsData.
    Bloques opcionales: guia (secciones para elegir, como en cafeteras) y faqs
    (preguntas frecuentes, que schemaData declara además como FAQPage). */
const EquipoTemplate = ({ slug }) => {
  const familia = getEquipoBySlug(slug);

  if (!familia) {
    return (
      <div className="byp-page">
        <section className="byp-phero">
          <div className="byp-wrap">
            <p className="byp-code">// ERROR 404</p>
            <h1 className="byp-h1">Categoría no encontrada</h1>
          </div>
        </section>
        <section className="byp-section">
          <div className="byp-wrap">
            <Link className="byp-btn" to="/equipos">Ver todos los equipos</Link>
          </div>
        </section>
      </div>
    );
  }

  const productos = getProductsByEquipo(slug);
  const marcas = getBrandsByEquipo(slug).map(getBrandBySlug).filter(Boolean);
  const industrias = (familia.industries || [])
    .map((s) => industryData.find((i) => i.slug === s))
    .filter(Boolean);

  return (
    <div className="byp-page">
      <section className="byp-phero">
        <div className="byp-wrap">
          <BypBreadcrumbs
            items={[{ label: "Equipos", to: "/equipos" }, { label: familia.name }]}
          />
          <p className="byp-code">// EQUIPOS · {familia.name.toUpperCase()}</p>
          <h1 className="byp-h1">{familia.h1 || familia.name}</h1>
          <p className="byp-lead">{familia.tagline}</p>
        </div>
      </section>

      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "start" }} className="byp-eqgrid">
            <div>
              {familia.parrafos.map((t, i) => (
                <p key={i}>{t}</p>
              ))}

              {marcas.length > 0 && (
                <div style={{ marginTop: 26 }}>
                  <p className="byp-code" style={{ marginBottom: 12 }}>// MARCAS QUE REPRESENTAMOS EN ESTA CATEGORÍA</p>
                  <div className="byp-chips">
                    {marcas.map((m) => (
                      <Link className="byp-chip" to={m.route} key={m.slug}>
                        {m.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {industrias.length > 0 && (
                <div style={{ marginTop: 26 }}>
                  <p className="byp-code" style={{ marginBottom: 12 }}>// DÓNDE SE USA</p>
                  <div className="byp-chips">
                    {industrias.map((ind) => (
                      <Link className="byp-chip" to={`/industrias/${ind.slug}`} key={ind.slug}>
                        {ind.title.toUpperCase()}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div>
              {familia.heroImage ? (
                <img
                  src={familia.heroImage}
                  alt={familia.name}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {productos.length > 0 && (
        <section className="byp-section byp-section--flush-top">
          <div className="byp-wrap">
            <BypProductGrid products={productos} title={familia.name.toUpperCase()} />
          </div>
        </section>
      )}

      {(familia.guia || (Array.isArray(familia.faqs) && familia.faqs.length > 0)) && (
        <section className="byp-section byp-section--flush-top">
          <div className="byp-wrap">
            {familia.guia && (
              <div className="byp-head">
                <span className="byp-head__idx">GUÍA/</span>
                <h2 className="byp-h2">{familia.guia.titulo}</h2>
              </div>
            )}
            <div className="byp-article">
              {familia.guia && familia.guia.secciones.map((sec, sIdx) => (
                <div className="byp-article__section" key={`g-${sIdx}`}>
                  <div className="byp-article__head">
                    <span className="byp-head__idx">{idx(sIdx + 1)}</span>
                    <h3>{sec.titulo}</h3>
                  </div>
                  {(sec.parrafos || []).map((t, i) => conEnlace(t, sec.enlace, `gp-${sIdx}-${i}`))}
                  {Array.isArray(sec.lista) && (
                    <div className="byp-group">
                      <ul>
                        {sec.lista.map((it, i) => (
                          <li key={`gl-${sIdx}-${i}`}>
                            <strong>{it.lead}</strong>
                            {(/^[,.;:]/.test(it.text) ? "" : " ") + it.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {(sec.cierre || []).map((t, i) => (
                    <p key={`gc-${sIdx}-${i}`} style={{ marginTop: 18 }}>{t}</p>
                  ))}
                </div>
              ))}

              {/* Preguntas frecuentes: <details> nativo, como en las fichas de marca */}
              {Array.isArray(familia.faqs) && familia.faqs.length > 0 && (
                <div className="byp-article__section">
                  <div className="byp-article__head">
                    <span className="byp-head__idx">FAQ/</span>
                    {familia.guia ? <h3>Preguntas frecuentes</h3> : <h2>Preguntas frecuentes</h2>}
                  </div>
                  <div className="byp-faq">
                    {familia.faqs.map((f, i) => (
                      <details className="byp-faq__item" key={`faq-${i}`}>
                        <summary className="byp-faq__q">
                          <span>{f.q}</span>
                          <Chevron />
                        </summary>
                        <div className="byp-faq__a">
                          <p>{f.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">¿Buscas {familia.name.toLowerCase()}?</h2>
            <p>Cuéntanos el volumen y el tipo de producto y te decimos qué equipo encaja.</p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link className="byp-btn" to="/contacto">Contactar</Link>
            <a
              className="byp-btn byp-btn--alt"
              href={waQuotePage(familia.name)}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipoTemplate;
