import React from 'react'
import Tarjeta from './ItemListContainer/tarjetas/Card'
import "./loyaut.css"

const ItemList = ({products}) => {
  return (
    <div className='FlexBox'>
        
        {products.map(prod => <Tarjeta key={prod.id} {...prod} />)}
        </div>
  )
}

export default ItemList