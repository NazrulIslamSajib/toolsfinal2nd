import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        src="1174949_js_react js_logo_react_react native_icon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Logo" 
      />
      OUR WEBSITE
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#about">Lesson </Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav> 
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
