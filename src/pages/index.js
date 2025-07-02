import * as React from "react";
import "../styles/styles.css";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import HomePage from "../components/content/HomePage";
import Footer from "../components/Footer";
import GenerativeBackground from "../components/bg";
import isMobile from "../utils/IsMobile";

const Index = () => {
  const mobile = isMobile();
  return (
    <>
      {mobile ? <HeaderMobile offset={72} /> : <Header/>}
      {!mobile ? <GenerativeBackground /> : null}
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default Index;