// ContactForm.jsx
import React, { useRef, useState } from "react";
import "./ContactForm.css";
import BrushFrame from "./BrushFrame";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });
  const [status, setStatus] = useState("");
  const formRef = useRef(null);
  const [tick, setTick] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = {
      access_key: "acc9323e-3a28-44cc-af0a-6e2b2583e9ef",
      ...formData,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        setFormData({ name: "", phone: "", content: "" });
        setTick((x) => x + 1);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  let statusText = "";
  let statusClass = "";
  if (status === "sending") {
    statusText = "שולח...";
    statusClass = "status-sending";
  } else if (status === "sent") {
    statusText = "ההודעה נשלחה!";
    statusClass = "status-success";
  } else if (status === "error") {
    statusText = "אירעה שגיאה בשליחת ההודעה.";
    statusClass = "status-error";
  }

  const formValid =
    formRef.current &&
    formRef.current.checkValidity() &&
    formData.name.trim().length > 0;

  return (
    <BrushFrame overshoot={20} fill={false} id="contact">
      <section>
        <h4 id="formTitle">צור קשר</h4>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="שם"
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="טלפון"
              required
            />
          </div>

          <div className="input-wrapper">
            <textarea
              name="content"
              value={formData.content}
              onChange={(e) => {
                handleChange(e);
                e.target.style.height = "auto"; // reset height
                e.target.style.height = e.target.scrollHeight + "px"; // adjust to content
              }}
              placeholder="הודעה"
            />
          </div>

          <BrushFrame color={formValid ? "var(--accent)" : "var(--primary)"}>
            <button
              type="submit"
              class={`submit clickable ${formValid ? "" : "invalid"}`}
            >
              שלח
            </button>
          </BrushFrame>

          {status && <p className={statusClass}>{statusText}</p>}
        </form>
      </section>
    </BrushFrame>
  );
}
