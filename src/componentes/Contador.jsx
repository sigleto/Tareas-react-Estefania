import React,{useState} from "react";

function Contar(){
    const [contador,setcontador] = useState(2)
    
return(
<div className="contador">
    <h1>Contador:{contador}</h1>
    <button onClick={()=>{setcontador(contador+1)}}>SUMAR</button>
    <button onClick={()=>{setcontador(contador-1)}}>RESTAR</button>
</div>

)


}
export default Contar;