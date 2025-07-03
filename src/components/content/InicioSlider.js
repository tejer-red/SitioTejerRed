import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import Trama from "../../assets/illustrations/tramaBG_Trama.svg";
import Lupa from "../../assets/illustrations/lupa.svg";
import Cuaderno from "../../assets/illustrations/cuaderno.svg";
import MujerBuscando from "../../assets/illustrations/mujer-buscando.svg";
import HombreAuditando from "../../assets/illustrations/hombre-auditando.svg";
import Reunion from "../../assets/illustrations/reunion.svg";
import Frase01 from "../../assets/illustrations/frase-01.svg";
import Frase02 from "../../assets/illustrations/frase-02.svg";
import Frase03 from "../../assets/illustrations/frase-03.svg";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/InicioSlider.css"; // Asegúrate de tener este archivo CSS para los estilos

const InicioSlider = () => {
return (
    <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="tejer-swiper"
    >
            <SwiperSlide>
                    <Trama className="trama-bg" />
                    <Lupa className="absolutes" style={{top:"10%", left:"10%", width:"168px", height:"auto"}} />
                    <Cuaderno className="absolutes" style={{bottom:"-5%", right:"0%", width:"268px", height:"auto"}} />
            <div className="slide-container centered slide_1">
                    <h1 style={{width:"50%", color:"black"}}>Repositorio de herramientas de código abierto dedicadas a fortalecer la lucha &nbsp; 
                    <span style={{background:"#FF6265"}}>contra la desaparición de personas en México.</span>
                    </h1>
                    <a href="#que" className="cta-button" style={{backgroundColor:"#000", color:"#FF6265"}}>
                    ¿Qué es Tejer.Red?
                    </a>
             </div>
                </SwiperSlide>

        <SwiperSlide>
        <Trama className="trama-bg" />
            <div className="slide-container flex_2">
                    <div className="slide-text">
                            <h2 className="slider izquierda blanco">¿QUÉ ES <br></br>
                            <span style={{color:"#F9C529"}}>TEJER.RED</span>?</h2>
                            <p className="blanco">Tejido colaborativo entre colectivos de búsqueda, personas voluntarias,
                            organizaciones civiles e instituciones. Desde este repositorio se diseñan
                            y publican soluciones tecnológicas adaptadas a las necesidades reales
                            de los colectivos.</p>
                            <a href="#que" className="cta-button" style={{backgroundColor:"#F9C529", color:"#00292F"}}>
                            ¿Qué es Tejer.Red?
                            </a>
                    </div>
                    <div className="slide-image">
                        <MujerBuscando style={{overflow: "visible", position: "absolute", left: "0", bottom: "-180px"}} />
                        </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <Trama className="trama-bg" />
            <div className="slide-container flex_2 reverse">
            <div className="slide-image">
                        <HombreAuditando style={{overflow: "visible", position: "absolute", left: "0", bottom: "-180px"}} />
                        </div>
                    <div className="slide-text">
                            <h2 className="slider izquierda blanco">HERRAMIENTAS <br></br>
                            EN <span style={{color:"#F9C529"}}>DESARROLLO</span></h2>
                            <p className="blanco">Organización, el análisis y la documentación de datos en campo.
Todas son de acceso abierto, libremente modificables y pensadas
para acompañar, nunca sustituir, el trabajo de quienes buscan.</p>
<a href="#herramientas" className="cta-button" style={{ backgroundColor: "#F9C529", color: "#00292F" }}>
                            Probar herramientas
                        </a>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <Trama className="trama-bg" />
            <div className="slide-container flex_2">
                    <div className="slide-text">
                            <h2 className="slider izquierda blanco">INVITACIÓN ABIERTA
                             <br></br>
                            <span style={{color:"#440431"}}>A COLABORAR</span></h2>
                            <p className="blanco">Tejido colaborativo entre colectivos de búsqueda, personas voluntarias,
                            organizaciones civiles e instituciones. Desde este repositorio se diseñan
                            y publican soluciones tecnológicas adaptadas a las necesidades reales
                            de los colectivos.</p>
                            <a href="#colaborar" className="cta-button" style={{ backgroundColor: "#F9C529", color: "#00292F" }}>
                            Quiero colaborar
                        </a>
                    </div>
                    <div className="slide-image">
                        <Reunion style={{overflow: "visible", position: "absolute", left: "0", bottom: "-180px"}} />
                        </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="slide-container centered slide_4">
            <Trama className="trama-bg" style={{opacity:0.2}}/>
                <h1>La apuesta de Tejer.Red es clara:</h1>
                <div className="frases-container">
                    <Frase01 className="frase" />
                    <Frase02 className="frase" />
                    <Frase03 className="frase" />
                </div>
                <h1>Para que nadie busque en soledad</h1>
             </div>
                </SwiperSlide>
    </Swiper>
);
};

export default InicioSlider;
