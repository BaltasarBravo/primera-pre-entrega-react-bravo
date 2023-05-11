// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar"
import ItemListContainer from './Components/ItemListContainer';
import Contador from "./Components/ItemCount"
import { useEffect } from 'react';


function App() {


  return (
    <div className="App">
      <header className="App-header" style={{  }}>
        <NavBar />
        <section>
        <ItemListContainer />
        <Contador />
      </section>
      </header>

      
    </div>
  );
}

export default App;
