import react from "react";
import { useState } from "react";
import '../estilos/tarjeta.css'
function Tarjeta ({numerar,numero }){
    var texto
    const [estado,setEstado]= useState(true)
    const actualizar=()=>{
        setEstado(!estado)
        numerar(estado)
    }
    if(estado){
        texto='libre'
    }
    else{
        texto='ocupada'
    }
   
return <div className={estado?'tarjeta':'tarjetaOcupada'} onClick={actualizar}>
   <div className="texto">
   <p>moto{ numero}</p>
   {texto}
   </div>
</div>
}
export default Tarjeta;