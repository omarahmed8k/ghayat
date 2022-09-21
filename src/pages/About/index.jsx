import React from "react";
import AboutComp from "../../components/About";
import BackgroundComp from "../../components/Background";

export default function About() {
  return (
    <div className="about-page">
      <BackgroundComp />
      <AboutComp />
    </div>
  );
}
