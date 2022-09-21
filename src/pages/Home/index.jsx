import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesComp from "../../components/Services";
import AboutComp from "../../components/About";
import ContactComp from "../../components/Contact";
import BackgroundComp from "../../components/Background";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <BackgroundComp />
      <AboutComp />
      <ServicesComp mode="dark" />
      <ContactComp />
      <Footer />
    </div>
  );
}
