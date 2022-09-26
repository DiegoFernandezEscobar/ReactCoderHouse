import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navBar.css"

function CollapsibleExample() {
  return (
    <div className='caja-madre-nav'>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">AeroCoder</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Vuelos</Nav.Link>
            <Nav.Link href="#pricing">Hoteles</Nav.Link>
            <NavDropdown title="Paquetes" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Disney</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Alquiler de auto
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">All-Inclusive</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas de tiempo limitado
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ingresar</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Crear una alerta de viajes!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CollapsibleExample;