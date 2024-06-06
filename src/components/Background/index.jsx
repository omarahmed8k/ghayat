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
                <span>مؤسسة غايات</span> العقارية
              </h1>
              <p>
                غايات العقارية، مؤسسة مرخصة في الرياض من الهيئة العامة للعقار، تقدم خدمات الوساطة، التسويق، إدارة الأملاك، والمزادات. تشمل خدماتها تأجير وتسويق العقارات، تحصيل الإيجارات، صيانة المرافق، وتسويق العقارات للبيع، وتنظيم المزادات الحضورية والإلكترونية، بالإضافة إلى حملات تسويقية حسب طلب العميل.
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
