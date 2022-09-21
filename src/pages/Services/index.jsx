import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesComp from "../../components/Services";
import BackgroundComp from "../../components/Background";

export default function Services() {
  return (
    <div className="services-page">
      <Header />
      <BackgroundComp />
      <ServicesComp mode="light" />
      <Footer />
    </div>
  );
}
