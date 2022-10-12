import React from 'react'
import ItemDetail from './ItemDetail'
import { DataById } from '../../../BaseDeDatos/Data'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./itemDetail.css"



const ItemDetailContainer = () => {
  const [ product , setProduct] = useState()

  // HOOK de ruta
  const {productId} = useParams()
  // console.log(productId);

  useEffect(()=>{
    DataById(productId).then(response =>{
      return (setProduct(response))
      
    })
  },[productId])
  
    return (
    <div className='container-madre-detail'>
      
        <ItemDetail {...product}/>
     </div>
  )
}

export default ItemDetailContainer