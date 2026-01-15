import React from "react";
import "./Footer.css";
import ContactForm from "./contactform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-content">
        <div className="footer-contact-links">
          <p className="footer-link">
            <a
              href="https://www.google.com/maps/place/קדימה+צורן"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <FontAwesomeIcon icon={faLocationDot} /> קדימה צורן
            </a>
          </p>

          <p className="footer-link">
            <a href="tel:+972584587058" className="map-link">
              <FontAwesomeIcon icon={faPhone} /> 058-458-7058
            </a>
          </p>

          <p className="footer-link">
            <a
              href="https://wa.me/972584587058"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> 058-458-7058
            </a>
          </p>

          <p className="footer-link">
            <a href="mailto:traditionalart.il@gmail.com" className="map-link">
              <FontAwesomeIcon icon={faEnvelope} /> traditionalart.il@gmail.com
            </a>
          </p>
        </div>

        <ContactForm />

        <div className="footer-contact-links">
          <p className="footer-link">
            <a
              href="https://www.youtube.com/@NankingTaiChi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} /> סרטוני לימוד ועוד
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
