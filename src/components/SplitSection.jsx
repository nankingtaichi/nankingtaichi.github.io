import React from "react";
import "./SplitSection.css";
import BrushFrame from "./BrushFrame";

export default function SplitSection({
  title,
  text,
  leftImage,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
}) {
  return (
    <div className="split-section">
      <div className="split-right">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="button-row">
          <BrushFrame fill={false}>
            <div>
              <div className="pill-button clickable" href={button1Link}>
                {button1Text}
              </div>
            </div>
          </BrushFrame>
          <BrushFrame>
            <div>
              <a className="pill-button clickable" href={button2Link}>
                {button2Text}
              </a>
            </div>
          </BrushFrame>
        </div>
      </div>
      <div
        className="split-left"
        style={{ backgroundImage: `url(${leftImage})` }}
      />
    </div>
  );
}
