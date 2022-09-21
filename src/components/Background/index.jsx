import { Link } from "react-router-dom";
import "./style.css";

export default function Background() {
  return (
    <div className="background">
      <div className="container">
        <div className="background-flex">
          <div className="background-img">
            <img src="https://i.imgur.com/9ZQZ1Zu.png" alt="background" />
          </div>
          <div className="background-content">
            <h1>مؤسسة غايات لإدارة الأملاك.</h1>
            <p>
              غايات لإدارة الأملاك هي مؤسسة متخصصة في إدارة الأملاك العقارية
              التجارية والسكنية، تقدم خدمات في إدارة الأملاك السكنية والتجارية.
              تشمل تأجير وتسويق العقارات وتحصيل الإيجارات ومتابعة المستأجرين
              وصيانة المرافق العقارية من قبل فريق صيانة مختص لإدارة الأملاك.
            </p>
            <Link to="/contact">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
