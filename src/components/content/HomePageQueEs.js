import React from "react";
import MujerBuscando from "../../assets/illustrations/mujer-buscando.svg";
import HombrePensando from "../../assets/illustrations/hombre-pensando.svg";
import GrupoBandera from "../../assets/illustrations/grupo-bandera.svg";

const QueEs = () => (
  <>
  <section id="que" className="content alt">
    <div className="container flex_2">
      <div className="header_image" style={{textAlign:"right"}}>
        <h2 >¿QUÉ ES<br></br>
        TEJER.RED?</h2>
        <MujerBuscando  style={{width:"70%"}}/>
      </div>
      <div className="text_paragraph">
        <p>Tejer.Red es un repositorio de herramientas de
código abierto dedicadas a fortalecer la lucha
contra la desaparición de personas en México.
No se trata solo de un espacio de desarrollo
tecnológico, sino de un tejido colaborativo entre
colectivos de búsqueda, personas voluntarias,
organizaciones civiles e instituciones</p>
<p>Desde este repositorio se diseñan y publican
soluciones tecnológicas adaptadas a las
necesidades reales de los colectivos: herramientas
para la organización, el análisis y la documentación
de datos en campo. Todas son de acceso abierto,
libremente modificables y pensadas para acompañar,
nunca sustituir, el trabajo de quienes buscan.</p>
<p>La apuesta de Tejer.Red es clara: usar la tecnología
como puente para la verdad, el registro colectivo
como resistencia y el código abierto como camino
para que nadie busque en soledad.</p>
      </div>

    </div>
  </section>
  <section id="minimosviables" className="content alt">
    <div className="container flex_2 reverse">
    <div className="text_paragraph">
        <p>Publicamos productos mínimos viables porque
creemos en una lógica iterativa, colaborativa
y situada del desarrollo tecnológico. Cada
herramienta nace desde una necesidad concreta,
con la premisa de ser útil desde el primer uso,
pero también de poder crecer, adaptarse
y transformarse según los contextos específicos
donde se implementa.</p>

<p>No buscamos herramientas perfectas, buscamos
herramientas vivas. Cada línea de código publicada
es una invitación a mejorarla, ampliarla, traducirla
a otras realidades. Porque en contextos de urgencia
como la desaparición de personas, lo mejor
no debe ser enemigo de lo útil y lo inmediato.</p>
      </div>
      <div className="header_image" style={{textAlign:"left"}}>
        <h2 >¿por qué públicar<br></br>
herramientas<br></br>
mínimas viables?</h2>
        <HombrePensando  style={{width:"70%"}}/>
      </div>

    </div>
  </section>
  <section id="sumandovoluntades" className="content alt">
    <div className="container flex_2">
      <div className="header_image" style={{textAlign:"right"}}>
        <h2 >SUMANDO<br></br>
        VOLUNTADES</h2>
        <GrupoBandera  style={{width:"70%"}}/>
      </div>
      <div className="text_paragraph">
        <p>La potencia de Tejer.Red no reside sólo
en sus herramientas, sino en la posibilidad de tejer
con ellas una red de colaboración. Nos mueve
la convicción de que la crisis de desapariciones
exige una articulación ética y técnica: que los datos
deben ser abiertos, accesibles, verificables y útiles
para quienes los necesitan.</p>

<p>Tejer.Red es una invitación a sumar esfuerzos,
a construir una trama de voluntades que se
encuentren en una infraestructura común, segura
y libre. Apostamos por la soberanía tecnológica
de los colectivos, por infraestructuras
descentralizadas, por plataformas construidas
desde el respeto a las víctimas y la autonomía
de quienes buscan.</p>
      </div>

    </div>
  </section>
  </>
);

export default QueEs;
