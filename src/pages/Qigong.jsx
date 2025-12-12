import Title from "../components/title";
import "./taichi.css";
import TaichiImg from "../assets/graphics/taichi/taichi.png";
import Collapsible from "../components/collapsible";
import BulletList from "../components/BulletList";
import BrushFrame from "../components/BrushFrame";

export default function Qigong() {
  return (
    <div className="page">
      <div className="mycard padded">
        <div className="card-info">
          <Title text={"צ'י קונג"} />
          <BrushFrame color="var(--primary)" thickness="10">
            <div className="info-box">
              שם כולל לשיטות ולטכניקות תנועה לטיפול, לתחזוקה ולשיפור תפקוד הגוף.
              באופן טבעי כשתחושת הגוף טובה לרוב גם תחושת הנפש טובה יותר
            </div>
          </BrushFrame>
          <br></br>
          התרגול פיזי וכולל עמידות, תנוחות, תנופות ופיתולים, נשימה ומחשבה -
          מדיטציה.
          <br></br>
          <br></br>
          אנחנו מתרגלים 2 שיטות:
          <div style={{ paddingBottom: "0.5rem" }}></div>
          <BulletList>
            <>אי ג׳ין ג׳ינג – Yi Jin Jing</>
            <>שמונה חלקי רקמת הזהב – Ba Duan Jin</>
          </BulletList>
        </div>

        <img
          src={TaichiImg}
          className="card-graphic padded"
          id="taichiGraphic"
        ></img>
      </div>
    </div>
  );
}
