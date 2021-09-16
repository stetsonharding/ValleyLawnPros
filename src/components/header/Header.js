import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

import VLPLogo from "../../assets/VLP_Logo.png";

const Header = () => {
  return (
    <Navbar
      className="nav-container p-4"
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="primary"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            style={{ width: "150px" }}
            id="logo"
            src={VLPLogo}
            alt="Valley Lawn Pros Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navbar-links-container">
            <Nav.Link id="navbar-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link id="navbar-link" href="/location">
              Locations
            </Nav.Link>
            <Nav.Link id="navbar-link" href="/Rewards">
              Rewards
            </Nav.Link>
            <Nav.Link id="navbar-link" href="/OrderOnline">
              Order Online
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;