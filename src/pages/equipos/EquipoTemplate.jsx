import React from "react";
import { Link } from "react-router-dom";
import { getEquipoBySlug, getProductsByEquipo, getBrandsByEquipo } from "../../data/equiposData";
import { getBrandBySlug } from "../../data/brandsData";
import { industryData } from "../../data/industryData";
import BypProductGrid from "../../components/byp/BypProductGrid";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { waQuotePage } from "../../utils/whatsapp";

/** Página de una familia de equipos. Todo sale de equiposData + productsData. */
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
          <h1 className="byp-h1">{familia.name}</h1>
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
