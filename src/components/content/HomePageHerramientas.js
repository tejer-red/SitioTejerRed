import React from "react";

const Herramientas = () => (
  <section id="herramientas" className="tools">
    <div className="container">
      <div className="tool-list">
        <div className="tool marker">
          <h3>Bitácora de Búsqueda (plugin para WordPress)</h3>
          <p>
            Una herramienta pensada para registrar el trabajo cotidiano de los colectivos en campo. Permite documentar zonas de búsqueda, los indicios encontrados y narrar de forma libre las entradas del diario de campo.
          </p>
          <a href="https://decofem.tejer.red/" className="cta-button" style={{background:"#440431"}}>DECOFEM</a>
          <a href="https://coordinadas.tejer.red/" className="cta-button" style={{background:"#440431"}}> Bitacoras Coordinadas</a>
          <a href="https://github.com/tejer-red/BitacoraBusqueda_WP" className="cta-button" style={{background:"#440431"}}>
            Ver Código en GitHub
          </a>
        </div>
        <div className="tool marker">
          <h3>Consulta Interactiva del registro de PFSI</h3>
          <p>
            Transforma el padrón de personas fallecidas no identificadas en una plataforma de consulta interactiva. Incluye un buscador por nombre, localización y descripción de tatuajes, proponiendo coincidencias con registros del REPD.
          </p>
          <a href="https://tatuajes.tejer.red/" className="cta-button" style={{background:"#440431"}}>Ver Demo</a>
          <a href="https://github.com/tejer-red/RelacionTatuajes_PFSI-REPD" className="cta-button" style={{background:"#440431"}}>
            Ver Código en GitHub
          </a>
        </div>
        <div className="tool marker">
          <h3>Cartografía Semántica de la Crisis de Desapariciones</h3>
          <p>
            Basada en el REPD de Jalisco, esta herramienta transforma las cédulas de búsqueda en un mapa interactivo. Permite filtrar datos demográficos, analizar patrones espacio-temporales y visualizar focos de desaparición.
          </p>
          <a href="https://cartografia.tejer.red/dist/" className="cta-button" style={{background:"#440431"}}>Ver Demo</a>
          <a href="https://github.com/tejer-red/CartografiaSemanticaDesaparecidos" className="cta-button" style={{background:"#440431"}}>
            Ver Código en GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Herramientas;
