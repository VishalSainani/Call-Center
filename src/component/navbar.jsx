import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import company_logo from  '../com_name.png'
function Naavbar() {
  return (
    <>
    <div class="NavBar">
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">CT Call Centre</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">About CT</Nav.Link>
                <Nav.Link href="#home">CT Difference</Nav.Link>
                <Nav.Link href="#features">Newsroom</Nav.Link>
                <Nav.Link href="#pricing">Careers</Nav.Link>
                <Nav.Link href="#pricing">Contact Us</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Naavbar;