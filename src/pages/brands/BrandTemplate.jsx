import React from "react";
import { Link } from "react-router-dom";
import BrandHero from "../../element/BrandHero";
import { getBrandBySlug } from "../../data/brandsData";
import { industryData } from "../../data/industryData";

const BrandTemplate = ({ slug }) => {
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return (
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Marca no encontrada</h2>
              <p>La ruta solicitada no existe o aún no está configurada.</p>
              <Link to="/marcas" className="btn btn-primary">
                Ver todas las marcas
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const relatedIndustries = (brand.industries || [])
    .map((slug) => industryData.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <div className="page-content bg-white">
      <BrandHero brand={brand} />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {/* Main content */}
            <div className="col-lg-8">
              {/* Tipo de producto */}
              <div className="m-b30">
                <span
                  className="badge"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    fontSize: "14px",
                    padding: "6px 16px",
                    borderRadius: "4px",
                  }}
                >
                  {brand.productType}
                </span>
                {brand.origin && (
                  <span
                    className="badge m-l10"
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "#333",
                      fontSize: "14px",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      marginLeft: "8px",
                    }}
                  >
                    Origen: {brand.origin}
                  </span>
                )}
              </div>

              {/* Sections */}
              {Array.isArray(brand.sections) &&
                brand.sections.map((section, sIdx) => (
                  <div key={`section-${sIdx}`} className="m-b40">
                    <h4 className="m-b15">{section.title}</h4>

                    {Array.isArray(section.paragraphs) &&
                      section.paragraphs.map((p, pIdx) => (
                        <p key={`p-${sIdx}-${pIdx}`}>{p}</p>
                      ))}

                    {Array.isArray(section.bullets) &&
                      section.bullets.length > 0 && (
                        <ul className="list-check m-b0">
                          {section.bullets.map((b, bIdx) => (
                            <li key={`b-${sIdx}-${bIdx}`}>
                              {typeof b === "string" ? (
                                b
                              ) : (
                                <>
                                  {b.title && <strong>{b.title}:</strong>} {b.text}
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                    {Array.isArray(section.groups) &&
                      section.groups.map((group, gIdx) => (
                        <div key={`g-${sIdx}-${gIdx}`} className="m-b20 m-t20">
                          <h5 className="m-b10">{group.title}</h5>
                          {Array.isArray(group.items) && (
                            <ul className="list-check m-b0">
                              {group.items.map((item, iIdx) => (
                                <li key={`gi-${sIdx}-${gIdx}-${iIdx}`}>
                                  {item.title && <strong>{item.title}:</strong>}{" "}
                                  {item.text}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                  </div>
                ))}

              {/* Products (for multi-product brands like Pietroberto) */}
              {Array.isArray(brand.products) &&
                brand.products.map((product, pIdx) => (
                  <div
                    key={`product-${pIdx}`}
                    className="m-b40 p-a30"
                    style={{
                      backgroundColor: "#f9f9f9",
                      borderLeft: "4px solid var(--primary)",
                      borderRadius: "4px",
                    }}
                  >
                    <h4 className="m-b5">{product.name}</h4>
                    <p
                      className="m-b15"
                      style={{ fontStyle: "italic", color: "var(--primary)" }}
                    >
                      {product.tagline}
                    </p>
                    <p>{product.description}</p>

                    {/* Features */}
                    {Array.isArray(product.features) && (
                      <div className="m-b20">
                        <h5 className="m-b10">Tecnología que marca la diferencia</h5>
                        <ul className="list-check m-b0">
                          {product.features.map((f, fIdx) => (
                            <li key={`feat-${pIdx}-${fIdx}`}>
                              <strong>{f.title}:</strong> {f.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Applications */}
                    {Array.isArray(product.applications) && (
                      <div className="m-b20">
                        <h5 className="m-b10">Versatilidad total</h5>
                        <ul className="list-check m-b0">
                          {product.applications.map((a, aIdx) => (
                            <li key={`app-${pIdx}-${aIdx}`}>{a}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tools */}
                    {Array.isArray(product.tools) && (
                      <div className="m-b20">
                        <h5 className="m-b10">Herramientas incluidas</h5>
                        <ul className="list-check m-b0">
                          {product.tools.map((t, tIdx) => (
                            <li key={`tool-${pIdx}-${tIdx}`}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Specs */}
                    {product.specs && (
                      <div className="m-b20">
                        <h5 className="m-b10">Especificaciones destacadas</h5>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <tbody>
                              {Object.entries(product.specs).map(([key, val]) => (
                                <tr key={key}>
                                  <td style={{ fontWeight: "bold", textTransform: "capitalize", width: "40%" }}>
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                  </td>
                                  <td>{val}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Benefits */}
                    {Array.isArray(product.benefits) && (
                      <div className="m-b20">
                        <h5 className="m-b10">Beneficios clave para tu negocio</h5>
                        <ul className="list-check m-b0">
                          {product.benefits.map((b, bIdx) => (
                            <li key={`ben-${pIdx}-${bIdx}`}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Closing */}
                    {product.closingStatement && (
                      <blockquote
                        className="m-t20 m-b0 p-a20"
                        style={{
                          borderLeft: "4px solid var(--primary)",
                          backgroundColor: "#fff",
                          fontStyle: "italic",
                          fontSize: "16px",
                        }}
                      >
                        "{product.closingStatement}"
                      </blockquote>
                    )}
                  </div>
                ))}

              {/* Advantages */}
              {Array.isArray(brand.advantages) && brand.advantages.length > 0 && (
                <div className="m-b40">
                  <h4 className="m-b15">Ventajas clave</h4>
                  <ul className="list-check primary m-b0">
                    {brand.advantages.map((adv, idx) => (
                      <li key={`adv-${idx}`}>{adv}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing statement */}
              {brand.closingStatement && (
                <div
                  className="m-b40 p-a30"
                  style={{
                    backgroundColor: "var(--primary)",
                    color: "#fff",
                    borderRadius: "4px",
                  }}
                >
                  <p className="m-b0" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                    {brand.closingStatement}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* CTA */}
              <div className="widget bg-white p-a30 shadow-sm m-b30">
                <h4 className="widget-title">
                  ¿Interesado en {brand.name}?
                </h4>
                <p className="m-b20">
                  Solicita una cotización, demostración o asesoría personalizada para tu operación.
                </p>
                <Link to="/contacto" className="btn btn-primary w-100">
                  Solicitar información
                </Link>
              </div>

              {/* Related industries */}
              {relatedIndustries.length > 0 && (
                <div className="widget bg-white p-a30 shadow-sm m-b30">
                  <h4 className="widget-title">Industrias que atiende</h4>
                  <ul className="list-unstyled m-b0">
                    {relatedIndustries.map((ind) => (
                      <li key={ind.slug} className="m-b10">
                        <Link
                          to={ind.route}
                          className="text-dark"
                          style={{ textDecoration: "none" }}
                        >
                          <i className="fa fa-angle-right text-primary m-r10"></i>
                          {ind.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Back to brands */}
              <div className="widget bg-white p-a30 shadow-sm">
                <Link to="/marcas" className="btn btn-outline-primary w-100">
                  Ver todas las marcas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandTemplate;
