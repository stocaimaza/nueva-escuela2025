// Instalamos la dependencia de Firebase con el comando: npm install firebase

//Importamos dos funciones:
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//initializeApp = la voy a usr pra iniciar la conexión con Firebase. 
//getFirestore = se utiliza para obtener uns instancia de Firestore. 

//Es un objeto que tiene toda la información sensible de nuestra cuenta. 
//Incluye la key personal de acceso a la base de datos. 

const firebaseConfig = {
  apiKey: "AIzaSyCv_vKxfOkLwNvSY9z25CCZLO8NirV0F_Y",
  authDomain: "firulais-57e12.firebaseapp.com",
  projectId: "firulais-57e12",
  storageBucket: "firulais-57e12.firebasestorage.app",
  messagingSenderId: "627008552048",
  appId: "1:627008552048:web:1103b15dd4c249a19bc8b5"
};

//Inicializamos Firebase y pasamos la configuración como argumento. Esto me devuelve una instancia. 
const app = initializeApp(firebaseConfig); 

// Ahora uso esa instancia para obtener el servicio de Firestore: 

// No se olviden de exportarla para que este disponible en toda nuestra aplicación. 
export const db = getFirestore(app); 



