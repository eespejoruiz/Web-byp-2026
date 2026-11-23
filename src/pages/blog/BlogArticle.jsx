import React from "react";
import { useParams, Link } from "react-router-dom";
import CarlistingBanner from "../../element/CarlistingBanner";
import { getPostBySlug } from "../../data/blogPostsData";
import { IMAGE } from "../../constent/theme";
import BypBreadcrumbs from "../../components/byp/BypBreadcrumbs";
import { waLink } from "../../utils/whatsapp";

/* 23-nov-2026: los artículos con «cuerpo» (cuerpo, faqs, fuentes) se pintan con el diseño de
   las páginas de equipos: hero con H1 y botón de WhatsApp, secciones con H2, tablas que en el
   celular pasan a tarjetas, preguntas frecuentes (que schemaData declara como FAQPage) y fuentes.
   Los artículos viejos (solo «sections») se ven igual que antes. En los textos, [texto](/ruta)
   es un enlace: interno si empieza con «/», externo si no. */
const Chevron = () => (
  <svg className="byp-faq__chev" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const idx = (n) => String(n).padStart(2, "0") + "/";

const conEnlaces = (texto) => {
  const patron = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const partes = [];
  let ultimo = 0;
  let m;
  while ((m = patron.exec(texto))) {
    if (m.index > ultimo) partes.push(texto.slice(ultimo, m.index));
    const [, etiqueta, url] = m;
    partes.push(
      url.startsWith("/") ? (
        <Link className="byp-inlink" to={url} key={`e-${m.index}`}>{etiqueta}</Link>
      ) : (
        <a className="byp-inlink" href={url} target="_blank" rel="noopener noreferrer" key={`e-${m.index}`}>{etiqueta}</a>
      )
    );
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return partes;
};

const Lista = ({ lista, k }) => {
  const Tag = lista.ordenada ? "ol" : "ul";
  return (
    <div className="byp-group">
      <Tag>
        {lista.items.map((it, i) => (
          <li key={`${k}-${i}`}>
            {it.lead ? <strong>{it.lead}</strong> : null}
            {it.lead ? " " : null}
            {conEnlaces(it.text)}
          </li>
        ))}
      </Tag>
    </div>
  );
};

const Tabla = ({ tabla, titulo, k }) => (
  <>
    <div className="byp-selector">
      <table className="byp-selector__table byp-selector__table--wrap" role="table">
        <caption className="byp-sr-only">{titulo}</caption>
        <thead>
          <tr role="row">
            {tabla.columnas.map((c) => (
              <th scope="col" role="columnheader" key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tabla.filas.map((f, fIdx) => (
            <tr role="row" key={`${k}-${fIdx}`}>
              <th scope="row" role="rowheader">{f[0]}</th>
              {f.slice(1).map((v, cIdx) => (
                <td role="cell" key={`${k}-${fIdx}-${cIdx}`} data-label={tabla.columnas[cIdx + 1]}>{v}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {tabla.nota && <p className="byp-selector__note">{tabla.nota}</p>}
  </>
);

const ArticuloConCuerpo = ({ post }) => (
  <div className="byp-page">
    <section className={post.cta ? "byp-phero byp-phero--cta" : "byp-phero"}>
      <div className="byp-wrap">
        <BypBreadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: post.miga || post.title }]} />
        <p className="byp-code">// BLOG · {(post.date || "").toUpperCase()}</p>
        <h1 className="byp-h1">{post.title}</h1>
        <p className="byp-lead">{post.excerpt}</p>
        {post.cta && (
          <div className="byp-phero__acciones">
            <a className="byp-btn" href={waLink(post.cta.mensaje)} target="_blank" rel="noreferrer">
              {post.cta.texto}
            </a>
          </div>
        )}
      </div>
    </section>

    <section className="byp-section">
      <div className="byp-wrap">
        <div className="byp-article">
          {Array.isArray(post.intro) && post.intro.length > 0 && (
            <div className="byp-article__section">
              {post.intro.map((t, i) => (
                <p key={`in-${i}`}>{conEnlaces(t)}</p>
              ))}
            </div>
          )}
          {post.cuerpo.map((s, sIdx) => (
            <div className="byp-article__section" key={`s-${sIdx}`}>
              <div className="byp-article__head">
                <span className="byp-head__idx">{idx(sIdx + 1)}</span>
                <h2>{s.titulo}</h2>
              </div>
              {(s.parrafos || []).map((t, i) => (
                <p key={`p-${sIdx}-${i}`}>{conEnlaces(t)}</p>
              ))}
              {s.lista && <Lista lista={s.lista} k={`l-${sIdx}`} />}
              {s.tabla && <Tabla tabla={s.tabla} titulo={s.titulo} k={`t-${sIdx}`} />}
              {(s.despues || []).map((t, i) => (
                <p key={`d-${sIdx}-${i}`} style={{ marginTop: 18 }}>{conEnlaces(t)}</p>
              ))}
            </div>
          ))}

          {Array.isArray(post.faqs) && post.faqs.length > 0 && (
            <div className="byp-article__section">
              <div className="byp-article__head">
                <span className="byp-head__idx">FAQ/</span>
                <h2>Preguntas frecuentes</h2>
              </div>
              <div className="byp-faq">
                {post.faqs.map((f, i) => (
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

          {Array.isArray(post.fuentes) && post.fuentes.length > 0 && (
            <div className="byp-article__section">
              <p className="byp-selector__note">
                Fuentes:{" "}
                {post.fuentes.map((f, i) => (
                  <React.Fragment key={`f-${i}`}>
                    {i > 0 ? " · " : null}
                    <a className="byp-inlink" href={f.url} target="_blank" rel="noopener noreferrer">{f.texto}</a>
                  </React.Fragment>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>

    {post.cta && (
      <section className="byp-wrap" style={{ paddingBottom: 84 }}>
        <div className="byp-ctaf">
          <div>
            <h2 className="byp-h2">{post.cta.titulo}</h2>
            <p>{post.cta.bajada}</p>
          </div>
          <div className="byp-ctaf__btns">
            <a className="byp-btn" href={waLink(post.cta.mensaje)} target="_blank" rel="noopener noreferrer">{post.cta.texto}</a>
            <Link className="byp-btn byp-btn--line" to={post.cta.equipos}>{post.cta.equiposTexto}</Link>
          </div>
        </div>
      </section>
    )}
  </div>
);

const BlogArticle = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Artículo no encontrado</h2>
              <p>El artículo solicitado no existe o aún no está publicado.</p>
              <Link to="/blog" className="btn btn-primary">Volver al blog</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (Array.isArray(post.cuerpo)) return <ArticuloConCuerpo post={post} />;

  return (
    <div className="page-content bg-white">
      <CarlistingBanner img={post.img || IMAGE.bnr1} title={post.title} />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-head">
                <h6 className="text-primary sub-title">BLOG</h6>
                <h2 className="title">{post.title}</h2>
                <p className="m-b0">{post.excerpt}</p>
                <div className="dlab-meta m-t10">
                  <ul>
                    <li className="post-date">{post.date}</li>
                  </ul>
                </div>
              </div>

              {(post.sections || []).map((s, idx) => (
                <div className="m-t20" key={idx}>
                  {s.h ? <h4 className="m-b10">{s.h}</h4> : null}
                  {s.p ? <p className="m-b0">{s.p}</p> : null}
                </div>
              ))}
            </div>

            <div className="col-lg-4">
              <div className="widget bg-white p-a30 shadow-sm">
                <h4 className="widget-title">¿Hablamos?</h4>
                <p className="m-b20">Agenda una llamada y evaluamos tu operación para aplicar estas mejores prácticas.</p>
                <Link to="/contacto" className="btn btn-primary w-100">Contactar</Link>
                <Link to="/blog" className="btn btn-outline-primary w-100 m-t10">Ver más artículos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticle;
