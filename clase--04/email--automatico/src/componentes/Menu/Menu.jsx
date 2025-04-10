import { Link, NavLink } from "react-router-dom"; 
import './Menu.css';

const Menu = () => {
  return (
    <header>
            <Link to="/">
                <h1> Tienda Online Cellshop </h1>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/computadoras"> Computadoras </NavLink>
                    </li>
                    
                    <li> 
                        <NavLink to="/celulares"> Celulares </NavLink> 
                    </li>
                    
                    <li>
                        <NavLink to="/sillas" > Sillas </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contacto"> Contacto </NavLink>
                    </li>

                    <li>
                        <NavLink to="/eventos"> Eventos </NavLink>
                    </li>

                    <li>
                        <NavLink to="/automatico"> Automático </NavLink>
                    </li>

                </ul>
            </nav>

    </header>
  )
}

export default Menu