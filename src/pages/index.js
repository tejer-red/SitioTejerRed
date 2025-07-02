import * as React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import HomePage from "../components/content/HomePage";
import Footer from "../components/Footer";
import GenerativeBackground from "../components/bg";
import isMobile from "../utils/IsMobile";

const Index = () => {
  const mobile = isMobile();
  return (
    <>
      <Header />
      {!mobile ? <GenerativeBackground /> : null}
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default Index;