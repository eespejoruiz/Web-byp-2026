import React from "react";
import { Link } from "react-router-dom";
import { getModeloByRoute, modelosData } from "../../data/modelosData";
import { productsData } from "../../data/productsData";
import { getBrandBySlug } from "../../data/brandsData";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { waQuoteProduct } from "../../utils/whatsapp";

const Chevron = () => (
  <svg className="byp-faq__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PromiseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10.25" stroke="#f04e23" strokeWidth="1.5" />
    <path d="M7.5 12.4l3 3 6-6.4" stroke="#f04e23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const idx = (n) => String(n).padStart(2, "0") + "/";

/* Un párrafo con, como mucho, un enlace interno (enlace.texto tiene que aparecer
   tal cual en el texto). Igual que en EquipoTemplate. */
const conEnlace = (texto, enlace) => {
  const i = enlace ? texto.indexOf(enlace.texto) : -1;
  if (i < 0) return <p>{texto}</p>;
  return (
    <p>
      {texto.slice(0, i)}
      <Link className="byp-inlink" to={enlace.to}>{enlace.texto}</Link>
      {texto.slice(i + enlace.texto.length)}
    </p>
  );
};

const ListaConsumibles = ({ titulo, items }) => (
  <div className="byp-cons__grupo">
    <h4>{titulo}</h4>
    <ul>
      {items.map((it) => (
        <li key={it.name}>
          <span className="byp-cons__nombre">{it.name}</span>
          <span className="byp-cons__meta">
            {it.code && <span className="byp-cons__code">Art. {it.code}</span>}
            {it.detail}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Página de un modelo (por ahora, las tres cafeteras JURA). Todo sale de
 * modelosData + productsData + brandsData: ver la cabecera de modelosData.
 * Sin precio y sin Product en el schema (Google lo marca como no válido si no hay
 * precio, reseñas ni valoración).
 */
const ModeloTemplate = ({ ruta }) => {
  const modelo = getModeloByRoute(ruta);
  const producto = modelo ? productsData.find((p) => p.id === modelo.producto) : null;
  const marca = modelo ? getBrandBySlug(modelo.brand) : null;

  if (!modelo || !producto || !marca) {
    return (
      <div className="byp-page">
        <section className="byp-phero">
          <div className="byp-wrap">
            <p className="byp-code">// ERROR 404</p>
            <h1 className="byp-h1">Modelo no encontrado</h1>
          </div>
        </section>
        <section className="byp-section">
          <div className="byp-wrap">
            <Link className="byp-btn" to="/marcas">Ver todas las marcas</Link>
          </div>
        </section>
      </div>
    );
  }

  const consumibles = ((marca.consumables && marca.consumables.models) || []).find((m) => m.model === modelo.modelo);
  const otros = modelosData.filter((m) => m.brand === modelo.brand && m.route !== modelo.route);
  let n = 0;

  return (
    <div className="byp-page">
      <section className="byp-phero">
        <div className="byp-wrap">
          <BypBreadcrumbs
            items={[{ label: "Marcas", to: "/marcas" }, { label: marca.name, to: marca.route }, { label: modelo.modelo }]}
          />
          <p className="byp-code">// {marca.name} · {producto.category.toUpperCase()}</p>
          <h1 className="byp-h1">{modelo.h1}</h1>
          <p className="byp-lead">{modelo.tagline}</p>
        </div>
      </section>

      <section className="byp-section byp-section--flush-top">
        <div className="byp-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "start" }} className="byp-eqgrid">
            <div>
              {modelo.intro.map((t, i) => (
                <p key={`in-${i}`}>{t}</p>
              ))}
              <div style={{ marginTop: 26 }}>
                <p className="byp-code" style={{ marginBottom: 12 }}>// PARA QUIÉN ES</p>
                {conEnlace(modelo.paraQuien.texto, modelo.paraQuien.enlace)}
              </div>
              <div style={{ marginTop: 22 }}>
                <a className="byp-btn" href={waQuoteProduct(producto.name)} target="_blank" rel="noopener noreferrer">
                  Cotizar la {modelo.modelo} por WhatsApp
                </a>
              </div>
            </div>
            <div>
              {producto.image ? (
                <img
                  src={producto.image}
                  alt={`Cafetera automática ${producto.name}`}
                  loading="eager"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {Array.isArray(marca.promise) && marca.promise.length > 0 && (
        <section className="byp-promise" aria-label={`Lo que incluye comprar la ${producto.name} con B&P Tech`}>
          <div className="byp-wrap">
            <ul className="byp-promise__list">
              {marca.promise.map((p, i) => (
                <li className="byp-promise__item" key={`pr-${i}`}>
                  <PromiseIcon />
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="byp-section">
        <div className="byp-wrap">
          <div className="byp-article">
            {producto.specs && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">{idx(++n)}</span>
                  <h2>Datos técnicos de la {producto.name}</h2>
                </div>
                <table className="byp-spec-table">
                  <tbody>
                    {Object.entries(producto.specs).map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="byp-selector__note">Datos de la ficha técnica de JURA. Rendimientos según la norma DIN 18873-2.</p>
              </div>
            )}

            {consumibles && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">{idx(++n)}</span>
                  <h2>Mantenimiento y consumibles</h2>
                </div>
                <p>
                  Se limpia sola con un botón, pero necesita sus consumibles originales para mantener la higiene y el sabor. Estos son los
                  de la {modelo.modelo}, con su número de artículo JURA para pedirlos sin confusión; te los cotizamos junto con la cafetera.
                </p>
                <div className="byp-cons">
                  <section className="byp-cons__card" aria-label={`Consumibles y accesorios ${producto.name}`}>
                    <h3 className="byp-cons__modelo">{producto.name}</h3>
                    {Array.isArray(consumibles.care) && consumibles.care.length > 0 && <ListaConsumibles titulo="Mantenimiento" items={consumibles.care} />}
                    {Array.isArray(consumibles.extras) && consumibles.extras.length > 0 && <ListaConsumibles titulo="Accesorios" items={consumibles.extras} />}
                  </section>
                </div>
                {marca.consumables.note && <p className="byp-selector__note">{marca.consumables.note}</p>}
              </div>
            )}

            <div className="byp-article__section">
              <div className="byp-article__head">
                <span className="byp-head__idx">{idx(++n)}</span>
                <h2>Compárala con los otros modelos</h2>
              </div>
              <p>
                Si dudas entre modelos, la guía para elegir una cafetera por tazas al día y por tamaño de oficina está en nuestra página
                de <Link className="byp-inlink" to="/equipos/cafeteras">cafeteras automáticas para oficina y negocio</Link>.
              </p>
              <div className="byp-chips">
                {otros.map((o) => (
                  <Link className="byp-chip" to={o.route} key={o.route}>
                    {marca.name} {o.modelo}
                  </Link>
                ))}
                <Link className="byp-chip" to={marca.route}>
                  TODA LA GAMA {marca.name}
                </Link>
              </div>
            </div>

            {Array.isArray(modelo.faqs) && modelo.faqs.length > 0 && (
              <div className="byp-article__section">
                <div className="byp-article__head">
                  <span className="byp-head__idx">FAQ/</span>
                  <h2>Preguntas frecuentes sobre la {producto.name}</h2>
                </div>
                <div className="byp-faq">
                  {modelo.faqs.map((f, i) => (
                    <details className="byp-faq__item" key={`faq-${i}`}>
                      <summary className="byp-faq__q">
                        <span>{f.q}</span>
                        <Chevron />
                      </summary>
                      <div className="byp-faq__a">
                        <p>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">¿Te interesa la {producto.name}?</h2>
            <p>Te enviamos la cotización con la instalación, la capacitación de tu equipo y el servicio posventa incluidos.</p>
          </div>
          <div className="byp-ctaf__btns">
            <a className="byp-btn" href={waQuoteProduct(producto.name)} target="_blank" rel="noopener noreferrer">Cotizar por WhatsApp</a>
            <Link className="byp-btn byp-btn--line" to="/contacto">Contactar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModeloTemplate;
