import { auth } from "../../firebase/config.js"; 
//Importamos de GitHub una función para realizar el Login: 
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";




const GitHubLogin = ({setUser}) => {

    const manejadorLoginGitHub = async () => {
        const provider = new GithubAuthProvider(); 
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user; 
            setUser(user); 
        } catch (error) {
            console.log("Todos moriremos de una nevada mortal"); 
        }
    }

  return (
    <button onClick={ manejadorLoginGitHub }>
        Iniciar sesión con GitHub
    </button>
  )
}

export default GitHubLogin