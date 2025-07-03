import React from "react";
import InicioSlider from "./InicioSlider";
import InicioSliderMobile from "./InicioSliderMobile";
import isMobile from "../../utils/IsMobile";

const Inicio = () => (
  <section
    id="inicio"
    className="content"
    style={{
      position: "relative",
      overflow: "hidden",
      // El gradient cubre todo el fondo del section
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        background: "linear-gradient(to bottom, #EEE9EE 0%, #EEE9EE 70%, transparent 100%)"
      }}
    />
    <div className="container marker" style={{ position: "relative", zIndex: 1 }}>
      {isMobile() ? <InicioSliderMobile /> : <InicioSlider />}
    </div>
  </section>
);

export default Inicio;
