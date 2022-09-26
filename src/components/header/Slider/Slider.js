import Carousel from 'react-bootstrap/Carousel';
import playa from "../../../assets/playa.jpg"
import tailandia from "../../../assets/tailandia.jpg"
import ny from "../../../assets/ny.jpg"
import "./slider.css"


function Slider() {
  return (
      <div className='caja-madre-slider'>
    <Carousel fade>

      <Carousel.Item className='img-carrucel'>
        <img
          className="d-block w-100"
          src= {playa}
          alt="First slide"
          />
        <Carousel.Caption className='texto-carrucel'>
          <h1>Viaja a donde quieras</h1>
          <p>Hacerlo nunca fue tan facil con AeroCoder.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img-carrucel'>
        <img
          className="d-block w-100"
          src={tailandia}
          alt="Second slide"
          />

<Carousel.Caption className='texto-carrucel'>
          <h1>Viaja a donde quieras</h1>
          <p>Hacerlo nunca fue tan facil con AeroCoder.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img-carrucel'>
        <img
          className="d-block w-100"
          src={ny}
          alt="Third slide"
          />

<Carousel.Caption className='texto-carrucel'>
          <h1>Viaja a donde quieras</h1>
          <p>Hacerlo nunca fue tan facil con AeroCoder.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
  );
}

export default Slider;