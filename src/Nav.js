import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function Navtop() {
  return (
<Navbar variant="dark" bg="dark" expand="sm" fixed='top'>
  <Container >
    <Navbar.Brand href="#home">T & L Towing</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">


    <Nav>
      <Nav.Link eventKey={2} href="">Home </Nav.Link>
      <NavDropdown title="Towing" id="nav-dropdown">

        <NavDropdown.Item href="#action/3.1">Emergency Services</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Long-Distance Services</NavDropdown.Item>

      </NavDropdown>
     
      <NavDropdown title="Roadside Assistance" id="nav-dropdown">
      <NavDropdown.Item href="#action/4.1">Car Battery Service</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/4.1">Refueling</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/4.2">Car Lockout</NavDropdown.Item>
  
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default Navtop;
