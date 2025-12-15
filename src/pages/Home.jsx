import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import OpeningVideo from "../assets/graphics/home/opener compressed.webm"; // adjust path
import OpeningVideoPoser from "../assets/graphics/home/opener-poster.webp"; // adjust path
import TaichiImg from "../assets/graphics/home/taichi.webp";
import QigongImg from "../assets/graphics/home/qigong.webp";
import TeacherImg from "../assets/graphics/home/teacher.webp";

import Collapsible from "../components/collapsible";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Title from "../components/title";
import Logo from "../assets/graphics/home/Banner.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SplitSection from "../components/SplitSection";
import BrushFrame from "../components/BrushFrame";
import ScrollHint from "../components/ScrollHint";

export default function Home() {
  //const images = ["./slideshow/img1", "./slideshow/img2", "./slideshow/img3"]ddfdfd;

  return (
    <div id="home-page" className="page">
      <ScrollHint></ScrollHint>
      <div className="fs-video-container">
        <video
          className="fs-video-container__video"
          autoPlay
          loop
          muted
          playsInline
          poster={OpeningVideoPoser}
          src={OpeningVideo}
          preload="metadata"
        />
        <div className="fs-video-container__overlay" />
        <div className="fs-video-container__logo-wrapper">
          <img src={Logo} alt="Logo" className="fs-video-container__logo" />
          <div className="fs-video-container__subtitle">
            בית הספר לאומנויות לחימה
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white", zIndex: 20 }}>
        <div id="about-school" className="page-wide-wrapper">
          {/* absolute overlay */}
          <div className="transition-wrapper" id="nanking-transition">
            <div className="transition-peak short"></div>
          </div>
          <div className="page-wide-content">
            <Title text="נאנקינג טאי צ'י" center={true}></Title>
            <h5>
              בית הספר פועל מאז 2004 בהוראת המורה אפי דינר, ומתמחה באומנויות
              הלחימה הרכות-הפנימיות: טאי צ’י, צ’י קונג, שינג אי, פה קואה וכלי
              נשק מסורתיים.
            </h5>
          </div>
        </div>

        <div id="about-dojo" className="page-wide-wrapper">
          {/* absolute overlay */}

          <div className="page-wide-content">
            השיעורים מתקיימים ביישוב קדימה צורן, סמוך לכביש 4 בין רעננה לנתניה.
            אולם האימונים מעוצב בסגנון מסורתי ומיועד רק לשיעורים באומנויות
            הלחימה.{" "}
          </div>

          <div
            className="transition-wrapper on-top"
            id="teacher-transition-wrapper"
          >
            <div className="transition-peak short"></div>
            <div className="ying-yang-base"></div>
            <div className="ying-yang-top"></div>
          </div>
          <div id="" className="bamboo-left top-transition bamboo"></div>
          <div id="" className="bamboo-right top-transition bamboo"></div>
        </div>

        <SplitSection
          title="טאי צ'י"
          text="אומנות לחימה סינית, השייכת לענף אומנויות הלחימה הרכות הפנימיות. אומנות המעבירה דרך תנועה ומדיטציה את עקרונות הדאואיזם, הרפואה הסינית והלחימה כדרך לתרגול קונג פו לחיזוק הגוף ולהתפתחות נפשית ומנטלית. "
          leftImage={TaichiImg}
          button1Text="קריאה נוספת"
          button1Link="/taichi"
          button2Text="לוח שיעורים"
          button2Link="/plans"
        />

        <SplitSection
          title="צ'י קונג"
          text="שם כולל לשיטות ולטכניקות תנועה לטיפול, לתחזוקה ולשיפור תפקוד הגוף. באופן טבעי כשתחושת הגוף טובה לרוב גם תחושת הנפש טובה יותר. "
          leftImage={QigongImg}
          button1Text="קריאה נוספת"
          button1Link="qigong"
          button2Text="לוח שיעורים"
          button2Link="/plans"
        />

        <div id="about-teacher-preview" className="page-wide-wrapper">
          <Title text="אפי דינר" subtitle="מייסד ומורה בית הספר"></Title>
          <BrushFrame className="image-with-button-frame">
            <div id="image-with-button">
              <img src={TeacherImg}></img>
              <BrushFrame
                id="about-teacher-button"
                color="var(--accent)"
                backgroundColor="var(--background)"
              >
                <div>
                  <a className="pill-button clickable" href={"/teacher"}>
                    על המורה
                  </a>
                </div>
              </BrushFrame>
            </div>
          </BrushFrame>
        </div>
      </div>
    </div>
  );
}
