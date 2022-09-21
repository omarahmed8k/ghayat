import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutComp from "../../components/About";
import BackgroundComp from "../../components/Background";

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <BackgroundComp />
      <AboutComp />
      <Footer />
    </div>
  );
}
