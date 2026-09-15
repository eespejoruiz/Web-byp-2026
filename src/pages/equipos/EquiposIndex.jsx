import React from "react";
import { Link } from "react-router-dom";
import { equiposData, getProductsByEquipo, getBrandsByEquipo } from "../../data/equiposData";
import { getBrandBySlug } from "../../data/brandsData";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { waQuotePage } from "../../utils/whatsapp";

/**
 * Indice del catalogo por tipo de maquina. Es el tercer eje del sitio, junto a
 * /industrias/ (quien eres) y /marcas/ (que marca compras): que maquina necesitas.
 * «amasadora de pan» son 720 busquedas al mes en Peru; «equipos para panaderia», 10.
 */
const EquiposIndex = () => (
  <div className="byp-page">
    <section className="byp-phero">
      <div className="byp-wrap">
        <BypBreadcrumbs items={[{ label: "Equipos" }]} />
        <p className="byp-code">// EQUIPOS</p>
        <h1 className="byp-h1">Equipos por tipo de máquina</h1>
        <p className="byp-lead">
          Diez familias de equipo, con las marcas que representamos en cada una y
          respaldo técnico en el Perú.
        </p>
      </div>
    </section>

    <section className="byp-section">
      <div className="byp-wrap">
        <div className="byp-sheet">
          {equiposData.map((f) => {
            const n = getProductsByEquipo(f.slug).length;
            const marcas = getBrandsByEquipo(f.slug)
              .map(getBrandBySlug)
              .filter(Boolean)
              .map((m) => m.name);
            return (
              <Link className="byp-fcard" to={f.route} key={f.slug}>
                {f.heroImage ? (
                  <div className="byp-fcard__ph">
                    <img src={f.heroImage} alt={f.name} loading="lazy" />
                  </div>
                ) : null}
                <div className="byp-fcard__meta">
                  <span className="byp-fcard__ref">
                    {n} {n === 1 ? "EQUIPO" : "EQUIPOS"} · {marcas.join(" · ").toUpperCase()}
                  </span>
                  <h3>{f.name}</h3>
                  <p>{f.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <section className="byp-wrap" style={{ paddingBottom: 84 }}>
      <div className="byp-ctaf">
        <div>
          <h2 className="byp-h2">¿No encuentras la máquina que buscas?</h2>
          <p>
            Representamos catorce marcas y el catálogo de cada una es más amplio que
            lo que aquí se muestra. Dinos qué necesitas.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link className="byp-btn" to="/contacto">Contactar</Link>
          <a className="byp-btn byp-btn--alt" href={waQuotePage("Equipos")} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default EquiposIndex;
