import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IMAGE } from "../../constent/theme";

const NAV_ITEMS = [
  { label: "Marcas", to: "/marcas" },
  { label: "Industrias", to: "/industrias" },
  { label: "Casos de éxito", to: "/casos-de-exito" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Blog", to: "/blog" },
];

/* Rutas que arrancan con un hero navy propio: el header puede ser
   transparente arriba del todo. En el resto (blog, casos, nosotros…)
   el header va siempre en navy sólido. */
const hasNavyHero = (pathname) =>
  pathname === "/" ||
  pathname === "/contacto" ||
  pathname.startsWith("/marcas") ||
  pathname.startsWith("/industrias") ||
  pathname.startsWith("/industria");

const BypHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const solid = scrolled || !hasNavyHero(pathname);
  const navLinkClass = ({ isActive }) =>
    isActive ? "byp-nav__link--active" : undefined;

  return (
    <>
      <header className={`byp-header${solid ? " byp-header--scrolled" : ""}`}>
        <div className="byp-wrap byp-topbar">
          <span>B&amp;P TECH · EQUIPAMIENTO PARA LA INDUSTRIA ALIMENTARIA</span>
          <span>LIMA — PE · GMT-5</span>
        </div>
        <div className="byp-wrap byp-nav">
          <Link className="byp-nav__logo" to="/" aria-label="B&P TECH — Inicio">
            <img src={IMAGE.logo1} alt="B&P TECH" />
          </Link>
          <ul className="byp-nav__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="byp-nav__cta" to="/contacto">
            Solicitar cotización
          </Link>
          <button
            type="button"
            className="byp-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="byp-mmenu" role="dialog" aria-modal="true">
          <div className="byp-mmenu__top">
            <img src={IMAGE.logo1} alt="B&P TECH" />
            <button
              type="button"
              className="byp-mmenu__close"
              aria-label="Cerrar menú"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="byp-mmenu__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link className="byp-btn" to="/contacto">
            Solicitar cotización
          </Link>
        </div>
      )}
    </>
  );
};

export default BypHeader;
