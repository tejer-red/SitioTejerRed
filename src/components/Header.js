import React from "react";
import HeaderMobile from "./HeaderMobile";
import Logo from "../assets/logo/logo-01.svg";

const Header = () => (
  <>
    <div className="header-desktop">
      <header className="header">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Logo style={{ height: "3rem", marginRight: "2rem" }} />
          <nav
            className="menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              gap: "2rem",
            }}
          >
            <a href="#inicio">Inicio</a>
            <a href="#que">¿Qué es?</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#colaborar">Colabora</a>
          </nav>
        </div>
      </header>
    </div>
    <HeaderMobile />
  </>
);

export default Header;
