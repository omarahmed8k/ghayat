import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo-light.svg";
import { ReactComponent as Location } from "../../assets/images/location.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Email } from "../../assets/images/email.svg";
import { ReactComponent as Circle } from "../../assets/images/footer-circle.svg";
import "./style.css";

export default function Footer() {
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
                <h3>
                  <span>مؤسسة غايات</span> لأدارة الأملاك العقارية
                </h3>
              </div>
              <p>
                غايات لإدارة الأملاك هي مؤسسة متخصصة في إدارة الأملاك العقارية
                التجارية والسكنية، تقدم خدمات في إدارة الأملاك السكنيه
                والتجارية.
              </p>
            </div>
            <div className="footer-links">
              <Link to="/">
                <Circle />
                الرئيسية
              </Link>
              <Link to="/about">
                <Circle />
                من نحن
              </Link>
              <Link to="/services">
                <Circle />
                خدماتنا
              </Link>
              <Link to="/contact">
                <Circle />
                تواصل معنا
              </Link>
            </div>
            <div className="footer-links">
              <div
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                <Location />
                <p>
                  المملكة العربية السعودية – الرياض حي العليا – شارع موسى بن
                  نصير خلف مبنى النيابة العامة.
                </p>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                <Phone />
                <p>0114647455 - 0557407051 - 0503155734</p>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.google.com", "_blank");
                }}
              >
                <Email />
                <p>info@ghayat.org</p>
              </div>
            </div>
          </div>
          <hr />
          <p className="footer-copy">
            جميع الحقوق محفوظة لمؤسسة غايات لإدارة الاملاك - سجل تجاري رقم :
            1010744931
          </p>
        </div>
      </div>
    </Fade>
  );
}
