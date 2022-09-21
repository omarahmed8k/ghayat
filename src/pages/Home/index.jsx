import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";
import About from "../../components/About";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <About />
      <Services mode="dark" />
      <Contact />
      <Footer />
    </div>
  );
}
