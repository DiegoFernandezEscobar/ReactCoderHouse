import React from 'react'
import Search from '../Body/Search'
import "./loyaut.css"

const Grid = () => {
  return (
      <div className='contenedor-madre-grid'>
    <div class="container text-center">
    <div class="row">
      <div class="col">
        <h1>
            ¿A donde queres volar?
        </h1>
        <h3>
            Tenemos miles de destinos al alcance de tu mano!
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col">
        {/* No va contenido para centrar la barra de busqueda */}
      </div>
      <div class="col">
        <Search/> 
     </div>
      <div class="col">
        {/* No va contenido para centrar la barra de busqueda */}
      </div>
    </div>
  </div>
      </div>
  )
}

export default Grid