import React from "react";
import { Link } from "react-router-dom";

/**
 * Migas de pan estilo P3 (mono, uppercase). items = [{label, to?}] —
 * el último sin `to` es la página actual. variant: "dark" (sobre hero
 * navy) | "light" (sobre fondo claro).
 */
const BypBreadcrumbs = ({ items = [], variant = "dark" }) => {
  if (!items.length) return null;
  return (
    <nav className={`byp-crumbs byp-crumbs--${variant}`} aria-label="Migas de pan">
      <Link to="/">Home</Link>
      {items.map((item, i) => (
        <React.Fragment key={`${item.label}-${i}`}>
          <span className="byp-crumbs__sep" aria-hidden="true">/</span>
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span className="byp-crumbs__last" aria-current="page">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BypBreadcrumbs;
