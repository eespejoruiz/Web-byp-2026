import React from "react";
import BypBreadcrumbs from "../components/byp/BypBreadcrumbs";
import { Link } from "react-router-dom";
import { brandsData } from "../data/brandsData";
import marcasHero from "../assets/images/gen/marcas-hero.webp";

import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";
import americanpanLogo from "../assets/images/brands/americanpan-logo.png";
import pomatiLogo from "../assets/images/brands/pomati-logo.png";

const REPRESENTED = [
  { name: "Vitamix", logo: vitamixLogo },
  { name: "Cainco", logo: caincoLogo },
  { name: "JBT Marel", logo: jbtmarelLogo },
  { name: "American Pan", logo: americanpanLogo },
  { name: "Pomati", logo: pomatiLogo },
];

const BrandsIndex = () => (
  <div className="byp-page">
    <section className="byp-phero byp-phero--img" style={{ backgroundImage: `linear-gradient(rgba(16,41,74,.88), rgba(16,41,74,.93)), url(${marcasHero})` }}>
      <div className="byp-wrap">
        <p className="byp-code">// EQUIPAMIENTO PROFESIONAL</p>
        <BypBreadcrumbs variant="dark" items={[{ label: "Marcas" }]} />
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
        <p className="byp-code" style={{ marginBottom: 24 }}>
          // VITAMIX · CAINCO · JBT MAREL · AMERICAN PAN · POMATI
        </p>
        <div className="byp-sheet">
          {REPRESENTED.map((b) => (
            <div className="byp-repcard" key={b.name}>
              <img src={b.logo} alt={`Logo ${b.name}`} loading="lazy" />
              <h3>{b.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="byp-wrap" style={{ paddingBottom: 84 }}>
      <div className="byp-ctaf" style={{ justifyContent: "center" }}>
        <Link className="byp-btn" to="/contacto">
          Contactar
        </Link>
      </div>
    </section>
  </div>
);

export default BrandsIndex;
