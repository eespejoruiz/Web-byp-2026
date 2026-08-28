import React from "react";

/**
 * Hero de página de marca — layout dividido:
 * texto a la izquierda, foto de producto a la derecha en un panel claro
 * con object-contain (las fotos de producto son verticales/cuadradas y
 * un banner de fondo tipo cover las recortaba). Mobile: apilado, imagen
 * con altura contenida y aspect-ratio reservado (sin CLS).
 */
const BrandHero = ({ brand }) => {
  if (!brand) return null;
  const { name, origin, tagline, productType, logo, heroImage } = brand;

  return (
    <section className="brand-hero">
      <div className="container">
        <div className="brand-hero__grid">
          <div className="brand-hero__content">
            {logo ? (
              <span className="brand-hero__logo-chip">
                <img src={logo} alt={`Logo de ${name}`} loading="eager" />
              </span>
            ) : null}
            {origin ? (
              <p className="brand-hero__eyebrow">TECNOLOGÍA DE {origin.toUpperCase()}</p>
            ) : null}
            <h1 className="brand-hero__title">{name}</h1>
            {tagline ? <p className="brand-hero__tagline">{tagline}</p> : null}
            {productType ? <span className="brand-hero__badge">{productType}</span> : null}
          </div>
          <div className="brand-hero__media">
            <img
              src={heroImage}
              alt={`${productType || "Equipo"} ${name}`}
              loading="eager"
              width="700"
              height="525"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHero;
