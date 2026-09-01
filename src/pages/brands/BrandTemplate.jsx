import { waQuoteBrand } from "../../utils/whatsapp";
import React from "react";
import { Link } from "react-router-dom";
import { getBrandBySlug } from "../../data/brandsData";
import { getProductsByBrand } from "../../data/productsData";
import BypProductGrid from "../../components/byp/BypProductGrid";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { industryData } from "../../data/industryData";

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2.5 8.5L6.2 12.2L13.5 4.5"
      stroke="#f04e23"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const BrandTemplate = ({ slug }) => {
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return (
      <div className="byp-page">
        <section className="byp-phero">
          <div className="byp-wrap">
            <p className="byp-code">// ERROR 404</p>
            <h1 className="byp-h1">Marca no encontrada</h1>
          </div>
        </section>
        <section className="byp-section">
          <div className="byp-wrap">
            <Link className="byp-btn" to="/marcas">
              Ver todas las marcas
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const brandProducts = getProductsByBrand(slug);

  const relatedIndustries = (brand.industries || [])
    .map((s) => industryData.find((i) => i.slug === s))
    .filter(Boolean);

  let sectionCount = 0;

  return (
    <div className="byp-page">
      {/* Hero navy con blue-frame */}
      <section className="byp-bhero">
        <div className="byp-wrap byp-bhero__grid">
          <div>
            <BypBreadcrumbs variant="dark" items={[{ label: "Marcas", to: "/marcas" }, { label: brand.name }]} />
            <p className="byp-code">
              // {brand.name} · {(brand.origin || "").toUpperCase()} ·{" "}
              {(brand.productType || "").toUpperCase()}
            </p>
            <h1 className="byp-h1">{brand.name}</h1>
            <p className="byp-lead">{brand.tagline}</p>
            <Link className="byp-btn" to="/contacto">
              Contactar
            </Link>
          </div>
          <div className="byp-blueframe">
            <span className="byp-blueframe__dim byp-blueframe__dim--t">
              ← ANCHO ÚTIL →
            </span>
            <span className="byp-blueframe__dim byp-blueframe__dim--l">
              ← ALTURA →
            </span>
            <img
              src={brand.heroImage}
              alt={`${brand.productType || "Equipo"} ${brand.name}`}
              loading="eager"
            />
            <span className="byp-blueframe__tag">REF: {brand.name}</span>
          </div>
        </div>
      </section>

      {brand.ambientImage ? (
        <div className="byp-band">
          <img src={brand.ambientImage} alt={`${brand.name} en operación`} loading="lazy" />
        </div>
      ) : null}

      {/* Contenido */}
      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-article">
            {Array.isArray(brand.sections) &&
              brand.sections.map((section, sIdx) => {
                sectionCount += 1;
                return (
                  <div className="byp-article__section" key={`s-${sIdx}`}>
                    <div className="byp-article__head">
                      <span className="byp-head__idx">{idx(sectionCount)}</span>
                      <h2>{section.title}</h2>
                    </div>
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
                        <div className="byp-group" key={`g-${sIdx}-${gIdx}`}>
                          <h4>{group.title}</h4>
                          <ul>
                            {(group.items || []).map((item, iIdx) =>
                              renderItem(item, `gi-${sIdx}-${gIdx}-${iIdx}`)
                            )}
                          </ul>
                        </div>
                      ))}
                  </div>
                );
              })}

            {/* Productos (marcas multi-producto, ej. Pietroberto) */}
            {Array.isArray(brand.products) &&
              brand.products.map((product, pIdx) => {
                sectionCount += 1;
                return (
                  <div className="byp-article__section" key={`prod-${pIdx}`}>
                    <div className="byp-article__head">
                      <span className="byp-head__idx">{idx(sectionCount)}</span>
                      <h2>{product.name}</h2>
                    </div>
                    {product.tagline && (
                      <p className="byp-mono" style={{ fontSize: 12.5, letterSpacing: ".08em", color: "var(--byp-orange)" }}>
                        {product.tagline.toUpperCase()}
                      </p>
                    )}
                    {product.description && <p>{product.description}</p>}

                    {Array.isArray(product.features) && (
                      <div className="byp-group">
                        <h4>Tecnología que marca la diferencia</h4>
                        <ul>
                          {product.features.map((f, fIdx) =>
                            renderItem(f, `f-${pIdx}-${fIdx}`)
                          )}
                        </ul>
                      </div>
                    )}

                    {Array.isArray(product.applications) && (
                      <div className="byp-group">
                        <h4>Versatilidad total</h4>
                        <ul>
                          {product.applications.map((a, aIdx) =>
                            renderItem(a, `a-${pIdx}-${aIdx}`)
                          )}
                        </ul>
                      </div>
                    )}

                    {Array.isArray(product.tools) && (
                      <div className="byp-group">
                        <h4>Herramientas incluidas</h4>
                        <ul>
                          {product.tools.map((t, tIdx) =>
                            renderItem(t, `t-${pIdx}-${tIdx}`)
                          )}
                        </ul>
                      </div>
                    )}

                    {product.specs && (
                      <div className="byp-group">
                        <h4>Especificaciones destacadas</h4>
                        <table className="byp-spec-table">
                          <tbody>
                            {Object.entries(product.specs).map(([key, val]) => (
                              <tr key={key}>
                                <td style={{ textTransform: "capitalize" }}>
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </td>
                                <td>{val}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {Array.isArray(product.benefits) && (
                      <ul className="byp-checklist" style={{ marginTop: 18 }}>
                        {product.benefits.map((b, bIdx) => (
                          <li key={`pb-${pIdx}-${bIdx}`}>
                            <Check />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {product.closingStatement && (
                      <blockquote className="byp-quote" style={{ marginTop: 22 }}>
                        {product.closingStatement}
                      </blockquote>
                    )}
                  </div>
                );
              })}

            {/* Ventajas */}
            {Array.isArray(brand.advantages) && brand.advantages.length > 0 && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">{idx(sectionCount + 1)}</span>
                  <h2>Ventajas clave</h2>
                </div>
                <ul className="byp-checklist">
                  {brand.advantages.map((adv, aIdx) => (
                    <li key={`adv-${aIdx}`}>
                      <Check />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cierre */}
            {brand.closingStatement && (
              <div className="byp-article__section">
                <blockquote className="byp-quote">
                  {brand.closingStatement}
                </blockquote>
              </div>
            )}

            {/* Industrias relacionadas */}
            {relatedIndustries.length > 0 && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">IND/</span>
                  <h2>Industrias que atiende</h2>
                </div>
                <div className="byp-chips">
                  {relatedIndustries.map((ind) => (
                    <Link
                      className="byp-chip"
                      to={`/industrias/${ind.slug}`}
                      key={ind.slug}
                    >
                      {ind.title.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Catálogo: equipos más comerciales de la marca */}
      {brandProducts.length > 0 && (
        <section className="byp-section byp-section--flush-top">
          <div className="byp-wrap">
            <BypProductGrid
              products={brandProducts}
              title={`EQUIPOS \u00b7 ${brand.name}`}
            />
          </div>
        </section>
      )}

      {/* Videos oficiales (YouTube) */}
      {Array.isArray(brand.videos) && brand.videos.length > 0 && (
        <section className="byp-section byp-section--flush-top">
          <div className="byp-wrap">
            <p className="byp-code" style={{ marginBottom: 20 }}>
              // VIDEOS OFICIALES
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 18,
              }}
            >
              {brand.videos.map((v) => (
                <div key={v.id}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      border: 0,
                      background: "#000",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <p
                    className="byp-mono"
                    style={{
                      fontSize: 12,
                      marginTop: 8,
                      color: "var(--byp-dim)",
                    }}
                  >
                    {v.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">¿Interesado en {brand.name}?</h2>
            <p>
              Solicita una cotización, demostración o asesoría personalizada
              para tu operación.
            </p>
          </div>
          <div className="byp-ctaf__btns">
            <a className="byp-btn" href={waQuoteBrand(brand.name)} target="_blank" rel="noopener noreferrer">Cotizar {brand.name} por WhatsApp</a>
            <Link className="byp-btn byp-btn--line" to="/contacto">Contactar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandTemplate;
