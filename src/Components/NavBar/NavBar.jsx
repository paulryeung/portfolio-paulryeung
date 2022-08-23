import React from "react";

import { useNavigate, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SocialIcon } from "react-social-icons";
const projects = require("../../projects");

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#e3f2fd" }} fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/works">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown title="GitHub Repos" id="basic-nav-dropdown">
              <NavDropdown.Item href={projects[0].github} target="_blank">
                {projects[0].name}
              </NavDropdown.Item>
              <NavDropdown.Item href={projects[1].github} target="_blank">
                {projects[1].name}
              </NavDropdown.Item>
              <NavDropdown.Item href={projects[2].github} target="_blank">
                {projects[2].name}
              </NavDropdown.Item>
              <NavDropdown.Item href={projects[3].github} target="_blank">
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
