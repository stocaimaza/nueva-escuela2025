//Ejemplito de envio de datos entre componentes: 

//En estas clases pasadas vimos que podemos enviar datos entre componentes a traves de las props. Peeeeeero, estas se envian de forma unidireccional de componente padre a componente hijo. 

//En aplicaciones grandes con muchas capas de componentes esto se convierte en una tarea tediosa. 

//La Solución: "CONTEXT"

//Es un estado global para toda la aplicación en donde podemos almacenar datos o funciones. 

//EL CONTEXT trabaja con dos partes principales: el proveedor y el consumidor. 

//El Provider es un componente que proporciona los datos que vamos a compartir y el Consumer es quien utiliza esos datos.

//Importamos al abuelo: 
import Abuelo from "./componentes/Abuelo/Abuelo";

//Importamos el contexto: 
import { Contexto } from "./context/context";

const App = () => {

  //Voy a crear un objeto que representa la herencia de la familia. 
  const herencia = {
    efectivo: 100000000000,
    propiedades: 25,
    vehiculos: 100
  }

  return (
    <div>
      {/* <Abuelo herencia = {herencia} /> */}
      <Contexto.Provider value={herencia}>
          <Abuelo />
      </Contexto.Provider>
    </div>
  )
}

export default App