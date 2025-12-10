import React from "react";
import "./SplitSection.css";

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
          <a className="pill-button outline" href={button1Link}>
            {button1Text}
          </a>
          <a className="pill-button filled" href={button2Link}>
            {button2Text}
          </a>
        </div>
      </div>
      <div
        className="split-left"
        style={{ backgroundImage: `url(${leftImage})` }}
      />
    </div>
  );
}
