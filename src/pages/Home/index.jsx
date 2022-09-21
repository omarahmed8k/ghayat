import React from "react";
import ServicesComp from "../../components/Services";
import AboutComp from "../../components/About";
import ContactComp from "../../components/Contact";
import BackgroundComp from "../../components/Background";

export default function Home() {
  return (
    <div className="page">
      <BackgroundComp />
      <AboutComp />
      <ServicesComp mode="dark" />
      <ContactComp />
    </div>
  );
}
