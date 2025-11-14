import { useState, useRef, useEffect } from "react";
import "./Collapsible.css";

export default function Collapsible({ title, children }) {
  const [open, setOpen] = useState(false);
  const [rot, setRot] = useState(0);
  const contentRef = useRef(null);

  const toggle = () => {
    setOpen((prev) => !prev);
    setRot((prev) => prev - 180);
  };

  useEffect(() => {
    const content = contentRef.current;
    if (open) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = "0px";
    }
  }, [open]);

  return (
    <div className="collapsible" dir="rtl">
      <div className="collapsible-header" onClick={toggle}>
        <svg
          className={`ying ${open ? "open" : ""}`}
          style={{ transform: `rotate(${rot}deg)` }}
          viewBox="0 0 512 512"
        >
          <path d="M257.65.01c-.55-.01-1.1-.01-1.65-.01s-1.1,0-1.65.01c-69.93.89-126.35,57.85-126.35,127.99s57.31,128,128,128,128,57.31,128,128-56.42,127.1-126.35,127.99c140.62-.88,254.35-115.16,254.35-255.99S398.27.89,257.65.01ZM224,128c0-17.67,14.33-32,32-32s32,14.33,32,32-14.33,32-32,32-32-14.33-32-32Z" />
        </svg>
        <h2 className="title">{title}</h2>
      </div>

      <div ref={contentRef} className="collapsible-content">
        {children}
      </div>
    </div>
  );
}
