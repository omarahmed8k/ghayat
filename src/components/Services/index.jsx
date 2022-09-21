import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import services from "../../assets/images/services/services-img.png";
import { ReactComponent as Line } from "../../assets/images/heading-line.svg";
import { ReactComponent as Circle } from "../../assets/images/circle.svg";
import { ReactComponent as Dots } from "../../assets/images/dots.svg";
import { ReactComponent as Triangle } from "../../assets/images/triangle.svg";
import { ReactComponent as Service01 } from "../../assets/images/services/services-01.svg";
import { ReactComponent as Service02 } from "../../assets/images/services/services-02.svg";
import { ReactComponent as Service03 } from "../../assets/images/services/services-03.svg";
import { ReactComponent as SubService01 } from "../../assets/images/services/sub-services-01.svg";
import { ReactComponent as SubService02 } from "../../assets/images/services/sub-services-02.svg";
import { ReactComponent as SubService03 } from "../../assets/images/services/sub-services-03.svg";
import { ReactComponent as SubService04 } from "../../assets/images/services/sub-services-04.svg";
import { ReactComponent as SubService05 } from "../../assets/images/services/sub-services-05.svg";

import "./style.css";

export default function Services(props) {
  const { mode } = props;
  return (
    <div className={`services ${mode === "light" ? "light" : ""}`}>
      <Circle className="circle" />
      <Dots className="dots-left" />
      <Dots className="dots-right" />
      <Triangle className="triangle" />
      <div className="container">
        <div className="services-flex">
          <Fade bottom>
            <div className="services-content">
              <div className="heading-title">
                <h2 className="title" data-title="ماذا نقدم">
                  خدماتنا
                </h2>
                <Line />
              </div>
            </div>
          </Fade>
          <div className="services-list">
            <div className="list-item">
              <Slide right>
                <img src={services} alt="background" />
              </Slide>
            </div>
            <div className="list-item">
              <Slide left>
                <h4>تقدم مؤسسة غايات لإدارة الأملاك العديد من الخدمات</h4>
                <p>
                  إدارة الأملاك العقارية التجارية والسكنية (عمائر، فلل، شقق)
                  بنسبة تنافسية من الدخل، أو الصيانة العقار بصفة دورية أو حسب
                  الحاجة، بالإضافة لإمكانية عمل دارسات استشارية لتقييم العقار
                  وجودته والعائد المتوقع للعقارات المماثلة،
                </p>
                <div className="list-service">
                  <div className="service">
                    <Service01 />
                    <p>استشارات</p>
                  </div>
                  <div className="service">
                    <Service02 />
                    <p>ادارة</p>
                  </div>
                  <div className="service">
                    <Service03 />
                    <p>صيانة</p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay
            navigation
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="swiper-item">
                <SubService01 />
                <h4>إدارة محاسبية وقانونية</h4>
                <p>
                  يتم توثيق كل المعاملات المالية حسب نظام (إيجار) وبطرق محاسبية
                  وفقا للمعايير المحاسبيه المعتمدة في المملكة لضمان حقوق كل
                  الأطراف، كما تتولى مؤسسة غايات متابعة أي إشكاليات نظامية عبر
                  التعاقد مع مكاتب قانونية مختصة بأشكاليات العقار، وتزويد المالك
                  بتقارير سنوية عن نسب التشغيل والعائد.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService02 />
                <h4>توثيق عقود الإيجار بصورة رسمية</h4>
                <p>
                  لضمان راحة مالك العقار تحرص مؤسسة غايات على تسجيل كافة العقود
                  بصفة رسمية في منصة إيجار لضمان حقوق جميع الأطراف، حيث إن نظام
                  (إيجار) يوثق العقود وتفعيلها كسندات تنفيذية بحيث تقلص النزاعات
                  القانونية مع البحث عن أفضل المستأجرين المحتملين بناءً على رغبة
                  المالك
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService03 />
                <h4>تسويق وتأجير العقارات</h4>
                <p>
                  من أجل ضمان الحصول على أفضل عائد استثماري تحرص المؤسسة على
                  دراسة العقار وتقييم عوائده بناءً على العقارات المماثلة القريبة
                  للحصول على أفضل إيجار تنافسي وسرعة تشغيل العقار، كما قد نقدم
                  بعض الاقتراحات التي تساهم في تطوير العقار
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService04 />
                <h4>متابعة المستأجرين وتحصيل الأجارات</h4>
                <p>
                  تتولى مؤسسة غايات تحصيل الإيجارات من المستأجرين حسب الأتفاق مع
                  المالك والمستاجر، ويتم قيد جميع المعاملات الماية بنظام محاسبي
                  لضمان الحقوق، وفي حالة التخلف عن السداد تتولى المؤسسة متابعة
                  جميع إشكاليات القضية لحين الانتهاء من السداد.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService05 />
                <h4>صيانة العقارات</h4>
                <p>
                  تتولى مؤسسة غايات فحص العقار قبل أوبعد الايجار لضمان سلامته،
                  وفي حال وجود أي عيوب يبلغ يتولى قسم الصيانة إصلاحه، كما تتولى
                  المؤسسة المتابعة مع المستأجر في حال حصو أي خلل، كما يمكننا
                  الفحص على جودة العقار في حال الرغبة في تقييمه.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
