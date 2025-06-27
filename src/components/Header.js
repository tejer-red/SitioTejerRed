import React from "react";

const Header = () => (
  <header className="header">
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        className="menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          gap: "10%",
        }}
      >
          <a href="#inicio">Inicio</a>
          <a href="#que">¿Qué es?</a>
          <img src="logo.png" alt="Tejer.Red Logo" style={{ height: "300px", maxHeight: "5rem" }} />
          <a href="#herramientas">Herramientas</a>
          <a href="#colaborar">Colabora</a>
      </nav>
    </div>
  </header>
);

export default Header;
