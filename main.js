// APLICACIONES WEB PROGRESIVAS. 
/* Clase 1*/

// ¿Que es React?  
// Es una libreria que nace en el año 2013 en las oficinas de Facebook. 

// Ventajas: 

// 1) Puedo crear aplicaciones web mucho mas rapidas, utilizando el Virtual DOM.
// Solo gasta recursos en renderizar nuevamente los elementos que sufrieron cambios. 

// 2) Esta basado en Componentes. 

// 3) Tiene un enfoque declarativo. 

////////////////////////////////////////////////////////////////////////

// ENFOQUE DECLARATIVO: es un estilo de programación en donde nos enfocamos en lo que se quiere lograr y no tanto en el como. 

// ENFOQUE IMPERATIVO: es un estilo de programación en donde se detallan paso a paso las acciones a realizar para lograr el resultado esperado. 

// EJEMPLO EN CODIGO: 

// Queremos crear un array de numeros pares entre el 0 y el 10. 

// RESOLUCION CON UN ENFOQUE IMPERATIVO: 

const array = []; 

for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        array.push(i); 
    }
}

console.log(array);

// RESOLUCION CON UN ENFOQUE DECLARATIVO: 

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(numero => numero % 2 == 0); 
console.log(pares); 

// Nota: Repasar callbacks. 

// Repasamos Funciones: 

// Definición: una función es un bloque de código que nosotros le asignamos una tarea y que se puede reutilizar muchas veces. 

// Tenemos dos categorias: DECLARADAS O EXPRESADAS



// Declarada: 

function suma(numeroUno, numeroDos) {
    // Cuerpo de la función.
    return numeroUno + numeroDos; 
}

// Siguiente paso: invocar o llamar a la función
console.log(suma(10, 50));

// FUNCIONES EXPRESADAS: Son aquellas funciones que se asignan a una variable: 

// Función Anónima: 

let sumaDos = function(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(sumaDos(500, 200));

// Función flecha: es una version resudimida de la función anónima. 

let sumaTres = (numA, numB) => {
    return numA + numB; 
}


console.log(sumaTres(1000, 1000)); 

// Una función Callback: 

// Es una función que se pasa como argumento a otra función. 


function saludar(nombre) {
    console.log(`Hola, como estas? Mi nombre es ${nombre}`); 
}

//saludar('Samuel');

// Creamos una nueva funcion que se llame "bienvenidaUsuarios"

function bienvenidaUsuarios(callback) {
    let nombre = "Samuel Tocaimaza"; 
    callback(nombre); 
}

bienvenidaUsuarios(saludar); 
