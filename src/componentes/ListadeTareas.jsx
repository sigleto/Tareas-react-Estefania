import React,{useState} from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
function Lista(){

const[tareas,setTareas]=useState([]);

const agregarTarea=tarea=>{console.log("agregada")}
    return(
<>
<Formulario/>
<div>
   {tareas.map(tarea=><Tarea
   texto={tarea.texto}
   completada={tarea.completada}
   
   />)



   } 
</div>
</>

    )
}



export default Lista;