import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import CarlistingBanner from "../element/CarlistingBanner";
import { IMAGE } from "../constent/theme";
import { caseStudiesData } from "../data/caseStudiesData";

const cases = caseStudiesData.map((c, idx) => ({
  id: c.slug,
  headline: c.headline,
  company: c.company,
  videoId: c.videoId,
  img: [IMAGE.testimonialPic1, IMAGE.testimonialPic2, IMAGE.testimonialPic3][idx % 3],
  brands: ["True", "Winterhalter", "Vitamix"],
  slug: c.slug,
}));

const CasosDeExito = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <div className="page-content bg-white">
      <CarlistingBanner img={IMAGE.bnr2} title="Casos de Éxito" />

      <ModalVideo
        channel="youtube"
        isOpen={Boolean(activeVideoId)}
        videoId={activeVideoId || ""}
        autoplay
        onClose={() => setActiveVideoId(null)}
      />

      <section className="content-inner">
        <div className="container">
          <div className="section-head text-center">
            <h2 className="title">Mini-documentales</h2>
            <p>
              Historias reales con foco en reto, solución y resultados. Este módulo es la base para integrar
              videos y marcas por proyecto.
            </p>
          </div>

          <div className="row">
            {cases.map((c) => (
              <div className="col-lg-4 col-md-6 m-b30" key={c.id}>
                <div className="service-box">
                  <div className="dlab-media">
                    <Link to={`/casos-de-exito/${c.slug}`}>
                      <img src={c.img} alt={c.company} />
                    </Link>
                    <div className="video-bx">
                      <Link
                        to="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveVideoId(c.videoId);
                        }}
                        className="popup-youtube"
                      >
                        <i className="fa fa-play"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="dlab-info">
                    <h4 className="dlab-title m-t0 m-b10">{c.headline}</h4>
                    <p className="m-b15">{c.company}</p>
                    <div className="m-b20">
                      <h6 className="m-b10">Equipado con</h6>
                      <div className="tagcloud">
                        {c.brands.map((b) => (
                          <Link to="#" onClick={(e) => e.preventDefault()} key={b}>
                            {b}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <Link to="/contacto" className="btn btn-primary">
                      Quiero un proyecto similar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosDeExito;
