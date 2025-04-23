//Importamos los hooks que necesitamos. 
import { useState, useEffect } from "react";

//Importamos el objeto que tiene mi conexión a Firebase. 
import { db } from "../../services/config";


//Importamos las funciones que vamos a utilizar en Firebase: 
import { getDocs, collection, query, where, updateDoc, doc } from "firebase/firestore";

//getDocs: me permite obtener los documentos de una colección. 
//collection: me permite obtener una colección. 
//query: me permite realizar una consulta. 
//Where me permite hacer filtrados.


const Productos = () => {
    const [productos, setProductos] = useState([]); 

    useEffect(() => {
        const misProductos = query(collection(db, "productos")); 
        //Si quiero filtrar lo hago de esta forma: 
        //const misProductos = query(collection(db, "productos"), where("precio", "<", 200)); 

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({id: doc.id, ...doc.data()})))
                //doc.data() Es un método que me obtiene toda la información de los documentos. 
            })
            
    }, [productos])

    //Podemos crear una función que descuente stock y la podemos llamar desde el evento en el button de comprar. 

    const descontarStock = async (producto) => {
        //Necesito guardarme una referencia de ese producto.
        const productoRef = doc(db, "productos", producto.id); 

        //Voy a crear el nuevo stock. 
        let nuevoStock = producto.stock - 1; 

        //Actualizamos en la nube: 
        await updateDoc(productoRef, {stock: nuevoStock}); 

    }


  return (
    <div>
        {
            productos.map(producto => (
                <div key={producto.id}>
                    <h3> Nombre: {producto.nombre} </h3>
                    <p> Precio: {producto.precio} </p>
                    <p> Stock: {producto.stock} </p>
                    <button onClick={() => descontarStock(producto)}> Comprar </button>
                </div>
            ))
        }
    </div>
  )
}

export default Productos