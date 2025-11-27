import React from "react";
import BulletedLine from "./BulletedLine";
import BulletIcon from "../assets/graphics/misc/leafBullet.svg?react";

export default function BulletList({ children }) {
  return (
    <div>
      {React.Children.map(children, (child, i) => (
        <BulletedLine key={i} icon={BulletIcon}>
          {child}
        </BulletedLine>
      ))}
    </div>
  );
}
