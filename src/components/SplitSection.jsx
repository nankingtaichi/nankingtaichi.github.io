import React from "react";
import "./SplitSection.css";
import BrushFrame from "./BrushFrame";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, y: 50 }} // starting state
          whileInView={{ opacity: 1, y: 0 }} // when scrolled into view
          viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
          transition={{ duration: 0.6 }} // animation duration
        >
          <h2>{title}</h2>
          <p>{text}</p>{" "}
        </motion.div>

        <div className="button-row">
          <BrushFrame fill={false}>
            <div>
              <a className="pill-button clickable" href={button1Link}>
                {button1Text}
              </a>
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
