import { useRef, createRef } from "react";
import Title from "../components/title";
import "./taichi.css";
import TaichiImg from "../assets/graphics/taichi/taichi.jpg";
import Collapsible from "../components/collapsible";
import BrushFrame from "../components/BrushFrame";

export default function Taichi() {
  // Create a dictionary of refs keyed by IDs
  const collapsibleRefs = useRef({
    soft: createRef(),
    inner: createRef(),
    meditation: createRef(),
    combat: createRef(),
    kongfu: createRef(),
  });

  const jumpTo = (id) => {
    const targetRef = collapsibleRefs.current[id];
    if (!targetRef || !targetRef.current) return;

    targetRef.current.open();
    targetRef.current.scrollTo();
  };

  return (
    <div className="page">
      <div className="mycard padded">
        <div className="card-info">
          <Title text={"טאי צ'י"} />
          <BrushFrame color="var(--primary)" thickness="10">
            <div className="info-box">
              אומנות לחימה סינית, השייכת לענף{" "}
              <span className="hyperlink" onClick={() => jumpTo("soft")}>
                אומנויות הלחימה הרכות
              </span>{" "}
              <span className="hyperlink" onClick={() => jumpTo("inner")}>
                הפנימיות
              </span>
              . אומנות המעבירה דרך תנועה{" "}
              <span className="hyperlink" onClick={() => jumpTo("meditation")}>
                ומדיטציה
              </span>{" "}
              את עקרונות הדאואיזם, הרפואה הסינית{" "}
              <span className="hyperlink" onClick={() => jumpTo("combat")}>
                והלחימה
              </span>{" "}
              כדרך לתרגול{" "}
              <span className="hyperlink" onClick={() => jumpTo("kongfu")}>
                קונג פו{" "}
              </span>
              לחיזוק הגוף ולהתפתחות נפשית ומנטלית.
            </div>
          </BrushFrame>

          <br></br>

          <Collapsible ref={collapsibleRefs.current.soft} title="אומנויות רכות">
            שימוש בתנועות ובתנוחות בצורה ייחודית על מנת ליצור מבנים חזקים
            ובריאים. השימוש בתנופה דרך שכלול השימוש במרכז הבטן - טאן טיין מאפשר
            יכולות פיזיות גבוהות שמחזיקות עד גיל מבוגר עם שימוש מועט בשרירים.
          </Collapsible>
          <Collapsible
            ref={collapsibleRefs.current.inner}
            title="אומנויות פנימיות"
          >
            הרפואה הסינית אינה מרפאת מחלות. תפקידה החשוב והעיקרי לתרגל את הגוף
            ואת הנפש על פי עקרונות תנועה מסוימים שמותאמים למתרגל ונעשים בצורה
            מתונה הבונה את הגוף בהדרגה בהתאם לאופי גופו של המתרגל.
            <br></br>
            <br></br>
            צורת תרגול זו מגבירה את הרגישות של האדם לצרכים האישיים שלו ובכך
            משמשת כטיפול מונע שהולך ומתחדד במשך שנות התרגול.
          </Collapsible>
          <Collapsible ref={collapsibleRefs.current.meditation} title="מדיטציה">
            פיתוח ושכלול האפשרות לחשוב על מה שרוצים ולא לחשוב על מה שלא רוצים.
            תרגול אומנות לחימה פותח רווח בזמן בו עוזבים את מה שהיה ולא עסוקים
            במה שיהיה. חלון הזמן הזה משתכלל ונעשה להרגל כך שאוכל להשתמש בו גם
            ביום יום.
            <br></br>
            <br></br>
            שלב נוסף ומתקדם במדיטציה שמתפתח מהשלב הראשון הוא היכרות עמוקה עם
            הטבע האישי ועם הטבע הכללי.
          </Collapsible>
          <Collapsible ref={collapsibleRefs.current.combat} title="לחימה">
            לכל תנועה בקאטה מעל עשרה יישומים שנעים בין תגובות מהירות וחזקות
            בעלות אופי יאנגי לבין טכניקות של בריחים, הפלות ונקודות לחץ בעלות
            אופי ייני.
            <br></br>
            <br></br>
            מתרגל/לוחם של טאי צ’י צ’ואן רואה בתוקף בדרך כלל אדם שיצא מאיזון,
            ותפקידו של הלוחם להשתדל לפתור את המגע בטכניקות ייניות כדוגמת צ’ין נה
            ולמנוע פגיעה משמעותית בתוקף.
            <br></br>
            <br></br>
            במקרה והתוקף מזוהה כאדם שגרעינו שלילי השימוש יהיה בטכניקות יאנג
            כשהכוונה לפגיעה קיצונית ככל שיידרש.
          </Collapsible>
          <Collapsible ref={collapsibleRefs.current.kongfu} title="קונג פו">
            קונג - תרגול, עיסוק וכדומה.
            <br></br>
            פו - אדם.
            <br></br>
            <br></br>
            ניסיונו ושאיפתו של האדם להתפתח פיזית, נפשית ושכלית דרך עיסוק כלשהו.
            העיסוק אינו בהכרח אומנות לחימה.
          </Collapsible>
        </div>

        <div
          className="card-graphic padded background-image"
          id="taichiGraphic"
          style={{ backgroundImage: `url(${TaichiImg})` }}
        ></div>
      </div>
    </div>
  );
}
