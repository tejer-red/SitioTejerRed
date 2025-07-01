import * as React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import HomePage from "../components/content/HomePage";
import Footer from "../components/Footer";
import GenerativeBackground from "../components/bg";

const Index = () => {
  return (
    <>
      <Header />
      <GenerativeBackground />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  );
};

export default Index;