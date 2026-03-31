import React from "react";
import { Link } from "react-router-dom";
import { brandsData } from "../data/brandsData";
import CarlistingBanner from "../element/CarlistingBanner";
import { IMAGE } from "../constent/theme";

const originFlags = {
  Suiza: "\uD83C\uDDE8\uD83C\uDDED",
  Alemania: "\uD83C\uDDE9\uD83C\uDDEA",
  "Estados Unidos": "\uD83C\uDDFA\uD83C\uDDF8",
  Italia: "\uD83C\uDDEE\uD83C\uDDF9",
};

const BrandsIndex = () => {
  return (
    <div className="page-content bg-white">
      <CarlistingBanner img={IMAGE.bnr4} title="Nuestras Marcas" />
      <div className="section-full content-inner" id="brands-index">
        <div className="container">
          <div className="section-head text-center">
            <h6 className="text-primary sub-title">EQUIPAMIENTO PROFESIONAL</h6>
            <h2 className="title">Marcas que respaldan tu operación</h2>
            <p>
              Trabajamos con las marcas líderes a nivel mundial en equipamiento
              para la industria gastronómica, panificación y refrigeración
              comercial.
            </p>
          </div>
          <div className="row align-items-stretch">
            {brandsData.map((brand) => (
              <div
                key={brand.slug}
                className="col-md-6 col-lg-4 col-sm-12 m-b30 d-flex"
              >
                <div
                  className="service-box industries-card w-100 d-flex flex-column"
                  style={{ border: "1px solid #eee", borderRadius: "8px" }}
                >
                  <div
                    className="dlab-media"
                    style={{
                      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "180px",
                      padding: "30px",
                    }}
                  >
                    <Link to={brand.route}>
                      <h2
                        style={{
                          color: "#fff",
                          fontWeight: "800",
                          fontSize: "32px",
                          letterSpacing: "3px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {brand.name}
                      </h2>
                      {brand.origin && (
                        <p
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            margin: "8px 0 0",
                            textAlign: "center",
                            fontSize: "14px",
                          }}
                        >
                          {originFlags[brand.origin] || ""} {brand.origin}
                        </p>
                      )}
                    </Link>
                  </div>
                  <div className="dlab-info d-flex flex-column p-a20">
                    <span
                      className="badge m-b10"
                      style={{
                        backgroundColor: "rgba(var(--primary-rgb, 0,123,255), 0.1)",
                        color: "var(--primary)",
                        fontSize: "12px",
                        padding: "4px 12px",
                        borderRadius: "4px",
                        alignSelf: "flex-start",
                      }}
                    >
                      {brand.productType}
                    </span>
                    <h4 className="dlab-title m-t0 m-b10">
                      <Link to={brand.route}>{brand.name}</Link>
                    </h4>
                    <p
                      className="m-b15"
                      style={{ fontSize: "14px", color: "#666", flex: 1 }}
                    >
                      {brand.shortDescription}
                    </p>
                    <Link
                      to={brand.route}
                      className="btn btn-primary mt-auto text-center mx-auto"
                    >
                      Conocer más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsIndex;
