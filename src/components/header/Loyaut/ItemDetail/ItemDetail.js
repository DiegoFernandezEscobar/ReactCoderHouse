import React from 'react'
import Card from 'react-bootstrap/Card';
import "./itemDetail.css"
import {Link} from "react-router-dom"

const ItemDetail = ({id ,img, provincia, subtitulo, logo, infoLarge, precio,tituloInfo}) => {
  return (
    
      <div className='card-detail'>
    <Card style={{ width: '28rem' }}>
      <Card.Img variant="top" src={img} alt={provincia} />
      <Card.Body>
        <Card.Title className='titulo-card-detail'>{provincia}</Card.Title>
        <Card.Text className='subtitulo-detail'>
          {subtitulo}
          
        </Card.Text>
      </Card.Body>
      <div className='logo-card'>
      <img className='logo-img-card-detail' src={logo} alt={provincia} />
      <span className='aerocoder-detail'> AEROCODER</span>
      </div>
      <div>
        <div className='caja-info-detail'>
          <h3 className='titulo-info-detail'>
           {tituloInfo}
          </h3>
        </div>
      <h5 className='info-card-detail'>
        {infoLarge}
      </h5>
      </div>
      <div className='precio-card-detail'>
      <span>
      {precio}
      </span>
      </div>
      <Card.Body>
        <Link variant="outline-warning" className='btnHome' to={`/`}>
          Volver al Home!
        </Link>
      </Card.Body>
    </Card>    
    </div>
  )
}

export default ItemDetail