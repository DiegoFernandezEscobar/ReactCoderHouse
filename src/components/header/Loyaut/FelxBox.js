import Container from 'react-bootstrap/Container';

import Spinner from 'react-bootstrap/Spinner';
import "./loyaut.css"
import React, {useEffect, useState} from 'react';
import { Data } from '../../BaseDeDatos/Data';
import ItemList from './ItemList';


function FelxBox() {
// UseState que maneja el estado de los productos
    const [products , setProducts] = useState([])
// UseState que maneja el estado del spiner de loading
    const [loading, setLoading] = useState([false])

    useEffect(() => {
      // Hago el then de data que fue importado previamente, la response contiene el json de la promise
    Data().then((response)=>{
    // console.log(response);
    setProducts(response)
}).finally(()=>{
  setLoading(false)
}
)
 
}, [])
// console.log(products);

if (loading) {

  return  <div className='spinner'>
        <Spinner animation="border" variant="warning" />
    </div>

 
}




  return (
    <Container >
      
        <div className='contenedor-producto'>

        <ItemList products={products}/>
        </div>

    </Container>
  );
}

export default FelxBox;