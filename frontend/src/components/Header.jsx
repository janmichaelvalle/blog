import React from 'react'
import { NavLink } from "react-router-dom"

// Import the following for bootstrap Navbar:
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/create">Create Post</Nav.Link>
          <Nav.Link as={NavLink} to="/authors">Authors</Nav.Link>
          <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header