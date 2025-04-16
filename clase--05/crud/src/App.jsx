import Tareas from "./componentes/Tareas/Tareas";
import Contactos from "./componentes/Contactos/Contactos";
import Banco from "./componentes/Banco/Banco";
import './App.css';

//CRUD: Create Read Update Delete
//Estas son las operaciones básicas que podemos realizar en una aplicación y en una base de datos. 

// EJEMPLO 1: Listado de tareas. 
// EJEMPLO 2: Gestión de contactos. 
// EJEMPLO 3: Banco NuevaEscuela.


const App = () => {
  return (
    <div>
      {/* <h1> Bienvenidos a la Clase 5 - CRUD </h1> */}
        {/* < Tareas /> */}
        {/* < Contactos /> */}
        <Banco />

    </div>
  )
}

export default App