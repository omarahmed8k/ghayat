import { useTranslation } from "react-i18next";
import { ReactComponent as Line } from "../../assets/images/heading-line.svg";
import { ReactComponent as IconAbout01 } from "../../assets/images/about/about-01.svg";
import { ReactComponent as IconAbout02 } from "../../assets/images/about/about-02.svg";
import { ReactComponent as IconAbout03 } from "../../assets/images/about/about-03.svg";
import { ReactComponent as IconAbout04 } from "../../assets/images/about/about-04.svg";
import { ReactComponent as Circle } from "../../assets/images/circle.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Triangle } from "../../assets/images/triangle.svg";
import CertificatesComp from "../Certificates";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./style.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="about">
        <Circle className="circle" />
        <Dots className="dots-left" />
        <Dots className="dots-right" />
        <Triangle className="triangle" />
        <div className="container">
          <div className="about-flex">
            <Fade bottom>
              <div className="about-content">
                <div className="heading-title">
                  <h2 className="title" data-title={t("about.title2")}>
                    {t("about.title1")}
                  </h2>
                  <Line />
                </div>
                <p>
                  {t("about.desc")}
                </p>
              </div>
            </Fade>
            <div className="about-list">
              <div className="list-item">
                <Slide right>
                  <IconAbout01 />
                  <h3>
                    {t("about.card1title")}
                  </h3>
                  <p>
                    {t("about.card1desc")}
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide left>
                  <IconAbout02 />
                  <h3>
                    {t("about.card2title")}
                  </h3>
                  <p>
                    {t("about.card2desc")}
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide right>
                  <IconAbout03 />
                  <h3>
                    {t("about.card3title")}
                  </h3>
                  <p>
                    {t("about.card3desc")}
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide left>
                  <IconAbout04 />
                  <h3>
                    {t("about.card4title")}
                  </h3>
                  <p>
                    {t("about.card4desc")}
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CertificatesComp />
    </>
  );
}
