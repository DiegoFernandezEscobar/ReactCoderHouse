import React from 'react'
import Search from '../Body/Search'
import "./loyaut.css"
import Form from 'react-bootstrap/Form';
import { Calendar } from 'react-calendar';
const Grid = () => {
  return (
      <div className='contenedor-madre-grid'>
    <div className="container text-center">
    <div className="row">
      <div className="col">
     
        <h3>  
      <Search/>
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <Calendar/>
      </div>
      <div className="col">
      <Form.Select aria-label="Default select example">
      <option>Cantidad de pasajeros</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Form.Select>
         </div>
      <div className="col">
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      
      </div>
    </div>
  </div>
      </div>
  )
}

export default Grid

