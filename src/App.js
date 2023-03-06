
import './App.css';
import Logo from "./componentes/Logo"
import Tarea from "./componentes/Tarea";
import Contar from "./componentes/Contador";
function App() {
  return (
  <div className="tareas">
    <Logo/>
    <Contar/>
    <div className="listaTareas">
   <h1>Lista de tareas</h1> 
 
    <Tarea texto="Aprendo React"/>
    </div>
   
  </div>


 
 )}
export default App;
  