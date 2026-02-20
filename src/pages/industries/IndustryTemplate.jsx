import React from "react";
import { Link } from "react-router-dom";
import CarlistingBanner from "../../element/CarlistingBanner";
import { getIndustryBySlug } from "../../data/industryData";
import { IMAGE } from "../../constent/theme";

const renderBullet = (bullet) => {
  if (typeof bullet === "string") {
    return <li>{bullet}</li>;
  }

  if (bullet && typeof bullet === "object") {
    return (
      <li>
        {bullet.title ? <strong>{bullet.title}:</strong> : null} {bullet.text}
      </li>
    );
  }

  return null;
};

const renderGroupItem = (item) => {
  if (!item) return null;
  if (typeof item === "string") return <li>{item}</li>;

  return (
    <li>
      {item.title ? <strong>{item.title}:</strong> : null} {item.text}
    </li>
  );
};

const IndustryTemplate = ({ slug }) => {
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return (
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Industria no encontrada</h2>
              <p>La ruta solicitada no existe o aún no está configurada.</p>
              <Link to="/" className="btn btn-primary">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content bg-white">
      <CarlistingBanner img={industry.heroImage} title={industry.title} />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-head">
                <h6 className="text-primary sub-title">SOLUCIONES POR INDUSTRIA</h6>
                <h2 className="title">{industry.title}</h2>
                <p className="m-b0">{industry.description}</p>
              </div>

              <div className="m-t40">
                <h4 className="m-b20">Estaciones clave</h4>
                <div className="row">
                  {((industry.keyStations || []).slice(0, 4)).map((station, idx) => {
                    const defaultImages = [IMAGE.galleryPic1, IMAGE.galleryPic2, IMAGE.galleryPic3, IMAGE.galleryPic4];
                    const imgSrc =
                      Array.isArray(industry.stationImages) && industry.stationImages[idx]
                        ? industry.stationImages[idx]
                        : defaultImages[idx % defaultImages.length];
                    return (
                      <div className="col-md-6 m-b20" key={station}>
                        <div className="icon-bx-wraper style-1 shadow-none rounded-0">
                          <div className="dlab-media m-b15">
                            <img src={imgSrc} alt={station} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
                          </div>
                          <div className="icon-content">
                            <h5 className="title m-b0">{station}</h5>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {Array.isArray(industry.sections) && industry.sections.length > 0 ? (
                <div className="m-t40">
                  {industry.sections.map((section) => (
                    <div key={section.id || section.title} className="m-b40">
                      <h4 className="m-b15">{section.title}</h4>
                      {section.subtitle ? (
                        <p className="m-b15">{section.subtitle}</p>
                      ) : null}

                      {Array.isArray(section.paragraphs)
                        ? section.paragraphs.map((p, idx) => (
                            <p
                              key={`${section.title}-p-${idx}`}
                              className={
                                idx === section.paragraphs.length - 1 &&
                                !section.bullets &&
                                !section.groups
                                  ? "m-b0"
                                  : undefined
                              }
                            >
                              {p}
                            </p>
                          ))
                        : null}

                      {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                        <ul className="list-check m-b0">
                          {section.bullets
                            .map((b, idx) => (
                              <React.Fragment
                                key={`${section.title}-b-${idx}`}
                              >
                                {renderBullet(b)}
                              </React.Fragment>
                            ))
                            .filter(Boolean)}
                        </ul>
                      ) : null}

                      {Array.isArray(section.groups) && section.groups.length > 0 ? (
                        <div className="m-t20">
                          {section.groups.map((group) => (
                            <div key={group.title} className="m-b20">
                              <h5 className="m-b10">{group.title}</h5>
                              {Array.isArray(group.items) &&
                              group.items.length > 0 ? (
                                <ul className="list-check m-b0">
                                  {group.items
                                    .map((item, idx) => (
                                      <React.Fragment
                                        key={`${group.title}-i-${idx}`}
                                      >
                                        {renderGroupItem(item)}
                                      </React.Fragment>
                                    ))
                                    .filter(Boolean)}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="col-lg-4">
              <div className="widget bg-white p-a30 shadow-sm">
                <h4 className="widget-title">¿Hablamos de tu operación?</h4>
                <p className="m-b20">
                  Cuéntame tu industria, volumen y restricciones (espacio, energía, flujo).
                </p>
                <Link to="/contacto" className="btn btn-primary w-100">
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryTemplate;
