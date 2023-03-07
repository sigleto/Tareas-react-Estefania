import React from "react";
import "../estilos/estiloTarea.css";
import { AiFillPushpin } from "react-icons/ai";

function Tarea({id,texto,completada, completarTarea,borrarTarea}){
    
return(
    <div className={completada ? "tachado":"contenedorTarea"}>
        <div className="nombreTarea" onClick={()=>completarTarea(id)}>
            {texto}
           
        </div>
        <div className="iconoTarea" onClick={()=>borrarTarea(id)}><h1><AiFillPushpin/></h1></div>



    </div> 
)

}

export default Tarea;