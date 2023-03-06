import React from "react";
import "../estilos/estiloTarea.css";
import { AiFillPushpin } from "react-icons/ai";

function tarea({texto,completada}){
return(
    <div className={completada ? "tachado":"contenedorTarea"}>
        <div className="nombreTarea">
            {texto}
           
        </div>
        <div className="iconoTarea"><h1><AiFillPushpin/></h1></div>



    </div>
)

}

export default tarea;