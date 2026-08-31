import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGE } from "../../constent/theme";
import { industryData } from "../../data/industryData";
import { brandsData } from "../../data/brandsData";
import { blogPosts } from "../../data/blogPostsData";
import { caseStudiesData } from "../../data/caseStudiesData";

/* Agrupación original del menú */
const MEGA_COLUMNS = [
  { title: "Gastronomía", items: ["restaurantes", "bares-cafeterias", "comida-rapida"] },
  { title: "Alto Tráfico", items: ["estadios", "hoteles-catering"] },
  { title: "Producción", items: ["panaderia", "cocinas-industriales", "carnicerias"] },
  { title: "Retail y Especiales", items: ["supermercados", "laboratorios", "otros"] },
].map((col) => ({
  title: col.title,
  items: col.items.map((s) => industryData.find((i) => i.slug === s)).filter(Boolean),
}));

const WHATSAPP = "51985362946";

const hasNavyHero = (pathname) =>
  pathname === "/" ||
  pathname === "/contacto" ||
  pathname.startsWith("/marcas") ||
  pathname.startsWith("/industrias") ||
  pathname.startsWith("/industria");

const norm = (t) =>
  (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const BypHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mAccordion, setMAccordion] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setMAccordion(null);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
    const onKey = (e) => {
      if (e.key === "Escape") { setSearchOpen(false); setMenuOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  // Bloquea el scroll del body con overlays abiertos
  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

  /* Índice de búsqueda: marcas, industrias, blog, casos y páginas fijas */
  const searchIndex = useMemo(() => [
    ...brandsData.map((b) => ({ tipo: "Marca", titulo: b.name, extra: b.productType, to: b.route })),
    ...industryData.map((i) => ({ tipo: "Industria", titulo: i.title, extra: "", to: `/industrias/${i.slug}` })),
    ...blogPosts.map((p) => ({ tipo: "Blog", titulo: p.title, extra: "", to: `/blog/${p.slug}` })),
    ...caseStudiesData.map((c) => ({ tipo: "Caso de éxito", titulo: c.title, extra: "", to: `/casos-de-exito/${c.slug}` })),
    { tipo: "Página", titulo: "Nosotros", extra: "", to: "/nosotros" },
    { tipo: "Página", titulo: "Contacto", extra: "", to: "/contacto" },
    { tipo: "Página", titulo: "Todas las marcas", extra: "", to: "/marcas" },
    { tipo: "Página", titulo: "Todas las industrias", extra: "", to: "/industrias" },
  ], []);

  const results = useMemo(() => {
    const q = norm(query.trim());
    if (q.length < 2) return [];
    return searchIndex
      .filter((r) => norm(`${r.titulo} ${r.extra} ${r.tipo}`).includes(q))
      .slice(0, 9);
  }, [query, searchIndex]);

  const solid = scrolled || !hasNavyHero(pathname);

  return (
    <>
      <header className={`byp-header${solid ? " byp-header--scrolled" : ""}`}>
        <div className="byp-wrap byp-nav byp-nav--min">
          <Link className="byp-nav__logo" to="/" aria-label="B&P TECH — Inicio">
            <img src={IMAGE.logo1} alt="B&P TECH" />
          </Link>
          <div className="byp-nav__actions">
            <button type="button" className="byp-iconbtn" aria-label="Buscar" onClick={() => setSearchOpen(true)}>
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            </button>
            <button type="button" className="byp-burger" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Menú (drawer full-screen, todas las resoluciones) ===== */}
      {menuOpen && (
        <div className="byp-mmenu" role="dialog" aria-modal="true">
          <div className="byp-mmenu__top">
            <img src={IMAGE.logo1} alt="B&P TECH" />
            <button type="button" className="byp-mmenu__close" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}>×</button>
          </div>
          <div className="byp-mmenu__scroll">
            <ul className="byp-mmenu__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
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
              <li><Link to="/casos-de-exito">Casos de éxito</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <div className="byp-mmenu__ctas">
              <a className="byp-btn" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">WhatsApp +51 985 362 946</a>
              <Link className="byp-btn byp-btn--line" to="/contacto">Contactar</Link>
            </div>
          </div>
        </div>
      )}

      {/* ===== Buscador ===== */}
      {searchOpen && (
        <div className="byp-search" role="dialog" aria-modal="true" aria-label="Buscar en el sitio">
          <div className="byp-search__top">
            <span className="byp-search__hint">BUSCAR EN BYPTECH.COM</span>
            <button type="button" className="byp-mmenu__close" aria-label="Cerrar buscador" onClick={() => setSearchOpen(false)}>×</button>
          </div>
          <div className="byp-search__box">
            <input
              ref={searchRef}
              type="search"
              value={query}
              placeholder="Marcas, equipos, industrias, artículos…"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && results[0]) navigate(results[0].to); }}
            />
          </div>
          {query.trim().length >= 2 && (
            <ul className="byp-search__results">
              {results.length === 0 && <li className="byp-search__empty">Sin resultados para «{query}»</li>}
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to}>
                    <span className="byp-search__type">{r.tipo}</span>
                    <span>{r.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default BypHeader;
