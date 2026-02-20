import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import CarlistingBanner from "../../element/CarlistingBanner";
import { getCaseBySlug } from "../../data/caseStudiesData";

const CaseStudyTemplate = () => {
  const { slug } = useParams();
  const data = getCaseBySlug(slug);
  const [activeVideoId, setActiveVideoId] = useState(null);

  if (!data) {
    return (
      <div className="page-content bg-white">
        <div className="content-inner">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title">Caso no encontrado</h2>
              <p>El caso solicitado no existe o aún no está configurado.</p>
              <Link to="/casos-de-exito" className="btn btn-primary">
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content bg-white">
      <CarlistingBanner img={data.heroImage} title={data.title} />

      <ModalVideo
        channel="youtube"
        isOpen={Boolean(activeVideoId)}
        videoId={activeVideoId || ""}
        autoplay
        onClose={() => setActiveVideoId(null)}
      />

      <section className="content-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-head">
                <h6 className="text-primary sub-title">CASO DE ÉXITO</h6>
                <h2 className="title">{data.headline}</h2>
                <p className="m-b0">{data.company}</p>
              </div>

              <div className="m-t30">
                <h4 className="m-b15">Video de instalaciones</h4>
                <div className="dlab-media position-relative m-b20">
                  <div className="video-bx">
                    <Link
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveVideoId(data.videoId);
                      }}
                      className="popup-youtube"
                    >
                      <i className="fa fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="m-t30">
                <h4 className="m-b15">Entrevista</h4>
                {Array.isArray(data.interview)
                  ? data.interview.map((qa, idx) => (
                      <div className="m-b15" key={idx}>
                        <p className="m-b5"><strong>{qa.q}</strong></p>
                        <p className="m-b0">{qa.a}</p>
                      </div>
                    ))
                  : null}
              </div>

              <div className="m-t30">
                <h4 className="m-b15">Galería de fotos</h4>
                <div className="row">
                  {(data.gallery || []).slice(0, 4).map((img, i) => (
                    <div className="col-md-6 m-b20" key={i}>
                      <div className="dlab-media">
                        <img src={img} alt={`Foto ${i + 1}`} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="m-t30">
                <h4 className="m-b15">Estadísticas de mejora</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Métrica</th>
                        <th>Antes</th>
                        <th>Después</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.kpis || []).map((k, idx) => (
                        <tr key={idx}>
                          <td>{k.label}</td>
                          <td>{k.before}</td>
                          <td>{k.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="m-t30">
                <h4 className="m-b15">Comparativo: antes vs después</h4>
                <div className="table-responsive m-b20">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Métrica</th>
                        <th>Antes</th>
                        <th>Después</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.comparisonBeforeAfter || []).map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.metric}</td>
                          <td>{row.before}</td>
                          <td>{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 className="m-b15">Comparativo: productos de baja calidad vs nuestra marca</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Métrica</th>
                        <th>Baja calidad</th>
                        <th>Nuestra marca</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(data.comparisonLowVsBrand || []).map((row, idx) => (
                        <tr key={idx}>
                          <td>{row.metric}</td>
                          <td>{row.low}</td>
                          <td>{row.brand}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="widget bg-white p-a30 shadow-sm">
                <h4 className="widget-title">¿Quieres un resultado similar?</h4>
                <p className="m-b20">Agenda una llamada para evaluar tu operación y diseñar una solución a medida.</p>
                <Link to="/contacto" className="btn btn-primary w-100">Contactar</Link>
                <Link to="/casos-de-exito" className="btn btn-outline-primary w-100 m-t10">Ver más casos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyTemplate;
