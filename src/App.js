import logo from './logo.svg';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';

function App() {
  let misEstilos = { backgroundColor: "red"};

  return (
    <div style={misEstilos}>
    <Navbar/>
    <ItemListContainer 
    greeting = "Bienvenido a mi e-comerce"/>
</div> 
  );
}

export default App;
 