import React from "react";

const Inicio = () => (
  <section id="inicio" className="content">
    <div className="container">
      <div className="logo_container">
        <img src="logo.png" alt="Tejer.Red" className="logo" />
      </div>
      <h2>¿Qué es Tejer.Red?</h2>
      <p>
        Tejer.Red es un repositorio de herramientas de código abierto dedicadas a fortalecer la lucha contra la desaparición de personas en México. No se trata solo de un espacio de desarrollo tecnológico, sino de un tejido colaborativo entre colectivos de búsqueda, personas voluntarias, organizaciones civiles e instituciones.
      </p>
      <p>
        Desde este repositorio se diseñan y publican soluciones tecnológicas adaptadas a las necesidades reales de los colectivos: herramientas para la organización, el análisis y la documentación de datos en campo. Todas son de acceso abierto, libremente modificables y pensadas para acompañar, nunca sustituir, el trabajo de quienes buscan.
      </p>
      <p>
        La apuesta de Tejer.Red es clara: usar la tecnología como puente para la verdad, el registro colectivo como resistencia y el código abierto como camino para que nadie busque en soledad.
      </p>
    </div>
  </section>
);

export default Inicio;
