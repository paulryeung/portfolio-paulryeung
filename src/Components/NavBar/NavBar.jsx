import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
const projects = require("../../projects");

function NavBar() {
  return (
    <Navbar
      expand="lg"
      colorScheme="light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/works">
              Featured Works
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown title="GitHub Repos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                {projects[0].name}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {projects[1].name}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {projects[2].name}
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                {projects[3].name}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
