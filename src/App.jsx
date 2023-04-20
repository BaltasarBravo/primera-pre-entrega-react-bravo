// import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/Navbar"
import ItemListContainer from './Components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header" style={{justifyContent:"flex-start"}}>
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
