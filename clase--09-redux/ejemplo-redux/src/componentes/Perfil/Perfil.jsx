import { auth } from "../../firebase/config"; 

const Perfil = ({user, setUser}) => {
    const cerrarSesion = async () => {
        await auth.signOut(); 
        setUser(null); 
    }
  return (
    <div>
        <h2>Bienvenido!, {user.displayName} </h2>
        <img src={user.photoURL} alt="Avatar" />
        <br />
        <button onClick={cerrarSesion}> Cerrar Sesión </button>
    </div>
  )
}

export default Perfil