import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import buliding from "../../assets/images/background/buliding.png";
import Slide from "react-reveal/Slide";
import "./style.css";

export default function Background() {
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className="container">
        <div className="background-flex">
          <div className="background-content">
            <Slide right>
              <h1><span>{t("hero.title1")}</span> {t("hero.title2")}</h1>
              <p>
                {t("hero.desc")}
              </p>
              <Link className="main-btn" to="/contact">
                {t("hero.btn")}
              </Link>
            </Slide>
          </div>
          <div className="background-img">
            <Slide left>
              <img src={buliding} alt="background" />
            </Slide>
          </div>
        </div>
      </div>
      <div className="mouse-cursor" onClick={() => window.scrollTo(0, window.innerHeight)}></div>
    </div>
  );
}
