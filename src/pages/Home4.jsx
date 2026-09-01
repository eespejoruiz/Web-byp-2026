import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import { brandsData } from "../data/brandsData";
import { industryData } from "../data/industryData";

import heroImg from "../assets/images/brands/hero-produccion.webp";
import heroAlt from "../assets/images/gen/home-hero-alt.webp";
import svcImg from "../assets/images/gen/home-servicios.webp";
import ctaBg from "../assets/images/gen/home-cta.webp";
import bannerImg from "../assets/images/gen/home-banner.webp";
import testiBg from "../assets/images/gen/testimonios-bg.webp";
import casoFrio from "../assets/images/gen/caso-frio.webp";
import casoBanquetes from "../assets/images/gen/caso-banquetes.webp";
import casoMasa from "../assets/images/gen/caso-masa.webp";

import rondoLogo from "../assets/images/brands/rondo-logo.svg";
import diosnaLogo from "../assets/images/brands/diosna-logo.svg";
import winterhalterLogo from "../assets/images/brands/winterhalter-logo.png";
import trueLogo from "../assets/images/brands/true-logo.png";
import pietrobertoLogo from "../assets/images/brands/pietroberto-logo.png";
import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";
import americanpanLogo from "../assets/images/brands/americanpan-logo.png";
import pomatiLogo from "../assets/images/brands/pomati-logo.png";

const TICKER_LOGOS = [
  { name: "RONDO", logo: rondoLogo },
  { name: "DIOSNA", logo: diosnaLogo },
  { name: "Winterhalter", logo: winterhalterLogo },
  { name: "True", logo: trueLogo },
  { name: "Pietroberto", logo: pietrobertoLogo },
  { name: "Vitamix", logo: vitamixLogo },
  { name: "Cainco", logo: caincoLogo },
  { name: "JBT Marel", logo: jbtmarelLogo },
  { name: "American Pan", logo: americanpanLogo },
  { name: "Pomati", logo: pomatiLogo },
];

const cards = [
  {
    img: casoFrio,
    title: "La precisión del frío en la Alta Cocina",
    text: "Cómo Virgilio Martínez y su equipo optimizan sus ecosistemas con True Refrigeration.",
    to: "/casos-de-exito/alta-cocina",
  },
  {
    img: casoBanquetes,
    title: "Eficiencia en cada servicio de Banquete",
    text: "La implementación de sistemas Winterhalter para manejar el alto volumen sin perder higiene.",
    to: "/casos-de-exito/hotel",
  },
  {
    img: casoMasa,
    title: "La ciencia de la masa perfecta",
    text: "Automatización y estandarización de procesos con amasadoras Diosna y laminadoras Rondo.",
    to: "/casos-de-exito/panaderia",
  },
];

const ourService = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M2 3h20v14H6l-4 4V3zm4 4h12v2H6V7zm0 4h8v2H6v-2z" />
      </svg>
    ),
    text: "Asesoría Especializada",
    desc: "Diseño de proyectos y selección de equipos basados en el flujo operativo de tu cocina.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2l9 4v6c0 5-3.5 9.74-9 10-5.5-.26-9-5-9-10V6l9-4zm0 4.18L6 7.73V12c0 3.87 2.69 7.16 6 7.46 3.31-.3 6-3.59 6-7.46V7.73l-6-1.55z" />
      </svg>
    ),
    text: "Garantía Sólida",
    desc: "Respaldo directo de fábrica con hasta 5 años de garantía en marcas seleccionadas.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M3 13h2l3 7h11l3-9H8l-2-5H1v2h4l3.6 8H18l-1 3H9l-3-6H3v-2z" />
      </svg>
    ),
    text: "Entrega en Puerta",
    desc: "Logística segura e instalación profesional con puesta en marcha en tu local.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M20 8h-3V5h-2v3H9V5H7v3H4v2h3v3h2v-3h6v3h2v-3h3zM4 18h16v2H4z" />
      </svg>
    ),
    text: "Stock Real en Perú",
    desc: "Disponibilidad inmediata de equipos clave para que tu proyecto no sufra demoras.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 5h-2v6l5 3 .9-1.45-3.9-2.3z" />
      </svg>
    ),
    text: "Repuestos Originales",
    desc: "Inventario permanente de piezas y consumibles para asegurar la vida útil de tu inversión.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="#fff">
        <path d="M12 8a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0-6a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
      </svg>
    ),
    text: "Soporte 24/7",
    desc: "Servicio técnico preventivo y correctivo de respuesta rápida para operaciones críticas.",
  },
];

const WHATSAPP_URL = "https://wa.me/51985362946";

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
        <img
          className="byp-hero__img byp-hero__img--alt"
          src={heroAlt}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div className="byp-wrap byp-hero__inner">
          <div>
            <p className="byp-code">// B&amp;P TECH</p>
            <h1 className="byp-h1">
              Ingeniería alimentaria para operaciones de alto rendimiento
            </h1>
            <p className="byp-lead">
              Diseñamos, equipamos y acompañamos unidades productivas con foco
              en eficiencia, higiene, seguridad y continuidad operativa.
            </p>
            <Link className="byp-btn" to="/industrias">
              Ver industrias
            </Link>
            <Link className="byp-btn byp-btn--alt" to="/contacto">
              Contactar
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

      {/* 01/ Casos de éxito */}
      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">01/</span>
            <h2 className="byp-h2">El Respaldo de los Grandes</h2>
          </div>
          <p className="byp-sechead-p">
            En B&amp;P TECH no solo entregamos equipos, construimos relaciones
            a largo plazo basadas en la confianza y la eficiencia operativa.
            Descubre cómo los líderes de la industria transformaron sus
            cocinas con nosotros.
          </p>
          <div className="byp-sheet">
            {cards.map((card) => (
              <Link className="byp-fcard" to={card.to} key={card.to}>
                <div className="byp-fcard__ph">
                  <img src={card.img} alt={card.title} loading="lazy" />
                </div>
                <div className="byp-fcard__meta">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <span className="byp-fcard__cta">Ver Caso de Éxito →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 02/ Servicios — valor agregado */}
      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">02/</span>
            <h2 className="byp-h2">Agregamos valor a tu inversión</h2>
          </div>
          <p className="byp-sechead-p">
            Valor agregado B2B para maximizar resultados y continuidad
            operativa.
          </p>
          <div className="byp-svcwrap">
          <div className="byp-svcgrid">
            {ourService.map((item, ind) => (
              <div className="byp-svc" key={item.text}>
                <span className="byp-svc__idx">
                  S-{String(ind + 1).padStart(2, "0")}
                </span>
                <div className="byp-svc__icon">{item.icon}</div>
                <h3>{item.text}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <img className="byp-svcwrap__img" src={svcImg} alt="Servicio y soporte técnico" loading="lazy" />
          </div>
        </div>
      </section>

      {/* 03/ Marcas */}
      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">03/</span>
            <h2 className="byp-h2">Marcas que respaldan tu operación</h2>
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
                  <h3>{brand.name}</h3>
                  <p>{brand.shortDescription}</p>
                  <table>
                    <tbody>
                      <tr>
                        <td>Tipo</td>
                        <td>{brand.productType}</td>
                      </tr>
                      <tr>
                        <td>Origen</td>
                        <td>{brand.origin}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner intermedio */}
      <div className="byp-band">
        <img src={bannerImg} alt="Equipamiento en operación" loading="lazy" />
      </div>

      {/* 04/ Soluciones por Industria */}
      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">04/</span>
            <h2 className="byp-h2">Soluciones por Industria</h2>
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
          <div style={{ marginTop: 26 }}>
            <Link className="byp-btn" to="/industrias">
              Ver industrias
            </Link>
          </div>
        </div>
      </section>

      {/* 05/ Testimoniales */}
      <section className="byp-section byp-section--flush-top byp-section--testi" style={{ backgroundImage: `linear-gradient(rgba(16,41,74,.9), rgba(16,41,74,.94)), url(${testiBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="byp-wrap">
          <div className="byp-head">
            <span className="byp-head__idx">05/</span>
            <h2 className="byp-h2">Nuestros clientes ya lo saben</h2>
          </div>
          <p className="byp-sechead-p">Testimoniales</p>
          <Testimonial />
        </div>
      </section>

      {/* CTA final */}
      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf byp-ctaf--img" style={{ justifyContent: "center", backgroundImage: `linear-gradient(rgba(16,41,74,.78), rgba(16,41,74,.86)), url(${ctaBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link className="byp-btn" to="/contacto">
              Contactar
            </Link>
            <a
              className="byp-btn byp-btn--alt"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp +51 985 362 946
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home4;
