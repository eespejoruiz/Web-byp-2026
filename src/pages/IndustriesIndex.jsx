import React from "react";
import { Link } from "react-router-dom";
import { industryData } from "./../data/industryData";

const IndustriesIndex = () => (
  <div className="byp-page">
    <section className="byp-phero">
      <div className="byp-wrap">
        <p className="byp-code">// SOLUCIONES POR INDUSTRIA · {String(industryData.length).padStart(2, "0")} VERTICALES</p>
        <h1 className="byp-h1">Soluciones por industria</h1>
        <p className="byp-lead">
          Explora nuestras verticales y descubre la tecnología adecuada para
          tu operación.
        </p>
      </div>
    </section>

    <section className="byp-section">
      <div className="byp-wrap">
        <div className="byp-tbl">
          {industryData.map((ind, idx) => (
            <Link
              className="byp-trow"
              to={`/industrias/${ind.slug}`}
              key={ind.slug}
            >
              <span className="byp-trow__ref">
                IND-{String(idx + 1).padStart(3, "0")}
              </span>
              <h3>{ind.title}</h3>
              <span className="byp-trow__eq">
                {(ind.keyStations || []).join(" · ")}
              </span>
              <span className="byp-trow__go">ABRIR →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="byp-wrap" style={{ paddingBottom: 84 }}>
      <div className="byp-ctaf">
        <div>
          <h2 className="byp-h2">¿Tu operación no calza en ninguna vertical?</h2>
          <p>
            Diseñamos soluciones a medida: diagnóstico, especificación e
            instalación con un solo responsable técnico.
          </p>
        </div>
        <Link className="byp-btn" to="/contacto">
          Iniciar proyecto
        </Link>
      </div>
    </section>
  </div>
);

export default IndustriesIndex;
