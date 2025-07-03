import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => (
  <>
    <Header />
    <main style={{ textAlign: "center", padding: "4rem", marginTop: "6rem" }}>
      <h1>404: Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
    <Footer />
  </>
);

export default NotFoundPage;
