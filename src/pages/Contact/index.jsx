import React from "react";
import ContactComp from "../../components/Contact";
import BackgroundComp from "../../components/Background";

export default function Contact() {
  return (
    <div className="contact-page">
      <BackgroundComp />
      <ContactComp />
    </div>
  );
}
