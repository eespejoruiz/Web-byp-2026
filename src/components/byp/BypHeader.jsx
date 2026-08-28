import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IMAGE } from "../../constent/theme";
import { industryData } from "../../data/industryData";
import { brandsData } from "../../data/brandsData";

/* Misma agrupación del menú original del sitio */
const MEGA_COLUMNS = [
  { title: "Gastronomía", items: ["restaurantes", "bares-cafeterias", "comida-rapida"] },
  { title: "Alto Tráfico", items: ["estadios", "hoteles-catering"] },
  { title: "Producción", items: ["panaderia", "cocinas-industriales", "carnicerias"] },
  { title: "Retail y Especiales", items: ["supermercados", "laboratorios", "otros"] },
].map((col) => ({
  title: col.title,
  items: col.items
    .map((slug) => industryData.find((i) => i.slug === slug))
    .filter(Boolean),
}));

const WHATSAPP = "51985362946";

/* Rutas que arrancan con un hero navy propio: header transparente arriba.
   En el resto (blog, casos, nosotros…) va siempre en navy sólido. */
const hasNavyHero = (pathname) =>
  pathname === "/" ||
  pathname === "/contacto" ||
  pathname.startsWith("/marcas") ||
  pathname.startsWith("/industrias") ||
  pathname.startsWith("/industria");

const BypHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null); // "ind" | "marcas" | null (desktop)
  const [mAccordion, setMAccordion] = useState(null); // acordeón móvil
  const { pathname } = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra menú móvil y dropdowns al navegar
  useEffect(() => {
    setMenuOpen(false);
    setOpenDrop(null);
    setMAccordion(null);
  }, [pathname]);

  // Cierra dropdowns al hacer click fuera o con Escape
  useEffect(() => {
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDrop(null);
    };
    const onKey = (e) => e.key === "Escape" && setOpenDrop(null);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const solid = scrolled || !hasNavyHero(pathname) || openDrop !== null;
  const navLinkClass = ({ isActive }) =>
    isActive ? "byp-nav__link--active" : undefined;
  const sectionActive = (prefix) =>
    pathname.startsWith(prefix) ? "byp-nav__link--active" : undefined;
  const toggleDrop = (key) => setOpenDrop(openDrop === key ? null : key);

  return (
    <>
      <header className={`byp-header${solid ? " byp-header--scrolled" : ""}`}>
        <div className="byp-wrap byp-topbar">
          <span>B&amp;P TECH · EQUIPAMIENTO PARA LA INDUSTRIA ALIMENTARIA</span>
          <span>LIMA — PE · GMT-5</span>
        </div>
        <div className="byp-wrap byp-nav" ref={navRef}>
          <Link className="byp-nav__logo" to="/" aria-label="B&P TECH — Inicio">
            <img src={IMAGE.logo1} alt="B&P TECH" />
          </Link>

          <ul className="byp-nav__links">
            <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/nosotros" className={navLinkClass}>Nosotros</NavLink></li>

            <li className="byp-drop">
              <button
                type="button"
                className={`byp-drop__btn ${sectionActive("/industria") || ""}`}
                aria-expanded={openDrop === "ind"}
                onClick={() => toggleDrop("ind")}
              >
                Soluciones por industria <span className="byp-caret" aria-hidden="true">▾</span>
              </button>
              {openDrop === "ind" && (
                <div className="byp-mega">
                  {MEGA_COLUMNS.map((col) => (
                    <div className="byp-mega__col" key={col.title}>
                      <p className="byp-mega__title">{col.title}</p>
                      <ul>
                        {col.items.map((ind) => (
                          <li key={ind.slug}>
                            <Link to={`/industrias/${ind.slug}`}>{ind.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link className="byp-mega__all" to="/industrias">
                    Ver todas las industrias →
                  </Link>
                </div>
              )}
            </li>

            <li className="byp-drop">
              <button
                type="button"
                className={`byp-drop__btn ${sectionActive("/marcas") || ""}`}
                aria-expanded={openDrop === "marcas"}
                onClick={() => toggleDrop("marcas")}
              >
                Nuestras marcas <span className="byp-caret" aria-hidden="true">▾</span>
              </button>
              {openDrop === "marcas" && (
                <div className="byp-mega byp-mega--brands">
                  <ul className="byp-mega__brandlist">
                    {brandsData.map((b) => (
                      <li key={b.slug}>
                        <Link to={b.route}>
                          <img src={b.logo} alt="" loading="lazy" />
                          <span>{b.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="byp-mega__all" to="/marcas">
                    Ver las 8 marcas →
                  </Link>
                </div>
              )}
            </li>

            <li><NavLink to="/casos-de-exito" className={navLinkClass}>Casos de éxito</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          </ul>

          <a
            className="byp-nav__cta byp-nav__cta--wa"
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm5.82 14.19c-.25.7-1.45 1.32-2.03 1.4-.52.08-1.17.11-1.9-.12-.43-.13-.99-.32-1.71-.63-3.01-1.3-4.98-4.33-5.13-4.53-.15-.2-1.23-1.63-1.23-3.12 0-1.48.78-2.21 1.06-2.51.28-.3.6-.38.8-.38l.58.01c.18.01.44-.07.68.52.25.6.85 2.09.93 2.24.08.15.13.33.03.53-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.16 1.03 2.13 1.35 2.44 1.51.3.15.48.13.66-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.23.58.35.08.13.08.75-.17 1.45Z"/></svg>
            +51 985 362 946
          </a>

          <button
            type="button"
            className="byp-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="byp-mmenu" role="dialog" aria-modal="true">
          <div className="byp-mmenu__top">
            <img src={IMAGE.logo1} alt="B&P TECH" />
            <button type="button" className="byp-mmenu__close" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>×</button>
          </div>
          <ul className="byp-mmenu__links">
            <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/nosotros" className={navLinkClass}>Nosotros</NavLink></li>

            <li>
              <button type="button" className="byp-mmenu__acc" aria-expanded={mAccordion === "ind"} onClick={() => setMAccordion(mAccordion === "ind" ? null : "ind")}>
                Soluciones por industria <span className="byp-caret">▾</span>
              </button>
              {mAccordion === "ind" && (
                <ul className="byp-mmenu__sub">
                  {MEGA_COLUMNS.map((col) => (
                    <React.Fragment key={col.title}>
                      <li className="byp-mmenu__group">{col.title}</li>
                      {col.items.map((ind) => (
                        <li key={ind.slug}><Link to={`/industrias/${ind.slug}`}>{ind.title}</Link></li>
                      ))}
                    </React.Fragment>
                  ))}
                  <li><Link className="byp-mmenu__all" to="/industrias">Ver todas →</Link></li>
                </ul>
              )}
            </li>

            <li>
              <button type="button" className="byp-mmenu__acc" aria-expanded={mAccordion === "marcas"} onClick={() => setMAccordion(mAccordion === "marcas" ? null : "marcas")}>
                Nuestras marcas <span className="byp-caret">▾</span>
              </button>
              {mAccordion === "marcas" && (
                <ul className="byp-mmenu__sub">
                  {brandsData.map((b) => (
                    <li key={b.slug}><Link to={b.route}>{b.name}</Link></li>
                  ))}
                  <li><Link className="byp-mmenu__all" to="/marcas">Ver las 8 marcas →</Link></li>
                </ul>
              )}
            </li>

            <li><NavLink to="/casos-de-exito" className={navLinkClass}>Casos de éxito</NavLink></li>
            <li><NavLink to="/blog" className={navLinkClass}>Blog</NavLink></li>
          </ul>
          <div className="byp-mmenu__ctas">
            <a className="byp-btn" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp +51 985 362 946</a>
            <Link className="byp-btn byp-btn--line" to="/contacto">Solicitar cotización</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default BypHeader;
