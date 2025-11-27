import React from "react";
import "./BulletedLine.css";

export default function BulletedLine({ icon: Icon, children }) {
  return (
    <div className="bulleted-line">
      {Icon && <Icon className="bullet-icon" />}
      <span className="bullet-content">{children}</span>
    </div>
  );
}
