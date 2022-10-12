import React from 'react'
import "./bloque1.css"

const Search = () => {
  return (
    <div className='bloque1'>
<hr/>
   <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="¿A que país quieres viajar?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
</div>
      
    </div>
  )
}

export default Search