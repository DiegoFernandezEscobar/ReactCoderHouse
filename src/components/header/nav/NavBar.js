import "./navBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane, faBed, faSuitcaseRolling, faFire,faTicket, faCarSide, faSuitcaseMedical, faBus} from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CollapsibleExample() {
  return (
    <div className='caja-madre-nav'>
     
      <div className='logo'>
      <img className="logo-imgNav" src="/images/logos/AeroCoder.png"/>
     <div className='flexContainer'>
      </div>
      <div className="datosContacto">
        <span className="containerContacto">
          Comunicate con nosotros a aeroCoder@gmail.com o al 0800-333-222 
        </span>
      </div>
     </div>
     <div>
       <h1 className="titulo">
         ¿Queres volar con descuento y en cuotas?
         <hr></hr>
       </h1>
     </div>
      <div className='iconosContainer'>
      
      <Container fluid>
      <Row >
        <Col >
      <div className="containerColor">
    
        <div className="icono">
        <FontAwesomeIcon icon={faPlane} className="avion" />
        </div>       
        <div className="icono">
        <FontAwesomeIcon icon={faBed} className="avion" />
        </div>
        <div className="icono">
        <FontAwesomeIcon icon={faSuitcaseRolling} className="avion" />
        </div>
        <div className="icono">
        <FontAwesomeIcon icon={faFire} className="avion" />          
        </div>
        
        <div className="icono">
        <FontAwesomeIcon icon={faTicket} className="avion" />
        </div>        
        <div className="icono">
        <FontAwesomeIcon icon={faCarSide} className="avion" />
        </div>
        <div className="icono">
        <FontAwesomeIcon icon={faSuitcaseMedical} className="avion" />
        </div>
        <div className="icono">
         <FontAwesomeIcon icon={faBus} className="avion" />                  
        </div>
      </div>
        
        </Col>
      </Row>
      </Container>

      </div>
    
    </div>
  );
}

export default CollapsibleExample;