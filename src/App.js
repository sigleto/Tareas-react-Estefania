
import './App.css';
import Logo from "./componentes/Logo"
import Lista from "./componentes/ListadeTareas";
import Formulario from "./componentes/Formulario";
import Contar from "./componentes/Contador";
function App() {
  return (
  <div className="tareas">
    <Logo/>
    <Contar/>
   
    <div className="listaTareas">
   <h1>Lista de tareas</h1> 
 
    <Lista/>
    </div>
   
  </div>


 
 )}
export default App;
  