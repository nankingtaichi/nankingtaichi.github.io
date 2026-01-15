import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Banner from "../assets/graphics/navbar/Banner.svg";
import BrushFrame from "./BrushFrame";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // shrink after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      id="mynavbar"
      bg="light"
      expand="md"
      sticky="top"
      className={`shadow-sm ${scrolled ? "shrink" : ""}`}
      expanded={expanded} // control the state
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Brand as={NavLink} to="/" className="brand-container">
          <img src={Banner} alt="Logo" id="logo" />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="overlay-collapse">
          <Nav className="ms-auto">
            <Nav.Link
              className="clickable"
              as={NavLink}
              to="/"
              end
              onClick={() => setExpanded(false)}
            >
              בית
            </Nav.Link>
            <Nav.Link
              className="clickable"
              as={NavLink}
              to="/teacher"
              onClick={() => setExpanded(false)}
            >
              המורה
            </Nav.Link>
            <Nav.Link
              className="clickable"
              as={NavLink}
              to="/taichi"
              onClick={() => setExpanded(false)}
            >
              טאי צ'י
            </Nav.Link>
            <Nav.Link
              className="clickable"
              as={NavLink}
              to="/qigong"
              onClick={() => setExpanded(false)}
            >
              צ'י קונג
            </Nav.Link>

            <Nav.Link
              className="clickable"
              as={NavLink}
              to="/plans"
              onClick={() => setExpanded(false)}
            >
              <BrushFrame overshoot={8}>לוח שיעורים</BrushFrame>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link
          href="https://www.youtube.com/@NankingTaiChi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="nav-icon" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
