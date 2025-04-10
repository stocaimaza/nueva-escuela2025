import { useState, useEffect } from 'react';

import './Automatico.css';

const Automatico = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    useEffect(() => {
        let tiempoEspera = null; 

        const reiniciarTemporizador = () => {
            clearTimeout(tiempoEspera); 

            tiempoEspera = setTimeout(() => {
                setMostrarMensaje(true); 
            }, 5000)
        }
        
        reiniciarTemporizador(); 


        //Vamos a crer unos escuchadores de eventos. 

        window.addEventListener("mousemove", reiniciarTemporizador);
        window.addEventListener("keydown", reiniciarTemporizador); 

        return () => {
            clearTimeout(tiempoEspera);
            window.removeEventListener("mousemove", reiniciarTemporizador);
            window.removeEventListener("keydown", reiniciarTemporizador);
        }
    }, []) 

    const seguirMirandoTele = () => {
        setMostrarMensaje(false);
    }
    

    return (
        <div>

            {
                mostrarMensaje && (
                    <div>
                        <form className='mensaje'>
                            <center> <p> ¿Sigues ahí? </p> </center>
                            {/* No la usen en la vida real, es chiste nomas */}
                            <button type='button' onClick={ seguirMirandoTele }> Seguir mirando porque todavia no me dormi </button>
                        </form>
                    </div>
                )
            }

        </div>

    )
}

export default Automatico