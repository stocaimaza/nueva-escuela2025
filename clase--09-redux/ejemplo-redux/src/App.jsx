import { useSelector } from "react-redux";
import CambiarModo from "./componentes/CambiarModo/CambiarModo";
import Login from "./componentes/Login/Login";
import Perfil from "./componentes/Perfil/Perfil";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null); 
  const modo = useSelector((estado) => estado.theme.modo)

  const styles = {
    backgroundColor: modo === "claro" ? "#ffffff" : "#121212",
    color: modo === "claro" ? "#000000" : "#ffffff", 
    minHeight: "100vh",
    padding: "2rem", 
    transition: "all 0.3s"
  }; 

  return (
    <div style={styles}>
      {/* <h1> Bienvenidos - Hoy estudiamos Redux </h1>
      <h2> Modo {modo === "claro" ? "claro" : "oscuro"} </h2>
      <CambiarModo/>
      <br /><br /> */}
      <h2>Autenticacion con Firebase </h2>
      {
        user ? (
          <Perfil user={user} setUser={setUser}/>
        ) : (
           <Login setUser={setUser} />
        )
      }
    </div>
  )
}

export default App

//¿Que es Redux?
//Es una libreria para manejar el estdo global de una App de React. 
// ( Muy parecido a Context )

//Esto lo vamos a usar cuando varios componentes necesitan acceder o modificar el mismo estado

//Elementos para configurar Redux: 

//Store: el "almacen global" que es donde se guarda la información. 

//Slice: un pedazo del store que maneja una parte del estado. 

//Reducer: es una función que recibe una acción y actualiza el estado. 
//(ejemplo: modo claro // modo oscuro )

//Dispatch: manda acciones al Store para que las ejecute

//Selector: lee el estado desde cualquier componente. 

//Instalamos Redux: npm install @reduxjs/toolkit react-redux