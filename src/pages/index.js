import * as React from "react";
import "../styles/styles.css";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="logo.png" alt="Tejer.Red Logo" />
          </div>
          <nav className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#que">¿Qué es?</a>
            <a href="#herramientas">Herramientas</a>
            <a href="#colaborar">Colabora</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Slider Section */}
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

        <section id="que" className="content alt">
          <div className="container">
            <h2>¿Por qué publicar herramientas mínimas viables?</h2>
            <p>
              Publicamos productos mínimos viables porque creemos en una lógica iterativa, colaborativa y situada del desarrollo tecnológico. Cada herramienta nace desde una necesidad concreta, con la premisa de ser útil desde el primer uso, pero también de poder crecer, adaptarse y transformarse según los contextos específicos donde se implementa.
            </p>
            <p>
              No buscamos herramientas perfectas, buscamos herramientas vivas. Cada línea de código publicada es una invitación a mejorarla, ampliarla, traducirla a otras realidades. Porque en contextos de urgencia como la desaparición de personas, lo mejor no debe ser enemigo de lo útil y lo inmediato.
            </p>
          </div>
        </section>

        <section id="sumavoluntades" className="content">
          <div className="container">
            <h2>Sumando voluntades: datos abiertos para búsquedas compartidas</h2>
            <p>
              La potencia de Tejer.Red no reside sólo en sus herramientas, sino en la posibilidad de tejer con ellas una red de colaboración. Nos mueve la convicción de que la crisis de desapariciones exige una articulación ética y técnica: que los datos deben ser abiertos, accesibles, verificables y útiles para quienes los necesitan.
            </p>
            <p>
              Tejer.Red es una invitación a sumar esfuerzos, a construir una trama de voluntades que se encuentren en una infraestructura común, segura y libre. Apostamos por la soberanía tecnológica de los colectivos, por infraestructuras descentralizadas, por plataformas construidas desde el respeto a las víctimas y la autonomía de quienes buscan.
            </p>
          </div>
        </section>

        {/* Tools Section */}
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

        {/* Collaboration Invitation */}
        <section id="colaborar" className="content alt">
          <div className="container">
            <h2>Invitación abierta a colaborar</h2>
            <p>Tejer.Red necesita sumar más voces, manos y saberes. Queremos invitar a:</p>
            <ul>
              <li><strong>Sociólogas/os:</strong> Analizar patrones y narrativas de desaparición.</li>
              <li><strong>Diseñadoras/os:</strong> Mejorar interfaces y experiencia de uso.</li>
              <li><strong>Programadoras/es:</strong> Colaborar en el desarrollo y mejora del código.</li>
              <li><strong>Dateras/os:</strong> Procesar y limpiar bases de datos sensibles.</li>
              <li><strong>Activistas, familiares, periodistas, estudiantes:</strong> Creer en el poder de la documentación libre.</li>
            </ul>
            <p>
              Cada esfuerzo cuenta. Cada línea de código, cada visualización, cada entrada en una bitácora puede marcar una diferencia.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <h2>Contacto</h2>
          <p>
            Si quieres colaborar, revisar el código, proponer mejoras o replicar alguna de las herramientas en tu contexto, escribenos a:
          </p>
          <p>
            <a href="mailto:colaborar@tejer.red" className="button">
              colaborar@tejer.red
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
