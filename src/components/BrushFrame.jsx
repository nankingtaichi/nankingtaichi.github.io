import BrushSide from "../assets/graphics/misc/stroke.svg?react";
import BrushSideVertical from "../assets/graphics/misc/strokeVertical.svg?react";
import "./brush-frame.css";

const SIDES = [
  { side: "top", horizontal: true, pos: { top: 0, left: "50%" } },
  { side: "bottom", horizontal: true, pos: { top: "100%", left: "50%" } },
  { side: "left", horizontal: false, pos: { top: "50%", left: 0 } },
  { side: "right", horizontal: false, pos: { top: "50%", left: "100%" } },
];

export default function BrushFrame({
  children,
  id = null,
  className = "",
  fill = true,
  overshoot = 12,
  thickness = 7,
  color = "var(--accent)",
}) {
  return (
    <div
      id={id || undefined}
      className={`brush-frame-wrapper ${className} ${fill ? "filled" : ""}`}
      style={fill ? { background: color } : undefined}
    >
      {SIDES.map(({ side, horizontal, pos }) => {
        const sizeStyle = horizontal
          ? { width: `calc(100% + ${overshoot}px)`, height: `${thickness}px` }
          : { width: `${thickness}px`, height: `calc(100% + ${overshoot}px)` };

        const translateX = "-50%";
        const translateY = "-50%";

        const Brush = horizontal ? BrushSide : BrushSideVertical;

        return (
          <Brush
            key={side}
            className={`brush-stroke ${side}`}
            style={{
              ...sizeStyle,
              ...pos,
              transform: `translate(${translateX}, ${translateY})`,
              fill: color,
            }}
          />
        );
      })}
      <div
        className="brush-frame-content"
        style={{ padding: `${thickness / 2}px` }}
      >
        {children}
      </div>
    </div>
  );
}
