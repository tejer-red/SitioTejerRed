import React, { useState } from "react";
import Logo from "../assets/logo/logo-01.svg";
import "./HeaderMobile.css";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

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
        <a href="#inicio" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#que" onClick={() => setOpen(false)}>¿Qué es?</a>
        <a href="#herramientas" onClick={() => setOpen(false)}>Herramientas</a>
        <a href="#colaborar" onClick={() => setOpen(false)}>Colabora</a>
      </nav>
      {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}
    </div>
  );
};

export default HeaderMobile;
