//Importamos algunos Hooks desde Redux: 
//useDispatch = para enviar las acciones
//useSelector = para leer el estado desde el store

import { useDispatch, useSelector } from "react-redux";

//Importamos la acción que creamos en el Slice
import { switchModo } from "../../redux/themeSlice";

const CambiarModo = () => {
    //Usamos el hook que nos permite disparar acciones a Redux
    const dispatch = useDispatch();

    //Usamos el useSelector para acceder al estado global: 
    const modo = useSelector((estado) => estado.theme.modo); 


    return (
        <div>
            <button onClick={() => dispatch(switchModo())}> Cambiar de Modo  {modo === "Claro" ? "Oscuro" : "Claro"} </button>
        </div>
    )
}

export default CambiarModo