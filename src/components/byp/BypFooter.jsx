import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGE } from "../../constent/theme";
import prectaBg from "../../assets/images/gen/cta-prefooter.webp";

const BypFooter = () => {
  const { pathname } = useLocation();
  return (
  <>
  {pathname !== "/" ? (
    <section className="byp-precta" style={{ backgroundImage: `linear-gradient(rgba(16,41,74,.74), rgba(16,41,74,.84)), url(${prectaBg})` }}>
      <div className="byp-wrap">
        <p className="byp-code">// CONTACTO</p>
        <div className="byp-precta__btns">
          <Link className="byp-btn" to="/contacto">Contactar</Link>
          <a className="byp-btn byp-btn--alt" href="https://wa.me/51985362946" target="_blank" rel="noreferrer">
            WhatsApp +51 985 362 946
          </a>
        </div>
      </div>
    </section>
  ) : null}
  <footer className="byp-footer">
    <div className="byp-wrap byp-footer__grid">
      <div>
        <div className="byp-footer__logo">
          <img src={IMAGE.logo1} alt="B&P TECH" />
        </div>
      </div>
      <div>
        <div className="byp-footer__title">NAVEGACIÓN</div>
        <ul>
          <li><Link to="/marcas">Marcas</Link></li>
          <li><Link to="/industrias">Industrias</Link></li>
          <li><Link to="/casos-de-exito">Casos de éxito</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
      <div>
        <div className="byp-footer__title">CONTACTO</div>
        <ul className="byp-footer__contact">
          <li>
            <span className="byp-mono">UBI</span>
            <span>Lima, Perú</span>
          </li>
          <li>
            <span className="byp-mono">MAIL</span>
            <a href="mailto:proyectos@byptech.com">proyectos@byptech.com</a>
          </li>
          <li>
            <span className="byp-mono">WSP</span>
            <a href="https://wa.me/51985362946" target="_blank" rel="noreferrer">
              +51 985 362 946
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="byp-wrap byp-footer__bottom">
      <span>© {new Date().getFullYear()} B&amp;P TECH S.A.C.</span>
      <span>BYPTECH.COM · LIMA, PERÚ</span>
    </div>
  </footer>
  </>
  );
};

export default BypFooter;
