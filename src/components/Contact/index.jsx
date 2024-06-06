import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as Line } from "../../assets/images/heading-line.svg";
import { ReactComponent as Circle } from "../../assets/images/circle.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Triangle } from "../../assets/images/triangle.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import emailjs from "emailjs-com";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "" || message === "") {
      alert(t("contact.fill"));
    } else {
      emailjs
        .sendForm(
          "service_55r6yug",
          "template_8l0pxdo",
          form.current,
          "64OcsXjOofpHUDuXv"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitted(true);
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setTimeout(() => {
              setSubmitted(false);
            }, 5000);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  return (
    <div className="contact">
      <Circle className="circle" />
      <Dots className="dots-left" />
      <Dots className="dots-right" />
      <Triangle className="triangle" />
      <div className="container">
        <div className="contact-flex">
          <Fade bottom>
            <div className="contact-content">
              <div className="heading-title">
                <h2 className="title" data-title={t("contact.title2")}>
                  {t("contact.title1")}
                </h2>
                <Line />
              </div>
            </div>
          </Fade>
          <div className="contact-list">
            <Slide right>
              <div className="list-item">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1812.3699295514737!2d46.6739856!3d24.7014678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038777756507%3A0x59a35d5dbef81ada!2z2LrYp9mK2KfYqiDZhNil2K_Yp9ix2Kkg2KfZhNij2YXZhNin2YM!5e0!3m2!1sen!2seg!4v1663776367307!5m2!1sen!2seg"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="map"
                ></iframe>
                <div className="contact-info">
                  <div
                    className="info-item"
                    onClick={() => {
                      window.open(
                        "https://goo.gl/maps/gTQS4eERKypCn7xCA",
                        "_blank"
                      );
                    }}
                  >
                    <Location />
                    <p>
                      {t("footer.address")}
                    </p>
                  </div>
                  <div
                    className="info-item"
                    onClick={() => {
                      window.open("https://wa.me/+966557407051", "_blank");
                    }}
                  >
                    <Phone />
                    <p>
                      {t("footer.phone")}
                    </p>
                  </div>
                  <div
                    className="info-item"
                    onClick={() => {
                      window.open("mailto:info@ghayat.org", "_blank");
                    }}
                  >
                    <Email />
                    <p>
                      {t("footer.email")}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide left>
              <div className="list-item">
                <form ref={form} onSubmit={sendEmail}>
                  {submitted ? (
                    <div className="alert alert-success" role="alert">
                      {t("contact.success")}
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label htmlFor="name">
                          {t("contact.name")}
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          placeholder={t("contact.name")}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">
                          {t("contact.email")}
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          placeholder={t("contact.email")}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">
                          {t("contact.phone")}
                        </label>
                        <input
                          name="phone"
                          id="phone"
                          type="text"
                          placeholder={t("contact.phone")}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">
                          {t("contact.message")}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder={t("contact.message")}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <input
                          type="submit"
                          value={t("contact.send")}
                          className="main-btn"
                        />
                      </div>
                    </>
                  )}
                </form>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
