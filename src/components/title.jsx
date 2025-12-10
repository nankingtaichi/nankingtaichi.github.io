import LineSvg from "../assets/graphics/misc/line.svg?react";
import "./title.css";

export default function Title({
  text = null,
  subtitle = null,
  className = "",
  center = false,
}) {
  return (
    <div
      className={`title-wrapper ${className} ${center ? "center-title" : ""}`}
    >
      {text == null ? (
        <></>
      ) : (
        <>
          {" "}
          <h2 className="lined-title">{text}</h2>
          <LineSvg className="title-line" />
        </>
      )}
      {subtitle && <h4>{subtitle}</h4>}
    </div>
  );
}
