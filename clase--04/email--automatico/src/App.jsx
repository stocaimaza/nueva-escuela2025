import Contacto from "./componentes/Contacto/Contacto";
import Menu from "./componentes/Menu/Menu"; 
import Celulares from "./componentes/Celulares/Celulares";
import Computadoras from "./componentes/Computadoras/Computadoras";
import Home from "./componentes/Home/Home";
import Sillas from "./componentes/Sillas/Sillas";


//React Router = es una libreria de enrutamiento. 
//Nos permite navegar entre componentes sin tener que recargar la aplicación. 

//1) Instalamos: npm i react-router-dom
//2) Importar algunos componentes:
import { BrowserRouter, Route, Routes } from "react-router-dom";

// BrowserRouter = es un componente que envuelve nuestra app y habilita la navegación entre componentes. 
// Routes = define las rutas de navegación. 
// Route = define una ruta en particular. 

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/celulares" element = { <Celulares/> } />
          <Route path="/computadoras" element = { <Computadoras/> } />
          <Route path="/sillas" element = { <Sillas/> } />
          <Route path="/contacto" element = { < Contacto /> } />
          <Route path="/" element = { < Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// Tipos de enlaces: 

//1) Enlaces absolutos: me conecto con una web externa. 
//2) Enlaces relativos: me conecto con una sección o página de mi mismo sitio web. 
