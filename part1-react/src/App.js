import "./App.css";
import Mensaje from "./Mensaje.js";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = () => {

  
  return( <div className="App">
        <Mensaje color='red' msg='Estámos trabajando'/>
        <Mensaje color='aqua' msg='En un curso'/>
        <Mensaje color='darkgreen' msg='De react'/>
        <Description />
    </div>);
};

export default App;
