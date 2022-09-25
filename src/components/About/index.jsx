import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { ReactComponent as Line } from "../../assets/images/heading-line.svg";
import { ReactComponent as IconAbout01 } from "../../assets/images/about/about-01.svg";
import { ReactComponent as IconAbout02 } from "../../assets/images/about/about-02.svg";
import { ReactComponent as IconAbout03 } from "../../assets/images/about/about-03.svg";
import { ReactComponent as IconAbout04 } from "../../assets/images/about/about-04.svg";
import { ReactComponent as Circle } from "../../assets/images/circle.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Triangle } from "../../assets/images/triangle.svg";
import "./style.css";

export default function About() {
  return (
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
                تتمتع المؤسسة بخبرة ومعرفة تراكمية متخصصة في مجال إدارة الأملاك
                العقارية لأكثر من 20 عاما. تشمل مستشارين عقاريين وفني صيانة بالإضافة
                إلى فريق محاسبة، ويعتبر فريق العمل متكاملا لدراسة العقار
                ومقارنته بالسوق، وتحديد مدى الدخل المتوقع وتقييم فرص زيادة دخل
                العقار والتحسينات المطلوبة، مع توافير فريق صيانة لتقليل
                التكاليف، بالإضافة إلى وجود برامج متخصصة لإدارة الوحدات العقارية
                تناسب احتياجات العميل, حيث تهدف مؤسسة غايات لإدارة الأملاك لأعلى
                عائد لملاك العقارات وحصول المستأجرين أفضل منتج.
              </p>
            </div>
          </Fade>
          <div className="about-list">
            <div className="list-item">
              <Slide right>
                <IconAbout01 />
                <h3>الخبرة و المعرفة</h3>
                <p>
                  تتمتع المؤسسة بخبرة ومعرفة تراكمية متخصصة في مجال إدارة
                  الأملاك العقارية لأكثر من 20 عام. كما انه لدى المؤسسة فريق عمل
                  متكامل لدراسة العقار ومقارنته بالسوق، وتحديد مدى الدخل المتوقع
                  وتقييم فرص زيادة دخل العقار والتحسينات المطلوبة، مع إمكانية
                  توفير فريق صيانه، بالأضافة إلي إدارة الوحداة العقارية التأجير
                  لفترات تناسب العميل.
                </p>
              </Slide>
            </div>
            <div className="list-item">
              <Slide left>
                <IconAbout02 />
                <h3>لماذا تختارنا</h3>
                <p>
                  إن تسليم إدارة عقارك لمؤسسة متخصصة مثل مؤسسة غايات لإدارة
                  الأملاك له عدة فوائد، على سبيل المثال، تحسين تشغيل العقار مما
                  يحسن العائد ويحقق التشغيل الأمثل لعقارك، متابعة المستأجرين
                  والتواصل معهم بشكل مباشر لراحة وتفرغ المالك لأعماله الأخرى،
                  تقليل تكاليف الصيانة، حيث تستفيد من العمالة الخاصة بمكتب غايات
                  لإدارة الأملاك.
                </p>
              </Slide>
            </div>
            <div className="list-item">
              <Slide right>
                <IconAbout03 />
                <h3>علاقات المؤسسة فى السوق</h3>
                <p>
                  تتمتع مؤسسة غايات لإدارة الأملاك بعلاقات جيدة في السوق العقاري
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
                  تهدف مؤسسة غايات لإدارة الأملاك لأعلى عائد لملاك العقارات
                  وحصول المستأجرين علي أفضل منتج.
                </p>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
