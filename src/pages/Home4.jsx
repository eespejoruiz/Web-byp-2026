import React from "react";
import { Link } from "react-router-dom";
import { industryData } from "../data/industryData";

import heroImg from "../assets/images/brands/hero-produccion.webp";

import rondoLogo from "../assets/images/brands/rondo-logo.svg";
import diosnaLogo from "../assets/images/brands/diosna-logo.svg";
import winterhalterLogo from "../assets/images/brands/winterhalter-logo.png";
import trueLogo from "../assets/images/brands/true-logo.png";
import pietrobertoLogo from "../assets/images/brands/pietroberto-logo.png";
import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";

import rondoAutomat from "../assets/images/brands/rondo-automat-2000.webp";
import diosnaWendel from "../assets/images/brands/diosna-wendel.webp";
import trueGdm49 from "../assets/images/brands/true-gdm-49.webp";
import winterhalterU50 from "../assets/images/brands/winterhalter-u50.webp";
import pietrobertoMix from "../assets/images/brands/pietroberto-mix.webp";
import vitamixQuietOne from "../assets/images/brands/vitamix-quiet-one.webp";

const TICKER_LOGOS = [
  { name: "RONDO", logo: rondoLogo },
  { name: "DIOSNA", logo: diosnaLogo },
  { name: "Winterhalter", logo: winterhalterLogo },
  { name: "True", logo: trueLogo },
  { name: "Pietroberto", logo: pietrobertoLogo },
  { name: "Vitamix", logo: vitamixLogo },
  { name: "Cainco", logo: caincoLogo },
  { name: "JBT Marel", logo: jbtmarelLogo },
];

const SPECS = [
  { n: "08", l: "MARCAS REPRESENTADAS" },
  { n: "200+", l: "PROYECTOS INSTALADOS" },
  { n: "48 h", l: "RESPUESTA TÉCNICA" },
  { n: "100%", l: "REPUESTOS ORIGINALES" },
];

const CATALOG = [
  {
    ref: "RONDO · SUIZA",
    title: "Laminadora AUTOMAT 2000",
    text: "Laminado mecánico de precisión.",
    img: rondoAutomat,
    to: "/marcas/rondo",
    rows: [
      ["Banda", "640 mm"],
      ["Operación", "Multi-turno"],
    ],
  },
  {
    ref: "DIOSNA · ALEMANIA",
    title: "Amasadora WENDEL",
    text: "Amasado intensivo con desarrollo óptimo del gluten.",
    img: diosnaWendel,
    to: "/marcas/diosna",
    rows: [
      ["Sistema", "Wendel"],
      ["Herramientas", "Contrarrotativas"],
    ],
  },
  {
    ref: "TRUE · EE.UU.",
    title: "Refrigerador GDM-49",
    text: "Exhibición con puertas de vidrio.",
    img: trueGdm49,
    to: "/marcas/true",
    rows: [
      ["Capacidad", "1.388 L"],
      ["Refrigerante", "R290 HC"],
    ],
  },
  {
    ref: "WINTERHALTER · ALEMANIA",
    title: "Lavavajillas U50",
    text: "Bajo mostrador, ciclo inteligente.",
    img: winterhalterU50,
    to: "/marcas/winterhalter",
    rows: [
      ["Consumo", "2,4 L/ciclo"],
      ["Ciclos", "hasta 77/h"],
    ],
  },
  {
    ref: "PIETROBERTO · ITALIA",
    title: "Batidora Planetaria Serie MIX",
    text: "Batido planetario para producción profesional.",
    img: pietrobertoMix,
    to: "/marcas/pietroberto",
    rows: [
      ["Capacidades", "20–60 L"],
      ["Potencia", "hasta 2 kW"],
    ],
  },
  {
    ref: "VITAMIX · EE.UU.",
    title: "Licuadora The Quiet One",
    text: "Alto rendimiento con baja sonoridad.",
    img: vitamixQuietOne,
    to: "/marcas",
    rows: [
      ["Aplicación", "Barras y bebidas"],
      ["Operación", "Alto volumen"],
    ],
  },
];

const Home4 = () => {
  const industries = industryData.slice(0, 6);

  return (
    <div className="byp-page">
      {/* HERO full-screen */}
      <section className="byp-hero">
        <img
          className="byp-hero__img"
          src={heroImg}
          alt="Línea de producción de la industria alimentaria"
          loading="eager"
        />
        <div className="byp-wrap byp-hero__inner">
          <div>
            <p className="byp-code">
              // PROYECTOS LLAVE EN MANO · SERVICIO CERTIFICADO DE FÁBRICA
            </p>
            <h1 className="byp-h1">
              Especificamos, instalamos y mantenemos tu línea de producción.
            </h1>
            <p className="byp-lead">
              Ocho marcas líderes mundiales en panificación, refrigeración y
              lavado profesional. Un solo responsable técnico: B&amp;P TECH.
            </p>
            <Link className="byp-btn" to="/marcas">
              Ver catálogo técnico
            </Link>
            <Link className="byp-btn byp-btn--alt" to="/industrias">
              Soluciones por industria
            </Link>
          </div>
        </div>
        <span className="byp-scroll-hint">EXPLORAR</span>
      </section>

      {/* Ticker de logos */}
      <div className="byp-ticker" aria-label="Marcas representadas">
        <div className="byp-ticker__row">
          {TICKER_LOGOS.map((b) => (
            <img key={b.name} src={b.logo} alt={b.name} />
          ))}
          {TICKER_LOGOS.map((b) => (
            <img key={`${b.name}-dup`} src={b.logo} alt="" aria-hidden="true" />
          ))}
        </div>
      </div>

      {/* Barra specs */}
      <div className="byp-specs">
        <div className="byp-wrap">
          {SPECS.map((s) => (
            <div className="byp-specs__cell" key={s.l}>
              <div className="byp-specs__n">{s.n}</div>
              <div className="byp-specs__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 01/ Catálogo por especialidad */}
      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">01/</span>
            <h2 className="byp-h2">Catálogo por especialidad</h2>
          </div>
          <div className="byp-sheet">
            {CATALOG.map((c) => (
              <Link className="byp-fcard" to={c.to} key={c.title}>
                <div className="byp-fcard__ph">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="byp-fcard__meta">
                  <span className="byp-fcard__ref">{c.ref}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <table>
                    <tbody>
                      {c.rows.map(([k, v]) => (
                        <tr key={k}>
                          <td>{k}</td>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 02/ Soluciones por industria */}
      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">02/</span>
            <h2 className="byp-h2">Soluciones por industria</h2>
          </div>
          <div className="byp-tbl">
            {industries.map((ind, idx) => (
              <Link
                className="byp-trow"
                to={`/industrias/${ind.slug}`}
                key={ind.slug}
              >
                <span className="byp-trow__ref">
                  IND-{String(idx + 1).padStart(3, "0")}
                </span>
                <h3>{ind.title}</h3>
                <span className="byp-trow__eq">
                  {(ind.keyStations || []).join(" · ")}
                </span>
                <span className="byp-trow__go">ABRIR →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">
              Envíanos tu plano o tu carta. Volvemos con la especificación
              completa.
            </h2>
            <p>
              Dimensionamiento, fichas técnicas, cronograma de instalación y
              plan de mantenimiento — en una sola propuesta.
            </p>
          </div>
          <Link className="byp-btn" to="/contacto">
            Iniciar proyecto
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home4;
