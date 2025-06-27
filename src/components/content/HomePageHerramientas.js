import React from "react";

const Herramientas = () => (
  <section id="herramientas" className="tools">
    <div className="container">
      <h2>Herramientas en desarrollo</h2>
      <div className="tool-list">
        <div className="tool">
          <h3>Bitácora de Búsqueda (plugin para WordPress)</h3>
          <p>
            Una herramienta pensada para registrar el trabajo cotidiano de los colectivos en campo. Permite documentar zonas de búsqueda, los indicios encontrados y narrar de forma libre las entradas del diario de campo.
          </p>
          <p>
            Este plugin organiza la información y posibilita compartirla con un servidor central, generando una base de datos colaborativa de fosas e indicios documentados por los propios colectivos.
          </p>
        </div>
        <div className="tool">
          <h3>Consulta Interactiva del Registro de Personas Fallecidas sin Identificar (PFSI)</h3>
          <p>
            Transforma el padrón de personas fallecidas no identificadas en una plataforma de consulta interactiva. Incluye un buscador por nombre, localización y descripción de tatuajes, proponiendo coincidencias con registros del REPD.
          </p>
        </div>
        <div className="tool">
          <h3>Cartografía Semántica de la Crisis de Desapariciones</h3>
          <p>
            Basada en el REPD de Jalisco, esta herramienta transforma las cédulas de búsqueda en un mapa interactivo. Permite filtrar datos demográficos, analizar patrones espacio-temporales y visualizar focos de desaparición.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Herramientas;
