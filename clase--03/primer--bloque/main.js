/** * BIENVENIDOS A LA CLASE 3*/

//Repasamos

//1) Enfoque sincronico vs asincronico
//2) Callback
//3) Promesas
//4) Async Await

///////////////////////////////////////////////

// Programación sincronica:  es un enfoque o estilo de programación en el que las tareas se ejecutan secuencialmente en el orden en el que se escriben. 

console.log("primero");
console.log("segundo");
console.log("tercero");

// Cada tarea es ejecutada en orden, y bloquea la ejecuciónn de la siguiente tarea hasta que la primera se complete. 

//Ejemplo con funciones: 

function a() {
    console.log("1");
    b();
}


function b() {
    console.log("2");
    c();
}


function c() {
    console.log("3");
}

a();

// Programacion Asincronica: es un enfoque o estilo de programación en donde las tareas se van ejecutando en segundo plano y no bloquean la ejecucion de la siguiente tarea. 

//Ejemplo: 

//Para poder simular una peticion a una API, vamos a usar setTimeout. 

setTimeout(() => {
    console.log("Primer tarea");
}, 3000)

setTimeout(() => {
    console.log("Segunda tarea");
}, 2000)

setTimeout(() => {
    console.log("Tercer tarea");
})

console.log("¿Esto se bloquea?");

//Recuerden la definición de función Callback: 
//Es aquella funcion que pasamos como argumento a otra función. 

// let referencia = setInterval(() => {
//     console.log("Tuki");
// }, 6000)


// clearInterval(referencia); 

//2) Callback 


function suma(numA, numB, callback) {
    let resultado = numA + numB;
    callback(resultado);
}


function mostrarResultado(dato) {
    console.log("El resultado de la operacion: " + dato);
}

suma(10, 5, mostrarResultado);

//3) Promesas: 
// Son objetos que representan un hecho eventual a futuro. Los vamos a utilizar en operaciones asincronicas que pueden resultar exitosas o fallidasa. 

//Las promesas tienen tres estados: 

// Pendiente: (pending) Estado inicial de la promesa. La operacion no se completó ni se rechazó.

// Fallida: (rejected) La operacion fallo y se rechazó la promesa. Esto puede suceder si se produjo algun error durante la operacion. 

// Exitoso: (fulfilled) La operacion se completo correctamete y se resuelve la promesa. 

//Sintaxis: creación de una promesa.

const promesa = new Promise((resolve, reject) => {
    //Acá va el código que queremos ejecutar. 

    //Resolve y Reject son funciones que nos provee la promesa para indicarle el estado de la misma. 

    //Si quiero que la promesa sea exitosa: 
    //resolve("Exito en la promesa, me llega la camiseta de Messi"); 

    //Si quiero que la promesa sea fallida: 
    //reject("Me llega un par de medias, todo es bronca y dolor"); 

})

//console.log(promesa); 


// MÉTODOS THEN Y CATCH: 
// Estos métodos nos permiten manejar el resultado de la promesa. 
// Se usan concatenados a la promesa. 

//THEN: se ejecuta cuando la promesa se resuelve exitosamente. 
//CATCH: se ejecuta cuando la promesa se rechaza. 
//FINALLY: es opcional, se agrego en ES8 y se ejecuta siempre. 

// promesa
//     .then(() => console.log("Efectivamente, la promesa se cumple"))
//     .catch(() => console.log("Error terrible, fallo la promesa, siempre me mienten"))
//     .finally(() => console.log("Este se ejecuta siempre, se cumpla o no se cumpla"));



// Consulta a una API: 

// Vamos a usar fetch: 

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((respuesta) => respuesta.json() )
//     .then((usuarios) => console.log(usuarios))
//     .catch(() => console.log("No me pude conectar"))
//     .finally(() => console.log("Proceso terminado"))

//4) Async Await 

// Son dos palabritas reservadas que nos permiten trabajar con promesas de forma mas sencilla. 

// Con la palabrita "await" genero una pausa en la ejecucion del codigo hasta que la promesa se resuelva o se rechace. 

//Es parecido a un cartel de "stop". 

//Ejemplo: 

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log("Tenemos un error:" + error); 
    }
}


obtenerUsuarios(); 