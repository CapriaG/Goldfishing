import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logoGold.png';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Overlay oscuro */}
      {expanded && <div className="navbar-overlay" onClick={() => setExpanded(false)} />}

      <Navbar
        expand="lg"
        bg="transparent"
        variant="light"
        sticky="top"
        className="custom-navbar"
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="GoldFishing logo"
              className="navbar-logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center gap-3">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>Goldfishing</Nav.Link>
              <Nav.Link as={Link} to="/products" onClick={() => setExpanded(false)}>Productos</Nav.Link>
              <Nav.Link
                as="button"
                className="btn btn-link"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
                onClick={() => setExpanded(false)}
              >
                Contáctanos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
