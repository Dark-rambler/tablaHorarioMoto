import '../estilos/hora.css'
function Hora({hora,contador}){
    return <div className={contador>0?'hora':'horaRojo'}>
        <h1>
            {hora}
            
        </h1>
        <p>{contador} motos disponibles</p>
    </div>
    
}

export default Hora;