import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Body from './components/header/Body';

// Mi nombre es Diego Fernandez Escobar, soy el alumno que escribio el codigo, lo aclaro porque me olvide de poner mi nombre en la entrega! Muchas gracias
// Para realizar el proyecto utilice Boostrap-React

function App() {
  return (
    <div className="App">
      {/* NavBar */}
 <Header/>
      {/* NavBar */}
      <Body/>
    </div>
  );
}
export default App;
