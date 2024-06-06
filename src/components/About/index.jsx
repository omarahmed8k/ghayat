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
                  <h2 className="title" data-title="عن مؤسسة غايات">
                    من نحن
                  </h2>
                  <Line />
                </div>
                <p>
                  تتمتع المؤسسة بخبرة تزيد عن 20 عامًا في مجال العقارات، وتضم فريقًا متكاملًا من المستشارين والفنيين والمحاسبين والمسوقين. يختص الفريق بدراسة العقار ومقارنته بالسوق وتحديد الدخل المتوقع وتقييم فرص زيادته والتحسينات اللازمة. كما توفر المؤسسة فريق صيانة لتقليل التكاليف وبرامج متخصصة لإدارة الوحدات العقارية وفقًا لاحتياجات العميل.
                </p>
              </div>
            </Fade>
            <div className="about-list">
              <div className="list-item">
                <Slide right>
                  <IconAbout01 />
                  <h3>الخبرة و المعرفة</h3>
                  <p>
                    تتمتع المؤسسة بأكثر من 20 عامًا من الخبرة في إدارة العقارات، ويضم فريقًا متخصصًا لدراسة العقار ومقارنته بالسوق وتحديد الدخل المتوقع وفرص زيادته والتحسينات المطلوبة. كما توفر خدمات صيانة متكاملة وإدارة تأجير الوحدات بفترات تناسب العميل.
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide left>
                  <IconAbout02 />
                  <h3>لماذا تختارنا</h3>
                  <p>
                    تسليم إدارة عقارك لمؤسسة غايات العقارية يقدم فوائد عديدة، مثل تحقيق أعلى عائد للعقار، البحث عن العقار المناسب لاحتياجاتك، تحسين تشغيل العقار لتحقيق عائد أمثل، متابعة المستأجرين وتخفيف الأعباء عن المالك، وتقليل تكاليف الصيانة باستخدام عمالة غايات المتخصصة.
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide right>
                  <IconAbout03 />
                  <h3>علاقات المؤسسة فى السوق</h3>
                  <p>
                    تتمتع مؤسسة غايات العقارية بعلاقات جيدة في السوق العقاري
                    لكلا الطرفين (مؤجرين و مستأجرين) لتحقيق التشغيل الأمثل لعقارك
                    مع النوعية المرغوبة من المستأجرين، لمحاولة بناء علاقة مستدامة.
                  </p>
                </Slide>
              </div>
              <div className="list-item">
                <Slide left>
                  <IconAbout04 />
                  <h3>الهدف من قيام المؤسسة</h3>
                  <p>
                    تهدف مؤسسة غايات العقارية لأعلى عائد لملاك العقارات وحصول المستأجرين أفضل منتج.
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
