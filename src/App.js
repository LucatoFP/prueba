import './app/App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer Productos={"Nos quedamos sin stock =P"}/>
    </div>
  );
}

export default App;
