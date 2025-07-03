import React from "react";
import { Helmet } from "react-helmet";
import Inicio from "./HomePageInicio";
import QueEs from "./HomePageQueEs";
import SumaVoluntades from "./HomePageSumaVoluntades";
import Herramientas from "./HomePageHerramientas";
import Colaborar from "./HomePageColaborar";


const HomePage = () => (
  <>
    <Helmet>
      <title>Inicio | Tejer.Red</title>
    </Helmet>
    <Inicio />
    <QueEs />
    <Herramientas />
    <Colaborar />
  </>
);

export default HomePage;
