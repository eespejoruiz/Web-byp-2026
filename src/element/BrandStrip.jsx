import React from "react";
import { Link } from "react-router-dom";

import rondoLogo from "../assets/images/brands/rondo-logo.svg";
import diosnaLogo from "../assets/images/brands/diosna-logo.svg";
import winterhalterLogo from "../assets/images/brands/winterhalter-logo.png";
import trueLogo from "../assets/images/brands/true-logo.png";
import pietrobertoLogo from "../assets/images/brands/pietroberto-logo.png";
import vitamixLogo from "../assets/images/brands/vitamix-logo.svg";
import caincoLogo from "../assets/images/brands/cainco-logo.png";
import jbtmarelLogo from "../assets/images/brands/jbtmarel-logo.svg";

const LOGOS = [
  { name: "RONDO", logo: rondoLogo, to: "/marcas/rondo" },
  { name: "DIOSNA", logo: diosnaLogo, to: "/marcas/diosna" },
  { name: "Winterhalter", logo: winterhalterLogo, to: "/marcas/winterhalter" },
  { name: "True", logo: trueLogo, to: "/marcas/true" },
  { name: "Pietroberto", logo: pietrobertoLogo, to: "/marcas/pietroberto" },
  { name: "Vitamix", logo: vitamixLogo, to: "/marcas" },
  { name: "Cainco", logo: caincoLogo, to: "/marcas" },
  { name: "JBT Marel", logo: jbtmarelLogo, to: "/marcas" },
];

/** Franja de logos de marcas representadas (social proof B2B). */
const BrandStrip = () => (
  <section className="brand-strip" aria-label="Marcas que representamos">
    <div className="container">
      <p className="brand-strip__title">REPRESENTANTES OFICIALES DE</p>
      <div className="brand-strip__row">
        {LOGOS.map((b) => (
          <Link key={b.name} to={b.to} title={b.name}>
            <img src={b.logo} alt={`Logo ${b.name}`} loading="lazy" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default BrandStrip;
