import Title from "../components/title";
import teacherPhoto from "../assets/graphics/teacher/teacher.jpg";
import dan1Photo from "../assets/graphics/teacher/dan1.svg";
import dan2Photo from "../assets/graphics/teacher/dan2.svg";
import armyPhoto from "../assets/graphics/teacher/army.jpg";
import karatePhoto from "../assets/graphics/teacher/karate.jpg";
import schoolPhoto from "../assets/graphics/teacher/school.jpg";
import libraryPhoto from "../assets/graphics/teacher/library.jpg";
import BulletList from "../components/BulletList";
import "./Teacher.css";

export default function Teacher() {
  return (
    <div className="teacher-page page">
      <Title text="אפי דינר" subtitle="מייסד ומורה בית הספר"></Title>

      <img src={teacherPhoto} alt="Teacher" className="teacher-photo" />

      <div className="trophies-wrapper">
        {/* absolute overlay */}

        <div className="trophies-row">
          <div id="teacher-transition" className="top-transition"></div>
          <div id="bamboo-left" className="top-transition bamboo"></div>
          <div id="bamboo-right" className="top-transition bamboo"></div>

          <div className="trophy">
            <img src={dan1Photo} alt="" />
            <div className="trophy-text">דרגת דאן 1 בקראטה</div>
          </div>

          <div className="trophy">
            <img src="/path/to/trophy2.png" alt="" />
            <div className="trophy-text">תיאור 2</div>
          </div>

          <div className="trophy">
            <img src={dan2Photo} alt="" />
            <div className="trophy-text">דרגת דאן 2 באייקידו</div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "50px" }}>
        <div className="mycard padded">
          <div className="card-info">
            <p>
              שמי אפי.<br></br>
              אני לומד ומתאמן מאז 1981.
            </p>
            <b>שירותי הצבאי:</b>
            <p>
              שירתתי כמג״יסט בגדוד 13 בחטיבת גולני. בחלק ניכר מהשירות שירתתי
              בלבנון, בעיר צידון ובמארבים על נהר האלמלי. לאחר שהתפנינו לרצועת
              הביטחון, מאסתי בלחימה, ולאחר שלושה חודשים בכלא צבאי המשכתי שירות
              לא משמעותי עד תום הזמן הכולל.
            </p>
          </div>
          <img src={armyPhoto} className="card-graphic padded"></img>
        </div>
        <div className="mycard padded flipped">
          <div className="card-info">
            <div>
              <p>
                עם השחרור חזרתי לאימונים סדירים בקראטה, ולאחר זמן קצר גיליתי את
                האומנויות הסיניות הפנימיות, ומאז עד היום אני מתאמן בצורה סדירה
                ורציפה באומנויות אלו:
              </p>

              <BulletList>
                <>טאי צ׳י צ׳ואן</>
                <>שינג אי</>
                <>פה-קואה</>
                <>כלי נשק מסורתיים</>
              </BulletList>
            </div>
          </div>
          <img src={karatePhoto} className="card-graphic padded"></img>
        </div>
        <div className="mycard padded">
          <div className="card-info">
            <div>
              <p>ב-2004 פתחתי את בית הספר שלי בשרון, שפועל עד עתה.</p>

              <p>מ-1989, בנוסף לאומנויות הלחימה, אני עוסק בלימוד רציף של:</p>

              <BulletList>
                <>אנתרופולוגיה – ביולוגית, חברתית, שפות.</>
                <>
                  ארכיאולוגיה – בעיקר בשני הענפים הראשונים – התפתחות המין האנושי
                  והתפתחות התרבויות.
                </>
                <>
                  דתות ותיאולוגיה – נצרות, אסלאם, דתות מהמזרח הרחוק ובעיקר
                  יהדות.
                </>
                <>אסטרונומיה – אסטרופיזיקה ובעיקר קוסמולוגיה.</>
              </BulletList>
            </div>
          </div>

          <img
            src={schoolPhoto}
            className="card-graphic padded"
            alt="בית הספר שלי בשרון"
          />
        </div>
        <div className="mycard padded flipped">
          <div className="card-info">
            <div>
              <p>
                שנים רבות חקרתי ולמדתי כתות מתוך ראייה שהן המיקרו האמיתי של
                ההתנהגות האנושית. קיימות מאות כתות בארץ ובעולם. הן מזינות
                ומגבירות את פחדי האדם מבדידות ומחוסר תכלית. לפי אומנויות הלחימה,
                אדם צריך לבנות את עולמו ללא תלות באחרים וללא ניתוק מהחברה.
              </p>

              <p>בין הכתות שלמדתי:</p>

              <BulletList>
                <>מקדש העם – ג׳ים ג׳ונס</>
                <>סיינטולוגיה – ל. רון האברד</>
                <>השער לגן עדן – מרשל אעלוויט</>
                <>המשפחה – אן המילטון</>
                <>נקסום – קית׳ כיניירי</>
                <>נאות סמדר – יוסף ספרא ומרבית הקיבוצים</>
                <>לב טהור – שלמה הלברנף</>
                <>אושו – רג׳ניש צ׳נדרה</>
                <>הדוידים – דיוויד כורש</>
                <>מנסון – צ׳רלס מנסון</>
                <>קונדליני יוגה – יוגי בהאג׳אן / גורו ג׳אגט</>
              </BulletList>
            </div>
          </div>

          <img
            src={libraryPhoto}
            className="card-graphic padded"
            alt="חקר כתות"
          />
        </div>
      </div>
    </div>
  );
}
