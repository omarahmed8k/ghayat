import React from "react";
import ServicesComp from "../../components/Services";
import BackgroundComp from "../../components/Background";

export default function Services() {
  return (
    <div className="page">
      <BackgroundComp />
      <ServicesComp mode="light" />
    </div>
  );
}
