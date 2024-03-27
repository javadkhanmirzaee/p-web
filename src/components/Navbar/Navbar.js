import React from 'react'
import { Container , Nav , Navbar } from 'react-bootstrap';
import './NavbarStyle.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top py-3 nav">
      <Container className='px-5' fluid>
        <Navbar.Brand className='fw-bold h1' href="#home">Javad.web3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='fw-bold link-nav'>Home</Nav.Link>
            <Nav.Link href="#About" className='fw-bold link-nav'>About</Nav.Link>
            <Nav.Link href="#Projects" className='fw-bold link-nav'>Projects</Nav.Link>
            <Nav.Link href="#Contact" className='fw-bold link-nav'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar