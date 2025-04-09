import { useState } from "react";
import emailjs from "emailjs-com";
import './Contacto.css';


//Para instalar el servicio lo pueden hacer con el siguiente comando: npm i emailjs-com


const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const enviarMensaje = (e) => {

        e.preventDefault(); //Prevenimos la recarga de la página. 

        const templateParams = {
            nombre: nombre,
            from_email: email,
            mensaje: mensaje
        }

        emailjs.send("service_w8mtyo9", "template_gv5cv5d", templateParams, "a7NJok8cp3c-WIJqv")
            .then(respuesta => {
                console.log("Mensaje enviado", respuesta.status);
            })
            .catch(error => {
                console.log("Error al enviar", error)
            })


        setNombre("");
        setMensaje("");
        setEmail("");
    }

    return (
        <form onSubmit={enviarMensaje}>
            <h2> Formulario de Contacto </h2>

            <label htmlFor="nombre"> Nombre: </label>
            <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre} />

            <label htmlFor="email"> Email: </label>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />

            <label htmlFor="mensaje"> Mensaje: </label>
            <input type="text" id="mensaje" onChange={(e) => setMensaje(e.target.value)} value={mensaje} />

            <button type="submit"> Enviar Mensaje </button>

        </form>
    )
}

export default Contacto