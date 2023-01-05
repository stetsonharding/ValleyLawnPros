import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Header.scss";

import VLPLogo from "../../assets/VLP_Logo_Small.png";

import { Link } from "react-router-dom";

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
        <Navbar.Brand to="/">
          <img
            style={{ width: "130px" }}
            id="logo"
            src={VLPLogo}
            alt="Valley Lawn Pros Logo"
            className="navbar--logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar--toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navbar-links-container">
            <Link id="navbar-link" to="/">
              Home
            </Link>
            <Link id="navbar-link" to="/Services">
              Services
            </Link>
            {/* 
            <Nav.Link id="navbar-link" href="/Services">
              Services
            </Nav.Link> */}

            <Link id="navbar-link" to={"/#Contact"}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
