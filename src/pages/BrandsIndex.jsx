import React from "react";
import { Link } from "react-router-dom";
import { brandsData } from "../data/brandsData";

import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";

const REPRESENTED = [
  { name: "Vitamix", logo: vitamixLogo },
  { name: "Cainco", logo: caincoLogo },
  { name: "JBT Marel", logo: jbtmarelLogo },
];

const BrandsIndex = () => (
  <div className="byp-page">
    <section className="byp-phero">
      <div className="byp-wrap">
        <p className="byp-code">// MARCAS REPRESENTADAS · CATÁLOGO TÉCNICO</p>
        <h1 className="byp-h1">Marcas que respaldan tu operación</h1>
        <p className="byp-lead">
          Trabajamos con las marcas líderes a nivel mundial en equipamiento
          para la industria gastronómica, panificación y refrigeración
          comercial.
        </p>
      </div>
    </section>

    <section className="byp-section">
      <div className="byp-wrap">
        <div className="byp-head">
          <span className="byp-head__idx">01/</span>
          <h2 className="byp-h2">Representación oficial</h2>
        </div>
        <div className="byp-sheet">
          {brandsData.map((brand) => (
            <Link className="byp-fcard" to={brand.route} key={brand.slug}>
              <div className="byp-fcard__ph">
                <img
                  src={brand.heroImage}
                  alt={`${brand.productType || "Equipo"} ${brand.name}`}
                  loading="lazy"
                />
              </div>
              <div className="byp-fcard__meta">
                <span className="byp-fcard__ref">
                  {brand.name} · {(brand.origin || "").toUpperCase()}
                </span>
                {brand.logo ? (
                  <img
                    className="byp-fcard__logo"
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    loading="lazy"
                    style={{ marginTop: 12 }}
                  />
                ) : null}
                <h3>{brand.productType}</h3>
                <p>{brand.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="byp-section byp-section--flush-top">
      <div className="byp-wrap">
        <div className="byp-head">
          <span className="byp-head__idx">02/</span>
          <h2 className="byp-h2">En representación</h2>
        </div>
        <div className="byp-sheet">
          {REPRESENTED.map((b) => (
            <div className="byp-repcard" key={b.name}>
              <img src={b.logo} alt={`Logo ${b.name}`} loading="lazy" />
              <span className="byp-fcard__ref">EN REPRESENTACIÓN</span>
              <h3>{b.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="byp-wrap" style={{ paddingBottom: 84 }}>
      <div className="byp-ctaf">
        <div>
          <h2 className="byp-h2">¿No encuentras el equipo que necesitas?</h2>
          <p>
            Cuéntanos tu operación y te proponemos la especificación adecuada
            dentro de nuestro portafolio de marcas.
          </p>
        </div>
        <Link className="byp-btn" to="/contacto">
          Solicitar cotización
        </Link>
      </div>
    </section>
  </div>
);

export default BrandsIndex;
