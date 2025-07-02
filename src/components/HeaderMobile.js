import React, { useState } from "react";
import Logo from "../assets/logo/logo-01.svg";
import "./HeaderMobile.css";

// scrollWithOffset ahora recibe offset como argumento
const scrollWithOffset = (id, offset = 72) => {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const HeaderMobile = ({ offset = 64 }) => {
  const [open, setOpen] = useState(false);

  // handleNavClick usa el offset recibido por props
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollWithOffset(id, offset), 100);
  };

  return (
    <div className="header-mobile">
      <div className="header-mobile-bar">
        <Logo style={{ height: "2.5rem" }} />
      </div>
      <button
        className={`hamburger${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`mobile-menu${open ? " show" : ""}`}>
        <a href="#inicio" onClick={e => handleNavClick(e, "inicio")}>Inicio</a>
        <a href="#que" onClick={e => handleNavClick(e, "que")}>¿Qué es?</a>
        <a href="#herramientas" onClick={e => handleNavClick(e, "herramientas")}>Herramientas</a>
        <a href="#colaborar" onClick={e => handleNavClick(e, "colaborar")}>Colabora</a>
      </nav>
      {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}
    </div>
  );
};

export default HeaderMobile;
