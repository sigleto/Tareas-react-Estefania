import React from "react";
import "../estilos/estiloTarea.css";
import { AiFillPushpin } from "react-icons/ai";

function Tarea({id,texto,completada, completarTarea,eliminarTarea}){
return(
    <div className={completada ? "tachado":"contenedorTarea"}>
        <div className="nombreTarea" onclick={()=>completarTarea(id)}>
            {texto}
           
        </div>
        <div className="iconoTarea" onClick={()=>eliminarTarea(id)}><h1><AiFillPushpin/></h1></div>



    </div> 
)

}

export default Tarea;