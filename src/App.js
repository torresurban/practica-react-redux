import "./App.css";
import CantidadPokemon from "./components/CantidadPokemon";
import CompraPokemon from "./components/CompraPokemon";
import store from "./redux/store"
import { Provider } from "react-redux"
import Cantidadhook from "./components/Cantidad.hook";
import Comprarhooks from "./components/Comprar.hooks";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";


//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.bundle';

function App() {

  

  return (
    <Provider store={store}>
    <div className="container">
      <div className="card">
          <div className="left-column background1-left-column">
            <h6>Control de Versiones</h6>
            <h2>GitHub</h2>
            <i className="fa fa-github" aria-hidden="true"></i>
          </div>
          <div className="right-column">
                <div className="cantidadpoke">
                      <h4><CantidadPokemon /></h4>
                      
                </div>
                <CompraPokemon />
                
          </div>
      </div>

      <div className="card">
          <div className="left-column background2-left-column">
            <h6>Control de Versiones</h6>
            <h2>Android</h2>
            <i className="fa fa-android" aria-hidden="true"></i>
          </div>
          <div className="right-column">
            <div className="cantidadpoke">
              <h4><Cantidadhook /></h4>
              
            </div>
            <Comprarhooks />
            
            
          </div>
      </div>
      <div>
        <h4><BuscadorPokemon /></h4>
      </div>
      <div>
        <ResultadoPokemon />
      </div>
    </div>
    </Provider>
  );
}

export default App;
