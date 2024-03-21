import React from "react";
import { Navbar, Nav, NavDropdown, Container, Col, Row } from "react-bootstrap";

export default function NavBar() {
  return (
    <div className="col-xl-3">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="flex-column"><h1>My NavBar</h1></Navbar.Brand><br></br>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Events</Nav.Link>
          <Nav.Link href="#link">Team</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
          <Nav.Link href="#link">Follow Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}