//Desde la libreria de Redux vamos a importar "createSlice". 
import { createSlice } from "@reduxjs/toolkit";

//Ahora vamos a configurar el estado inicial: 
const estadoInicial = {
    modo: "claro"
}; 

//Creamos un "Slice"de Redux llamado "theme"
//Recuerden que un slice es una porción del estado global que maneja sus acciones

const themeSlice = createSlice({
    //Vamos a configurarle un nombre: 
    name: "theme", 
    //Le pasamos el estado inicial definido arriba
    initialState: estadoInicial,

    //Y acá abajo vamos a colocar los reducers: funciones que modifican el estado
    reducers: {
        switchModo: (estado) => {
            //Si el estado actual es claro, cambia a oscuro. 
            //Si es oscuro cambio a claro. 
            estado.modo = estado.modo === "claro" ? "oscuro" : "claro"
        }
    }
})

//Exportamos la acción "switchModo" para poder usarla en los componentes
export const {switchModo} = themeSlice.actions; 

//Exportamos el reducer para conectarlo con el Store de Redux
export default themeSlice.reducer; 