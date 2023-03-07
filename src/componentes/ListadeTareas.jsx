import React,{useState} from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";


function Lista(){

const[tareas,setTareas]=useState([]);

//Función para agregar tarea a la Lista de tareas. Se pasa con un "prop" al Formulario
const agregarTarea=tarea=>{

    if (tarea.texto.trim()){
        const tareasActualizadas=[tarea,...tareas]
        setTareas(tareasActualizadas);
    }
}
//Función para borrar una tarea. Se pasa con un "prop" al componente "Tarea"
const borrarTarea=id=>{
    const tareasActualizadas=tareas.filter(tarea=>tarea.id!==id)
    setTareas(tareasActualizadas);
}
//Función para completar/descompletar tarea, se pasa con un "prop" al componente "Tarea"
    const tareaCompletada=id=>{
        const tareasCompletas=tareas.map(tarea=>{
            if (tarea.id===id){tarea.completada=!tarea.completada}
            return tarea;
        })
        setTareas(tareasCompletas);
    }






    return(
<>
<Formulario onSubmit={agregarTarea} />
<div>
   {tareas.map(tarea=><Tarea
   key={tarea.id}
   id={tarea.id}
   texto={tarea.texto}
   completada={tarea.completada}
   borrarTarea={borrarTarea}
   completarTarea={tareaCompletada}
   />)



   }
</div>
</>

    )

}


export default Lista;