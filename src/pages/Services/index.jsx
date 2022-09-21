import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

export default function Services() {
  return (
    <div className="services-page">
      <Header />
      <Services mode="light" />
      <Footer />
    </div>
  );
}
