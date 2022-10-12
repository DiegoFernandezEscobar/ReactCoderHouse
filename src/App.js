import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Grid from './components/header/Loyaut/Grid';
import FelxBox from './components/header/Loyaut/FelxBox';
import ItemDetailContainer from './components/header/Loyaut/ItemDetail/ItemDetailContainer';
import ItemDetail from './components/header/Loyaut/ItemDetail/ItemDetail';
// Mi nombre es Diego Fernandez Escobar, soy el alumno que escribio el codigo, lo aclaro porque me olvide de poner mi nombre en la entrega! Muchas gracias
// Para realizar el proyecto utilice Boostrap-React

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/*El header queda dentro del BrowserRourter porque es estatico y no es una ruta que vaya variando*/}
      <Header/>
      <Grid/> 
      <Routes>
        <Route path='/' element={<FelxBox/> }/>
        <Route path='/detail/:productId'element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>

     
    
      </BrowserRouter>
    </div>
  );
}
export default App;
