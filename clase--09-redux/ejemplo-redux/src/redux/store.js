import { configureStore } from "@reduxjs/toolkit";
//Me permite crear el "Store" en mi app. Recuerden que vamos a tener un Store por App. 

//Importo desde el themeSlice: 
import themeReducer from "./themeSlice.js"; 

export const store = configureStore({
    reducer: {
        theme: themeReducer
    }
}); 