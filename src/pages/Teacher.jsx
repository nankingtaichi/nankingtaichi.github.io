import Title from "../components/title";
import teacherPhoto from "../assets/graphics/teacher/teacher2.png";
import dan1Photo from "../assets/graphics/teacher/dan1.svg";
import dan2Photo from "../assets/graphics/teacher/dan2.svg";
import wingatePhoto from "../assets/graphics/teacher/wingate.svg";
import armyPhoto from "../assets/graphics/teacher/army.jpg";
import karatePhoto from "../assets/graphics/teacher/karate.jpg";
import taichiPhoto from "../assets/graphics/teacher/taichi2.png";
import dojoPhoto from "../assets/graphics/teacher/school2.jpg";
import libraryPhoto from "../assets/graphics/teacher/meditation.jpg";
import BulletList from "../components/BulletList";
import "./Teacher.css";

export default function Teacher() {
  return (
    <div className="teacher-page page">
      <Title text="אפי דינר" subtitle="מייסד ומורה בית הספר"></Title>

      <img src={teacherPhoto} alt="Teacher" className="teacher-photo" />

      <div id="teacher-top-graphic">
        <div className="transition-wrapper" id="teacher-transition-wrapper">
          <div className="transition-peak"></div>
          <div className="transition-fill"></div>
        </div>
        <div id="" className="bamboo-left bamboo"></div>
        <div id="" className="bamboo-right bamboo"></div>
      </div>

      <div className="mycard padded padded-top">
        <div className="card-info">
          <p>
            שמי אפי.<br></br>
            אני לומד ומתאמן מאז 1981.
          </p>
          <br></br>
          <b>תקופת האומנויות היפניות</b>
          <p>
            תחילת דרכי באומנויות הלחימה הייתה באומנויות היפניות. עסקתי כ־12 שנה
            באומנויות אלו:
          </p>

          <BulletList>
            <>
              קארטה – שוטוקאן (Shotokan) – דאן 1
              <img src={dan1Photo} alt="Dan 1" className="dan-icon" />
            </>
            <>
              איאיידו (Musō Shinden-ryū ו-Seitai) – דאן 2
              <img src={dan2Photo} alt="Dan 2" className="dan-icon" />
            </>
            <>אייקידו – בעיקר בשיטת קינומיצ׳י (Kinomichi)</>
          </BulletList>
        </div>

        <img src={karatePhoto} className="card-graphic padded" />
      </div>
      <div>
        <div className="mycard padded flipped">
          <div className="card-info">
            <b>שירותי הצבאי</b>
            <p>
              שירתתי כמא״גיסט בגדוד 13 בחטיבת גולני. בחלק ניכר מהשירות שירתתי
              בלבנון, בעיר צידון ובמארבים על נהר אל-אוואלי. לאחר שהתפנינו לרצועת
              הביטחון, מאסתי בלחימה ללא תכלית, ולאחר שלושה חודשים בכלא צבאי
              המשכתי שירות לא משמעותי עד תום הזמן, כולל.
            </p>
          </div>
          <img src={armyPhoto} className="card-graphic padded"></img>
        </div>
        <div className="mycard padded">
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
              <p>
                בשנת 1992 הוסמכתי במכון וינגייט
                <img src={wingatePhoto} alt="Dan 1" className="dan-icon" />{" "}
                להדרכת לחימה סינית וב-2004 פתחתי את בית הספר שלי שפועל עד עתה.
              </p>
            </div>
          </div>
          <img src={taichiPhoto} className="card-graphic padded"></img>
        </div>

        <div className="mycard padded flipped">
          <div className="card-info">
            <div>
              <p>מ-1989, בנוסף לאומנויות הלחימה, אני עוסק בלימוד רציף של:</p>

              <BulletList>
                <>
                  אנתרופולוגיה – בעיקר בענפים הראשונים – התפתחות המין האנושי
                  והתפתחות התרבויות
                </>
                <>
                  דתות ותיאולוגיה – נצרות, אסלאם, דתות מהמזרח הרחוק ובעיקר יהדות
                </>
                <>אסטרונומיה – אסטרופיזיקה ובעיקר קוסמולוגיה</>
              </BulletList>
            </div>
          </div>

          <img
            src={dojoPhoto}
            className="card-graphic padded"
            alt="בית הספר שלי בשרון"
          />
        </div>
        <div className="mycard padded">
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
                <>השער לגן עדן – מרשל אפלוויט</>
                <>המשפחה – אן המילטון</>
                <>נקסום – קית׳ רניירי</>
                <>נאות סמדר – יוסף ספרא ומרבית הקיבוצים</>
                <>לב טהור – שלמה הלברנץ</>
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
