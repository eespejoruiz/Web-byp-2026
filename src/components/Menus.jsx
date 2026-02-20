import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { industryData } from "../data/industryData";

export const MenusItem = [
  {
    menu: "Home",
    link: "/",
    subMenu: [{ childe: "Inicio", link: "/" }],
  },
  {
    menu: "Nosotros",
    link: "/nosotros",
    subMenu: [{ childe: "Historia y equipo", link: "/nosotros" }],
  },
  {
    menu: "Soluciones por Industria",
    link: "/industria/restaurantes",
    subMenu: industryData.map((i) => ({ childe: i.title, link: i.route })),
  },
  {
    menu: "Casos de Éxito",
    link: "/casos-de-exito",
    subMenu: [{ childe: "Mini-documentales", link: "/casos-de-exito" }],
  },
  {
    menu: "Blog",
    link: "/blog",
    subMenu: [{ childe: "Artículos", link: "/blog" }],
  },
  {
    menu: "Contacto",
    link: "/contacto",
    subMenu: [{ childe: "Escríbenos", link: "/contacto" }],
  },
];

const Menus = ({ setOpen }) => {
  const location = useLocation();
  const [open, setOpenMenu] = useState(null);

  const megaColumns = useMemo(() => {
    return [
      {
        title: "Gastronomía",
        items: ["restaurantes", "bares-cafeterias", "comida-rapida"],
      },
      {
        title: "Alto Tráfico",
        items: ["estadios", "hoteles-catering"],
      },
      {
        title: "Producción",
        items: ["panaderia", "cocinas-industriales", "carnicerias"],
      },
      {
        title: "Retail y Especiales",
        items: ["supermercados", "laboratorios", "otros"],
      },
    ].map((col) => ({
      title: col.title,
      items: col.items
        .map((slug) => industryData.find((i) => i.slug === slug))
        .filter(Boolean),
    }));
  }, []);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <ul className="nav navbar-nav navbar navbar-left">
      <li className={isActive("/") ? "active" : ""}>
        <Link
          to="/"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Home
        </Link>
      </li>

      <li className={isActive("/nosotros") ? "active" : ""}>
        <Link
          to="/nosotros"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Nosotros
        </Link>
      </li>

      <li
        className={`sub-menu-down has-mega-menu ${
          location.pathname.startsWith("/industrias") || location.pathname.startsWith("/industria")
            ? "active"
            : ""
        } ${open === "industria" ? "open" : ""}`}
      >
        <Link
          to="/industrias"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Soluciones Por Industria
          <i className="fa fa-angle-down"></i>
        </Link>
        <ul className="mega-menu">
          {megaColumns.map((col) => (
            <li key={col.title}>
              <Link to="#" onClick={(e) => e.preventDefault()}>
                {col.title}
              </Link>
              <ul>
                {col.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      to={item.route}
                      onClick={() => {
                        setOpenMenu(null);
                        setOpen?.(false);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>

      <li className={isActive("/casos-de-exito") ? "active" : ""}>
        <Link
          to="/casos-de-exito"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Casos de Éxito
        </Link>
      </li>

      <li className={isActive("/blog") ? "active" : ""}>
        <Link
          to="/blog"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Blog
        </Link>
      </li>

      <li className={isActive("/contacto") ? "active" : ""}>
        <Link
          to="/contacto"
          onClick={() => {
            setOpenMenu(null);
            setOpen?.(false);
          }}
        >
          Contacto
        </Link>
      </li>
    </ul>
  );
};

export default Menus;
