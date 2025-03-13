import React from 'react'
import Mensaje from './componentes/Mensaje/Mensaje'
import NavBar from './componentes/NavBar/NavBar'
import Main from './componentes/Main/Main'
import Footer from './componentes/Footer/Footer'
import './App.css'; 

const App = () => {
  return (
    <>
      <NavBar />
      <Main/>
      <Footer/>
      {/* <Mensaje mensaje = "Hola, este texto llega por props"/>
      <Mensaje mensaje = {"Mensaje Nuevo"}/>
      <Mensaje mensaje = {"true"} />
      <Mensaje mensaje = {123} /> */}
    </>
    
  )
}
// Para evitar enviar tantos div, podemos trabajar con los fragments. 
// Estos son los tags vacios: <></>

export default App

// El App es el componente principal. 

//Aprendimos: 
/*
  Un componente es una porción de la intefaz que nosotros podemos trabajar de forma aislada. Me permite reutilizar código y evitar cometer tantos errores. 

  //Caracteristicas:
  - Todo componente deber retornar un elemento primario.  
  - Los componentes pueden enviar información entre si a traves de las props.
  - Los componentes pueden tener un estado. 

*/