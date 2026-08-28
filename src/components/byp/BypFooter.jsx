import React from "react";
import { Link } from "react-router-dom";
import { IMAGE } from "../../constent/theme";

const BypFooter = () => (
  <footer className="byp-footer">
    <div className="byp-wrap byp-footer__grid">
      <div>
        <div className="byp-footer__logo">
          <img src={IMAGE.logo1} alt="B&P TECH" />
        </div>
        <p>
          Especificamos, instalamos y mantenemos líneas de producción para la
          industria alimentaria. Ocho marcas líderes mundiales, un solo
          responsable técnico.
        </p>
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
);

export default BypFooter;
