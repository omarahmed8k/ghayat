import React from "react";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import certificate1 from "../../assets/images/certificate/certificate1.jpg";
import certificate2 from "../../assets/images/certificate/certificate2.jpg";
import certificate3 from "../../assets/images/certificate/certificate3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "./style.css";

export default function Certificates() {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <Swiper
        dir="ltr"
        slidesPerView={3}
        spaceBetween={15}
        navigation
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={certificate1} alt="certificate" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate2} alt="certificate" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={certificate3} alt="certificate" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
