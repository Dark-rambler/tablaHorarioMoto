import react from "react";
import '../estilos/fila.css'
import Tarjeta from "./tarjeta";
import Hora from "./hora";
import { useState } from "react";
function Fila({hora}){
    const [moto, setMoto]=useState(8)
    function numerar(valor){
     if(!valor ){
        setMoto(moto+1)
     }
     else{
        setMoto(moto-1)
     }
     console.log(valor)
    }
    return<div className="fila">
    <Hora 
    hora={hora} contador = {moto}   />
    <button className="boton" onClick={()=>{setMoto(moto-1)}}>ocupar moto</button> <button className="boton liberar" onClick={()=>{setMoto(moto+1)}}> liberar moto</button>
    <Tarjeta numerar={numerar} numero=' 1'/>
    <Tarjeta numerar={numerar} numero=' 2'/>
    <Tarjeta numerar={numerar} numero=' 3'/>
    <Tarjeta numerar={numerar} numero=' 4'/>
    <Tarjeta numerar={numerar} numero=' 5'/>
    <Tarjeta numerar={numerar} numero=' 6'/>
    <Tarjeta numerar={numerar} numero=' 7'/>
    <Tarjeta numerar={numerar} numero=' 8'/>
    </div>
}
export default Fila