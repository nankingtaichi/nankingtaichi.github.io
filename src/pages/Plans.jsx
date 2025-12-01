import CalendarIcon from "../assets/graphics/plans/calendar.svg?react";
import MoneyIcon from "../assets/graphics/plans/shekel.svg?react";
import locationIcon from "../assets/graphics/plans/location.svg?react";
import scheduleIcon from "../assets/graphics/plans/schedule.svg?react";
import audienceIcon from "../assets/graphics/plans/audience.svg?react";
import BulletedLine from "../components/BulletedLine";
import ArrowDownIcon from "../assets/graphics/plans/arrow-down.svg?react";
import taichiPhoto from "../assets/graphics/plans/taichi.jpg";
import shingiPhoto from "../assets/graphics/plans/private.png";
import privatePhoto from "../assets/graphics/plans/private.png";
import "./Plans.css";
import Title from "../components/title";

export default function Contact() {
  return (
    <div className="page">
      <div className="mycard">
        <div>
          <Title text={"לוח שיעורים"} />

          <BulletedLine icon={audienceIcon}>
            השיעורים מתאימים לכל הרמות ומיועדים לבני 20 ומעלה.{" "}
          </BulletedLine>
          <BulletedLine icon={locationIcon}>
            השיעורים מתקיימים בדוג'ו ייעודי שממוקם{" "}
            <a
              className="hyperlink"
              href="https://www.google.com/maps/place/קדימה+צורן"
              target="_blank"
              rel="noopener noreferrer"
            >
              בקדימה צורן
            </a>
            .
          </BulletedLine>
          <BulletedLine icon={scheduleIcon}>
            לקביעת שיעור ניתן לפנות ל-
            <a
              className="hyperlink"
              href="https://wa.me/972584587058"
              target="_blank"
              rel="noopener noreferrer"
            >
              058-458-7058
            </a>{" "}
            או להשאיר פרטים{" "}
            <a
              className="hyperlink"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                });
              }}
            >
              בתחתית העמוד↓
            </a>
          </BulletedLine>
        </div>
      </div>
      <div id="plans" className="mycard padded">
        <LessonPlan
          title="טאי צ'י ו-צ'י קונג"
          img={taichiPhoto}
          items={[
            { icon: CalendarIcon, text: "ימי א' 19:30 - 18:00" },
            { icon: MoneyIcon, text: 'תשלום חודשי: 400 ש"ח' },
          ]}
        />
        <LessonPlan
          title="שינג אי ו-פה קואה"
          img={shingiPhoto}
          items={[
            { icon: CalendarIcon, text: "ימי ד' 20:00 - 18:00" },
            { icon: MoneyIcon, text: 'תשלום חודשי: 400 ש"ח' },
          ]}
        />
        <LessonPlan
          title="שיעורים אישיים"
          img={privatePhoto}
          items={[
            { icon: CalendarIcon, text: "כל ימי ושעות השבוע" },
            { icon: MoneyIcon, text: 'תשלום למפגש: 150 ש"ח' },
          ]}
        />
      </div>
    </div>
  );
}

function ContactButton({ children }) {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div onClick={handleClick} className="hyperlink">
      {children}
    </div>
  );
}

function LessonPlan({ title, img, items }) {
  return (
    <div className="lesson-plan">
      <div className="lesson-plan-title">{title}</div>

      <div
        className="lesson-plan-img-wrapper"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="lesson-plan-overlay">
          {items.map((item, i) => (
            <BulletedLine key={i} icon={item.icon}>
              {item.text}
            </BulletedLine>
          ))}
        </div>
      </div>
    </div>
  );
}
