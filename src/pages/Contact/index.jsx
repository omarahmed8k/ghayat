import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactComp from "../../components/Contact";
import BackgroundComp from "../../components/Background";

export default function Contact() {
  return (
    <div className="contact-page">
      <Header />
      <BackgroundComp />
      <ContactComp />
      <Footer />
    </div>
  );
}
