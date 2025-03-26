import { useState, useEffect } from "react";

const JsonPlaceHolder = () => {
    const [usuarios, setUsuarios] = useState([]);
    // Este estado almacenará todos nuestros usuarios. 
    // setUsuarios voy a poder cambiar el valor del estado. 


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(respuesta => respuesta.json())
            .then(data => {
                //Recibo la data con los usuarios y la guardo en el estado "usuarios"
                setUsuarios(data);

                //Verifico por consola si estan los 10 users: 
                console.log(data);
            })
            .catch(error => console.log(error));
    }, [])


    return (
        <div>
            <h2> Mis Usuarios </h2>

            {
                usuarios.map((usuario, index) => {
                    return (
                        <div key={index}>
                            <p>Nombre: {usuario.name} </p>
                            <p>Email: {usuario.email} </p>
                            <hr />
                        </div>
                        
                    )
                })

            }
        </div>
    )
}

export default JsonPlaceHolder