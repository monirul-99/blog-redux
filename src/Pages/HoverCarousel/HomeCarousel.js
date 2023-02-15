import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Cover1 from "../../Images/Cover 1.jpg";
import Cover2 from "../../Images/Cover 2.jpg";
import Cover3 from "../../Images/Cover 3.jpg";
import Cover4 from "../../Images/Cover 4.jpg";
import Cover5 from "../../Images/Cover 5.jpg";
import Cover6 from "../../Images/Cover 6.jpg";
import Cover7 from "../../Images/Cover 7.jpg";
import Cover8 from "../../Images/Cover 8.jpg";
import Cover9 from "../../Images/Cover 9.jpg";

const HomeCarousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <aside>
            <img src={Cover1} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover2} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover3} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover4} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover5} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover6} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover7} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover8} alt="" />
          </aside>
        </SwiperSlide>
        <SwiperSlide>
          <aside>
            <img src={Cover9} alt="" />
          </aside>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeCarousel;
