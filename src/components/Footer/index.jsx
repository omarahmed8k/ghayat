import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo-light.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import { ReactComponent as Circle } from "../../assets/images/footer-circle.svg";
import Fade from "react-reveal/Fade";
import "./style.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <Fade bottom>
      <div className="footer">
        <div className="container">
          <div className="footer-flex">
            <div className="footer-company">
              <div className="footer-logo">
                <Link to="/">
                  <Logo />
                </Link>
                <h3><span>{t("ghayat")}</span> {t("realEstate")}</h3>
              </div>
              <p>
                {t("footer.desc")}
              </p>
            </div>
            <div className="footer-links thin">
              <Link to="/">
                <Circle />
                {t("header.home")}
              </Link>
              <Link to="/about">
                <Circle />
                {t("header.about")}
              </Link>
              <Link to="/services">
                <Circle />
                {t("header.services")}
              </Link>
              <Link to="/contact">
                <Circle />
                {t("header.contact")}
              </Link>
            </div>
            <div className="footer-links">
              <div
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
          <hr />
          <p className="footer-copy">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </Fade>
  );
}
