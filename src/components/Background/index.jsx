import { Link } from "react-router-dom";
import buliding from "../../assets/images/background/buliding.png";
import Slide from "react-reveal/Slide";
import "./style.css";

export default function Background() {
  return (
    <div className="background">
      <div className="container">
        <div className="background-flex">
          <div className="background-content">
            <Slide right>
              <h1>
                <span>مؤسسة غايات</span> لإدارة الأملاك
              </h1>
              <p>
                غايات لإدارة الأملاك هي مؤسسة متخصصة في إدارة الأملاك العقارية
                التجارية والسكنية، تقدم خدمات في إدارة الأملاك السكنية
                والتجارية. تشمل تأجير وتسويق العقارات وتحصيل الإيجارات ومتابعة
                المستأجرين وصيانة المرافق العقارية من قبل فريق صيانة مختص لإدارة
                الأملاك.
              </p>
              <Link className="main-btn" to="/contact">
                تواصل معنا
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
      <div className="mouse-cursor"></div>
    </div>
  );
}
