import React from "react";
import Logo from "../assets/logo/logo-01.svg"; // Assuming you have a logo image in the assets folder

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
          <Logo style={{ height: "300px", maxHeight: "5rem" }} />
          <a href="#herramientas">Herramientas</a>
          <a href="#colaborar">Colabora</a>
      </nav>
    </div>
  </header>
);

export default Header;
