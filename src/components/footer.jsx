import React from "react";
import "./Footer.css";
import ContactForm from "./contactform";

export default function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-content">
        <div className="footer-right">
          <h3>נאנקינג טאי צ'י</h3>
          <p>הרצל 62, קדימה צורן (איזור השרון)</p>
          <p>
            <i className="fas fa-phone"></i> ‎+972-50-123-4567
          </p>
        </div>
        <ContactForm></ContactForm>

        <div className="footer-left">
          <a
            href="https://wa.me/972501234567"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
