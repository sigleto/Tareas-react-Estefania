import React,{useState} from "react";

function Formulario(props){

 const [input,setInput]=useState('');

//Función para "capturar" lo que se escribe en el input
const manejarCambio=e=>{
 setInput(e.target.value);
}

//Función para enviar la nueva tarea generada a la lista de tareas
const manejarEnvio=e=>{
    e.preventDefault();
   
    const nueva={texto:input,id:Math.random()*100,completada:false}
    props.onSubmit(nueva)
}

return(
<form className='TareaFormulario'>
<input placeholder="Ingresa nueva tarea" onChange={manejarCambio}/>
<button className='boton' onClick={manejarEnvio}>Agregar</button>
</form>
)
//*Nota: Se puede sustituir el onClick del "button" por un onSubmit en el "form"

}
export default Formulario