import React from "react";
import Reunion from "../../assets/illustrations/reunion.svg";
import Frase01 from "../../assets/illustrations/frase-01.svg";
import Frase02 from "../../assets/illustrations/frase-02.svg";
import Frase03 from "../../assets/illustrations/frase-03.svg";

const Colaborar = () => (
  <section id="colaborar" className="content alt">
    <div className="container marker">
      <h2 style={{
        marginBottom: "0rem",
        background: "#440431",
        display: "inline-block",
        color: "white",
        padding: "1.1rem"
      }}>Invitación abierta a colaborar</h2>

      <div className="flex_2_colab" style={{background: "#91D0F0"}}>
          <div>
            <Reunion  />
          </div>
        <div>
        <p>Tejer.Red necesita sumar más voces, manos y saberes. Queremos invitar a:</p>
        <ul>
          <li><strong>Sociólogas/os:</strong> Analizar patrones y narrativas de desaparición.</li>
          <li><strong>Diseñadoras/os:</strong> Mejorar interfaces y experiencia de uso.</li>
          <li><strong>Programadoras/es:</strong> Colaborar en el desarrollo y mejora del código.</li>
          <li><strong>Dateras/os:</strong> Procesar y limpiar bases de datos sensibles.</li>
          <li><strong>Activistas, familiares, periodistas, estudiantes:</strong> Creer en el poder de la documentación libre.</li>
        </ul>
        </div>
      </div>
                      <div className="frases-container">
                          <Frase01 className="frase" />
                          <Frase02 className="frase" />
                          <Frase03 className="frase" />
                      </div>


    </div>
  </section>
);

export default Colaborar;
