import Card from 'react-bootstrap/Card';
import React from 'react'
import "./tarjetas.css"
import {Link} from "react-router-dom"

const Tarjeta = ({id ,img, provincia, subtitulo, logo, info, precio}) => {
    
  return (
      
    <div className='card'>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className='titulo-card'>{provincia}</Card.Title>
        <Card.Text>
          {subtitulo}
          
        </Card.Text>
      </Card.Body>
      <div className='logo-card'>
      <img className='logo-img-card' src={logo}/>
      <span className='aerocoder'> AEROCODER</span>
      </div>
      <div>
      <h5 className='info-card'>
        {info}
      </h5>
      </div>
      <div className='precio-card'>
      <span>
      {precio}
      </span>
      </div>
      <Card.Body>
        <Link variant="outline-success" className='btnVermas' to={`/detail/${id}`}>
          Ver fechas!
        </Link>
      </Card.Body>
    </Card>    
     </div>
      
  )
}

export default Tarjeta

