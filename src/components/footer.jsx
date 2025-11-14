import React from "react";
import "./Footer.css";
import ContactForm from "./contactform";

export default function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-content">
        <div className="footer-contact-links">
          <p class="footer-link">
            <a
              href="https://www.google.com/maps/place/קדימה+צורן"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <i className="fa-solid fa-location-dot"></i>קדימה צורן
            </a>
          </p>
          <p class="footer-link">
            <a href="tel:+972504587058" className="map-link">
              <i className="fa-solid fa-phone"></i>058-458-7058
            </a>
          </p>

          <p class="footer-link">
            <a
              href="https://wa.me/972584587058"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <i className="fa-brands fa-whatsapp"></i>058-458-7058
            </a>
          </p>
          <p class="footer-link">
            <a href="mailto:traditionalart.il@gmail.com" className="map-link">
              <i className="fa-solid fa-envelope"></i>
              traditionalart.il@gmail.com
            </a>
          </p>
        </div>
        <ContactForm></ContactForm>

        <div className="footer-media-links">
          <a
            href="https://www.youtube.com/@NankingTaiChi"
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
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
