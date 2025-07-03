import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/logo/logo-01.svg";
import "../styles/HeaderMobile.css"; // Asegúrate de tener este archivo CSS para los estilos

const scrollWithOffset = (id) => {
  const el = document.getElementById(id);
  const offsetElement = document.querySelector(".header-mobile-bar");
  if (el && offsetElement) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offsetElement.offsetHeight;
    console.log("Scrolling to:", id, "at position:", y);
    console.log("Offset height:", offsetElement.offsetHeight);
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const HeaderMobile = () => {

const [open, setOpen] = useState(false);

const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollWithOffset(id), 100);
};

  return (
    <div className="header-mobile">
      <div className="header-mobile-bar">
        <Logo style={{ height: "3rem" }} />
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
