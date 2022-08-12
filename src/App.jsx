import { useState } from 'react'
import Tarjeta from './componentes/tarjeta'
import Fila from'./componentes/fila'
import './App.css'
//1b5ff828ab07f3d322efb42c7f3130fe4ccf82b65076f225407b43370db6bec8cf2300bef
//bce71075e49fc141615c63cc3a691e27 <-------- hash
//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=076f225407b43370db6bec8cf2300bef&hash=bce71075e49fc141615c63cc3a691e27
function App() {



  return (
    <div className="App">
     <div className='cabecera'>
    <h1>
    Tabla horaria de motos
    </h1>
     </div>
     <div className='contenedor'>
      <Fila hora='8:00'/>
      <Fila hora='8:30'/>
      <Fila hora='9:00'/>
      <Fila hora='9:30'/>
      <Fila hora='10:00'/>
      <Fila hora='10:30'/>
      <Fila hora='11:00'/>
      <Fila hora='11:30'/>
     </div>
    
    </div>
  )
}

export default App