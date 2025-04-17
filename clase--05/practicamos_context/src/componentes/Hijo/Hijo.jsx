//UTILIZANDO PROPS

// import React from 'react'

// const Hijo = ({herencia}) => {
//   return (
//     <div>
//         <p>Mi herencia en efectivo es de: {herencia.efectivo} </p>
//         <p>Tenga estas cantidades de casasss, muchas casas: {herencia.propiedades} </p>
//         <p> Y choque todos estos autos: {herencia.vehiculos} </p>
//     </div>
//   )
// }

// export default Hijo

// UTILIZANDO EL CONSUMER: 


// Importamos el Contexto: 
// import { Contexto } from "../../context/context";

// const Hijo = () => {
//     return (
//         <div>
//             <Contexto.Consumer>
//                 {/* Para poder acceder a la información tenemos que utilizar una función de renderizado */}

//                 {
//                     (herencia) => (
//                         <div>
//                             <p>Mi herencia en efectivo es de: {herencia.efectivo} </p>
//                             <p>Tenga estas cantidades de casasss, muchas casas: {herencia.propiedades} </p>
//                             <p> Y choque todos estos autos: {herencia.vehiculos} </p>
//                         </div>
//                     )
//                 }
//             </Contexto.Consumer>
//         </div>
//     )
// }

// export default Hijo


//EXISTE UN MÉTODO SUPERADOR: EL USO DEL HOOK USECONTEXT

//1) Importar el Contexto. 
import { Contexto } from '../../context/context';
//2) Importar el Hook useContext. 
import { useContext } from 'react';
//3) Creamos una variable que almacene el valor del contexto. 

import React from 'react'

const Hijo = () => {
    const herencia = useContext(Contexto);

    return (
        <div>
            <p>Mi herencia en efectivo es de: {herencia.efectivo} </p>         
            <p>Tenga estas cantidades de casasss, muchas casas: {herencia.propiedades} </p>
            <p> Y choque todos estos autos: {herencia.vehiculos} </p>
        </div>
    )
}

export default Hijo