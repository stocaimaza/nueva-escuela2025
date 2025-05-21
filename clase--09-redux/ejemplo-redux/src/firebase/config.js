import { initializeApp } from "firebase/app";
//Importamos algunas herramientas de Google: 
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyArHySRsCybiafmEUmmnIyTRqc_ridPkog",
  authDomain: "nuevaescuela--chat.firebaseapp.com",
  projectId: "nuevaescuela--chat",
  storageBucket: "nuevaescuela--chat.firebasestorage.app",
  messagingSenderId: "350408584069",
  appId: "1:350408584069:web:60dd161ffb6346564332ec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const provider = new GoogleAuthProvider(); 

export {auth, provider}; 