import { useState } from 'react';
import './Eventos.css';

const Eventos = () => {
    const [texto, setTexto] = useState(""); 

  return (
    <div>
        {/* Eventos con el mouse */}
        <div className='caja'
            onMouseMove={() => console.log("Pasaste con el micky mouse")}
            onMouseEnter={() => console.log("Ingresaste a la caja")}
            onMouseLeave={() => console.log("Te fuiste de la caja")}
            >
        </div>

        {/* Eventos para los inputs */}

        <h2> {texto} </h2>
        <label htmlFor=""> Ingrese texto: </label>
        <input type="text"
            onKeyDown={() => console.log("Presionaste una tecla")}
            onKeyUp={() => console.log("Soltaste una tecla")}
            onChange={(e) => setTexto(e.target.value)}
        />

    </div>
  )
}

export default Eventos