// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar"
import ItemListContainer from './Components/ItemListContainer';
import Contador from "./Components/ItemCount"
import { useEffect } from 'react';


function App() {

useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then((result) => {
    console.log(result);
  })
},[])

  return (
    <div className="App">
      <header className="App-header" style={{justifyContent:"flex-start"}}>
        <NavBar />
        <ItemListContainer greeting="Articulos Proximamente . . ." />
        <Contador/>
      </header>
    </div>
  );
}

export default App;
