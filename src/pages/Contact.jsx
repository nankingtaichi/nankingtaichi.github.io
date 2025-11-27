import CalendarIcon from "../assets/graphics/plans/calendar.svg?react";
import MoneyIcon from "../assets/graphics/plans/shekel.svg?react";
import BulletedLine from "../components/BulletedLine";
import ArrowDownIcon from "../assets/graphics/plans/arrow-down.svg?react";

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: "3rem" }}></div>

      <div className="mycard padded">
        <div className="card-info">
          <b>שיעורי טאי צ'י - צ'י קונג</b>

          <BulletedLine icon={CalendarIcon}>ימי א' 18:00 - 19:00</BulletedLine>
          <BulletedLine icon={MoneyIcon}>תשלום חודשי 400 ש"ח</BulletedLine>

          <BookClassButton>קבע שיעור</BookClassButton>
        </div>
      </div>
    </>
  );
}

function BookClassButton({ children }) {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button className="book-class-button" onClick={handleClick}>
      {children} <ArrowDownIcon className="arrow-icon" />
    </button>
  );
}
