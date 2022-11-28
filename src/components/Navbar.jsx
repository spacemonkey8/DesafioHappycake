import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"

function BootsNavBar() {
  return (
    <Navbar bg="danger" variant='dark'  expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className='text-white ms-5 text-decoration-none'>
            🏠  Home
            </Link>
            <Link to="/contacto" className='text-white ms-5 text-decoration-none'>
            📒  Contacto
            </Link>
            
          
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home"> Happy Cake 🍰</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BootsNavBar;