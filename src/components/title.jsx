import LineSvg from "../assets/line.svg?react";
import "./title.css";

export default function Title({ text }) {
  return (
    <div className="title-wrapper">
      <h2 className="title">{text}</h2>
      <LineSvg className="title-line" />
    </div>
  );
}
