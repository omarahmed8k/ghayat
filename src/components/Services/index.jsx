import { useTranslation } from "react-i18next";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
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
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import services from "../../assets/images/services/services-img.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "./style.css";

export default function Services(props) {
  const { t } = useTranslation();
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
                <h2 className="title" data-title={t("services.title2")}>
                  {t("services.title1")}
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
                <h4>
                  {t("services.desc1")}
                </h4>
                <p>
                  {t("services.desc2")}
                </p>
                <div className="list-service">
                  <div className="service">
                    <Service01 />
                    <p>
                      {t("services.service1")}
                    </p>
                  </div>
                  <div className="service">
                    <Service02 />
                    <p>
                      {t("services.service2")}
                    </p>
                  </div>
                  <div className="service">
                    <Service03 />
                    <p>
                      {t("services.service3")}
                    </p>
                  </div>
                </div>
              </Slide>
            </div>
          </div>

          <Swiper
            dir="ltr"
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
                <h4>
                  {t("services.card1title")}
                </h4>
                <p>
                  {t("services.card1desc")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService02 />
                <h4>
                  {t("services.card2title")}
                </h4>
                <p>
                  {t("services.card2desc")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService03 />
                <h4>
                  {t("services.card3title")}
                </h4>
                <p>
                  {t("services.card3desc")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService04 />
                <h4>
                  {t("services.card4title")}
                </h4>
                <p>
                  {t("services.card4desc")}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-item">
                <SubService05 />
                <h4>
                  {t("services.card5title")}
                </h4>
                <p>
                  {t("services.card5desc")}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
