import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  //const images = ["./slideshow/img1", "./slideshow/img2", "./slideshow/img3"]ddfdfd;

  return (
    <div className="home-page" dir="rtl">
      <div className="mycard">
        <header className="hero">
          <h1 className="hero-title">נאנקינג טאי צ'י </h1>
          <p className="hero-sub">בית הספר לאומנויות לחימה</p>
        </header>

        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
