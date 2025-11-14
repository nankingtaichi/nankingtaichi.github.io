import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      id="mynavbar"
      bg="light"
      expand="md"
      sticky="top"
      className="shadow-sm"
      expanded={expanded} // control the state
    >
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="https://placehold.co/40x40"
            alt="Logo"
            className="me-2 rounded-circle"
          />
          נאנקינג טאי צ'י
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
              to="/about"
              onClick={() => setExpanded(false)}
            >
              האומנויות
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
              className="clickable highlight"
              as={NavLink}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              צור קשר
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
