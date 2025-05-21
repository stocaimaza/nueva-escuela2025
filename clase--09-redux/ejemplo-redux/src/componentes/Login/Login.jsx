//Importaremos algunas herramientas para hacer el Login: 
import { signInWithPopup } from "firebase/auth"; 
import { auth, provider } from "../../firebase/config";

const Login = ({ setUser }) => {

    //Creamos funcion para manejar el evento del boton: 
    const manejadorLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider); 
            setUser(result.user); 
        } catch (error) {
            console.log("Error en el Login, todos moriremos"); 
        }
    }
  return (
    <button onClick={ manejadorLogin }>
        Iniciar sesión con Google
    </button>
  )
}

export default Login