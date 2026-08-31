import React from "react";
import { productBrandNames } from "../../data/productsData";

/**
 * Grid de cards de producto estilo P3:
 * foto object-contain sobre panel claro, nombre, categoría mono,
 * specs como mini-tabla cuando existen.
 */
const BypProductGrid = ({ products, title }) => {
  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <div className="byp-prodgrid">
      {title ? (
        <p className="byp-code" style={{ marginBottom: 20 }}>
          // {title}
        </p>
      ) : null}
      <div className="byp-sheet">
        {products.map((p) => (
          <article className="byp-fcard" key={p.id}>
            <div className="byp-fcard__ph">
              <img
                src={p.image}
                alt={`${p.name} — ${productBrandNames[p.brand] || p.brand}`}
                loading="lazy"
              />
            </div>
            <div className="byp-fcard__meta">
              <span className="byp-fcard__ref">
                {productBrandNames[p.brand] || p.brand} ·{" "}
                {(p.category || "").toUpperCase()}
              </span>
              <h3>{p.name}</h3>
              {p.description ? <p>{p.description}</p> : null}
              {p.specs ? (
                <table>
                  <tbody>
                    {Object.entries(p.specs).map(([label, value]) => (
                      <tr key={label}>
                        <td>{label}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BypProductGrid;
