import React from "react";
import { useParams, Link } from "react-router-dom";
import CarlistingBanner from "../../element/CarlistingBanner";
import { getPostBySlug } from "../../data/blogPostsData";
import { IMAGE } from "../../constent/theme";

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
