// ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    content: "",
  });
  const [status, setStatus] = useState("");

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

  return (
    <section id="contact">
      <h4 id="formTitle">צור קשר</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
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
            required
          />
        </div>

        <button type="submit" class="clickable highlight">
          שלח
        </button>
        {status && <p className={statusClass}>{statusText}</p>}
      </form>
    </section>
  );
}
