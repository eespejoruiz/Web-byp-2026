import React from "react";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { Link } from "react-router-dom";
import { getIndustryBySlug, industryData } from "../../data/industryData";
import { getBrandsByIndustry } from "../../data/brandsData";
import { getProductsByIndustry } from "../../data/productsData";
import BypProductGrid from "../../components/byp/BypProductGrid";

const idx = (n) => String(n).padStart(2, "0") + "/";

const renderItem = (item, key) => {
  if (item == null) return null;
  if (typeof item === "string") return <li key={key}>{item}</li>;
  return (
    <li key={key}>
      {item.title ? <strong>{item.title}:</strong> : null} {item.text}
    </li>
  );
};

const IndustryTemplate = ({ slug }) => {
  const industry = getIndustryBySlug(slug);
  const relatedBrands = getBrandsByIndustry(slug);
  const industryProducts = getProductsByIndustry(slug);
  const indNumber = industryData.findIndex((i) => i.slug === slug) + 1;
  const ref = `IND-${String(indNumber > 0 ? indNumber : 0).padStart(3, "0")}`;

  if (!industry) {
    return (
      <div className="byp-page">
        <section className="byp-phero">
          <div className="byp-wrap">
            <p className="byp-code">// ERROR 404</p>
            <h1 className="byp-h1">Industria no encontrada</h1>
          </div>
        </section>
        <section className="byp-section">
          <div className="byp-wrap">
            <Link className="byp-btn" to="/industrias">
              Ver industrias
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="byp-page">
      {/* Hero compacto navy */}
      <section className="byp-phero">
        <div className="byp-wrap">
          <p className="byp-code">// {ref} · SOLUCIONES POR INDUSTRIA</p>
          <BypBreadcrumbs variant="dark" items={[{ label: "Industrias", to: "/industrias" }, { label: industry.title }]} />
          <h1 className="byp-h1">{industry.title}</h1>
          <p className="byp-lead">{industry.description}</p>
          {Array.isArray(industry.keyStations) &&
            industry.keyStations.length > 0 && (
              <div className="byp-chips">
                {industry.keyStations.map((station) => (
                  <span className="byp-chip" key={station}>
                    {station.toUpperCase()}
                  </span>
                ))}
              </div>
            )}
        </div>
      </section>

      {/* Contenido */}
      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-article">
            {Array.isArray(industry.sections) &&
              industry.sections.map((section, sIdx) => (
                <div
                  className="byp-article__section"
                  key={section.id || section.title || sIdx}
                >
                  <div className="byp-article__head">
                    <span className="byp-head__idx">{idx(sIdx + 1)}</span>
                    <h2>{section.title}</h2>
                  </div>
                  {section.subtitle ? <p>{section.subtitle}</p> : null}
                  {Array.isArray(section.paragraphs) &&
                    section.paragraphs.map((p, pIdx) => (
                      <p key={`p-${sIdx}-${pIdx}`}>{p}</p>
                    ))}
                  {Array.isArray(section.bullets) &&
                    section.bullets.length > 0 && (
                      <div className="byp-group">
                        <ul>
                          {section.bullets.map((b, bIdx) =>
                            renderItem(b, `b-${sIdx}-${bIdx}`)
                          )}
                        </ul>
                      </div>
                    )}
                  {Array.isArray(section.groups) &&
                    section.groups.map((group, gIdx) => (
                      <div className="byp-group" key={group.title || gIdx}>
                        <h4>{group.title}</h4>
                        <ul>
                          {(group.items || []).map((item, iIdx) =>
                            renderItem(item, `gi-${sIdx}-${gIdx}-${iIdx}`)
                          )}
                        </ul>
                      </div>
                    ))}
                </div>
              ))}

            {/* Marcas para esta industria */}
            {relatedBrands.length > 0 && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">EQ/</span>
                  <h2>Marcas para esta industria</h2>
                </div>
                <div className="byp-chips">
                  {relatedBrands.map((brand) => (
                    <Link className="byp-chip" to={brand.route} key={brand.slug}>
                      {brand.name} · {(brand.productType || "").toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equipos para esta industria */}
      {industryProducts.length > 0 && (
        <section className="byp-section byp-section--flush-top">
          <div className="byp-wrap">
            <BypProductGrid
              products={industryProducts}
              title="EQUIPOS PARA ESTA INDUSTRIA"
            />
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">¿Hablamos de tu operación?</h2>
            <p>
              Cuéntame tu industria, volumen y restricciones (espacio,
              energía, flujo).
            </p>
          </div>
          <Link className="byp-btn" to="/contacto">
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryTemplate;
