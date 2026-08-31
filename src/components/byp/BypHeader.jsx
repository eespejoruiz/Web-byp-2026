import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IMAGE } from "../../constent/theme";
import { industryData } from "../../data/industryData";
import { brandsData } from "../../data/brandsData";
import { blogPosts } from "../../data/blogPostsData";
import { caseStudiesData } from "../../data/caseStudiesData";

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

const MAIN_LINKS = [
  { n: "01", label: "Home", to: "/" },
  { n: "02", label: "Nosotros", to: "/nosotros" },
  { n: "03", label: "Soluciones por Industria", to: "/industrias", sub: "ind" },
  { n: "04", label: "Nuestras Marcas", to: "/marcas", sub: "marcas" },
  { n: "05", label: "Casos de Éxito", to: "/casos-de-exito" },
  { n: "06", label: "Blog", to: "/blog" },
  { n: "07", label: "Contacto", to: "/contacto" },
];

const hasNavyHero = (pathname) =>
  pathname === "/" ||
  pathname === "/contacto" ||
  pathname.startsWith("/marcas") ||
  pathname.startsWith("/industrias") ||
  pathname.startsWith("/industria");

const norm = (t) => (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const BypHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [expand, setExpand] = useState(null); // sub-panel del menú: "ind" | "marcas"
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
    setExpand(null);
    setQuery("");
  }, [pathname]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setSearchOpen(false); setMenuOpen(false); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, searchOpen]);

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
    return searchIndex.filter((r) => norm(`${r.titulo} ${r.extra} ${r.tipo}`).includes(q)).slice(0, 9);
  }, [query, searchIndex]);

  const solid = scrolled || !hasNavyHero(pathname);
  const closeAll = () => { setMenuOpen(false); setSearchOpen(false); setExpand(null); };

  return (
    <>
      <header className={`byp-header${solid ? " byp-header--scrolled" : ""}`}>
        <div className="byp-wrap byp-nav byp-nav--min">
          <Link className="byp-nav__logo" to="/" aria-label="B&P TECH — Inicio">
            <img src={IMAGE.logo1} alt="B&P TECH" />
          </Link>
          <div className="byp-nav__actions">
            <button type="button" className="byp-iconbtn" aria-label="Buscar" onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
            </button>
            <button type="button" className={`byp-burger2${menuOpen ? " is-open" : ""}`} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      {/* ===== Menú overlay ===== */}
      <div className={`byp-menu${menuOpen ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
        <button type="button" className="byp-menu__x" aria-label="Cerrar menú" onClick={closeAll}>
          <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>
        </button>
        <div className="byp-menu__grid">
          <nav className="byp-menu__nav" aria-label="Navegación principal">
            <ul>
              {MAIN_LINKS.map((l, idx) => (
                <li key={l.to} style={{ transitionDelay: menuOpen ? `${80 + idx * 45}ms` : "0ms" }}>
                  <div className="byp-menu__row">
                    <NavLink to={l.to} end={l.to === "/"} onClick={closeAll} className={({ isActive }) => `byp-menu__link${isActive ? " is-active" : ""}`}>
                      <span className="byp-menu__n">{l.n}</span>
                      {l.label}
                    </NavLink>
                    {l.sub && (
                      <button type="button" className={`byp-menu__plus${expand === l.sub ? " is-open" : ""}`} aria-label={`Desplegar ${l.label}`} aria-expanded={expand === l.sub} onClick={() => setExpand(expand === l.sub ? null : l.sub)}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
                      </button>
                    )}
                  </div>
                  {l.sub === "ind" && expand === "ind" && (
                    <div className="byp-menu__sub">
                      {MEGA_COLUMNS.map((col) => (
                        <div key={col.title} className="byp-menu__subcol">
                          <p>{col.title}</p>
                          {col.items.map((ind) => (
                            <Link key={ind.slug} to={`/industrias/${ind.slug}`} onClick={closeAll}>{ind.title}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  {l.sub === "marcas" && expand === "marcas" && (
                    <div className="byp-menu__sub byp-menu__sub--brands">
                      {brandsData.map((b) => (
                        <Link key={b.slug} to={b.route} onClick={closeAll}>{b.name}</Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <aside className="byp-menu__aside">
            <p className="byp-menu__tag">B&amp;P TECH · BAKERY &amp; PASTRY TECHNOLOGY</p>
            <a className="byp-menu__contact" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">+51 985 362 946</a>
            <a className="byp-menu__contact" href="mailto:proyectos@byptech.com">proyectos@byptech.com</a>
            <p className="byp-menu__loc">Lima, Perú</p>
          </aside>
        </div>
      </div>

      {/* ===== Buscador ===== */}
      {searchOpen && (
        <div className="byp-search" role="dialog" aria-modal="true" aria-label="Buscar en el sitio">
          <div className="byp-search__top">
            <span className="byp-search__hint">BUSCAR EN BYPTECH.COM</span>
            <button type="button" className="byp-menu__x byp-menu__x--inline" aria-label="Cerrar buscador" onClick={closeAll}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>
            </button>
          </div>
          <div className="byp-search__box">
            <input ref={searchRef} type="search" value={query} placeholder="Marcas, equipos, industrias, artículos…" onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && results[0]) navigate(results[0].to); }} />
          </div>
          {query.trim().length >= 2 && (
            <ul className="byp-search__results">
              {results.length === 0 && <li className="byp-search__empty">Sin resultados para «{query}»</li>}
              {results.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} onClick={closeAll}>
                    <span className="byp-search__type">{r.tipo}</span>
                    <span>{r.titulo}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* ===== Bottom navbar tipo app (solo móvil) ===== */}
      <nav className="byp-tabbar" aria-label="Navegación rápida">
        <NavLink to="/" end className={({ isActive }) => `byp-tabbar__item${isActive ? " is-active" : ""}`}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1V9.5Z"/></svg>
          <span>Inicio</span>
        </NavLink>
        <NavLink to="/industrias" className={({ isActive }) => `byp-tabbar__item${isActive || pathname.startsWith("/industria") ? " is-active" : ""}`}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d="M3 21V8l6 4V8l6 4V8l6 4v9H3Z"/><path d="M7 17h2m4 0h2"/></svg>
          <span>Industrias</span>
        </NavLink>
        <NavLink to="/marcas" className={({ isActive }) => `byp-tabbar__item${isActive ? " is-active" : ""}`}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true"><path d="M21 8v8a2 2 0 0 1-1 1.73l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.73l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>
          <span>Marcas</span>
        </NavLink>
        <button type="button" className={`byp-tabbar__item${searchOpen ? " is-active" : ""}`} onClick={() => { setMenuOpen(false); setSearchOpen(true); }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.8-3.8"/></svg>
          <span>Buscar</span>
        </button>
        <button type="button" className={`byp-tabbar__item${menuOpen ? " is-active" : ""}`} onClick={() => { setSearchOpen(false); setMenuOpen(!menuOpen); }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
          <span>Menú</span>
        </button>
      </nav>
    </>
  );
};

export default BypHeader;
