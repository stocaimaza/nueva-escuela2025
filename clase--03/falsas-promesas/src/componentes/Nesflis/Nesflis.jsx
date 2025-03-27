import { useState, useEffect } from "react"; 
import './Nesflis.css';

const Nesflis = () => {
    const [peliculas, setPeliculas] = useState([]); 
    const [busqueda, setBusqueda] = useState("");

    const MI_KEY = "c9f04fa4"; 

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=${MI_KEY}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search);
            })
            .catch(error => console.log(error))
    }, [busqueda])

    const manejadorFormulario = (event) => {
        event.preventDefault(); 
        //Evitamos el comportamiento por default de los formularios. 
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = ""; 
    }

  return (
    <div>
        <h1>Nesflis</h1>

        <form onSubmit={ manejadorFormulario }>
            <input type="text" name='busqueda'/>
            <button> Buscar </button>
        </form>

        <ul>
            {/* Acá vamos a renderizar las pelis relacionadas a la palabra de búsqueda */}

            {
                peliculas === undefined ? <h2> La pelicula no esta disponible en nuestra base de datos </h2> : peliculas.map(peli => (<li> <img src={peli.Poster} alt={peli.Title} />  {peli.Title} </li>))
            }

        </ul>
    </div>
  )
}

export default Nesflis